import {useRef} from "react";
import {useHistory, useParams} from "react-router-dom";
const UpdateMovie = () => {
  let {id} = useParams()

  let history = useHistory();
  let moviename=useRef();
  let yor=useRef();
  let language=useRef();
  let picture=useRef();
  let rating=useRef();

  let handleNewMovie=(e)=>{
     e.preventDefault();
     
     console.log(language.current.value);

    let UpdateMovie = {movieName:moviename.current.value,
                   YOR:yor.current.value,
                   Language:language.current.value,
                   pic:picture.current.value,
                   imdb:rating.current.value
                   }

     let options = document.getElementsByName("type");
    for(let i=0; i<options.length;i++)
    {
      if(options[i].checked)
      {
        UpdateMovie.type =options[i].value;
      }
    }

    fetch("http://localhost:8080/update/"+ id,{method:"PUT",
           headers:{"Content-Type":"application/json","Access-Contol-Allow-Orgin":"http://localhost:3000/update"},
           body:JSON.stringify(UpdateMovie)
     })

      .then((response)=>{
       console.log(response.json());
      alert("Movie is updated");
       history.goBack();
      })
}
 
    return (<div className="add-movie">
      <h1> Update Movie</h1>
      <hr />
      <form onSubmit={handleNewMovie}>
        <label >Movie</label><input type="text" ref={moviename}/>
        <label >YOR</label><input type="number"  ref={yor}/>
        <label >Rating</label><input type="number" min="1" max="10" step="0.5" ref={rating}/>
        <label >Language</label><input type="text" ref={language}/>
        <label >Picture</label><input type="url" ref={picture}/>

         <input className="btn-submit" type="submit" value="Add movie" />
         
      </form>
    </div>  );
}
 
export default UpdateMovie;
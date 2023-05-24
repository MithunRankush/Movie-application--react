import {useRef} from "react";
import {useHistory} from "react-router-dom";
const New = () => {

  let history = useHistory();
  let moviename=useRef();
  let yor=useRef();
  let language=useRef();
  let picture=useRef();
  let rating=useRef();
  let handleNewMovie=(e)=>{
    e.preventDefault();
console.log(language.current.value);
    let newMovie = {movieName:moviename.current.value,
                   yor:yor.current.value,
                   language:language.current.value,
                   pic:picture.current.value,
                   imdb:rating.current.value
                   }

     let options = document.getElementsByName("type");
    for(let i=0; i<options.length;i++)
    {
      if(options[i].checked)
      {
        newMovie.type =options[i].value;
      }
    }

    fetch("http://localhost:8080/create",{method:"POST",
                                      headers:{"Content-Type":"application/json"},
                                    body:JSON.stringify(newMovie)
                                  })

              .then((response)=>{
                console.log(response.json());
                alert("new movie added");
                history.goBack();
              })
  }
 
    return (<div className="add-movie">
      <h1> New Movie</h1>
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
 
export default New;
import useFetch from "../customHooks/useFetch";
import { useHistory, useParams,Link } from "react-router-dom";

const Moviedetails = () => {
    let{id}= useParams();

    let history = useHistory();
    let {data:items,pending,error}=useFetch("http://localhost:8080/items/"+id);

    let handleDeleteMovie = ()=>{
        fetch("http://localhost:8080/delete/"+id )
        .then((response)=>{
            console.log(response.json());
            alert("movie has been removed");
            history.push("/");
        }).then(e=>console.log(e))
    }

    return(
        <div >
          {error && <h1>{error}</h1>} 
          {pending && <div className="loader"></div>}
          { items && <div className="moviedetails">
                <img src={items.pic} alt="movie" />
                <h1>Movie-{items.movieName}</h1>
                <h3>YOR-{items.yor}</h3>
                <h3>imdb-{items.imdb}*</h3>
                <h3>Language-{items.language}</h3>
                <br />
                <br />
                <button onClick={handleDeleteMovie}>Remove Movie</button>
                <button> <Link to={`/update${id}`}>Update Movie</Link></button>
                  </div>} 
        </div>
    );
}

 
export default Moviedetails;
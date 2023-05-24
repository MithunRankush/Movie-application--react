import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movielist from "./Movielist";

function Searchmovie()
{
let{searchKey}=useParams();
let[items,setItems]=useState(null)
let[pending,setPending]=useState(true)
let[error , setError] = useState(null)

useEffect(()=>{
    setTimeout(()=>{
        // fetch(" http://localhost:4000/items")
        fetch("http://localhost:8080/items")
        // .then((response)=>{return(response.json()); })// method for error handling
        .then((response)=>{
            if(response.ok==true)
            {
                return response.json()
            }
            else{
                throw Error("data not found , please try for different keyword")
            }
         })
        .then((data)=>{setItems(data); setPending(false)})
        .catch((err)=>{setError(err.message);setPending(false)})

    },3000)
},[])

    return(
        <div className="home">
            {error && <h1>{error}</h1>} 
          {pending && <div className="loader">
            <div className="ring"></div>
            <div className="ring"></div>
            <div className="ring"></div>
            <span className="load">Loading....</span>
            </div>}
          { items && <Movielist items={items.filter((movie)=>{return movie.movieName.toUpperCase().includes(searchKey.toUpperCase())})} title="Top Results"/>}
        </div>
    );
}

export default Searchmovie;
import Movielist from "./Movielist";
import useFetch from "../customHooks/useFetch";

function Popular()
{
 let {data:items,pending,error}=useFetch("http://localhost:8080/items");

    return(
        <div className="home">
            {error && <h1>{error}</h1>} 
          {pending && <div className="loader">
            <div className="ring"></div>
            <div className="ring"></div>
            <div className="ring"></div>
            <span className="load">Loading....</span>
            </div>}
          { items && <Movielist items={items} title="Popular movies online"/>}
        </div>
    );
}

export default Popular;
import { Link } from "react-router-dom";

const Movielist = ({items,title}) =>{
    return(
        <div >
        <section>
        <div className="title"> <h1>{title}</h1></div>
        <div className="movie-list">
            {
                items.map((movie)=>{return(
                 
                  <Link to={`/Moviedetails${movie.id}`}>
                    <div className="movie">
                    <img src={movie.pic} alt="movie" />
                    <h2>{movie.movieName}</h2>
                    <h4>{movie.yor}</h4>
                  </div>
                  </Link>
                 
                  )})
            }
        </div>
        </section>
        </div>
    );
}
export default Movielist;
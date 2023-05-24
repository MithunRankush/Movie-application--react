import { Link } from "react-router-dom";
import movie from "../mithun.gif";
import { useState } from "react";

const Navbar = () => {
  let[searchKey,setsearchKey]=useState(" ");
    return ( 
       <nav>
         <div className="logo">
           <Link to="/"><img src={movie} alt="logo" /></Link>
            <h1>cini-world</h1>
        </div>

        <div className="navlink">
        <Link to="/popular">Popular</Link>
        <Link to="/new">New</Link>
        <Link to="/watchlist">watchlist</Link>    
        </div>

        <div className="search">
        <input type="search" value={searchKey} onChange={(e)=>{setsearchKey(e.target.value)}}/>
         <Link to={`/search${searchKey}`}><button>search</button></Link>
        
        </div>
        <div className="signin">
        <button>Signin</button>
        </div>
       </nav>
     );
}
 
export default Navbar;
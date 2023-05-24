
import Movielist from "./Movielist";
import useFetch from "../customHooks/useFetch";

function Home()
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
            <section className="main-section">
                <div className="main">
                    <h1>Unlimited movies , Tv shows<br />and more.</h1>
                    <h4>Watch anywhere. Cancel anytime</h4>
                    <p>Ready to watch? Enter your email to create or restart your membership.</p>
                    <div className="main1">
                        <input type="text" placeholder="Enter Your Email"/>
                        <button>Get Started <span>  {`>`} </span></button>
                    </div>
                    </div>
            </section>
          { items && <Movielist items={items} title="Stream movies online"/>}
        </div>
    );
}

export default Home;
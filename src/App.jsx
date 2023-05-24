
import './App.css';
import React from 'react';
import Navbar from './component/Navbar';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './component/Home';
import Moviedetails from './component/Moviedetails';
import New from './component/New';
import Popular from './component/Popular';
import Watchlist from './component/Watchlist';
import Searchmovie from './component/Searchmovie';
import UpdateMovie from './component/UpdateMovie';



function App() {
  return(
    <BrowserRouter>
    <div className='App'>
    <Navbar></Navbar>
    <Switch>
      <Route exact path="/">
      <Home></Home>
      </Route>

      <Route path="/popular">
        <Popular></Popular>
      </Route> 

      <Route path="/new">
        <New></New>
      </Route> 

       <Route path="/watchlist">
        <Watchlist></Watchlist>
      </Route>

      <Route path="/Moviedetails:id">
       <Moviedetails></Moviedetails>
      </Route>

      <Route path="/search:searchKey">
      <Searchmovie></Searchmovie>
      </Route>

      <Route  path="/update:id">
      <UpdateMovie></UpdateMovie>
      </Route>
    </Switch>
    </div>
    </BrowserRouter>
  )
  
}

export default App;

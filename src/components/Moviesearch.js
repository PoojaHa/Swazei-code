import React, { useState } from "react";
import { useEffect } from "react";
import {Link} from "react-router-dom";
import Loading from "./Loading";
import axios from "axios"
const Moviesearch = () => {
  const [posts, setPosts] = useState([]);
  const [loading,setLoading]=useState(false)
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/all/day?api_key=4692f83609436a2e3011559f9dc39cbd"
      )
      .then((res) => {
        setPosts(res.data.slice(0, 10));
        console.log(posts);
      });
  });



  const title ="NavBar";
  const navigationnames=[
    {
       name:"Home",
       path:'/home'
    },
    {
        name:"About",
        path:'/About'
    },
    {
        name:"Features",
        path:'/Features'
    },
  ]
  const nevigation = navigationnames.map((names,index)=>(
       <div key={index.toString()}>
        <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={names.path}>
                {names.name}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={names.path}>
              {names.name}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={names.path}>
              {names.name}
              </Link>
            </li>
       </div>
  ))
  return (
    <div className="continer">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" >
          {title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
           {nevigation}
          </ul>
        </div>
      </div>
    </nav>
    
<div className="section">
   {posts ? (<div className="card" style="width: 18rem;">
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                </div> ): (<Loading/>)}
               
    </div>
    
    </div>
    
  );
};

export default Moviesearch;

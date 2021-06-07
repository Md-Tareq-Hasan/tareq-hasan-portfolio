import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const Navbar = () => {
  
    return (
        <div>
          
              <nav class="navbar navbar-expand-lg navbar-light ">
      <div class="container-fluid">

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">

        

          <ul class="navbar-nav ml-auto">

            <li class="nav-item">
              <Link to="/home" class="nav-link active mr-5 text-light" href="">Home</Link>
            </li>
            <li class="nav-item">
              <Link to="/blog" class="nav-link active mr-5 text-light" href="">Blog</Link>
            </li>
            <li class="nav-item">
              <Link  target="_parent"  to="/displayprojects" class=" refresh nav-link active mr-5 text-light" href="">Project</Link>
            </li>
            <li class="nav-item">
              <Link to="/about" class="nav-link active mr-5 text-light" href="">About Me</Link>
            </li>
            <li class="nav-item">
              <Link to="/contact" class="nav-link active mr-5 text-light" href="">Contact</Link>
            </li>
            <li class="nav-item">
              <Link to="/resume" class="nav-link active mr-5 text-light" href="">Resume</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
        </div>
    );
 

};

export default Navbar;
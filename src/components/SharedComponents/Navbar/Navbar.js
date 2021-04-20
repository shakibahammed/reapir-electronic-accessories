import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light  ">
        <div class="container-fluid">
         
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto ">
              <li class="nav-item">
                <Link class="nav-link me-5 active" aria-current="page" to="/home">Home</Link>
              </li>
              
             
              <li class="nav-item">
                <Link class="nav-link me-5  active" aria-current="page" to="/home">About Us</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link me-5 " to="/dashboard">Dashboard</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link me-5 active" aria-current="page" to="/login">Login</Link>
              </li>
             

             
            </ul>
           
          </div>
        </div>
      </nav>
    );
};

export default Navbar;
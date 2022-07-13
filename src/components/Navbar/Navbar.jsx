import React from 'react';
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
        <h1>Chess API</h1>
        <a href="https://linkedin.com/in/joshua-quesada-león-5a17631bb">
            <i className="fa-brands fa-linkedin logo linkedin"></i>
        </a>
        <a href="https://github.com/NoSoyJoshua">
            <i className="fa-brands fa-github logo github"></i>
        </a>
    </nav>
  )
}

export default Navbar
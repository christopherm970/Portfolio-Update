import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Chris Mims
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/portfolio">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="assets/Resume2020.pdf" download>
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="jumbotron jumbotron-fluid text-center bg-transparent">
        <div className="container-fluid">
          <img src="assets/me.jpg" className="rounded-circle" style={{"height": "300px"}} />
          <h1 className="display-3 font-weight-bold" style={{"color": "white"}}>
            Chris Mims
          </h1>
          <h2 className="mt-4" style={{"color": "blue"}}>
            Future Coding Expert
          </h2>
          <hr className="my-4" />
          <h3 className="mt-4">
            I'm a Registered Nurse who is looking to move into a career in
            Coding.
          </h3>
        </div>
      </div>
    </div>
  );
};


export default Home;
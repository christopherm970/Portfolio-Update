import React from "react";
import { Link } from "react-router-dom"


const Portfolio = () => {
    return (
        <>
        <div className="jumbotron jumbotron-fluid text-center bg-transparent p-0">
              <h1 className="display-3 font-weight-bold">Portfolio</h1>
              <hr className="my-4" />
        </div>
          <div className= "container">
            <div className="row row-cols-1 row-cols-md-2">
              <div className="col mb-4">
                <div className="card">
                  <Link to= "https://sethskinner.github.io/Travel-Planner/">
                  <img src="assets/travelimg.png" className="card-img-top" alt="Travel Planner Screenshot"/></Link>
                  <div className="card-body">
                    <h5 className="card-title">Travel Planner Application</h5>
                    <p className="card-text">This is an application that when you type in a city it will display the directions on a map to the location you typed in, the 5 day forecast, the top five restaurants, and the current COVID stats for that state.</p>
                  </div>
                </div>
              </div>
              <div className="col mb-4">
                <div className="card">
                  <Link to= "https://serene-inlet-83004.herokuapp.com/">
                  <img src="assets/triviaimg.png" className="card-img-top" alt="Trivia App Screenshot"/></Link>
                  <div className="card-body">
                    <h5 className="card-title">Quiz Application</h5>
                    <p className="card-text">This is a simple quiz application that allows a user to join or create a team and compete against other players.</p>
                  </div>
                </div>
              </div>
              <div className="col mb-4">
                <div className="card">
                  <img src="https://via.placeholder.com/150" className="card-img-top" alt="Third Project"/>
                  <div className="card-body">
                    <h5 className="card-title">Third Project</h5>
                    <p className="card-text">This is my Third Project.</p>
                  </div>
                </div>
              </div>
              <div className="col mb-4">
                <div className="card">
                  <img src="https://via.placeholder.com/150" className="card-img-top" alt="Forth Project"/>
                  <div className="card-body">
                    <h5 className="card-title">Forth Project</h5>
                    <p className="card-text">This is my Forth Project.</p>
                  </div>
                </div>
              </div>
          </div>
          </div>
          </>
    )
}

export default Portfolio
import React from "react";


const Home = () => {
  return (
    <div className="container">
      

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
import React from "react";

const Contact = () => {
    return(
        <div className="jumbotron jumbotron-fluid text-center bg-transparent p-0">
            <div className="container-fluid">
                <h1 className="display-3 font-weight-bold">Contact me</h1>
                <hr className="my-4" />

                <form className="text-left" action="mailto:christopherm970@aol.com" method="post" enctype="text/plain">
                    <div className="form-group ">
                        <label for="formName">Name</label>
                        <input type="text" className="form-control" id="formName" placeholder="Your Name" />
                    </div>
                    <div className="form-group">
                        <label for="formEmail">Email</label>
                        <input type="text" className="form-control" id="formEmail" placeholder="email@example.com" />
                    </div>
                    <div className="form-group">
                        <label for="fromMessage">Message</label>
                        <textarea className="form-control" id="fromMessage" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;
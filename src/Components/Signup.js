import React from "react";
import { Link } from "react-router-dom";
function Signup(){
    return(
        <div>
      <br/><br/>
      <div  className="container-fluid text-center">
        <div className="row">
          <div className="col-md-4 col-sm-12"></div>
          <div className="login col-md-4 col-sm-12" >
            
            <h1 className="log-text"><i className="fa-solid fa-user"></i>  SIGN-UP</h1><br/>
            <form>
                <div className="form-group">
                  <label for="email-id">Email address</label>
                  <input type="email" className="form-control" id="email-id"  placeholder="Enter your Email-id" />
                  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="Fullname">Full Name</label>
                    <input type="text" className="form-control" id="Fullname" placeholder="Enter your Full Name" />
                  </div>
                <div className="form-group">
                  <label for="Password">Password</label>
                  <input type="password" className="form-control" id="Password" placeholder="Enter your Password" />
                </div><br/>
                <Link to="/Institute" class="btn btn-success fs-4 log-in" type="submit" >Signup</Link>
              </form><br/>
          </div>
          <div className="col-md-4 col-am-12"></div>
        </div>
      </div>
    <br/><br/><br/>
    </div>
    );
}
export default Signup;
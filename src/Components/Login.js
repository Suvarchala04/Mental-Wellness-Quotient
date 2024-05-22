import React from "react";
import { Link } from "react-router-dom";
function Login(){
    return(
        <div>
            <header>
    <nav className="navbar navbar-expand-sm">
            <a className="navbar-brand fs-4 text-white " id="brand">MENTAL WELLNESS</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynav">
                <i className="bx bx-menu text-white bx-md"></i>
            </button>
            <div className="collapse navbar-collapse" id="mynav">
            <ul className="navbar-nav ms-auto text-center">
                <li className="nav-item">
                    <Link className="nav-link mx-3 text-white fs-5" to="/" target="_main"><i className="fa-solid fa-house"></i>  Home</Link>
                </li>
                <li className="nav-item ">
                    <Link id="L" className="nav-link mx-3 text-white fs-5" to="Login"><i className="fa-solid fa-user"></i>  Log-in</Link>
                </li>  
            </ul>
            </div>
    </nav>
</header>
<main>
      <br/>
      <div  className="container-fluid text-center">
        <div className="row">
          <div className="col-md-4 col-sm-12"></div>
          <div className="login col-md-4 col-sm-12" >
            <h1 className="log-text"><i className="fa-solid fa-user"></i>  LOG-IN</h1><br/>
            <form>
                <div className="form-group">
                  <label for="email-id">Email address</label>
                  <input type="email" className="form-control" id="email-id"  placeholder="Enter your Email-id" />
                  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                  <label for="Password">Password</label>
                  <input type="password" className="form-control" id="Password" placeholder="Enter your Password" />
                </div><br/>
                <Link to="/Institute" class="btn btn-success fs-4 log-in" type="submit" >Login</Link>
              </form><br/>
              <Link to="/Forgot">Forgot Password?</Link>
              <p style={{color: "black"}}>Don't have an account?</p>
                          <Link to="/Signup" style={{color: "red"}}>Sign-up</Link>
                          <p style={{display: "inline",color: "black"}}> here</p>
                          <br/><br/>
          </div>
          <div className="col-md-4 col-am-12"></div>
        </div>
      </div>

    </main>
    <br/><br/><br/>
        </div>
    );
}
export default Login;
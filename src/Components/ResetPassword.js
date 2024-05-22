import React from 'react';
import { Link } from 'react-router-dom';

export default function ResetPassword() {
  return (
    <div>
      <br /><br /><br />
      <div id="forgot" className="container text-center">
        <div className="row">
         
          <div className="col-md-4 col-sm-12"></div>
          <div className="login col-md-4 col-sm-12 text-center">
            <br />
            <h2  className="admin2-head">
              Reset your password
            </h2><br />
            <form action="">
              <div className="form-group">
                <label for="reset-pass">New Password</label>
                <input type="password" className="form-control" id="reset-pass" placeholder="Enter your new password" />
              </div>
              <div className="form-group">
                <label for="con-pass">Confirm</label>
                <input type="password" className="form-control" id="con-pass" placeholder="Confirm your password" />
              </div>
            </form>
            <br />
            <button type="submit" className="log-in btn btn-success fs-4">Reset</button><br /><br />
            <Link to="/Login" target="_main" id="back-login"><b>Back to Log-in</b></Link>
            <br /><br />

          </div>
          <div className="col-md-4 col-sm-12"></div>
        </div>

      </div>
    </div>
  );
}

import React from 'react'

export default function Forgot() {
  return (
    <div>
       <main>
      <br /><br /><br />
      <div className="container text-center">
        <div className="row">
         
          <div className="col-md-4 col-sm-12"></div>
          <div className="login col-md-4 col-sm-12">
            <br />
            <h2 className='admin2-head'>
              Forgot your password?
            </h2><br />
            <p>Please enter your email id to send the verification code</p>
            <form action="">
              <div className="form-group">
                <label for="forgot-id">Email address</label>
                <input type="email" className="form-control" id="forgot-id"  placeholder="Enter your Email-id" />
              </div>
            </form>
            <br />
            <button type="submit" className="btn btn-success admin2-head">Send verification code</button>
            <br /><br />
          </div>
          <div className="col-md-4 col-am-12"></div>
        </div>
      </div>
    </main>
    </div>
  );
}

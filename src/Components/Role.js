import React from 'react';
import { Link } from 'react-router-dom';

export default function Role() {
  return (
    <div>
      <main>
        <div className="container-fluid">
            <br />
            <div className="row">
                <div className="col-md-3 col-sm-12">
                    <div className="card">
                        <img className="card-img-top" src="images/studentr.jpg" alt="" />
                        <div className="card-body">
                          <h3 className="card-title">Student</h3>
                          <p className="card-text">Check your Happiness Quotient by answering simple questions</p>
                          <Link to="/StudentDashboard" className="btn btn-secondary card-entry" target="_main">Start</Link>
                        </div>
                      </div>
                </div>
                <div className="col-md-1 col-sm-12"><br /><br /></div>
                <div className="col-md-3 col-sm-12">
                    <div className="card">
                        <img className="card-img-top" src="images/parent.jpg" alt="Card image cap" />
                        <div className="card-body">
                          <h3 className="card-title">Parent</h3>
                          <p className="card-text">Check your Happiness Quotient by answering simple questions</p>
                          <Link to="/ParentDashboard" className="btn btn-secondary card-entry" target="_main">Start</Link>
                        </div>
                      </div>
                </div>
                <div className="col-md-1 col-sm-12"><br /><br /></div>
                <div className="col-md-3 col-sm-12">
                    <div className="card">
                        <img className="card-img-top" src="images/teacher2.jpg" alt="Card image cap" />
                        <div className="card-body">
                          <h3 className="card-title">Teacher</h3>
                          <p className="card-text">Check your Happiness Quotient by answering simple questions</p>
                          <Link to="/TeacherDashboard" className="btn btn-secondary card-entry" target="_main">Start</Link>
                        </div>
                      </div>
                </div>  
            </div>

        </div>
        <br /><br /><br />
        <div className="container">
            <br />
            <div className="row">
                <div className="col-md-2 col-sm-12"></div>
                <div className="col-md-3 col-sm-12">
                    <div className="card">
                        <img className="card-img-top" src="images/admin.jpg" alt="Card image cap" />
                        <div className="card-body">
                          <h3 className="card-title">Admin</h3>
                          <p className="card-text">Check your Institute Happiness Quotient</p>
                          <Link to="/Admin" className="btn btn-secondary card-entry" target="_main">Start</Link>
                        </div>
                      </div>
                </div>
                <div className="col-md-2 col-sm-12"><br /><br /></div>
                <div className="col-md-3 col-sm-12">
                    <div className="card">
                        <img className="card-img-top" src="images/nirf2.jpg" alt="Card image cap" />
                        <div className="card-body">
                          <h3 className="card-title">Accredited</h3>
                          <p className="card-text">Check your Happiness Quotient of an Institute</p>
                          <Link to="/Accredited" className="btn btn-secondary card-entry" target="_main">Start</Link><br /><br />
                        </div>
                      </div>
                </div>
                <div className="col-md-2 col-sm-12"></div>   
            </div>
        </div>
        <br /><br />
    </main>
    </div>
  );
}

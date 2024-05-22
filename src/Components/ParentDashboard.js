import React from 'react';
import { Link } from 'react-router-dom';

export default function ParentDashboard() {
  return (
    <div id='parent-image'>
        <div className="container text-center">
            <br />
            <h1 className="dash">Dashboard</h1><br />
            <div className="row">
                <div className="col-md-3 col-sm-12"></div>
                <div className=" col-md-6 col-sm-12 Dashboard-box"><br />
                    <h2 className="dash-take">Take your Quiz</h2><br />
                    <Link to="/Parent" type="button" className="btn btn-light dash-quiz-btn">Start</Link>
                    <br /> <br />
                    <a href="#VIEWHQ" type="button" className="btn btn-light dash-quiz-btn2">Check your HQ</a>
                    <br /><br />
                </div>
                <div className="col-md-3 col-sm-12"></div>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br />
            <div className="row">
                <div className="col-md-4 col-sm-12"></div>
                <div id="VIEWHQ" className="col-md-4 col-sm-12 Dashboard-box"><br />
                    <h4 className="dash-your-res">Your Happiness Quotient is:</h4>
                    <br /><br /><br />
                </div>
                <div className="col-md-4 col-sm-12"></div>
            </div>
        </div><br /><br /><br />
    </div>
  );
}

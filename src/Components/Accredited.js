import React from 'react';
import { Link } from 'react-router-dom';
function Accredited(){
    return(
        <div>
            <main>
        <div className="container-fluid">
            <br/>
            <h1 className="dash">Dashboard</h1><br/>
            <div className="row">
                <div className="col-lg-3 col-sm-12">
                    <div className="card card1">
                        <p className="card-title acc-card">Top 10 Institutes in India</p>
                        <Link to="/Top10India" className="btn btn-info buttons1" target="_main">Enter</Link>
                    </div>
                </div>
                <div className="col-lg-1 col-sm-12"><br/><br/><br/></div>
                <div className="col-lg-3 col-sm-12">
                    <div className="card card1">
                        <p className="card-title acc-card">Top 10 Institutes State wise</p>
                        <Link to="/Top10State" className="btn btn-info btn-small buttons1" target="_main">Enter</Link>
                      </div>
                </div>
                <div className="col-lg-1 col-sm-12"><br/><br/><br/></div>
                <div className="col-lg-4 col-sm-12">
                    <div className="card card1">
                            <p className="card-title acc-card">Top 10 Institutes District wise</p>
                            <Link to="/Top10District" className="btn btn-info buttons1" target="_main">Enter</Link>
                    </div>
                </div>  
            </div>

        </div>
        <br/><br/><br/>
    <div className="container text-center">
        <br/>
            <div className="row">
                <div className="col-lg-1 col-sm-12"></div>
                <div className="col-lg-4 col-sm-12">
                    <div className="card card1">
                        <div className="card-body">
                          <p className="card-title acc-card">Chcek Happiness Quotient of an Institute</p>
                          <Link to="/Accredited2" className="btn btn-info btn-small buttons1" target="_main" id="st">View</Link>
                        </div>
                      </div>
                </div>
                <div className="col-lg-1 col-sm-12"><br/><br/></div>
                <div className="col-lg-5 col-sm-12">
                    <img src="images/admin2.jpg" alt="" className="img-fluid" style={{borderRadius: "800px"}} />
                </div>
                <div className="col-lg-1 col-sm-12"></div>   
            </div>
    </div>
    <br/><br/>
    </main>
        </div>
    );
}
export default Accredited;

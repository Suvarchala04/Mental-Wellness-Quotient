import React from "react";
import { Link } from "react-router-dom";
function Admin2(){
    return(
        <div>
            <main>
        <div className="container">
            <br /><br /><br />
            <div className="row">
                <div className="col-md-1 col-sm-12"></div>
                <div className="col-md-10 col-sm-12 text-center admin2-hq">
                    <div id="admin2-check-hq"><br />
                        <h3 className="admin2-head">Check Happiness Quotient of Your Institute</h3><br />
                        <Link to="/HappinessInstitute" class="btn btn-secondary admin2-button" type="button" >Check</Link>
                    </div>
                    <br />
                </div>
                <div className="col-md-1 col-sm-12"></div>
            </div>
        </div>


        <div className="container">
            <br /><br /><br />
            <div className="row">
                <div className="col-md-1 col-sm-12"></div>
                <div className="col-md-10 col-sm-12 text-center admin2-hq">
                    <div id="p1"><br />
                        <h3 className="admin2-head">Check Happiness Quotient of Parents</h3><br />
                        <Link to="/ParentsQuotient" class="btn btn-secondary admin2-button" type="button" >Check</Link>
                    </div>
                    <br />
                </div>
                <div className="col-md-1 col-sm-12"></div>
            </div>
        </div>

        <div className="container">
            <br /><br /><br />
            <div className="row">
                <div className="col-md-1 col-sm-12"></div>
                <div className="col-md-10 col-sm-12 text-center admin2-hq">
                    <div id="s1"><br />
                        <h3 className="admin2-head">Check Happiness Quotient of Students</h3><br />
                        <Link to="/StudentQuotient" class="btn btn-secondary admin2-button" type="button" >Check</Link>
                    </div>
                    <br />
                </div>
                <div className="col-md-1 col-sm-12"></div>
            </div>
        </div>

        <div className="container">
            <br /><br /><br />
            <div className="row">
                <div className="col-md-1 col-sm-12"></div>
                <div className="col-md-10 col-sm-12 text-center admin2-hq">
                    <div id="t1"><br />
                        <h3 className="admin2-head">Check Happiness Quotient of Teachers</h3><br />
                        <Link to="/TeacherQuotient" class="btn btn-secondary admin2-button" type="button" >Check</Link>
                    </div>
                    <br />
                </div>
                <div className="col-md-1 col-sm-12"></div>
            </div>
        </div>
        <br /><br />
    </main>
        </div>
    );
}
export default Admin2;
import React from "react";
// import { Link } from "react-router-dom";
function Accredited2(){
    return(
        <div>
            <div className="container text-center">
        <div className="row">
            <div className="col-md-4 col-sm-12"></div><br />
            <div className="col-md-4 col-sm-12 " id="selectaccredit" ><br />
                <h2 className="dash">Select Institute</h2>
                    <form action="">
                        <br />
                        <div className="form-group formgroup1" >
                            <select name="State" id="state" className="form-control ">
                                <option value="#">Select your State</option>
                                <option value="JK">Jammu & Kashmir</option>
                                <option value="Uttar Pradesh">Uttar Pradesh</option>
                                <option value="Punjab">Punjab</option>
                                <option value="Karnataka">Karnataka</option>
                                <option value="Andhra Pradesh">Andhra Pradesh</option>
                                <option value="Telangana">Telangana</option>
                            </select>
                        </div>
                    <br />
                        <div className="form-group formgroup1">
                            <select name="District" id="district" className="form-control ">
                                <option value="#">Select your District</option>
                            </select>
                        </div>
                    <br />
                        <div className="form-group formgroup1">
                            <select name="Institute" id="institute" className="form-control ">
                                <option value="#">Select your Institute</option>
                            </select>
                        </div>
                        <br />
                    </form>
                    <button type="button" className="btn btn-success accred2-res" onClick="show()">View HQ</button>
                    <br /><br />
                
            </div>
            <div className="col-md-4"></div>
        </div>
    </div>
    <br /><br />
    <div className="container" style={{display: "none"}} id="accredit-result">
        <div className="row">
            <div className="col-md-3"></div>
            <div id="Happiness-Quotient" className="col-md-6 col-sm-12 text-center">
                <br />
                <p>Mental Wellness Quotient of Institute</p>
                <div id="institute-hq">
                    <p>Lorem, ipsum.</p>
                    <br /><br />
                </div>
                <p>Mental Wellness Quotient of Students</p>
                <div id="student-hq">
                    <p>Lorem, ipsum.</p>
                    <br /><br />
                </div>
                <p>Mental Wellness Quotient of Parents</p>
                <div id="parents-hq">
                    <p>Lorem, ipsum.</p>
                    <br /><br />
                </div>
                <p>Mental Wellness Quotient of Teachers</p>
                <div id="teachers-hq">
                    <p>Lorem, ipsum.</p>
                    <br /><br />
                </div>
                <br />
            </div>
            <div className="col-md-3"></div>
        </div>

    
    <div className="container text-left" >
        <div id="highlights">
            <h3 className="High-Draw">Highlights of the Institute</h3>
            <div id="institute-highlights">
                <br /><br /><br /><br /><br /><br /><br /><br />
                
            </div>
        </div>    
    </div>
    <div className="container text-left">
        <div id="drawbacks">
            <h3 className="High-Draw">Drawbacks of the Institute</h3>
            <div id="institute-drawbacks">
                <br /><br /><br /><br /><br /><br /><br /><br />
            </div>
        </div>
    </div>
    </div>
        </div>
    );
}
// function show(){
//     document.getElementById("accredit-result").style.display="block";
// }

export default Accredited2;
import React from 'react';
import { Link } from 'react-router-dom';

export default function Institute() {
  return (
    <div>
          <div className="container-fluid text-center">
              <div className="row">
                  <div className="col-md-3 col-sm-12"></div>
                  <div className="col-md-6 col-sm-12"  id="institute-box">
                        <div><br />
                            <h1 style={{fontFamily: "'Playfair Display', serif"}}><i className="fa-solid fa-building-columns"></i>  Select your Institute</h1><br />
                            <form action="">
                              <br />
                              <div className="form-group formgroup1" >
                                  <select name="State" id="state" className="form-control">
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
                                      <option value="JK">Adilabad</option>
                                      <option value="Uttar Pradesh">Jangoan</option>
                                      <option value="Punjab">Jagtial</option>
                                      <option value="Karnataka">Hyderabad</option>
                                      <option value="Andhra Pradesh">Jayashankar Bhupalpally</option>
                                      <option value="Telangana">Medak</option>
                                  </select>
                              </div>
                              <br />
                              <div className="form-group formgroup1">
                                  <select name="Institute" id="institute" className="form-control ">
                                      <option value="#">Select your Institute</option>
                                      <option value="Keshav Memorial Institute of technology"></option>
                                  </select>
                              </div>
                              <br />
                            </form>
                          <Link to="/Role" className="btn btn-success" role="button" style={{padding: "6px 130px"}}>Next</Link>
                            <br /><br />
                            <h2 className='selection-heading'>Or</h2>
                            <Link to="/Accredited" role="button" className="btn btn-secondary" style={{padding: "6px 110px"}}>Accredited</Link>
                        </div>
                        <br />
                  </div>
                  <div className="col-md-3 col-sm-12"></div>
              </div>
          </div>
       <br /><br />
 </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
function Admin(){
    return(
        <div>
             <div className="container text-center">
                <div id="board">
                  <br />
                 <h1 className="dash">Dashboard</h1>
                </div>
                <br /><br />
                <div className="row" >
                    <div className="col-md-1 col-sm-12"></div>
                    <div className="col-md-10 col-sm-12 text-center" id="admin-box">
                        <h2  id="admin-head"><i className="fa-solid fa-user"></i>  ADMIN</h2>
                        <br /><br />
                        <p style={{fontFamily: "'Lora', serif"}}>Send a message to notify the parents,teachers and students to take the test</p>
                        <a href="#message" className="btn btn-info " role="button" id="send-view1">Send Message</a>
                        <br /><br />
                        <p style={{fontFamily: "'Lora', serif"}}>Click the below button to check the Happiness Quotient of your Institute</p>
                        <Link to="/Admin2" className="btn btn-info " role="button" id="send-view2">Check HQ</Link>
                        <br /><br />
                    </div>
                    <div className="col-md-1 col-sm-12"></div>
                </div>
             </div>
             <br /><br /><br />
             <section id="message">
                    <div className="container text-center">
                                <div className="row">
                                    <div className="col-md-2 col-sm-12"></div>
                                    <div className="col-md-8 col-sm-12" id="admin-message">
                                            <br />
                                            <h2 id="msg"><i className="fa-solid fa-envelopes-bulk"></i>  MESSAGE</h2><br /><br />
                                            <form action="">
                                                <textarea name="admin-msg" id="msg" rows="10" placeholder="Drop Your Message" className="form-control"></textarea>
                                                <br />
                                                <input type="checkbox" name="category" id="stud" /> 
                                                <label for="stud">Student</label><br />
                                                <input type="checkbox" name="category" id="par" />
                                                <label for="par">Parents</label><br />
                                                <input type="checkbox" name="category" />
                                                <label for="tea">Teachers</label>
                                                <br /><br />
                                                {/* <a href="#" className="btn btn-success fs-5" role="button" id="admin-send">Send</a> */}
                                                <button className='btn btn-success fs-5' type="button" id='admin-send'>Send</button>
                                                <br /><br />
                                            </form>
                                    </div>
                                    <div className="col-md-2 col-sm-12"></div>
                                </div>
                    </div>
            </section>

   
            <br /><br /><br /><br /><br /><br />
    </div>
    );
}
export default Admin;
import React from 'react';
import { Link } from 'react-router-dom';

function Home(){
    return (
        <div>
            <header>
        <nav className="navbar navbar-expand-sm">
                <a className="navbar-brand fs-4 text-white " id="brand" href="#"> MENTAL WELLNESS</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynav">
                    <i className="bx bx-menu text-white bx-md"></i>
                </button>
                <div className="collapse navbar-collapse" id="mynav">
                <ul className="navbar-nav ms-auto text-center">
                    <li className="nav-item">
                        <Link className="nav-link mx-3 text-white fs-5" to="/" id="Hl" aria-current="page"><i className="fa-solid fa-house"></i>  Home</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mx-3 text-white fs-5" href="#WMQ"><i className="fa-solid fa-brain"></i>  MW</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mx-3 text-white fs-5" href="#about"><i className="fa-solid fa-circle-info"></i>  About</a>
                    </li>
                    <li className="nav-item ">
                        <Link className="nav-link mx-3 text-white fs-5" to="/Login" target="_main"><i className="fa-solid fa-user"></i>  Log-in</Link>
                    </li>
                    
                </ul>
                </div>
        </nav>
        <div className="container-fluid bg-img" id="image">
            <div id="text" className="row">
                <div className="col-md-4 col-sm-12"></div>
                <div className="col-md-8 col-sm-12">
                     <h1>"Just because no one can heal or</h1>
                     <h1 id="mid">do your inner work for</h1>
                     <h1 id="you"> you</h1>
                     <h1 id="end">You have to do it alone"</h1>
                     <section className="section-5">
                        <div className="container text-center" style={{marginTop: "40px"}}>
                            <Link id="btn1" className="btn btn-secondary btn-lg" to="/Login" role="button" target="_main">Get Started</Link>
                            <br/><br/><br/>
                        </div>
                    </section>
                </div>
            </div>
            <br/>
            <br/><br/><br/><br/>
        </div>
    </header>
    <main>
        
        <section id="WMQ" className="section-2" style={{padding:" 60px 0"}}>
            <div className="container text-center">
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <div className="children">
                            <img src="images/children.jpg" className="img-fluid" alt="children" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12" style={{paddingTop:"20px"}}>
                        <h2 className='children-img-head'><b>What is Mental Wellness?</b></h2>
                        <p><i>Mental Wellness is a positive state of mental health. Mind is in order and functioning in your best interest. Able to think,feel and act in ways that create a positive impact on your physical and social wellbeing. Mentally well people are positive,self assured and happy. They are in control of their thoughts,emotions and behaviour.</i></p>
                        <h2 className='children-img-head'><b>Happiness Quotient</b></h2>
                        <p><i><b>Happiness Quotient(HQ)</b> is a concept that measures approximately the amount of happiness each person has achieved in their life.</i></p>   
                    </div>
                </div>
            </div>
             
        </section>
    
        <section className="section-3">
            <div className="container text-center">
                <h2 id="quote">Mental Wellness is not a destination,but a process</h2>
            </div>
        </section>
    
        <section className="section-4">
            <div className="container text-center">
                <div className="row"  style={{paddingTop: "40px"}}>
                    <div className="col-lg-6 col-sm-12" style={{ paddingTop: "30px"}}>
                        <h2 style={{fontFamily: "'PT Serif', serif"}}><b>Why well-being is important at school?</b></h2>
                        <p style={{fontFamily: "'Poppins', sans-serif"}}>Improving Student's well-being involves both teachers and parents approach.
                            Schools should provide lessons focussed on responsible use of internet,need to adopt a healthy lifestyle and how to prevent or cope with problems.
                            Childhood and adolescence is a critical period in the development of long-term attitudes towards personal well-being and lifestyle choices. Socaial,emotional skills,knowledge and behaviour that young people learn in the classroom help them manage every situation they face in daily life.
                        </p>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div >
                            <img src="images/student.jpg" className="img-fluid" alt="student"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <br/><br/>
        <section id="about">
            <div className="container" id="about1">
                <div className="row" >
                    <div className="col-md-2 col-sm-12"></div>
                    <div className="col-md-8 col-sm-12 text-center">
                        <h1 style={{fontFamily: "'Playfair Display', serif"}}>About</h1>
                        <p><b>Students Page:</b>Students are asked to answer few questions based on which happiness quotient of the school is calculated and feedback is taken from the students.
                        </p>
                        <p><b>Parents Page:</b>Parents are asked to answer some questions about students behaviour at home and feedback about school is taken</p>
                        <p><b>Teachers Page:</b>Teachers are asked to answer few questions about school environment,students and happiness quotient is calculated</p>
                        <p><b>Admin Page:</b>Admin page has 2 sections where the first one is a "notify" box where he/she can pass any message to students,parents and teachers to take the Quiz and the second section is the HQ box where happiness quotient of the entire school is displayed</p>
                        <p><b>Accredited Page:</b>The accredited has to select the institution to view Happiness Quotient of the institute</p>
                    </div>
                    <div className="col-md-2 col-sm-12"></div>
                </div>
            </div>
        </section>
    </main>
    <br/><br/>
    <footer style={{background: 'rgba(0, 0, 0, 0.8)'}}>
        <section className="footer">
            <div className="container-fluid text-center">
                <div className="row">
                    <div className="col-md-6 col-sm-12 text-white">
                        <br/> 
                        <h2 className='children-img-head'>Contact:</h2>
                        <i><h4><i className="fa-solid fa-phone-volume"></i> Call : 6304xxxxxx</h4></i>
                        <i><h4><i className="fa-solid fa-envelope"></i> Email : mentalwellness@gmail.com</h4></i>
    
                    </div>
                    <div className="col-md-6 col-sm-12 text-center" id="share">
                        <br/>
                        <h2 id="share2">Share:</h2>
                        <br/>
                        <ul className="social-link fs-3 text-white">
                            <li className="social-items"><a href="#"><i className="fab fa-facebook text-white"></i></a> </li>
                            <li className="social-items"><a href="#"><i className="fab fa-snapchat text-white"></i></a> </li>
                            <li className="social-items"><a href="#"><i className="fab fa-instagram text-white"></i></a> </li>
                            <li className="social-items"><a href="#"><i className="fab fa-twitter text-white"></i></a> </li>
                        </ul>
                    </div>
                </div>
                <br/><br/>
            </div>
        </section>
    </footer>
        </div>

    );
}
export default Home;
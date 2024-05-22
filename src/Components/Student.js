import React from 'react';
import { Link } from 'react-router-dom';


export default function Student() {
  return (
    <div  class="questions-body">
      <div className="container text-left">
        <div className="row">
          <div className="col-md-2 col-sm-12"></div>
          <div className="col-md-8 col-sm-12">
            <br />
        <br />
        <h3 className="start-quiz">Start your Quiz!!</h3>
        <br />
        <div id="qs">
        <p className="question42">1) Do you like your School?</p>
        <form action="">
            <input type="radio" name="answer" id="Yes" value="yes" />
            <label for="Yes">Yes</label><br />
            <input type="radio" name="answer" id="Somewhat" value="somewhat" />
            <label for="Somewhat">Somewhat</label><br />
            <input type="radio" name="answer" id="No" value="no" />
            <label for="No">No</label>
        </form><br />
        <p className="question42">2) Do you feel safe at your School?</p>
        <form action="">
            <input type="radio" name="answer" id="Yes" value="yes" />
            <label for="Yes">Yes</label><br />
            <input type="radio" name="answer" id="Somewhat" value="somewhat" />
            <label for="Somewhat">Somewhat</label><br />
            <input type="radio" name="answer" id="No" value="no" />
            <label for="No">No</label>
        </form><br />
        <p className="question42">3) Do you interact well with your classmates?</p>
        <form action="">
            <input type="radio" name="answer" id="Yes" value="yes" />
            <label for="Yes">Yes</label><br />
            <input type="radio" name="answer" id="Somewhat" value="somewhat" />
            <label for="Somewhat">Somewhat</label><br />
            <input type="radio" name="answer" id="No" value="no" />
            <label for="No">No</label>
        </form><br />
        <p className="question42">4) Are you satisfied with the facilities provided in your school/college?</p>
        <form action="">
            <input type="radio" name="answer" id="Yes" value="yes" />
            <label for="Yes">Yes</label><br />
            <input type="radio" name="answer" id="Somewhat" value="somewhat" />
            <label for="Somewhat">Somewhat</label><br />
            <input type="radio" name="answer" id="No" value="no" />
            <label for="No">No</label>
        </form><br />
        <p className="question42">5) Are you happy with the quality of your learning environment?</p>
        <form action="">
            <input type="radio" name="answer" id="Yes" value="yes" />
            <label for="Yes">Yes</label><br />
            <input type="radio" name="answer" id="Somewhat" value="somewhat" />
            <label for="Somewhat">Somewhat</label><br />
            <input type="radio" name="answer" id="No" value="no" />
            <label for="No">No</label>
        </form><br />
        </div>
        </div>
        <div className="col-md-2 col-sm-12"></div> 
        </div>
        </div>
        <div className="row">
            <div className="col-md-4 col-sm-12"></div>
            <div className="col-md-4 col-sm-12 text-center">
                <Link to="/Result" role="submit" className="btn btn-success questions-submit" >Calculate HQ</Link><br /><br />
            </div>
            <div className="col-md-4 col-sm-12"></div>
        </div>
    </div>
  );
}

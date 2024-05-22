import React from 'react';
import { Link } from 'react-router-dom';

export default function Teacher() {
  return (
    <div className="questions-body">
      <div className="container text-left">
        <div className="row">
            <div className="col-md-1 col-sm-12"></div>
            <div className="col-md-9 col-sm-12">
            <br />
        <br />
        <h3 className="start-quiz">Start your Quiz!!!</h3>
        <br />
        <div id="qs">
        <p className="question42">1) Do you have access to a device for teaching online ?</p>
        <form action="">
            <input type="radio" name="answer" id="Yes" value="yes" />
            <label for="Yes">Yes</label><br />
            <input type="radio" name="answer" id="Somewhat" value="somewhat" />
            <label for="Somewhat">Somewhat</label><br />
            <input type="radio" name="answer" id="No" value="no" />
            <label for="No">No</label>
        </form><br />
        <p className="question42">2) Will you give equal importance to academics and extra-curricular activities ?​</p>
        <form action="">
            <input type="radio" name="answer" id="Yes" value="yes" />
            <label for="Yes">Yes</label><br />
            <input type="radio" name="answer" id="Somewhat" value="somewhat"/>
            <label for="Somewhat">Somewhat</label><br />
            <input type="radio" name="answer" id="No" value="no" />
            <label for="No">No</label>
        </form><br />
        <p className="question42">3) Will the management keep the academic work organized ? ​</p>
        <form action="">
            <input type="radio" name="answer" id="Yes" value="yes" />
            <label for="Yes">Yes</label><br />
            <input type="radio" name="answer" id="Somewhat" value="somewhat" />
            <label for="Somewhat">Somewhat</label><br />
            <input type="radio" name="answer" id="No" value="no" />
            <label for="No">No</label>
        </form><br />
        <p className="question42">4)  Do the school management motivates you to be more effective in your work ?</p>
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

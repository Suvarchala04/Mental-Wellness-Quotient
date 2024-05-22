import React from 'react'

export default function Result() {
  return (
    <div>
        <div className="container text-center">
            <br /><br />
            <div className="row">
                <div className="col-lg-2 col-sm-12"></div>
                <div className="col-lg-8 col-sm-12" id="result-box">
                    <br />
                    <h1 className="res-head">Your Happiness Quotient is.....</h1>
                    <br /><br />
                        <div className="row">
                            <div className="col-lg-4"></div>
                            <div className="col-lg-4" id="result-final"><br /><br /><br /><br /><br /></div>
                            <div className="col-lg-4"></div>
                        </div>
                        <br /><br /><br />
                </div>
                <div className="col-lg-2 col-sm-12"></div>
            </div>
            <br /><br />
            <div className="row">
                <div className="col-lg-1 col-sm-12"></div>
                <div id="high" className="col-lg-10 col-sm-12 text-center">
                    <h3 className="res-head">Please mention some Highlights and Drawbacks of the Institute</h3><br />
                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <h3 className="res-head">Highlights</h3>
                            <textarea name="HIGHLIGHTS" id="HIGHLIGHTS"  rows="10" className="form-control"></textarea>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <h3 className="res-head">Drawbacks</h3>
                            <textarea name="DRAWBACKS" id="DRAWBACKS" className="form-control" rows="10"></textarea>
                        </div>
                    </div>
                </div>
                <div className="col-lg-1 col-sm-12"></div>
            </div><br /><br />
            <button className="btn btn-success" type='submit' style={{padding: "5px 60px"}}>Submit</button>

        </div>
        <br /><br />
    </div>
  );
}

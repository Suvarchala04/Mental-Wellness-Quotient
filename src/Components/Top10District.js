import React from 'react';

export default function Top10District() {
  return (
    <div>
       <div className="container text-center">
        <br /><br /><br />
        <h3 className="selection-heading">Select a district to view Top 10 Institutes</h3>
        <div className="row">
            <div className="col-md-4 col-sm-12"></div>
            <div id="Select" className="col-md-4 col-sm-12 table-final-border">
                <br /><br />
                <form action="">
                    <select name="District" id="district" className=" form-control table-padding">
                        <option value="#">Select a District</option>
                        <option value="Karimnagar">Karimnagar</option>
                        <option value="Adilabad">Adilabad</option>
                        <option value="Khammam">Khammam</option>
                        <option value="Warangal">Warangal</option>
                        <option value="Nalgonda">Nalgonda</option>
                        <option value="Medak">Medak</option>
                    </select>
                </form>
                <br /><br />
                <button type="button" className="btn btn-primary">View HQ</button><br /><br />
            </div>
            <div className="col-md-4 col-sm-12"></div>
        </div>
        <br />
        <h4 className='admin2-head'>Top 10 Institutes in <p className="state-dis-style">District name</p></h4>
        
    </div>
    <br />
    <div className="container text-center">
        <table width="75%" cellpadding="17px">
            <tr>
                <th className="table-header">Institute</th>
                <th>Happiness Quotient</th>
            </tr>
            <tr>
                <td></td>
                <td></td>
                
            </tr>
            <tr>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
            </tr>

        </table>
        
    </div>
    <br /><br /><br />
    </div>
  );
}

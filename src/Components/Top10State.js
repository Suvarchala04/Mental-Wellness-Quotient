import React from 'react';

export default function Top10State() {
  return (
    <div>
      <div className="container text-center">
        <br /><br /><br /><br />
        <h3 className="selection-heading">Select a State to view Top 10 Institutes</h3>
        <div className="row">
            <div className="col-md-4 col-sm-12"></div>
            <br />
            <div id="select" className="col-md-4 col-sm-12">
                <br /><br />
                <form action="">
                    <select name="State" id="state" className="form-control table-padding">
                        <option value="#">Select a State</option>
                        <option value="JK">Jammu & Kashmir</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Telangana">Telangana</option>
                    </select>
                </form>
                <br />
                <button type="button" className="btn btn-primary">View HQ</button><br /><br />
            </div>
            <div className="col-md-4 col-sm-12"></div>
        </div>
    </div>

    <br />
    <div className="container text-center">
        <h4 className='admin2-head'>Top 10 Institutes in <p className="state-dis-style">State name</p></h4>
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

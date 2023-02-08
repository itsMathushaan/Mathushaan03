import React from 'react';
import '../CSS/app.css';
//Bootstrap and jQuery libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 
class App extends React.Component {
  componentDidMount() {
    //initialize datatable
    $(document).ready(function () {
        $('#example').DataTable();
    });
    
 }
  render(){
    //Datatable HTML
  return (
    
    <div className="MainDiv"> 
    <div className="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
   
        <div class="input-group ps-5">
          <div id="navbar-search-autocomplete" class="form-outline w-100 pe-4">
            <input type="search" id="form1" class="form-control" />
          </div>  
        </div>
        <button type="button" class="btn btn-secondary me-3">Add</button>
      </div>
      <button type="button" class="btn btn-secondary  me-3">Inventory:270</button>
      <button type="button" class="btn btn-secondary">Add Catergory</button> 
    </div>
  </nav>
          <table id="example" class="display">  
            <thead>
                <tr>
                    <th> </th>
                    <th> <p class="font-weight-bold">Device</p></th>
                    <th> Catergory</th>
                    <th> Availability</th>
                    <th> Employee ID</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><span className="id-tag">DEV-101</span></td>
                    <td>Thinkpad</td>
                    <td>Laptop</td>
                    <td>Assigned</td>
                    <td><span className="id-tag">EMP-101</span></td>
                </tr>
                <tr>
                <td><span className="id-tag">DEV-101</span></td>
                    <td>Thinkpad</td>
                    <td>Laptop</td>
                    <td>Assigned</td>
                    <td><span className="id-tag">EMP-101</span></td>
                </tr>
                <tr>
                <td><span className="id-tag">DEV-101</span></td>
                    <td>Thinkpad</td>
                    <td>Laptop</td>
                    <td>Assigned</td>
                    <td><span className="id-tag">EMP-101</span></td>
                </tr>
                <tr>
                <td><span className="id-tag">DEV-101</span></td>
                    <td>Thinkpad</td>
                    <td>Laptop</td>
                    <td>Assigned</td>
                    <td><span className="id-tag">EMP-101</span></td>
                </tr>
                <tr>
                <td><span className="id-tag">DEV-101</span></td>
                    <td>Thinkpad</td>
                    <td>Laptop</td>
                    <td>Assigned</td>
                    <td><span className="id-tag">EMP-101</span></td>
                </tr>
                <tr>
                <td><span className="id-tag">DEV-101</span></td>
                    <td>Thinkpad</td>
                    <td>Laptop</td>
                    <td>Assigned</td>
                    <td><span className="id-tag">EMP-101</span></td>
                </tr>
                <tr>
                <td><span className="id-tag">DEV-101</span></td>
                    <td>Thinkpad</td>
                    <td>Laptop</td>
                    <td>Assigned</td>
                    <td><span className="id-tag">EMP-101</span></td>
                </tr>
                <tr>
                <td><span className="id-tag">DEV-101</span></td>
                    <td>Thinkpad</td>
                    <td>Laptop</td>
                    <td>Assigned</td>
                    <td><span className="id-tag">EMP-101</span></td>
                </tr>
            </tbody>
            
        </table>
        
          
        </div>
      </div>
  );
  
}
}
export default App;
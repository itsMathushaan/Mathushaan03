import React from "react";
import "../CSS/empDatatable.css";
import "datatables.net-buttons/js/dataTables.buttons.js";
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-buttons/js/dataTables.buttons.js"




// import "datatables.net-dt/css/jquery.dataTables.min.css"



//Bootstdap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";

//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
// import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";

class Employee extends React.Component {
  componentDidMount() {
    $(document).ready(function () {
      $("#Employee_table").DataTable({
        responsive:true,
        
        dom: "Bfrtp",
        bDestroy: true,
        buttons: [
          {
            text: 'ADD',
            action: function ( e, dt, node, config ) {
                alert( 'Add Employee' );
            }},
            {
              text: 'Employees: 57  ',
              action: function ( e, dt, node, config ) {
                  alert( 'There are 57 Employees' );
              }}

            
            // 'print'
        ],
        language: {
          search: "_INPUT_",
          searchPlaceholder: "Search Employees.."
      }
      });
    });

    //initialize datatable
    // $(document).ready(function () {
    //     $('#td_table').DataTable(
    //         {"dom": 'rftp'  }
    //     );

    // });
  }
  render() {
    //Datatable HTML
    return (

  
      <div className="MainDiv">
        
        <div className="container">
          <table id="Employee_table" class="display  dt-responsive table-sm">
            <thead className="bg-secondary">
              <tr >
                <th>ID</th>
                <th>Employee</th>
                <th>Role</th>
                <th>Department</th>
                <th>Supervisor</th>
              </tr>
            </thead>
            <tbody className="bg-light">
              <tr>
                <td>1</td>
                <td>Ramsey</td>
                <td>Electdician</td>
                <td>Legal</td>
                <td>Ramsey Dunbar</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Millisent</td>
                <td>Engineer</td>
                <td>Sales</td>
                <td>Millisent Reynoldson</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Keeley</td>
                <td>Architect</td>
                <td>Sales</td>
                <td>Keeley Ivel</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Adrea</td>
                <td>Engineer</td>
                <td>Legal</td>
                <td>Adrea Bracknall</td>
              </tr>
              <tr>
                <td>5</td>
                <td>El</td>
                <td>Constduction Foreman</td>
                <td>Human Resources</td>
                <td>El Tellenbroker</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Henrie</td>
                <td>Surveyor</td>
                <td>Support</td>
                <td>Henrie Kniveton</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Shay</td>
                <td>Engineer</td>
                <td>Research and Development</td>
                <td>Shay Stathers</td>
              </tr>
              <tr>
                <td>8</td>
                <td>Livvy</td>
                <td>Subcontdactor</td>
                <td>Marketing</td>
                <td>Livvy Gauson</td>
              </tr>
              <tr>
                <td>9</td>
                <td>Philly</td>
                <td>Constduction Expeditor</td>
                <td>Engineering</td>
                <td>Philly Maffey</td>
              </tr>
              <tr>
                <td>10</td>
                <td>Clim</td>
                <td>Estimator</td>
                <td>Accounting</td>
                <td>Clim Batdop</td>
              </tr>
              <tr>
                <td>11</td>
                <td>Nelly</td>
                <td>Subcontdactor</td>
                <td>Product Management</td>
                <td>Nelly Cattanach</td>
              </tr>
              <tr>
                <td>12</td>
                <td>Auberon</td>
                <td>Constduction Worker</td>
                <td>Marketing</td>
                <td>Auberon Tireman</td>
              </tr>
              <tr>
                <td>13</td>
                <td>Stephenie</td>
                <td>Project Manager</td>
                <td>tdaining</td>
                <td>Stephenie Britcher</td>
              </tr>
              <tr>
                <td>14</td>
                <td>Carrie</td>
                <td>Constduction Worker</td>
                <td>Marketing</td>
                <td>Carrie Novakovic</td>
              </tr>
              <tr>
                <td>15</td>
                <td>Adelina</td>
                <td>td</td>
                <td>Support</td>
                <td>Adelina Dankov</td>
              </tr>
              <tr>
                <td>16</td>
                <td>Kylie</td>
                <td>Architect</td>
                <td>Sales</td>
                <td>Kylie Vigne</td>
              </tr>
              <tr>
                <td>17</td>
                <td>Kara</td>
                <td>Project Manager</td>
                <td>Sales</td>
                <td>Kara Tilling</td>
              </tr>
              <tr>
                <td>18</td>
                <td>Merrili</td>
                <td>Constduction Expeditor</td>
                <td>Research and Development</td>
                <td>Merrili Scarfe</td>
              </tr>
              <tr>
                <td>19</td>
                <td>Salomi</td>
                <td>Surveyor</td>
                <td>Business Development</td>
                <td>Salomi McCome</td>
              </tr>
              <tr>
                <td>20</td>
                <td>Madeleine</td>
                <td>Engineer</td>
                <td>Support</td>
                <td>Madeleine Gatecliffe</td>
              </tr>
              <tr>
                <td>21</td>
                <td>Godiva</td>
                <td>Surveyor</td>
                <td>Services</td>
                <td>Godiva Ferandez</td>
              </tr>
              <tr>
                <td>22</td>
                <td>Theodoric</td>
                <td>Subcontdactor</td>
                <td>Marketing</td>
                <td>Theodoric Dumelow</td>
              </tr>
              <tr>
                <td>23</td>
                <td>Brooke</td>
                <td>td</td>
                <td>tdaining</td>
                <td>Brooke Lowman</td>
              </tr>
              <tr>
                <td>24</td>
                <td>Gates</td>
                <td>Constduction Manager</td>
                <td>Accounting</td>
                <td>Gates Heaslip</td>
              </tr>
              <tr>
                <td>25</td>
                <td>Lovell</td>
                <td>td</td>
                <td>tdaining</td>
                <td>Lovell Munning</td>
              </tr>
              <tr>
                <td>26</td>
                <td>Kayley</td>
                <td>td</td>
                <td>Engineering</td>
                <td>Kayley Jugging</td>
              </tr>
              <tr>
                <td>27</td>
                <td>Aleece</td>
                <td>Architect</td>
                <td>Research and Development</td>
                <td>Aleece Huson</td>
              </tr>
              <tr>
                <td>28</td>
                <td>Adolf</td>
                <td>Architect</td>
                <td>Business Development</td>
                <td>Adolf Lohan</td>
              </tr>
              <tr>
                <td>29</td>
                <td>Chery</td>
                <td>Project Manager</td>
                <td>Human Resources</td>
                <td>Chery tdittam</td>
              </tr>
              <tr>
                <td>30</td>
                <td>Augie</td>
                <td>Constduction Worker</td>
                <td>Sales</td>
                <td>Augie Minchenton</td>
              </tr>
              <tr>
                <td>31</td>
                <td>Marcile</td>
                <td>Architect</td>
                <td>Accounting</td>
                <td>Marcile Habbert</td>
              </tr>
              <tr>
                <td>32</td>
                <td>Willem</td>
                <td>Engineer</td>
                <td>Product Management</td>
                <td>Willem Kerner</td>
              </tr>
              <tr>
                <td>33</td>
                <td>Annis</td>
                <td>Architect</td>
                <td>Services</td>
                <td>Annis Doonican</td>
              </tr>
              <tr>
                <td>34</td>
                <td>Kim</td>
                <td>Constduction Worker</td>
                <td>Human Resources</td>
                <td>Kim Arundale</td>
              </tr>
              <tr>
                <td>35</td>
                <td>Jamal</td>
                <td>Constduction Manager</td>
                <td>Services</td>
                <td>Jamal Leil</td>
              </tr>
              <tr>
                <td>36</td>
                <td>Robin</td>
                <td>Architect</td>
                <td>Services</td>
                <td>Robin Waulker</td>
              </tr>
              <tr>
                <td>37</td>
                <td>Lurleen</td>
                <td>Architect</td>
                <td>Product Management</td>
                <td>Lurleen Varvara</td>
              </tr>
              <tr>
                <td>38</td>
                <td>Antonetta</td>
                <td>Constduction Manager</td>
                <td>Marketing</td>
                <td>Antonetta Hauxby</td>
              </tr>
              <tr>
                <td>39</td>
                <td>Engelbert</td>
                <td>Constduction Manager</td>
                <td>Services</td>
                <td>Engelbert Oherlihy</td>
              </tr>
              <tr>
                <td>40</td>
                <td>Grete</td>
                <td>Engineer</td>
                <td>Accounting</td>
                <td>Grete Hoggetts</td>
              </tr>
              <tr>
                <td>41</td>
                <td>Auroora</td>
                <td>Project Manager</td>
                <td>Engineering</td>
                <td>Auroora McKimmie</td>
              </tr>
              <tr>
                <td>42</td>
                <td>Desdemona</td>
                <td>Architect</td>
                <td>Support</td>
                <td>Desdemona Yakubowicz</td>
              </tr>
              <tr>
                <td>43</td>
                <td>Nealson</td>
                <td>Electdician</td>
                <td>Engineering</td>
                <td>Nealson Scannell</td>
              </tr>
              <tr>
                <td>44</td>
                <td>Jemmy</td>
                <td>Constduction Manager</td>
                <td>Services</td>
                <td>Jemmy Monteath</td>
              </tr>
              <tr>
                <td>45</td>
                <td>Skip</td>
                <td>Constduction Foreman</td>
                <td>Marketing</td>
                <td>Skip Heintz</td>
              </tr>
              <tr>
                <td>46</td>
                <td>Herculie</td>
                <td>Engineer</td>
                <td>Human Resources</td>
                <td>Herculie Maddicks</td>
              </tr>
              <tr>
                <td>47</td>
                <td>Deny</td>
                <td>Architect</td>
                <td>Marketing</td>
                <td>Deny Greatdanks</td>
              </tr>
              <tr>
                <td>48</td>
                <td>Lonnard</td>
                <td>Constduction Foreman</td>
                <td>tdaining</td>
                <td>Lonnard Towlson</td>
              </tr>
              <tr>
                <td>49</td>
                <td>Aloisia</td>
                <td>Estimator</td>
                <td>tdaining</td>
                <td>Aloisia Cancellario</td>
              </tr>
              <tr>
                <td>50</td>
                <td>Beryle</td>
                <td>Surveyor</td>
                <td>Accounting</td>
                <td>Beryle Barczewski</td>
              </tr>
              <tr>
                <td>51</td>
                <td>Mehetabel</td>
                <td>Constduction Worker</td>
                <td>Sales</td>
                <td>Mehetabel Caseborne</td>
              </tr>
              <tr>
                <td>52</td>
                <td>Doretta</td>
                <td>Constduction Worker</td>
                <td>Product Management</td>
                <td>Doretta Burcombe</td>
              </tr>
              <tr>
                <td>53</td>
                <td>Elton</td>
                <td>Subcontdactor</td>
                <td>Services</td>
                <td>Elton Carden</td>
              </tr>
              <tr>
                <td>54</td>
                <td>Ricky</td>
                <td>Constduction Manager</td>
                <td>Support</td>
                <td>Ricky Vickarman</td>
              </tr>
              <tr>
                <td>55</td>
                <td>Maritsa</td>
                <td>Architect</td>
                <td>Engineering</td>
                <td>Maritsa Postlewhite</td>
              </tr>
              <tr>
                <td>56</td>
                <td>Rollo</td>
                <td>Project Manager</td>
                <td>Services</td>
                <td>Rollo Ebbett</td>
              </tr>
              <tr>
                <td>57</td>
                <td>Georgiana</td>
                <td>Constduction Foreman</td>
                <td>Accounting</td>
                <td>Georgiana Wattisham</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
    );
  }
}
export default Employee;

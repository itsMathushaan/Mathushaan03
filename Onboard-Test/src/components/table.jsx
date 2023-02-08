import React, { Component } from 'react';
import $ from 'jquery';

class Table extends Component {
    state = {
        
    }

    componentDidMount() {
        $(document).ready(function () {
            $.extend(true, $.fn.dataTable.defaults, {
                language: {
                    search: ""
                }
            });

            $('#tableId').DataTable({
                "lengthChange" : false,
                responsive : true,
                bDestroy: true
            });

            $('[type=search]').each(function () {
                $(this).attr("placeholder", "Search");
                $(this).before('<span class="fa fa-search"></span>');
            });
        });
    }

    render() { 
        return (
            <table id='tableId'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Supervisor</th>
                        <th>Primary Project</th>
                        <th>Secondary Project</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>John Doe</td>
                        <td>Development</td>
                        <td>Jane Doe</td>
                        <td>RMS</td>
                        <td>Picturelingo</td>
                    </tr>
                    <tr>
                        <td>John Doe</td>
                        <td>Development</td>
                        <td>Jane Doe</td>
                        <td>RMS</td>
                        <td>Picturelingo</td>
                    </tr>
                    <tr>
                        <td>John Doe</td>
                        <td>Development</td>
                        <td>Jane Doe</td>
                        <td>RMS</td>
                        <td>Picturelingo</td>
                    </tr>
                    <tr>
                        <td>John Doe</td>
                        <td>Development</td>
                        <td>Jane Doe</td>
                        <td>RMS</td>
                        <td>Picturelingo</td>
                    </tr>
                    <tr>
                        <td>John Doe</td>
                        <td>Development</td>
                        <td>Jane Doe</td>
                        <td>RMS</td>
                        <td>Picturelingo</td>
                    </tr>
                    <tr>
                        <td>John Doe</td>
                        <td>Development</td>
                        <td>Jane Doe</td>
                        <td>RMS</td>
                        <td>Picturelingo</td>
                    </tr>
                    <tr>
                        <td>John Doe</td>
                        <td>Development</td>
                        <td>Jane Doe</td>
                        <td>RMS</td>
                        <td>Picturelingo</td>
                    </tr>
                    <tr>
                        <td>John Doe</td>
                        <td>Development</td>
                        <td>Jane Doe</td>
                        <td>RMS</td>
                        <td>Picturelingo</td>
                    </tr>
                    <tr>
                        <td>John Doe</td>
                        <td>Development</td>
                        <td>Jane Doe</td>
                        <td>RMS</td>
                        <td>Picturelingo</td>
                    </tr>
                    <tr>
                        <td>John Doe</td>
                        <td>Development</td>
                        <td>Jane Doe</td>
                        <td>RMS</td>
                        <td>Picturelingo</td>
                    </tr>
                    <tr>
                        <td>John Doe</td>
                        <td>Development</td>
                        <td>Jane Doe</td>
                        <td>RMS</td>
                        <td>Picturelingo</td>
                    </tr>
                    <tr>
                        <td>John Doe</td>
                        <td>Development</td>
                        <td>Jane Doe</td>
                        <td>RMS</td>
                        <td>Picturelingo</td>
                    </tr>
                    <tr>
                        <td>John Doe</td>
                        <td>Development</td>
                        <td>Jane Doe</td>
                        <td>RMS</td>
                        <td>Picturelingo</td>
                    </tr>
                </tbody>

                <tfoot>
                    <tr>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Supervisor</th>
                        <th>Primary Project</th>
                        <th>Secondary Project</th>
                    </tr>
                </tfoot>
            </table>
        );
    }
}
 
export default Table;
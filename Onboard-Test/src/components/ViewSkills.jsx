import React from 'react';
import $ from 'jquery';
import Table from 'react-bootstrap/Table';
import ViewSkillsCompo from './ViewSkillsCompo';


class ViewwSkills extends React.Component {
    state =  {SkillsData :[
        {      "id": 1,
            "Technology": "MongoDB",
            "Rating": 4,
            "Proficiency": 9.2,
            "noUser": 20
        },
        {  "id": 2,
            "Technology": "ReactJS",
            "Rating": 3,
            "Proficiency": 4.2,
            "noUser": 13
        },
        {  "id": 3,
            "Technology": "Java EE",
            "Rating": 7,
            "Proficiency": 5.2,
            "noUser": 8,
        },
        {  "id": 4,
            "Technology": "Python",
            "Rating": 9,
            "Proficiency": 7.2,
            "noUser": 14
        },
    ]
    };
    

    viewSkillsTable = () => {
        $(document).ready(function () {
            $('#table_id').DataTable({
                ordering: false,
                search: true,
                "bDestroy": true
            });
        });

    }
    componentDidMount() {
        this.viewSkillsTable()
    }

    render() {


        return (

            <>

                <div className='container-sm'>
                    <br />
                    <div className='container '>
                        <button type="button" className="btn btn-primary text-center" data-bs-toggle="modal" data-bs-target="#viewSkillsModalLabel">
                            View Skills
                        </button>

                        <div className="modal modal-xl fade" id="viewSkillsModalLabel" tabIndex={-1} aria-labelledby="viewSkillsModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered ">
                                <div className="modal-content">
                                    <div className="modal-header">

                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div>
                                        <p className="text" id="SkillHeading"><b>Tech Stack 01</b></p>
                                    </div>
                                    <div className="modal-body " >
                                        <div className='card-xl px-5'>


                                            <Table borderless id="table_id" className="table">
                                                <thead className='text-right' >
                                                    <tr className='SkillsTableHeadRow'>
                                                        <th id='SkillsTableHead1' scope="col-3" className="font-weight-light" >Technology</th>
                                                        <th id='SkillsTableHead2' scope="col-3" className="font-weight-light">Rating</th>
                                                        <th id='SkillsTableHead3' scope="col-3" className="font-weight-light">Proficiency</th>
                                                    </tr>
                                                </thead>
                                                <tbody className='SkillsTableBody'>
                                               
                                                { this.state.SkillsData.map(SkillsData => 
                    <ViewSkillsCompo key={SkillsData.id} Technology={SkillsData.Technology} Rating={SkillsData.Rating} 
                    Proficiency={SkillsData.Proficiency} noUser={SkillsData.noUser} />
                )}

                                                    
                                                </tbody>
                                            </Table>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </>
                
        );
    }
}



export default ViewwSkills;
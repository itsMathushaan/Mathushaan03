import React from 'react';
import { FaUser } from 'react-icons/fa';




class ViewSkillsCompo extends React.Component {
    state = {
        Technology: this.props.Technology,
        Rating: this.props.Rating,
        Proficiency: this.props.Proficiency,
        noUser: this.props.noUser
    };
    render() {
        return (
            <React.Fragment>
                <tr className='SkillsTableBodyRow'>
                    <td className='' id='SkillsTableBodyFC' ><p className='techType'>{this.state.Technology}</p></td>
                    <td className='text-left'><p className='techType'>{this.state.Rating}/10</p></td>
                    <td className='text-right w-25' >
                        <div className='container '>
                            <div className='col-12' id='ProfCol' >
                                <div className='row gx-2' >
                                    <div className='col-6  ' id='ProfColInner' >
                                        <p className='text'>{this.state.Proficiency}</p>
                                        <p className='text' id='ProfAvgRate'>average rating</p>
                                    </div>
                                    <div className='col'>
                                        < FaUser /> <i className="SkillUserIcon" >{this.state.noUser}</i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </td>

                </tr>
            </React.Fragment>
        );
    }
}

export default ViewSkillsCompo;
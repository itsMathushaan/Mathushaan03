import React, { Component } from 'react';
import profileimage from '../images/profile.PNG';



class EditProfile extends React.Component {
    state = {
        profileImg: profileimage
    }
    imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                this.setState({ profileImg: reader.result })
            }
        }
        reader.readAsDataURL(e.target.files[0])
    };
    render() {
        const { profileImg } = this.state

        return (
            <>

                <div className='container-sm'>
                    <h2>MY Profile</h2>
                    <div className='container text-center'>
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editProfileModalLabel">
                            Edit Profile
                        </button>

                        <div className="modal fade" id="editProfileModalLabel" tabIndex={-1} aria-labelledby="editProfileModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="editProfileModalLabel">Edit Profile</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body px-5" id='EditProfileBody' >
                                        <div className='card-sm'>
                                            <div className="container">
                                                <div className="input-group mb-3">

                                                    <input id="uploadimage" hidden type="file" accept="image/*" name="image-upload" className="mt-2" onChange={this.imageHandler} />


                                                    <label className="shadow mx-auto d-block " htmlFor="uploadimage">


                                                        <img src={profileImg} className=" img " id='EditProfileImg' width={245} height={245} alt="update profile" />
                                                        <div className="ProfImgDiv" >
                                                            <small className='ImgCoverName' >&nbsp;&nbsp;UPDATE <br /> PHOTO</small></div>

                                                    </label>
                                                </div>
                                                <br />
                                                <div className="mb-3">
                                                    <p className='EditProContactNo' ><small>&nbsp;&nbsp;Contact Number</small></p>
                                                    <input type="text" className="form-control" id='EditProPhone' placeholder='+94 123 4567 890' />


                                                </div>
                                                <div className="mb-3">
                                                    <p className='EditProAddress'><small>&nbsp;&nbsp;Address:</small></p>
                                                    <input type="text" id='EditProInputAddress' className="form-control" placeholder='Colombo 01, Colombo' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                                                </div>
                                                <br />
                                                <div className='d-flex mx-auto justify-content-around'>

                                                    <button type="button" className=" col-5  btn btn-block  " id='EditProSaveBtn' ><span className='BtnsaveEditPro'>Save</span></button>



                                                    <button type="button" className=" col-5 btn  btn-block" id='EditProCancelBtn' data-bs-dismiss="modal" >Cancel</button>

                                                </div>

                                            </div>
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



export default EditProfile;
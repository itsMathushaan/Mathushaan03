import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../CSS/app.css";
import logoutImg from "../Images/undraw_Adventure_re_ncqp.png";

function SignOut() {
  const [show, setShow] = useState(false);  
  const handleClose = () => setShow(false);  
  const handleShow = () => setShow(true); 

  return (
    <>
      <Button  onClick={handleShow} id="logOut" > 
        Sign Out
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"    
        keyboard={false}
        centered
      >
        <Modal.Body>

            <div id="signout-mes">
              <img src={logoutImg} alt="signOut" className='logooutImg'/>
              <h6> Are you sure you want to sign out ?</h6>
              </div>
            

            <div className="d-flex pt-3 pb-0">
              <div className="btn-list col-6 text-center">
                <Button id="save" l className="btn">Proceed
                 {/* <a href="/Login.jsx" className="proceed" alt="C:\Users\cubo\non-technical\src\components\Login.jsx">
                  
                </a> */}
                </Button>
              </div>

              <div className="col-6 text-center">
                <Button id="close" className="btn" onClick={handleClose}>
                  Cancel
                </Button>
              </div>
            </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SignOut;
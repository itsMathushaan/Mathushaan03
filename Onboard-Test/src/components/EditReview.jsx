import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";
import '../App.css'
import { AiFillCheckCircle } from 'react-icons/ai';

function EditReview() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <Button variant="primary" onClick={handleShow}>
            Edit Review      
        </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Body className="p-5">

        <Form>
        <div className='d-flex justify-content-between'>

        <div className='profile-pic-cont'>
            <img src="https://static.vecteezy.com/system/resources/previews/010/662/140/original/man-employee-love-sign-hand-with-laptop-cartoon-icon-illustration-people-technology-flat-cartoon-concept-vector.jpg" className='profile-img'></img>
        </div>

        <div className='col-9 '>
            <h2 className=''>FullName<AiFillCheckCircle/></h2>
            <h6>Project Lead</h6>
        </div>

        </div>

        <div className='pt-4'>
            <Form.Group className="mb-3"controlId="exampleForm.ControlTextarea1">
              <Form.Control id="form-color" as="textarea" rows={5}/>
            </Form.Group>
        </div>
        </Form>        
          
          
        <div className="d-flex pt-3 pb-0">
            <div className="col-6 text-center">
              <Button id="save" className="btn" onClick={handleClose}>
                Save
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

export default EditReview;

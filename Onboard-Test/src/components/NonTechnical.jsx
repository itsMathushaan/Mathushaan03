import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import '../App.css'
import RatingSystem from "./rating/RatingSystem.js";

function NonTechnical() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    {/* popup button */}
      <Button variant="primary" onClick={handleShow}>
        Add new Skill
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
            <Form.Group className="mb-3" controlId="skill">
              <Form.Label>
                <h6>Skill</h6>
              </Form.Label>
              <Form.Control
                id="form-color"
                type="text"
                placeholder="Collaborativeness"
              />
              <div className="d-flex m-2">
                <div className="col-2">
                  <Form.Label>
                    <h6>Rating</h6>
                  </Form.Label>
                </div>
                <div className="col-10">
                  <RatingSystem></RatingSystem>
                </div>
              </div>
            </Form.Group>

            <Form.Group className="mb-3"controlId="exampleForm.ControlTextarea1">
              <Form.Label>
                <h6>Description</h6>
              </Form.Label>
              <Form.Control id="form-color" as="textarea" placeholder="Lorem ipsum" rows={5}/>
            </Form.Group>
          </Form>

{/* save and close button */}
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

export default NonTechnical;

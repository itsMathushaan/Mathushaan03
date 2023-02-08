import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import '../App.css'


function AddProject() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [val, setVal] = useState("");
  const projLead = [
    "Project Leader 01",
    "Project Leader 02",
    "Project Leader 03",
    "Project Leader 04",
    "Project Leader 05",
  ];
  const projName = [
    "Project Name 01",
    "Project Name 02",
    "Project Name 03",
    "Project Name 04",
    "Project Name 05",
  ];

  return (
    <>
        <Button variant="primary" onClick={handleShow}>
        Add Project      
        </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Body className="p-5">
          <div className="pb-4">
            <Form.Group>
              <Form.Label>
                <h6>Choose Project Name</h6>
              </Form.Label>
              <Form.Select value={val} onChange={(e) => setVal(e.target.value)}>
                {projName.map((opt) => (
                  <option>{opt}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </div>

          <div className="d-flex justify-content-between">
            <div className="col-5">
              <Form.Group className="mb-3">
                <Form.Select enable>
                  <option>Primary Project</option>
                  <option>secondary Project</option>
                </Form.Select>
              </Form.Group>
            </div>

            <div className="col-6">
              <Form.Group>
                <Form.Select
                  value={val}
                  onChange={(e) => setVal(e.target.value)}
                >
                  {projLead.map((opt) => (
                    <option>{opt}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </div>
          </div>

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

export default AddProject;

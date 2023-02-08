import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";

function ViewInventory() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [val, setVal] = useState("");
  const empID = [
    "EMP-1",
    "EMP-2",
    "EMP-3",
    "EMP-4",
    "EMP-5",
    "EMP-6",
    "EMP-7",
    "EMP-8",
  ];
  const deviceType = ["Laptop", "Keyboard", "Monitor", "Mouse"];

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Inventory
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body className="p-4">
          <Form className="col-12">
            <Form.Group className="p-4">
              <Form.Group className="d-flex">
                <div className="col-sm-3">
                  <Form.Label className="bold-txt">Device ID</Form.Label>
                  <Form.Control placeholder="001" disabled readOnly></Form.Control>
                </div>
                <div className="col-sm-9 ps-2">
                  <Form.Label className="bold-txt">Date Added</Form.Label>
                  <Form.Control type="date" disabled readOnly></Form.Control>
                </div>
              </Form.Group>
              <Form.Label className="bold-txt mt-3">Device Name</Form.Label>
              <Form.Control placeholder="Thinkpad" disabled readOnly></Form.Control>
              <Form.Group className="d-flex">
                <div className="col-sm-4">
                  <Form.Label className="bold-txt mt-3">Device Type</Form.Label>
                  <Form.Select disabled readOnly
                    value={val}
                    onChange={(e) => setVal(e.target.value)}
                  >
                    {deviceType.map((opt) => (
                      <option>{opt}</option>
                    ))}
                  </Form.Select>
                </div>
                <div className="col-sm-3 ps-2">
                  <Form.Label className="bold-txt mt-3">Available</Form.Label>
                  <Form.Select aria-label="Default select example" disabled readOnly>
                    <option>Yes</option>
                    <option value="1">No</option>
                  </Form.Select>
                </div>
                <div className="col-sm-5 ps-2">
                  <Form.Label className="bold-txt mt-3">Assigned To</Form.Label>
                  <Form.Select disabled readOnly
                    value={val}
                    onChange={(e) => setVal(e.target.value)}
                  >
                    {empID.map((opt) => (
                      <option>{opt}</option>
                    ))}
                  </Form.Select>
                </div>
              </Form.Group>

              <div className="pt-3">
              <Form.Group
                className="mb-3"
              >
                <Form.Label>
                  <h6>Description</h6>
                </Form.Label>
                <Form.Control disabled readOnly
                  as="textarea"
                  placeholder="8GB, 256GB"
                  rows={5}
                />
              </Form.Group>
              </div>

            </Form.Group>
          </Form>




              <Button id="close" className="btn float-end" onClick={handleClose}>
                Cancel
              </Button>
          
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ViewInventory;

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import { Form } from "react-bootstrap";
import "../comp/CategoryPopUp.css";


function CategoryPopUp() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="text-center" variant="primary" onClick={handleShow}>
        Add Category
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Title className="text-center">
          <h4>Category</h4>
        </Modal.Title>

        <Modal.Body className="show-grid">
          <Container>
            <Form className="d-flex justify-content-between">
              <Form.Group className="col-2">
                <Form.Control id="typeNumber" type="text1" placeholder="ID" />
              </Form.Group>
              <Form.Group className="col-10 ps-2">
                <Form.Control
                  type="text2"
                  placeholder="Enter new category name"
                />
              </Form.Group>
            </Form>
            <br></br>
          </Container>

          <div className="d-flex pt-3 pb-0">
            <div className="col-6 text-center">
              <Button className="button-save" onClick={handleClose}>
                Save
              </Button>
            </div>

            <div className="col-6 text-center">
              <Button className="button-cancel" onClick={handleClose}>
                Cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default CategoryPopUp;

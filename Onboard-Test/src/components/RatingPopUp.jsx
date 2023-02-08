import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { MDBInput } from "mdb-react-ui-kit";
// import "..comp/RatingPopUp.css";


function RatingPopUp() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    
      <Button className="text-center" variant="primary" onClick={handleShow}>
        Add Rating
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        
          <Modal.Title className="text-left"><h5>Tech Stack 01</h5></Modal.Title>
        
        <Modal.Body className="show-grid">
          <Container>
            <Row className="text-left">
              <Col xs={12} md={8}>
                MongoDB
              </Col>
              <Col xs={6} md={4} className="d-flex">
                <MDBInput id="typeNumber" type="text" />
                <div className="p-1"></div>
                <label>/10</label>
              </Col>
            </Row>
            <br></br>
            <Row className="text-left">
              <Col xs={12} md={8}>
                Express JS
              </Col>
              <Col xs={6} md={4} className="d-flex">
                <MDBInput id="typeNumber" type="text" />
                <div className="p-1"></div>
                <label>/10</label>
              </Col>
            </Row>
            <br></br>
            <Row className="text-left">
              <Col xs={12} md={8}>
                React
              </Col>
              <Col xs={6} md={4} className="d-flex">
                <MDBInput id="typeNumber" type="text" />
                <div className="p-1"></div>
                <label>/10</label>
              </Col>
            </Row>
            <br></br>
            <Row className="text-left">
              <Col xs={12} md={8}>
                NodeJS
              </Col>
              <Col xs={6} md={4} className="d-flex">
                <MDBInput id="typeNumber" type="text" />
                <div className="p-1"></div>
                <label>/10</label>
              </Col>
            </Row>
          </Container>

          <div className="d-flex pt-3 pb-0">
            <div className="col-6 text-center">
              <Button id="save" className="btn" onClick={handleClose}>
                Save Rating
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
export default RatingPopUp;

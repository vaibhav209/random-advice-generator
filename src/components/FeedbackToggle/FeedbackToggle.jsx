import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const FeedbackToggle = () => {
  const [show, setShow] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [email, setEmail] = useState('');

  const handleClose = () => {
    setShow(false);
    setSubmitSuccess(false);
  };

  const handleShow = () => {
    setShow(true);
  };

  const handleSubmit = () => {
    // Validate email address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      setSubmitSuccess(true);
      setShow(false);
    } else {
      alert('Please enter a valid email address.');
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <>
      <div style={{ position: 'absolute', left: '2%', bottom: '2%' }}>
        <Button variant="info" onClick={handleShow}>
          Share Feedback
        </Button>
      </div>
      {submitSuccess && (
        <div style={{ textAlign: 'center', marginTop: '10%' }}>
          <h4>Thank You!</h4>
        </div>
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Feedback</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                value={email}
                onChange={handleEmailChange}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Write Comment</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit} disabled={!email}>
            Submit Feedback
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FeedbackToggle;

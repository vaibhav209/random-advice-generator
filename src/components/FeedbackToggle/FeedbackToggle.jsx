import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Toast from 'react-bootstrap/Toast';

const FeedbackToggle = () => {
  const [show, setShow] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [email, setEmail] = useState('');

  const handleClose = () => {
    setShow(false);
    setShowToast(false);
  };

  const handleShow = () => {
    setShow(true);
  };

  const handleSubmit = () => {
    // Validate email address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      setShow(false);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000); 
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
              <Form.Control as="textarea" rows={3} placeholder="Write Comment" />
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
      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        delay={3000}
        autohide
        style={{
          position: 'fixed',
          bottom: 20,
          left: 20,
          zIndex: 1,
          backgroundColor:'#42ba96',
          fontWeight:'600',
          color:'white'
        }}
      >
        <Toast.Body>Your feedback has been submitted. Thank you!</Toast.Body>
      </Toast>
    </>
  );
};

export default FeedbackToggle;

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {Form , Button, Container, Row, Col, Card} from 'react-bootstrap';


import "./login-view.scss";

export function LoginView(props) {
  const [name, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, password);
    // Send a request to the server for authentication, then call props.onLoggedIn(username)
    props.onLoggedIn(name);
  };


  return (
    <Container ClassName="container">
      <Row>
        <Col></Col>
          <Col>
            <Card className='moviecard' style={{ marginTop: 100, marginBottom : 50, width: '300px'}}>
              <Card.Body>
                <Card.Title style={{textAlign: 'center',fontSize: '1.5rem' }}>Please Login!</Card.Title>
                <Form ClassName="form">
                  <Form.Group className="mb-3" controlId="formUsername">
                  <Form.Label>Username:</Form.Label>
                    <Form.Control type="text" onChange={e => setUsername(e.target.value)} required placeholder='Please enter your name'/>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" onChange={e => setPassword(e.target.value)} required  placeholder='Please enter your password'/>
                  </Form.Group>
                  <Button variant="primary" type="submit" onClick={handleSubmit}>Submit</Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        <Col></Col>
      </Row>
    </Container>

  );
}

LoginView.Prototype = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
  }),
  onLoggedIn: PropTypes.func.isRequired
};
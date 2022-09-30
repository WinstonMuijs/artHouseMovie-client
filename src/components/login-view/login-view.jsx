import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {Form , Button, Container, Row, Col, Card} from 'react-bootstrap';
import axios from 'axios';


import "./login-view.scss";

export function LoginView(props) {
  const [name, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [nameErr, setUsernameErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');

  const validate = () => {
    let isReq = true;
    if(!name) {
      setUsernameErr("Username Required");
      isReq = false;
    }else if (name.length < 5) {
      setUsernameErr("Username must be at least 5 characters long");
      isReq = false;
    }
    if(!password) {
      setPasswordErr("Password Required");
      isReq = false;
    }else if (password.length < 6) {
      setPasswordErr("Password must be at least 6 characters long");
      isReq = false;
    }
    return isReq;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  /* Send a request to the server for authentication */
    const isReq = validate();
    if(isReq) {
      axios.post('https://arthousemovie.herokuapp.com/login', {
      name: name,
      password: password
      })
      .then(response => {
        const data = response.data;
        props.onLoggedIn(data);
      })
      .catch(e => {
        console.log('no such user')
      });
    }
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
                    {nameErr && < p>{nameErr}</p>}
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" onChange={e => setPassword(e.target.value)} required  placeholder='Please enter your password'/>
                    {passwordErr && < p>{passwordErr}</p>}
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
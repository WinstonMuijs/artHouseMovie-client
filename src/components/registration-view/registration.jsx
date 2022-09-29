import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Form, Button, FormGroup, Container, Card, CardGroup, Col , Row} from 'react-bootstrap';



export function RegistrationView(props) {
    const [ name, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ email, setEmail] = useState('');
    const [ birthday, setBirthday] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, password, email, birthday);
        props.onLoggedIn(name);
    };

    return (
        <Container>
          <Row>
            <Col>
              <CardGroup>
                <Card>
                <Card.Body>
                  <Card.Title>Please Register</Card.Title>
                    <Form>
                      <FormGroup>
                        <Form.Label>Username:</Form.Label> 
                        <Form.Control type="text" value={name} onChange={e => setUsername(e.target.value)} required placeholder='Enter a username' />
                      </FormGroup>
                     <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" onChange={e => setPassword(e.target.value)} required minLength="8" placeholder='Please enter a password with 8 or more characters'/>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email:</Form.Label>
                       <Form.Control type="email" onChange={e => setEmail(e.target.value)} required placeholder='please enter your email'/>
                     </Form.Group>
                      <Form.Group className="mb-3" controlId="formBirthday">
                        <Form.Label>Birthday:</Form.Label>
                        <Form.Control type="date" onChange={e => setBirthday(e.target.value)} required placeholder='Please enter your Birthday' />
                      </Form.Group>
                      <Button variant="primary" type="submit" onClick={handleSubmit}>Submit</Button>
                    </Form>
                  </Card.Body>
                </Card>
              </CardGroup>
              
            </Col>
          </Row>
        </Container>
        
    );
}

RegistrationView.propTypes = {
  register: PropTypes.shape({
    name: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    birthday: PropTypes.string,
  }),
};
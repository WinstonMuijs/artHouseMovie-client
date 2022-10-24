import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Form, Button, FormGroup, Container, Card, CardGroup, Col , Row} from 'react-bootstrap';
import axios from 'axios';
import { connect } from 'react-redux';
import { createUser} from '../../actions/actions';



export function RegistrationView() {

  const [name, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');

  const [nameErr, setUsernameErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [birthdayErr, setBirthdayErr] = useState('');

  // Validate user inputs
  const validate = () => {
    let isReq = true;
    if (!name) {
      setUsernameErr('Username required');
      isReq = false;
    } else if (name.length < 5) {
      setUsernameErr('Username must be 5 or more characters');
      isReq = false;
    }
    if (!password) {
      setPasswordErr('Password required');
      isReq = false;
    } else if (password.length < 6) {
      setPasswordErr('Password must be 6 or more characters');
      isReq = false;
    }
    if (!email) {
      setEmailErr('Email required');
      isReq = false;
    } else if (email.indexOf('@') === -1) {
      setEmailErr('Email must be a valid email address');
      isReq = false;
    }

    return isReq;
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch({type: 'CREATE_USER'});

    const isReq = validate();
    if (isReq) {
      axios
        .post("https://glacial-ocean-19756.herokuapp.com/users", 
        {
          name: name,
          password: password,
          email: email,
          birthday: birthday,
        }
        )
        .then((response) => {
          const data = response.data;
          console.log(data);
          alert("Registration successful, please login!");
          window.open("/", "_self"); // the second argument is necessary so that the page will open in the current tab
        })
        .catch((e) => {
          console.error(e);
          alert("unable to register");
        });
    }
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
                        <Form.Control type="text" value={name} onChange={(e) => setUsername(e.target.value)} required placeholder='Enter a username' />
                        {nameErr && < p>{nameErr}</p>}
                      </FormGroup>
                     <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength="6" placeholder='Please enter a password with 6 or more characters'/>
                        {passwordErr && <p>{passwordErr}</p>}
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email:</Form.Label>
                       <Form.Control type="email" 
                       value={email} onChange={(e) => setEmail(e.target.value)} required placeholder='please enter your email'/>
                       {emailErr && < p>{emailErr}</p>}
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBirthday">
                        <Form.Label>Birthday:</Form.Label>
                        <Form.Control type="date" 
                        value={birthday}
                        onChange={(e) => setBirthday(e.target.value)} placeholder='Please enter your Birthday' />
                        {birthdayErr && <p>{birthdayErr}</p>}
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
    birthday: PropTypes.date
  }),
};

const mapStateToProps = state => ({
  name: state.name,
  password: state.password,
  email: state.email,
  birthday: state.birthday
})

export default connect(mapStateToProps, {createUser})(RegistrationView);
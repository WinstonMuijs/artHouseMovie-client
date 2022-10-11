import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Form, Button, FormGroup, Container, Card, CardGroup, Col , Row} from 'react-bootstrap';
import axios from 'axios';



export function RegistrationView() {
    const [ name, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ email, setEmail] = useState('');
    const [ birthday, setBirthday] = useState('');
    const[values, setValues] = useState({
      nameErr:"",
      passwordErr: "",
      emailErr: ""
    });

    const validate = () => {
      let isReq = true;

      if (!name) {
        setValues({ ...values, nameErr: "Username Required" });
        isReq = false;
      } else if (name.length < 5) {
          setValues({
          ...values,
          nameErr: "Username must be 5 characters long",
        });
        isReq = false;
      }
      if (!password) {
        setValues({ ...values, passwordErr: "Password Required" });
        isReq = false;
      } else if (password.length < 6) {
       setValues({
         ...values,
          passwordErr: "Password must be 6 characters long",
        });
        isReq = false;
      }
      if (!email) {
        setValues({ ...values, emailErr: "Email Required" });
       isReq = false;
      } else if (email.indexOf("@") === -1) {
        setValues({ ...values, emailErr: "Email is invalid" });
        isReq = false;
     }
      return isReq;
   };


  const handleSubmit = (e) => {
    e.preventDefault();
    const isReq = validate();
    if (isReq) {
      axios
        .post("https://arthousmovie.herokuapp.com/users", {
          name: name,
          password: password,
          email: email,
          birthday: birthday,
        })
        .then((response) => {
          const data = response.data;
          console.log(data);
          alert("Registration successful, please login!");
          window.open("/", "_self"); // the second argument is necessary so that the page will open in the current tab
        })
        .catch((response) => {
          console.error(response);
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
                        <Form.Control type="text" value={name} onChange={e => setUsername(e.target.value)} required placeholder='Enter a username' />
                        {values.nameErr && < p>{values.nameErr}</p>}
                      </FormGroup>
                     <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" onChange={e => setPassword(e.target.value)} required minLength="8" placeholder='Please enter a password with 8 or more characters'/>
                        {values.passwordErr && < p>{values.passwordErr}</p>}
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email:</Form.Label>
                       <Form.Control type="email" onChange={e => setEmail(e.target.value)} required placeholder='please enter your email'/>
                       {values.emailErr && < p>{values.emailErr}</p>}
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBirthday">
                        <Form.Label>Birthday:</Form.Label>
                        <Form.Control type="date" onChange={e => setBirthday(e.target.value)} placeholder='Please enter your Birthday' />
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
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    birthday: PropTypes.date
  }),
};
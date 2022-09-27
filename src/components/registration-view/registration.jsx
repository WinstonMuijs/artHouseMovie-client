import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Form, Button, FormGroup} from 'react-bootstrap';


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
        <Form>
          <FormGroup>
            <Form.Label>Username:</Form.Label> 
            <Form.Control type="text" value={name} onChange={e => setUsername(e.target.value)} required
            placeholder='Enter a username' />
          </FormGroup>
          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control type="password" onChange={e => setPassword(e.target.value)} required minLength="8" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" onChange={e => setEmail(e.target.value)} required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBirthday">
            <Form.Label>Birthday:</Form.Label>
            <Form.Control type="date" onChange={e => setBirthday(e.target.value)} required />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleSubmit}>Submit</Button>
        </Form>
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
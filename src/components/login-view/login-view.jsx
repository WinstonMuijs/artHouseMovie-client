import PropTypes from 'prop-types';
import React, { useState } from 'react';
import './login-view.scss'

export function LoginView(props) {
  const [ name, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, password);
    /* Send a request to the server for authentication */
    /* then call props.onLoggedIn(username) */
    props.onLoggedIn(name);
  };

  return (
    <form>
      <label>
        Username:
        <input type="text" value={name} onChange={e => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <button type="submit" onClick={handleSubmit}>Submit</button>
      <button type='button' onClick={handleSubmit}>Register</button>
    </form>
  );
}

LoginView.Prototype = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
  }),
  onLoggedIn: PropTypes.func.isRequired
};
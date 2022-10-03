import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { Link } from "react-router-dom";
import { CardImg } from 'react-bootstrap';

export class DirectorView extends React.Component {
  render() {
    const { director } = this.props;

    return (
      <Card>
      <Card.Body>
          <Card.Title>{director._id}</Card.Title>
          <Card.Text>{director.name}</Card.Text>
          <Card.Text>{director.bio}</Card.Text>
          <Card.Text>{director.birthyear}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

DirectorView.PropTypes = {
  director: PropTypes.shape({
    _id: PropTypes.number,
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    birthyear: PropTypes.date.isRequired,
  }).isRequired
};

import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { Link } from 'react-router-dom';

export class DirectorCard extends React.Component {
  render() {
    const { director } = this.props;

    return (
      <Card>
      <Card.Body>
          <Card.Title>{director._id}</Card.Title>
          <Card.Text>{director.name}</Card.Text>
          <Card.Text>{director.bio}</Card.Text>
          <Card.Text>{director.birthyear}</Card.Text>
          <Link to={`/directors/${director._id}`}>
            <Button variant="link">Open</Button>
          </Link>
        </Card.Body>
      </Card>
    );
  }
}

DirectorCard.PropTypes = {
  director: PropTypes.shape({
    _id: PropTypes.number,
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    birthyear: PropTypes.string,
    deathyear: PropTypes.string
  }).isRequired
};

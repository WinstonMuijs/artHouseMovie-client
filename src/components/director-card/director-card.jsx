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
          <Card.Title>Director:</Card.Title>
          <Card.Text>{director._id}</Card.Text>
          <Card.Text className='fullname'>{director.name}</Card.Text>
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

DirectorCard.propTypes = {
  director: PropTypes.shape({
    name: PropTypes.string,
    bio: PropTypes.string,
    birthyear: PropTypes.string,
    deathyear: PropTypes.string
  }).isRequired
};

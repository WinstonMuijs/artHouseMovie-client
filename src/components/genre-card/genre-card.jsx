import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { Link } from 'react-router-dom';

export class GenreCard extends React.Component {
  render() {
    const { genre } = this.props;

    return (
      <Card>
      <Card.Body>
          <Card.Title>Genre:</Card.Title>
          <Card.Text>{genre._id}</Card.Text>
          <Card.Text>{genre.name}</Card.Text>
          <Card.Text>{genre.description}</Card.Text>
          <Link to={`/genres/${genre._id}`}>
            <Button variant="link">Open</Button>
          </Link>
        </Card.Body>
      </Card>
    );
  }
}

GenreCard.propTypes = {
  genre: PropTypes.shape({
    _id: PropTypes.number,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
};

import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { Link } from 'react-router-dom';

export class GenreCard extends React.Component {
  render() {
    const { genre, onBackClick } = this.props;

    return (
      <Card>
      <Card.Body>
          <Card.Title>Genre:</Card.Title>
          <Card.Text>{genre.name}</Card.Text>
          <Card.Text>{genre.description}</Card.Text>
          <Button className='btn' onClick={() => { onBackClick(); }}>Back</Button>
        </Card.Body>
      </Card>
    );
  }
}

GenreCard.propTypes = {
  genre: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
};

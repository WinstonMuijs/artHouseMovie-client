import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { Link } from "react-router-dom";
import { CardImg } from 'react-bootstrap';

export class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <Card className='moviecard'>
        <Card.Body className='moviebody'>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          <Link to={`/movies/${movie._id}`}>
            <Button variant="link"><CardImg src={movie.imageURL} crossOrigin={'anonymous'}
                /></Button>
          </Link>
        </Card.Body>
      </Card>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
  }).isRequired
};
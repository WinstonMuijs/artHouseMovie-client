import React from 'react';
import PropTypes from 'prop-types';
import {Button, Row, Col, Container} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export class MovieCard extends React.Component {
  render() {
    const { movie, onMovieClick } = this.props;

    return (
      <Container>
      <Row>
          <Col>
          <Card>
            <Card.Img variant="top" src={movie.ImagePath} />
            <Card.Body>
              <Card.Title>{movie.Title}</Card.Title>
              <Card.Text>{movie.Description}</Card.Text>
              <Button onClick={() => onMovieClick(movie)} variant="link">{movie.title}</Button>
            </Card.Body>
          </Card>
         </Col>
      </Row>
     </Container> 
    );
  }
}

MovieCard.PropTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
    genre: PropTypes.number.isRequired,
    director: PropTypes.number.isRequired
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};
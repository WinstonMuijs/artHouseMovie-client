import React from 'react';
import PropTypes from 'prop-types';
import {Container, Row, Col, Button} from 'react-bootstrap';

import './movie-view.scss';

import {Link} from "react-router-dom";


export class MovieView extends React.Component {

    render() {
        const { movie, director, onBackClick } = this.props;

        return (
        <Container className="movie-view">
         <Row>
         <Col></Col>
            <Col className='movie-poster'>
                <img src={movie.imageURL} crossOrigin={'anonymous'}
                />
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col className='movie-title'>
                <span className='label'>Title:</span>
                <span className='value'>{movie.title}</span>
            </Col>
          </Row>
          <Row>
            <Col className='movie-description'>
                <span className='label'>Description:</span>
                <span className='value'>{movie.description}</span>
                </Col> 
            </Row>
            <Row>
              <Col className='movie-genre'>
                <span className='label'>Genre:</span>
                <span className='value'>{movie.genre}</span>
              </Col>
            </Row>
            <Row>
              <Col className='movie-director'>
                <Link to={`/directors`}>
                  <Button variant="link">Director</Button>
                </Link>
              </Col>
            </Row>

            <Row>
              <Col>
              <Button className='btn' onClick={() => { onBackClick(null); }}>Back</Button>
              </Col>
            </Row>
        </Container>
        );
      }
}


MovieView.PropTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
    genre: PropTypes.number.isRequired,
    director: PropTypes.number.isRequired
  }).isRequired
};
import React from 'react';
import PropTypes from 'prop-types';
import {Container, Row, Col, Button} from 'react-bootstrap';



import {Link} from "react-router-dom";


export class DirectorView extends React.Component {

    render() {
        const { director, onBackClick } = this.props;

        return (
        <Container className="movie-view">
         <Row>
         <Col></Col>
            <Col className='movie-poster'>
                <span>{director._id}</span>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col className='movie-title'>
                <span className='label'>Name:</span>
                <span className='value'>{director.name}</span>
            </Col>
          </Row>
          <Row>
            <Col className='movie-description'>
                <span className='label'>Bio:</span>
                <span className='value'>{director.bio}</span>
                </Col> 
            </Row>
            <Row>
              <Col className='movie-genre'>
                <span className='label'>Birthyear:</span>
                <span className='value'>{director.birthyear}</span>
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


DirectorView.PropTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
    genre: PropTypes.number.isRequired,
    director: PropTypes.number.isRequired
  }).isRequired
};
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
              <Col className='movie-genre'>
                <span className='label'>Deathyear:</span>
                <span className='value'>{director.deathyear}</span>
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
  director: PropTypes.shape({
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    birtheyear: PropTypes.string.isRequired,
    deathyear: PropTypes.string.isRequired
  }).isRequired
};
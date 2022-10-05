import React from 'react';
import PropTypes from 'prop-types';
import {Container, Row, Col, Button} from 'react-bootstrap';


export class GenreView extends React.Component {

    render() {
        const { genre, onBackClick } = this.props;

        return (
        <Container className="movie-view">
         <Row>
         <Col></Col>
            <Col className='genre-id'>
                <span>{genre._id}</span>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col className='genre-title'>
                <span className='label'>Name genre:</span>
                <span className='value'>{genre.name}</span>
            </Col>
          </Row>
          <Row>
            <Col className='genre-description'>
                <span className='label'>Description:</span>
                <span className='value'>{genre.description}</span>
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


GenreView.PropTypes = {
  genre: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
};
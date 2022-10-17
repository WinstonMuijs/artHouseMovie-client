import React from 'react';
import PropTypes from 'prop-types';
import {Container, Card, Button} from 'react-bootstrap';


export class GenreView extends React.Component {

    render() {
       const {genre, onBackClick, movie} = this.props;
       return (
    
        <Container>
        <Card className="genre-view">
          <Card.Header className="genre-view-header">Genre</Card.Header>
          <Card.Body className="genre-view-title">{genre.name}</Card.Body>
          <Card.Body>{genre.description}</Card.Body>
          <Card.Footer>
            <Button
              className="genre-view-button"
              onClick={() => {
                onBackClick();
              }}
            >
              Back
            </Button>
          </Card.Footer>
        </Card>
      </Container>
       );
    }
}
GenreView.proptypes = {
genre: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}).isRequired,
};
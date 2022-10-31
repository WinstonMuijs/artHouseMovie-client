import React from 'react';
import PropTypes from 'prop-types';
import {Container, Card, Button} from 'react-bootstrap';

// import './genre-view.scss';

export class GenreView extends React.Component {

    render() {
       const { genre, onBackClick} = this.props;
       console.log(genre.name);
       return (
    
        <Container>
        <Card className="genre-view">
          <Card.Header className="genre-view">Genre</Card.Header>
          <Card.Body className="genre-name">{genre.name}</Card.Body>
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
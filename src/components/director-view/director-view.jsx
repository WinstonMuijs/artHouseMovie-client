import React from 'react';
import PropTypes from 'prop-types';
import {Container, Card, Button} from 'react-bootstrap';


export class DirectorView extends React.Component {

    render() {
       const { director, onBackClick} = this.props;
       return (
    
        <Container>
        <Card className="director-view">
          <Card.Header className="director-view-header">Director</Card.Header>
          <Card.Body className="director-view-name">{director.name}</Card.Body>
          <Card.Body>Birth Year: {director.birthyear}</Card.Body>
          <Card.Body>{director.bio}</Card.Body>
          <Card.Footer>
            <Button
              className="director-view-button"
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
DirectorView.proptypes = {
director: PropTypes.shape({
    name: PropTypes.string.isRequired,
    bio: PropTypes.string,
    birthyear: PropTypes.string,
}).isRequired,
};
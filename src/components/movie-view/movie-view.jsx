import React from 'react'; 
import { Container, Button, Card } from 'react-bootstrap';
import axios from 'axios';
import { connect} from 'react-redux';
import { SET_FAVMOVIE} from "../../actions/actions";

import { Link } from "react-router-dom";



export class MovieView extends React.Component {

    constructor() {
        super();
        this.state= {
          // movies : [],
        };
    }

    componentDidMount() {
      let accessToken = localStorage.getItem('token');
      if (accessToken !== null) {
        this.setState({
          user: localStorage.getItem('user')
        });
        this.getMovies(accessToken);
      }
    }

    getMovies(token) {
      console.log(token);
      axios.get('https://glacial-ocean-19756.herokuapp.com/movies', {
        headers: { Authorization:`Bearer ${token}`}
      })
      .then(response => {
    // Assign the result to the state
        this.setState({
          movies: response.data
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    addFavoriteMovie(e) {
        // const { movie } = this.props;

        e.preventDefault();

        this.props.dispatch({type: 'SET_FAVMOVIE'});

        axios
          .post(
            `https://glacial-ocean-19756.herokuapp.com/users/${localStorage.getItem(
              "user"
            )}/movies/${movie._id}`,
            { name: localStorage.getItem("user") },
            {
              headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
            }
          )
          .then((res) => {
            alert(`${movie.title} successfully added to your favorites`);
          })
         
          // .then((res) => {
          //   document.location.reload(true);
          // })
          .catch((error) => {
            alert(`${movie.title} was not added to favorites.` + error);
          });
    }

    render() {
        const { movie, onBackClick } = this.props;

        return (
        <Container>
        <Card className="movie-view">
         <Card.Header>
                <Card.Img src={movie.imageURL} crossOrigin={'anonymous'}
                />
          </Card.Header>
          <Card.Body className='movie-view'>
                <h1 className='label'>{movie.title}</h1>
                <span className='value'>{movie.title}</span>
          </Card.Body>
          <Card.Body className='movie-view'>
                <span className='label'>Description : </span>
                <span className='value'>{movie.description}</span>
          </Card.Body>
          <Card.Body className='movie-view'>
                <Link to={`/genres/${movie.genre.name}`}>
                  <Button className='btn'>Genre</Button>
                </Link>
          </Card.Body>
          <Card.Body className='movie-director'>
                <Link to={`/directors/${movie.director.name}`}>
                  <Button className='btn'>Director</Button>
                </Link>
          </Card.Body>
          <Card.Footer>
              <Button className='btn' onClick={() => { onBackClick(); }}>Back</Button>
              <Button style={{marginLeft:"200px"}} variant="warning" className="favorite-button" value={movie._id} onClick={(e)=> this.addFavoriteMovie(e, /*movie*/)}>Add to Favorites</Button>
          </Card.Footer>
         </Card>
        </Container>
        );
      }
}

const mapStateToProps = state => ({
  favoriteMovies: state.favoriteMovies
});

export default connect(mapStateToProps)(MovieView);
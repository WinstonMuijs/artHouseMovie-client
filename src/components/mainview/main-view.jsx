import React from 'react';
import axios from 'axios';
import { Row, Col, Container} from 'react-bootstrap';


import { RegistrationView } from '../registration-view/registration';
import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { Navbar } from '../navbar/navbar';



export class MainView extends React.Component {

    constructor(){
        super();
        this.state = {
            movies: [],
            selectedMovie: null,
            user: null
        }
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
      axios.get('https://arthousemovie.herokuapp.com/movies', {
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

    setSelectedMovie(newSelectedMovie) {
      this.setState({
        selectedMovie: newSelectedMovie
      });
    }

    onLoggedIn(authData) {
      console.log(authData);
      this.setState({
        user: authData.user.name
      });

      localStorage.setItem('token', authData.token);
      localStorage.setItem('user', authData.user.name);
      this.getMovies(authData.token);
    }

    onLoggedOut() {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      this.setState({
        user: null
      });
    }
  
  render() {
     const { movies, selectedMovie, user } = this.state;

     if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;


     if (movies.length === 0) return <div className="main-view" />;

     return (
       <>
       <Container>
        <Navbar/>
         <Row className="main-view justify-content-md-center">
           {selectedMovie
             ? (
               <Col md={8}>
                 <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); } } />
               </Col>
             )
             : movies.map(movie => (
               <Col  md={5}>
                 <MovieCard key={movie._id} movie={movie} onMovieClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); } } />
               </Col>
             ))}
         </Row>
         </Container>
        </>
      
    );
  }
}


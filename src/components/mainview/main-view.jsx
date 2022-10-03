import React from 'react';
import axios from 'axios';
import { Row, Col} from 'react-bootstrap';

import { BrowserRouter as Router, Route } from "react-router-dom";


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

    getDirectors(token) {
      axios.get('https://arthousemovie.herokuapp.com/directors', {
        headers: { Authorization:`Bearer ${token}`}
      })
      .then(response => {
    // Assign the result to the state
        this.setState({
          directors: response.data
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    getGenres(token) {
      axios.get('https://arthousemovie.herokuapp.com/genres', {
        headers: { Authorization:`Bearer ${token}`}
      })
      .then(response => {
    // Assign the result to the state
        this.setState({
          genres: response.data
        });
      })
      .catch(function (error) {
        console.log(error);
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
      this.getDirectors(authData.token);
    }

   
  
  render() {
    const { movies,directors, user } = this.state;

    if (!user) return <Row>
      <Col>
        <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
      </Col>
    </Row>
    if (movies.length === 0) return <div className="main-view" />;

    return (
      <Router>
      <Navbar/>
        <Row className="main-view justify-content-md-center">
          <Route exact path="/" render={() => {
            return movies.map(m => (
              <Col md={5} key={m._id}>
                <MovieCard movie={m} />
              </Col>
            ))
          }} />
          <Route path="/movies/:movieId" render={({ match }) => {
            return <Col md={8}>
              <MovieView movie={movies.find(m => m._id == match.params.movieId)} />
            </Col>
          }} />

          <Route path="/genres/:genreId" render={({ match }) => {
            return <Col md={8}>
              <GenreView movie={movies.find(m => m.genre._id == match.params.genreId)} />
            </Col>
          }} />

        </Row>
      </Router>
    );
  }
}


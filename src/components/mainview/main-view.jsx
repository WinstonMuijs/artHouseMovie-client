import React from 'react';
import axios from 'axios';
import { Row, Col} from 'react-bootstrap';

import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";


import { RegistrationView } from '../registration-view/registration';
import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { Navbar } from '../navbar/navbar';
import { DirectorCard } from '../director-card/director-card'
import { DirectorView } from '../director-view/director-view';
import { GenreCard } from '../genre-card/genre-card';
import { GenreView } from '../genre-view/genre-view';
import { ProfileView } from '../profile-view/profile-view'






export class MainView extends React.Component {

    constructor(){
        super();
        this.state = {
            movies: [],
            directors: [],
            genres: [],
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
        this.getDirectors(accessToken);
        this.getGenres(accessToken);
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
        console.log("Data has been received")
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
      this.getGenres(authData.token);
    }

    onLoggedOut() {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      this.setState({
        user: null,
      });
      window.open("/", "_self");
    }

   
  
  render() {
    const { movies, directors, genres, user } = this.state;


    return (
      <Router>
      <Navbar user={user}/>
        <Row className="main-view justify-content-md-center">
          
          <Route exact path="/" render={() => {
              if (!user)
                return (
                  <Col>
                    <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                  </Col>
                  );
              if (movies.length === 0) return;
              <div className="main-view" />;

              return movies.map((m) => (
                <Col md={3} key={m._id}>
                  <MovieCard movie={m} />
                </Col>
              ));
            }}
            />
          
          <Route
            path="/register"
            render={() => {
              if (user) return <Redirect to="/" />;
              return <RegistrationView />;
              }}
            />


          <Route path="/movies/:movieId" render={({ match, history }) => {

            if (!user)
              return (
                <Col>
                  <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                </Col>
              );

            if(!movies) return <div className="main-view"/>;

            return <Col md={8}>
              <MovieView movie={movies.find(m => m._id == match.params.movieId)} onBackClick={() => history.goBack()} />
            </Col>
          }} />

          <Route path="/directors/:id" render={({ match, history }) => {
            if (!user)
              return (
                <Col>
                  <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                </Col>
              );

            if(!movies) return <div className="main-view"/>;

            return <DirectorCard director={directors.find(d => d._id == match.params.id)} onBackClick={() => history.goBack()}/>
          }}/>

          <Route path="/genres/:id" render={({ match, history }) => {
            if (!user)
              return (
                <Col>
                  <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                </Col>
              );

            if(!movies) return <div className="main-view"/>;

            return <GenreCard genre={genres.find(g => g._id == match.params.id)} onBackClick={() => history.goBack()}/>
          }}/>

          {/* <Route path={`/users/${user}`} render={({history}) => {
            if (!user) return <Redirect to="/" />
            return <Col>
            <ProfileView user={user} onBackClick={() => history.goBack()}/>
            </Col>
          }} /> */}

          <Route path='/users/:name' render={({history, match}) => {
            if (!user) 
            return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
            
            if (movies.length === 0) return <div className="main-view"/>

            return <ProfileView history={history} movies={movies} user={user === match.params.name} />
            }} 
            
            />

        </Row>
      </Router>
    );
  }
}
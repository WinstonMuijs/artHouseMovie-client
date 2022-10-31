import React from 'react';
import axios from 'axios';
import { Row, Col} from 'react-bootstrap';
import { connect } from 'react-redux';

import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";

import { setMovies } from '../../actions/actions';

import MoviesList from '../movies-list/movies-list'

import { RegistrationView } from '../registration-view/registration';
import { LoginView } from '../login-view/login-view';
import { MovieView } from '../movie-view/movie-view';
import { Navbar } from '../navbar/navbar';
import { DirectorView } from '../director-view/director-view';
import { GenreView } from '../genre-view/genre-view';
import { ProfileView } from '../profile-view/profile-view'







class MainView extends React.Component {

    constructor(){
        super();
        this.state = {
            user: null
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
        this.props.setMovies(response.data);
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
    let { movies } = this.props;
    let { user } = this.state;


    return (
      <Router>
      <Navbar user={user} />
        <Row className="main-view justify-content-md-center">
          
          <Route exact path="/" render={() => {
              if (!user)
                return (
                  <Col>
                    <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
                  </Col>
                  );
              if (movies.length === 0) return;
              <div className="main-view" />;

              return  <MoviesList movies={ movies } />;
                
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
            if (movies.length === 0) return;
              <div className="main-view" />;
            return <Col md={8}>
              <MovieView movie={movies.find(m => m._id === match.params.movieId)} onBackClick={() => history.goBack()} />
            </Col>
          }} />

          <Route path="/directors/:name" render={({ match, history }) => {
            if (!user)
              return (
                <Col>
                  <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                </Col>
              );

            if(!movies) return <div className="main-view"/>;

            return <DirectorView director={movies.find(m => m.director.name === match.params.name).director} onBackClick={() => history.goBack()}/>
          }}/>

          <Route path="/genres/:name" render={({ match, history }) => {
            if (!user)
              return (
                <Col>
                  <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                </Col>
              );

            if(!movies) return <div className="main-view"/>;

            return <GenreView genre={movies.find(m => m.genre.name === match.params.name).genre} onBackClick={() => history.goBack()}/>
          }}/>


          <Route path='/users/:name' render={({history, match}) => {
            if (!user) 
            return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
            
            if (movies.length === 0) return <div className="main-view"/>

            return <ProfileView history={history} movies={movies} user={user === match.params.name} onBackClick={() => history.goBack()}/>
            }} 
            
            />

        </Row>
      </Router>
    );
  }
}


let mapStateToProps = state => {
  return { movies: state.movies }
}

export default connect(mapStateToProps, { setMovies } )(MainView);
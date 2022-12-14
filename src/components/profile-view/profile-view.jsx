import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// Import React Bootstrap Components
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

// import { connect } from 'react-redux';
// import { createUser, updateUser, deleteUser, removeFavmovie} from '../../actions/actions'

export class ProfileView extends React.Component {
  constructor() {
    super();
    this.state = {
      name: null,
      password: null,
      email: null,
      birthday: null,
      favoriteMovies: [],
    };
  }

  componentDidMount() {
    const accessToken = localStorage.getItem("token");
    this.getUser(accessToken);
  }

  removeFavorite = (e, movie) => {
    e.preventDefault();
    const name = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    console.log(this.props);
    axios
      .delete(
        `https://glacial-ocean-19756.herokuapp.com/users/${name}/movies/${movie._id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((response) => {
        console.log(response);
        alert("Movie was removed from favorites.");
        this.componentDidMount();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  onLoggedOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.setState({
      user: null,
    });
    window.open("/", "_self");
  }

  getUser = (token) => {
    const name = localStorage.getItem('user');
    axios
      .get(`https://glacial-ocean-19756.herokuapp.com/users/${name}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        this.setState({
          name: response.data.name,
          password: response.data.password,
          email: response.data.email,
          birthday: response.data.birthday,
          favoriteMovies: response.data.favoriteMovies,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  updateUser = (e) => {
    e.preventDefault();
    const name = localStorage.getItem('user');
    const token = localStorage.getItem('token');

    // this.props.dispatch({type: 'UPDATE_USER'});

    axios
      .put(
        `https://glacial-ocean-19756.herokuapp.com/users/${name}`,
        {
          name: this.state.name,
          password: this.state.password,
          email: this.state.email,
          birthday: this.state.birthday,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        this.setState({
          name: response.data.name,
          password: response.data.password,
          email: response.data.email,
          birthday: response.data.birthday,
        });

        localStorage.setItem("user", this.state.name);
        const data = response.data;
        console.log(data);
        alert("Profile is updated!");
        window.open(`/users/${name}`, "_self");
      })
      .catch(function (error) {
        console.log(error);
        alert("Profile is Not updated!");
      });
  };

  // Deregister
  onDeleteUser() {
    const name = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    // this.props.dispatch({type: 'DELETE_USER'});    


    axios
      .delete(`https://glacial-ocean-19756.herokuapp.com/users/${name}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
        alert("Profile has been deleted!");
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        window.open(`/`, "_self");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // Set user values
  setUsername(value) {
    this.setState({
      name: value,
    });
    this.name = value;
  }

  setPassword(value) {
    this.setState({
      password: value,
    });
    this.password = value;
  }

  setEmail(value) {
    this.setState({
      email: value,
    });
    this.email = value;
  }

  setBirthday(value) {
    this.setState({
      birthday: value,
    });
    this.birthday = value;
  }

  render() {
    const { favoriteMovies, name, password, email, birthday} = this.state;
    const favoriteMovieObjects = this.props.movies.filter(movie => favoriteMovies.includes(movie._id));
    return (
      <Container>
        <Row>
          <Col sm={12} md={12}>
            <Card className="user-profile">
              <Card.Header>User Profile</Card.Header>
              <Card.Body>
                <div>
                  <p>Name: {name}</p>
                  <p>Email: {email}</p>
                  <p>Birthday: {birthday}</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
          <Col sm={12} md={12}>
            <Card className="update-inputs">
              <Card.Header>Update Profile</Card.Header>
 
                  <Form
                    className="update-form"
                    onSubmit={(e) =>
                      this.updateUser(
                        e,
                        this.name,
                        this.password,
                        this.email,
                        this.birthday
                      )
                    }
                  >
                    <Form.Group>
                      <Form.Label>Username</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="New Username"
                        onChange={(e) => this.setUsername(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        name="password"
                        placeholder="New Password"
                        onChange={(e) => this.setPassword(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="New Email"
                        onChange={(e) => this.setEmail(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Birthday</Form.Label>
                      <Form.Control
                        type="date"
                        name="birthday"
                        onChange={(e) => this.setBirthday(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Button
                        variant="warning"
                        type="submit"
                        onClick={(e) => this.updateUser(e)}
                      >
                        Update User
                      </Button>
                      <Button
                        className="delete-button"
                        variant="danger"
                        onClick={(e) => this.onDeleteUser(e)}
                      >
                        Delete User
                      </Button>
                    </Form.Group>
                  </Form>
        
            </Card>
          </Col>
        </Row>
        <Row></Row>
        <Card className="favmov-inputs">
          <Card.Body>
            <Row>
              <Col xs={12}>
                <h4>Favorite Movies</h4>
              </Col>
            </Row>
            <Row>
              {favoriteMovieObjects.map(( movie ) => {
                return (
                <Row>
                  <Col key={movie._id} className="fav-movie">
                    <Card>
                      <Link to={`/movies/${movie._id}`}>
                        <img src={movie.imageURL} crossOrigin={'anonymous'} alt={movie.title} width="300" height="450" />
                        <Card.Title>{movie.title}</Card.Title>
                      </Link>
                        <Button
                            className="remove"
                            variant="secondary"
                            onClick={(e) => this.removeFavorite(e, movie)}
                        >
                        Remove from the list
                        </Button>
                    </Card>
                  </Col>
                 </Row>
                );
              })}
            </Row>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

  
// const mapStateToProps = state => ({
//   name: state.name,
//   password: state.password,
//   email: state.email,
//   birthday: state.birthday,
//   favoriteMovies: state.favoriteMovies,movies: state.movies
// });

// export default connect(mapStateToProps, {updateUser, deleteUser, removeFavmovie})(ProfileView);


    

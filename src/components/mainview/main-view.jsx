import React from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';



export class MainView extends React.Component {

    constructor(){
        super();
        this.state = {
            movies: [
                { _id: 1, title: 'The Fountain', description: ' As a modern-day scientist, Tommy is struggling with mortality, desperately searching for the medical breakthrough that will save the life of his cancer-stricken wife, Izzi.', genre: ' Drama', director: ' Darren Aronofski', imageURL: 'https://m.media-amazon.com/images/I/51Ja7PFr9eL.jpg' },
                { _id: 2, title: 'The Eternal Sunshine of the Spotless Mind', description: ' When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories.', genre: ' Drama', director: ' Michel Goundry', imageURL: 'https://m.media-amazon.com/images/M/MV5BZTg3ODg2MzMtZmRmYy00ZWUwLTk5Y2QtOThmOTY1ZWZjZmJlXkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_.jpg' },
                { _id: 3, title: 'The Tree of Life', description: ' The story of a family in Waco, Texas in 1956. The eldest son witnesses the loss of innocence and struggles with his parents conflicting teachings.', genre: ' Drama', director: ' Terrence Malick', imageURL:'https://m.media-amazon.com/images/I/717aO-A7McL._AC_SL1500_.jpg'}

            ],
            selectedMovie: null
        }
    }

    setSelectedMovie(newSelectedMovie) {
      this.setState({
        selectedMovie: newSelectedMovie
      });
    }
  
    render() {
      const { movies, selectedMovie } = this.state;
    
      if (movies.length === 0) return <div className="main-view">The list is empty!</div>;
    
      return (
        <div className="main-view">
          {selectedMovie
            ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
            : movies.map(movie => (
              <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }}/>
            ))
          }
        </div>
      );
    }
    
}


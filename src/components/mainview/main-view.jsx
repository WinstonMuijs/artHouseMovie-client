import React from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';



export class MainView extends React.Component {

    constructor(){
        super();
        this.state = {
            movies: [
                { _id: 1, title: 'The Fountain', description: ' As a modern-day scientist, Tommy is struggling with mortality, desperately searching for the medical breakthrough that will save the life of his cancer-stricken wife, Izzi.', genre: ' Drama', director: ' Darren Aronofski', imageURL: 'https://www.webdesignmuseum.org/uploaded/fullscreen/the-fountain-2006.png', featured: false },
                { _id: 2, title: 'The Eternal Sunshine of the Spotless Mind', description: ' When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories.', genre: ' Drama', director: ' Michel Goundry', imageURL: 'https://www.themoviedb.org/t/p/w500/a10t6Etv9cHz5pTNl9RyqspbdnY.jpg', featured: true },
                { _id: 3, title: 'The Tree of Life', description: ' The story of a family in Waco, Texas in 1956. The eldest son witnesses the loss of innocence and struggles with his parents conflicting teachings.', genre: ' Drama', director: ' Terrence Malick', imageURL: 'https://www.themoviedb.org/t/p/w1280/5Zc2JGtIX4CGaVFwrHX72Okuek8.jpg', featured: true }

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
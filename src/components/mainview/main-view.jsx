import React from 'react';
import { MovieCard } from '../movie-card/movie-card';

export class MainView extends React.Component {

    constructor(){
        super();
        this.state = {
            movies: [
                { _id: 1, title: 'The Fountain', description: 'As a modern-day scientist, Tommy is struggling with mortality, desperately searching for the medical breakthrough that will save the life of his cancer-stricken wife, Izzi.', genre: 1, director: 1, imageURL : 'https://www.imdb.com/title/tt0414993/mediaviewer/rm2671676416/?ref_=tt_ov_i', featured: false },
                { _id: 2, title: 'The Eternal Sunshine of the Spotless Mind', description: 'When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories.', genre: 1, director: 2, imageURL : 'https://www.imdb.com/title/tt0338013/mediaviewer/rm2954530560/?ref_=tt_ov_i', featured: true },
                { _id: 3, title: 'The Tree of Life', description: 'he story of a family in Waco, Texas in 1956. The eldest son witnesses the loss of innocence and struggles with his parents conflicting teachings.', genre: 1, director: 3, imageURL : 'https://www.imdb.com/title/tt0478304/mediaviewer/rm4192437504/?ref_=tt_ov_i', featured: true }

            ]
        }
    }
    render() {
      const { movies } = this.state;
    
      if (movies.length === 0) return <div className="main-view">The list is empty!</div>;
    
      return (
        <div className="main-view">
          {movies.map(movie => <MovieCard key={movie._id} movie={movie}/>)}
        </div>
      );
    }
    
}
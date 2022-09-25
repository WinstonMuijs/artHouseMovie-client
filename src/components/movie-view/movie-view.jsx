import React from 'react';
import PropTypes from 'prop-types';



export class MovieView extends React.Component {

    render() {
        const { movie, onBackClick } = this.props;

        return (
        <div className="movie-view">
            <div className='movie-poster'>
                <img src={movie.imageURL} crossOrigin={'anonymous'}
                />
            </div>
            <div className='movie-title'>
                <span className='label'>Title:</span>
                <span className='value'>{movie.title}</span>
            </div>
            <div className='movie-description'>
                <span className='label'>Description:</span>
                <span className='value'>{movie.description}</span>
            </div>
            <div className='movie-genre'>
                <span className='label'>Genre:</span>
                <span className='value'>{movie.genre}</span>
            </div>
            <div className='movie-director'>
                <span className='label'>Director:</span>
                <span className='value'>{movie.director}</span>
            </div>
            <button onClick={() => { onBackClick(null); }}>Back</button>
        </div>
        );
      }
}


MovieView.PropTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
    genre: PropTypes.number.isRequired,
    director: PropTypes.number.isRequired
  }).isRequired
};


import React from 'react';

const Movie = props => {
  return (
    <p> {props.movie.name} Duration: {props.movie.duration} Year: {props.movie.year} </p>
  );
}

export default Movie

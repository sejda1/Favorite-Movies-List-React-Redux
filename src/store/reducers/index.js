import { movies } from '../../data.js';

import {
  NEXT_MOVIE,
  ADD_MOVIE_TO_FAVS,
  REMOVE_MOVIE_FROM_FAVS,
  PREV_MOVIE
} from '../actions/index.js';

const initialState = {
  movies: movies,
  favMovies: [],
  sira: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case NEXT_MOVIE:
      return {
        ...state,
        sira: state.sira + 1,
      };
      case PREV_MOVIE:
        return {
          ...state,
          sira: state.sira - 1,
        };
      case ADD_MOVIE_TO_FAVS:
        const currentMovie = state.movies[state.sira];
        const updatedMovies = state.movies.filter((movie) => movie.id !== currentMovie.id);
        return {
          ...state,
          favMovies: [...state.favMovies, currentMovie],
          sira: 
          state.movies.length - state.sira == 1 
          ? state.sira == 0 
          ? 0
          : state.sira - 1 : 
          state.sira,
          movies: updatedMovies,
        };
        case REMOVE_MOVIE_FROM_FAVS:
          const movieToRemove = state.favMovies.find((movie) => movie.id === action.payload);
          return {
            ...state,
            favMovies: state.favMovies.filter((movie) => movie.id !== action.payload), // Favorilerden çıkar
            movies: [...state.movies, movieToRemove], // Movies listesine geri ekle
          };   


    default:
      return state;
  }
}

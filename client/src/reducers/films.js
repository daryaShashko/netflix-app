const initialState = {
  movies: [],
  totalResults: 0
};

export function films(state = initialState, action) {

  if (action.type === 'FETCH_FIND_FILMS_SUCCESS') {
    return {
      movies: action.movies,
      totalResults: action.totalResults
    };
  }
  return state;
}
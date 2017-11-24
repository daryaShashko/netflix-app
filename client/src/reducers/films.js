const initialState = [];

export function films(state = initialState, action) {

  if (action.type === 'FETCH_FIND_FILMS_SUCCESS') {
    return action.movies;
  }
  return state;
}
import axios from "axios"


export const getFilms = (query) => dispatch => {
  return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=7ce8b734e18d23ac5345c37de7911c86&query=${query}`).then((response)=> {
    dispatch({type: 'FETCH_FIND_FILMS_SUCCESS', movies: response.data.results});
  });
}

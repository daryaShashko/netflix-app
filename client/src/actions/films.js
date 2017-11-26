import axios from "axios"

export const getFilmsByTitle = (query) => dispatch => {
  return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=7ce8b734e18d23ac5345c37de7911c86&query=${query}`).then((response)=> {
    dispatch({
      type: 'FETCH_FIND_FILMS_SUCCESS',
      movies: response.data.results,
      totalResults: response.data.total_results
    });
  });
};


export const getFilmsByDirector = (query) => dispatch => {
  return axios.get(`https://api.themoviedb.org/3/search/person?api_key=7ce8b734e18d23ac5345c37de7911c86&query=${query}`).then((response)=> {
    const moviesArr = response.data.results.map(item => item.known_for);
    dispatch({
      type: 'FETCH_FIND_FILMS_SUCCESS',
      movies: moviesArr.map(item => item[0]),
      totalResults: response.data.total_results
    });
  });
};

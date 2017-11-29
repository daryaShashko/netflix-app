import Movie from './containers/Movie.jsx';
import Movies from './containers/Movies.jsx';

export default [
    {
        path: '/film/:query/:id',
        component: Movie
    },
    {
        path: '/search/:query',
        component: Movies
    },
    {
        path: '/film/:query',
        component: Movies
    }
]
import React from 'react';
import AddNewMovie from './AddNewMovie.jsx';
import Search from './Search.jsx';
import MovieList from './MovieList.jsx';
import axios from 'axios';

const App = ({originalMovies}) => {

  const [movies, setMovies] = React.useState([]);
  const [masterMoviesList, setMasterMoviesList] = React.useState([]);
  const [watchedFilter, setWatchedFilter] = React.useState(null);
  React.useEffect(() => {
    axios.get('http://localhost:3000/movies').then(res => {
      setMovies(res.data);
      setMasterMoviesList(res.data);

    });
  }, []);
  const searchMovies = function(searchString) {
    const filteredMovies = movies.filter(movieToFilter => movieToFilter.title.indexOf(searchString) > -1);
    if (searchString.length === 0) {
      setMovies(masterMoviesList);
    } else if (!filteredMovies.length) {
      alert(`No movie found matching: "${searchString}"`)
    } else {
      setMovies(filteredMovies);
    }
  };

  const addMovie = function(movieToAdd) {
    var newMovie = {
      title: movieToAdd,
      watched: false
    }
    axios.post('http://localhost:3000/movies', newMovie)
      .then(response => {
        if (response.status === 201) {
          setMasterMoviesList([...masterMoviesList, newMovie]);
          setMovies([...movies, newMovie]);
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.message === 'Request failed with status code 409') {
          console.log(err.message === 'Request failed with status code 409')
          alert(`D'OH!!! ${movieToAdd} is already in your movie list.`)
        } else (
          alert(`${movieToAdd} not added to movie list`)
        )
      });
  };

  const changeWatched = function(watchedMovie) {

    watchedMovie.watched = !watchedMovie.watched;
    axios.put('http://localhost:3000/movies', watchedMovie)
      .then(response => {
        if (response.status === 200) {
          setMovies([...movies]);
        }
      })
      .catch(err => alert('falied to update database'))

  }

  return (
  <div style={{border:'3px solid rgb(169,169,169)'}}>
    <h1 style={{height:'75px', lineHeight:'75px', borderBottom:'3px solid rgb(169,169,169)', paddingLeft:'50px', margin:'0px 0px 50px 0px'}}> Movie List </h1>
    <AddNewMovie handleAddClick={addMovie}/>
    <Search handleSearchClick={searchMovies}/>
    <button
      type='button'
      onClick={event => watchedFilter ? setWatchedFilter(null) : setWatchedFilter(true)}
      > Watched </button>
    <button
      type='button'
      onClick={event => watchedFilter === false ? setWatchedFilter(null) : setWatchedFilter(false)}
      > Unwatched </button>
    <MovieList
      movies={movies}
      handleWatchedClick={changeWatched}
      watchedFilter={watchedFilter}
    />
  </div>
  )
};

export default App;
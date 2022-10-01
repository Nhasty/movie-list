import React from 'react';

function MovieList({movies, handleWatchedClick, watchedFilter}) {
  if (watchedFilter === null) {
    return (
      <ul style={{
        listStyleType:'none',
        margin:'0px 50px 50px 50px',
        border:'3px solid rgb(169,169,169)',
        borderBottom:'0px',
        padding:'0px'
        }}>
        {movies.map((movieToMap) => {
          return (
            <MovieListEntry
              movie={movieToMap}
              handleWatchedClick={handleWatchedClick}
              key={movieToMap.title}
            />
            );
          })
        }
      </ul>
    )
  } else if (watchedFilter) {
    return (
      <ul style={{
        listStyleType:'none',
        margin:'0px 50px 50px 50px',
        border:'3px solid rgb(169,169,169)',
        borderBottom:'0px',
        padding:'0px'
        }}>
        {movies.filter(item => (item.watched)).map((movieToMap) => {
          return (
            <MovieListEntry
              movie={movieToMap}
              handleWatchedClick={handleWatchedClick}
              key={movieToMap.title}
            />
            );
          })
        }
      </ul>
    )
  } else if (watchedFilter === false) {
    return (
      <ul style={{
        listStyleType:'none',
        margin:'0px 50px 50px 50px',
        border:'3px solid rgb(169,169,169)',
        borderBottom:'0px',
        padding:'0px'
        }}>
        {movies.filter(item => !item.watched).map((movieToMap) => {
          return (
            <MovieListEntry
              movie={movieToMap}
              handleWatchedClick={handleWatchedClick}
              key={movieToMap.title}
            />
            );
          })
        }
      </ul>
    )
  }
}
function MovieListEntry({movie, handleWatchedClick}) {
  return (
    <li style={{padding:'0px 0px 0px 40px', borderBottom:'3px solid rgb(169,169,169)'}}>
      <span style={{paddingRight:'120px'}}>{movie.title}</span>
      <button type='button' onClick={event=>handleWatchedClick(movie)}>{movie.watched ? 'Watched' : 'Need To Watch'}</button>
    </li>
  )
}

export default MovieList
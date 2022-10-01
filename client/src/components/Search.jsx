import React from 'react';

function Search({handleSearchClick}) {
  const [searchInput, setSearchInput] = React.useState('');
  return (
    <div style={{paddingLeft:'50px'}}>
      <input type='text' placeholder='Search...' onChange={event => {
        setSearchInput(event.target.value);
        }}
      />
      <button type='button' onClick={event => handleSearchClick(searchInput)}>Go!</button>
    </div>
  )
}
export default Search;
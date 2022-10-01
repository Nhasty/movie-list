import React from 'react';
import _ from 'underscore'

function AddNewMovie({handleAddClick}) {
  const [addInput, setAddInput] = React.useState('');
  return (
    <div style={{paddingLeft:'50px'}} >
      <input id='addID' type='text' placeholder='Add movie title here' onChange={event =>setAddInput(event.target.value)} />
      <button type='button' onClick={_.debounce(event=> {
        handleAddClick(addInput);
        var elem = document.getElementById('addID');
        elem.value = '';
        }, 300, true)} >Add </button>
    </div>
  )
}

export default AddNewMovie;
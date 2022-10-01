import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import axios from 'axios';
var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];
ReactDOM.render(<App originalMovies={movies}/>, document.getElementById('app'));
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// import $ from 'jquery';
import axios from 'axios';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// data form localhost:4000

// $.ajax({
//   url : 'http://localhost:4000/phone',
//   type : 'GET',
//   dataType : 'JSON',
//   success : function(data){
//     console.log(data)
//   },
//   error : function(err){
//     console.log(err)
//   }
// });

axios.get('http://localhost:4000/phone')
  .then(function(response){
    console.log(response.data);
  })
  .catch(function(err){
    console.log(err);
  })

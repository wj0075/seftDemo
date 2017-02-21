import Message from './MessageBox';
import React from 'react';
import ReactDOM from 'react-dom';
require('bootstrap/dist/css/bootstrap.css');
let model = require('./model');
ReactDOM.render(<Message model={model}/>,document.getElementById('app'));



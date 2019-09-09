import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home.js';

import './scss/main.scss'; // adres do głównego pliku SASS

const App =() => <Home/>;

ReactDOM.render(<App />, document.getElementById("app"));

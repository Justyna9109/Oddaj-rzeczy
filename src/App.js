import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home.js';

import './scss/main.scss'; // adres do głównego pliku SASS

const App =() => <Home/>;

ReactDOM.render(<App />, document.getElementById("app"));

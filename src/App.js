import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import './scss/main.scss'; // adres do głównego pliku SASS

const App =()=> <Main/>;

class Main extends Component{
    render() {
        return(
            <div>Hello word </div>

        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"));

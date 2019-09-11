import React,{Component} from 'react';
import {
   Link
} from 'react-router-dom';

class Logout extends Component{
    render() {
        return(<div className='logout'>
            <div className='logout-title'>
                <h1>Wylogowanie nastąpiło pomyślnie!</h1>
                <img src='/src/assets/Decoration.svg'/>
            </div>
                <button><Link to="./"> Strona główna</Link></button>
            </div>

        )
    }
}
export default Logout;
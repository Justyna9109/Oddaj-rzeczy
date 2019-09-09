import React,{Component} from 'react';
import {
    NavLink,
} from 'react-router-dom';


class HomeHeader extends Component{
    render() {
        return(<header>
                    <ul className="menu">
                        <li><NavLink exact className="anime" to="/logowanie">Zaloguj</NavLink></li>
                        <li><NavLink exact className="anime1" to="/rejestracja">Załóż konto</NavLink></li>
                    </ul>

                    <ul className="menu1">
                        <li><a>Start</a></li>
                        <li><a>O co chodzi?</a></li>
                        <li><a>O nas</a></li>
                        <li><a>Fundacja i organizacje</a></li>
                        <li><a>Kontakt</a></li>
                    </ul>
                </header>
        )
    }
}
export default HomeHeader;
import React,{Component} from 'react';
import {
    NavLink,
} from 'react-router-dom';
import {Link,} from 'react-scroll';


class HomeHeader extends Component{
    render() {
        return(<header>
                    <ul className="menu">
                        <li><NavLink exact to="/wylogowano">Wyloguj</NavLink></li>
                        <li><NavLink exact className="anime" to="/logowanie">Zaloguj</NavLink></li>
                        <li><NavLink exact className="anime1" to="/rejestracja">Załóż konto</NavLink></li>
                    </ul>

                    <ul className="menu1">
                        <li><NavLink className='start' to='./'>Start</NavLink></li>
                        <li><Link to="four_steps">O co chodzi?</Link></li>
                        <li><Link to="about-us">O nas</Link></li>
                        <li><Link to="organizations">Fundacja i organizacje</Link></li>
                        <li><Link to="contact">Kontakt</Link></li>
                    </ul>
                </header>
        )
    }
}
export default HomeHeader;
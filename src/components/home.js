import React,{Component} from 'react';
import HomeHeader from './homeheader.js';
import Section_one from './section_one.js';
import Login from './login.js'
import Register from './rejestracja.js';
import {
    HashRouter,
    Route,
    Switch,
} from 'react-router-dom';

class Home extends Component{
    render() {
        return(
            <section className="container">
                <HashRouter>
                    <>
                <HomeHeader/>
                <Switch>
                    <Route exact path='/' component={Section_one} />
                    <Route exact path='/logowanie' component={Login} />
                    <Route exact path='/rejestracja' component={Register} />
                </Switch>
                    </>
                </HashRouter>
            </section>

        )
    }
}

export default Home;
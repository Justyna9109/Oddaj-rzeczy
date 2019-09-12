import React,{Component} from 'react';
import HomeHeader from './HomeHeader.js';
import SectionOne from './SectionOne.js';
import Login from './Login.js'
import Register from './Register.js';
import Logout from './Logout.js';
import {
    HashRouter,
    Route,
    Switch,
} from 'react-router-dom';

class Home extends Component{
    render() {
        return(
            <section className='container'>
                <HashRouter>
                    <>
                <HomeHeader/>
                <Switch>
                    <Route exact path='/' component={SectionOne} />
                    <Route exact path='/logowanie' component={Login} />
                    <Route exact path='/rejestracja' component={Register} />
                    <Route exact path='/wylogowano' component={Logout} />
                </Switch>
                    </>
                </HashRouter>
            </section>

        )
    }
}

export default Home;
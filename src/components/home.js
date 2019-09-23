import React, {Component} from 'react';
import HomeHeader from './HomeHeader.js';
import SectionOne from './SectionOne.js';
import Login from './Login.js'
import Register from './Register.js';
import Logout from './Logout.js';
import GiveBack from './GiveBack.js';
import {
    HashRouter,
    Route,
    Switch,
} from 'react-router-dom';

class Home extends Component {
    state= {
        user: null
    }
    handleSetUser = user => {
        this.setState({
            user
        })
    }
    render() {
        return (
            <section className='container'>
                <HashRouter>
                    <>
                        <HomeHeader user={this.state.user}/>
                        <Switch>
                            <Route exact path='/' component={SectionOne}/>
                            <Route path='/logowanie' render={(props) => <Login {...props} setUser={this.handleSetUser} />}/>
                            <Route path='/rejestracja' component={Register}/>
                            <Route exact path='/wylogowano' component={Logout}/>
                            <Route exact path='/oddajrzeczy' component={GiveBack}/>
                        </Switch>
                    </>
                </HashRouter>
            </section>
        )
    }
}
export default Home;
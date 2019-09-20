import React, {Component} from 'react';
import {Link,} from 'react-router-dom';

class Login extends Component {
    state = {
        email: '',
        password: '',
        errors: [],
        error: [],
        user: null
    };
    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    };
    handleSubmits = e => {
        e.preventDefault();
        const errors = [];
        const error = [];
        if (this.state.email.length <= 2) {
            error.push("Podany email jest niepoprawny!")
        }
        if (this.state.password.length <= 6) {
            errors.push('Podane hasło jest za krótkie!')
        }
        this.setState({
            errors: errors,
            error: error,
        });
        if (errors.length === 0 && error.length === 0) {
            fetch("http://localhost:3000/register", {
                email: this.state.email,
                password: this.state.password
            }).then(res => res.json())
                .then(users => {
                    const resp = users.find(user => user.email === this.state.email && user.password === this.state.password)
                    console.log(resp);
                    if (resp) {
                       /* this.setState({
                            user : resp

                        */
                        //})
                        this.props.setUser(resp)
                    }
                }).catch(function() {
                    console.log("Error");
                }
            )
        }
    };
    render() {
        const errorsMessages = (
            <ul className='errors'>
                {this.state.errors.map((err, index) => <li key={index}>{err}</li>)}
            </ul>
        );
        const errorMessages = (
            <ul className='errors'>
                {this.state.error.map((err, index) => <li key={index}>{err}</li>)}
            </ul>
        );
        return (<div className='login'>
                <div className='login-title'>
                    <h2>Zaloguj się</h2>
                    <img src='/src/assets/Decoration.svg'/>
                </div>

                <div className='form-login1'>
                    <form onSubmit={this.handleSubmits} className='login-text'>

                        <div className='form-login'>
                            <label className='email'>Email
                                <input onChange={this.handleChanges} type='email' name='email'
                                       value={this.state.email}/>
                            </label>
                            {errorMessages}

                            <label className='password'>Hasło
                                <input onChange={this.handleChanges} type='password' name='password'
                                       value={this.state.password}/>
                            </label>
                            {errorsMessages}
                        </div>

                        <label>
                            <button><Link to='./rejestracja'>Załóż konto</Link></button>
                        </label>
                        <label className='submitSend'>
                            <input className='sendSend' type='submit' value='Zaloguj się'/>
                        </label>
                    </form>
                </div>

            </div>
        )
    }
}

export default Login;
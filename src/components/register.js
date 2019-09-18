import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Register extends Component {
    state = {
        email: '',
        password: '',
        password2: '',
        erro: [],
        error: [],
        errors: []
};
    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    };
    handleSubmits = e => {
        e.preventDefault();
        const erro = [];
        const error = [];
        const errors = [];
        if (this.state.email.length <= 2) {
            erro.push("Podany email jest niepoprawny!")
        }
        if (this.state.password.length <= 6) {
            errors.push('Podane hasło jest za krótkie!')
        }
        if (this.state.password !== this.state.password2) {
            error.push('Podane hasło jest nie prawidłowe!')
        }
        this.setState({
            erro: erro,
            error: error,
            errors: errors,
        })
        fetch("http://localhost:3000/register", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                password2: this.state.password2
            })
        })
            .then( function(){
                if (erro.length === 0 && error.length === 0 && errors.length === 0) {
                    console.log("success", "User registered!", "You can now log in using your credentials.");
                } else {
                    console.log("danger", "Something went wrong.");
                }
            }).catch(function () {
            console.log("danger", "Error", "Something went wrong.");
        })
    };

    render() {
        const erroMessages = (
            <ul className='errors'>
                {this.state.erro.map((err, index) => <li key={index}>{err}</li>)}
            </ul>
        );
        const errorMessages = (
            <ul className='errors'>
                {this.state.error.map((err, index) => <li key={index}>{err}</li>)}
            </ul>
        );
        const errorsMessage = (
            <ul className='errors'>
                {this.state.errors.map((er, i) => <li key={i}>{er}</li>)}
            </ul>
        );
        return (<>
                <div className='register'>
                    <div className='register-title'>
                        <h2>Załóż konto</h2>
                        <img src='/src/assets/Decoration.svg'/>
                    </div>

                    <h3 className="head">{this.state.head}</h3>

                    <div className='form-register1'>
                        <form onSubmit={this.handleSubmits} className='register-text'>
                            <div className='form-register'>
                                <label>Email
                                    <input onChange={this.handleChanges} type='email' name='email'
                                           value={this.state.email}/>
                                </label>
                                {erroMessages}

                                <label>Hasło
                                    <input onChange={this.handleChanges} type='password' name='password'
                                           value={this.state.password}/>
                                </label>
                                {errorsMessage}

                                <label>Powtórz hasło
                                    <input onChange={this.handleChanges} type='password' name='password2'
                                           value={this.state.password2}/>
                                </label>
                                {errorMessages}
                            </div>

                            <label>
                                <button><Link to='./logowanie'>Zaloguj się</Link></button>
                            </label>
                            <label className='submitLogin'>
                                <input className='sendLogin' type='submit' value='Załóż konto'/>
                            </label>
                        </form>
                    </div>

                </div>

            </>
        )
    }
}

export default Register;
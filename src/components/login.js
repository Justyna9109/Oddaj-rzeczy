import React,{Component} from 'react';
import {
    Link,
} from 'react-router-dom';

class Login extends Component{
    state={
        email: '',
        password: '',
        error: []
    };
    handleChanges = e =>{
        this.setState({
            [e.target.name] : e.target.value,
        })
    };
    handleSubmits = e => {
        e.preventDefault();
        const error = [];
        if(this.state.email.length <= 2){
            error.push ("Podany email jest niepoprawny!")
        }
        if(this.state.password.length <= 6 ){
            error.push('Podane hasło jest za krótkie!')
        }
        this.setState({
            error : error,
        })
    };
    render() {
        const errorMessages = (
            <ul className='error'>
                {this.state.error.map( (err,index) => <li key={index}>{ err}</li>)}
            </ul>
        );
        return(<div className='login'>
                <div className='login-title'>
                <h2>Zaloguj się</h2>
                <img src='/src/assets/Decoration.svg'/>
                </div>

                <div className='form-login1'>
                <form onSubmit={this.handleSubmits} className='login-text'>

                    <div className='form-login'>
                    <label className='email'>Email
                        <input onChange={this.handleChanges} type='email' name='email' value = {this.state.email}/>
                    </label>

                    <label className='password'>Hasło
                        <input onChange={this.handleChanges} type='password' name='password' value = {this.state.password}/>
                    </label>
                    </div>

                    {errorMessages}

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
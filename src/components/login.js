import React,{Component} from 'react';
import {
    Link,
} from 'react-router-dom';

class Login extends Component{
    render() {
        return(<div className='login'>
                <div className='login-title'>
                <h2>Zaloguj się</h2>
                <img src='/src/assets/Decoration.svg'/>
                </div>

                <div className='form-login'>
                <form className='login-text'>
                    <label className='email'>Email
                        <input type='text' name='email'/>
                    </label>

                    <label className='password'>Hasło
                        <input type='email' name='password'/>
                    </label>
                </form>
                </div>

                <button><Link to="./rejestracja"> Załóż konto</Link></button>
                <button>Zaloguj się</button>

            </div>

        )
    }
}

export default Login;
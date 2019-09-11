import React,{Component} from 'react';
import {Link} from "react-router-dom";

class Register extends Component{
    render() {
        return(<div className='register'>
                <div className='register-title'>
                    <h2>Załóż konto</h2>
                    <img src='/src/assets/Decoration.svg'/>
                </div>

                <div className='form-register'>
                    <form className='register-text'>
                        <label>Email
                            <input type='text' name='email'/>
                        </label>

                        <label>Hasło
                            <input type='email' name='password'/>
                        </label>

                        <label>Powtórz hasło
                            <input type='email' name='password'/>
                        </label>
                    </form>
                </div>

                <button><Link to="./logowanie">Zaloguj się</Link></button>
                <button> Załóż konto</button>


            </div>

        )
    }
}

export default Register;
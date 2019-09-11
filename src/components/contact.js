import React,{Component} from 'react';

class Contact extends Component{
    state={
        name: "",
        mail: "",
        pass: "",
        errors: []
    };
    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value,
        })
    };
    handleSubmit = e => {
        e.preventDefault();
        const errors = [];
        if(this.state.name.length <= 2){
            errors.push ("Podane imię jest niepoprawne!")
        }
        if(this.state.mail.length <= 5 ){
            errors.push('Podany email jest nieprawidłowy!')
        }
        if(this.state.pass.length <= 120){
            errors.push ('Wiadomość musi mieć conajmniej 120 znaków')
        }
        this.setState({
            errors : errors,
        })
    };

    render() {
        const errorsMessages = (
            <ul className='error'>
                {this.state.errors.map( (err,index) => <li key={index}>{ err}</li>)}
            </ul>
        );
        return(<>
            <section className='contact'>
                <img className='background-contact' src='/src/assets/Background-Contact-Form.jpg'/>

                <div className='contact-us'>

                    <div className='title-contact'>
                    <p>Skontaktuj się z nami</p>
                    <img src='/src/assets/Decoration.svg'/>
                    </div>


                    <form onSubmit={this.handleSubmit}>

                        <div className='first'>
                        <label>Wpisz swoje imię
                            <input onChange={this.handleChange} type='text' name='name'  value = {this.state.name} placeholder='Krzysztof'/>
                        </label>

                            <label>Wpisz swój email
                            <input onChange={this.handleChange} type='email' name='mail'  value = {this.state.mail} placeholder="abc@xyz.pl"/>
                        </label>
                        </div>

                        <div className='second'>
                        <label>Wpisz swoją wiadomość
                            <input onChange={this.handleChange} className='message' type='text' name='pass'  value = {this.state.pass}
                                   placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'/>
                        </label>
                        </div>

                        {errorsMessages}

                        <label>
                            <input className='send' type='submit' name='registeruser' value='Wyślij'/>
                        </label>
                    </form>

                </div>
            </section>

            <footer>
                <p className='copy'>Copyright by Coders Lab</p>

                <div className='social-media'>
                <img src='/src/assets/Facebook.svg'/>
                <img src='/src/assets/Instagram.svg'/>
                </div>

            </footer>
            </>
        )
    }
}
export default Contact;
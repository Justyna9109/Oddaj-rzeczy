import React, {Component} from 'react';

class Contact extends Component {
    state = {
        name: "",
        mail: "",
        pass: "",
        erro: [],
        error: [],
        errors: [],
        contacts: true,
    };
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    };
    handleSubmit = e => {
        e.preventDefault();
        const erro = [];
        const error = [];
        const errors = [];
        if (this.state.name.length <= 2) {
            erro.push("Podane imię jest niepoprawne!")
        }
        if (this.state.mail.length <= 5) {
            error.push('Podany email jest nieprawidłowy!')
        }
        if (this.state.pass.length <= 120) {
            errors.push('Wiadomość musi mieć conajmniej 120 znaków')
        }
        this.setState({
            erro: erro,
            error: error,
            errors: errors,
        });
        const ob = {
            name: this.state.name,
            email: this.state.mail,
            message: this.state.pass,
        }
        fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(ob)
        })
            .then(res => res.json())
            .then(res => console.log("sucess"))
            this.setState({
                contacts: this.state.contacts ? "" : "Wiadomość została wysłana! Wkrótce się skontaktujemy",
        })
            .catch(err => console.log('Error;', err))
    }

    render() {
        const erroMessages = (
            <ul className='errorContact'>
                {this.state.erro.map((err, i) => <li key={i}>{err}</li>)}
            </ul>
        );
        const errorMessages = (
            <ul className='errorContact'>
                {this.state.error.map((err, i) => <li key={i}>{err}</li>)}
            </ul>
        );
        const errorsMessages = (
            <ul className='errorsContact'>
                {this.state.errors.map((err, index) => <li key={index}>{err}</li>)}
            </ul>
        );
        return (<>
                <section className='contact'>
                    <img className='background-contact' src='/src/assets/Background-Contact-Form.jpg'/>

                    <div className='contact-us'>

                        <div className='title-contact'>
                            <p>Skontaktuj się z nami</p>
                            <img src='/src/assets/Decoration.svg'/>
                        </div>

                        <h2 className='contacts'>{this.state.contacts}</h2>


                        <form onSubmit={this.handleSubmit}>

                            <div className='first'>
                                <label>Wpisz swoje imię
                                    <input onChange={this.handleChange} type='text' name='name' value={this.state.name}
                                           placeholder='Krzysztof'/>
                                </label>


                                <label>Wpisz swój email
                                    <input onChange={this.handleChange} type='email' name='mail' value={this.state.mail}
                                           placeholder="abc@xyz.pl"/>
                                </label>
                            </div>

                            <div className='message'>
                                {erroMessages}{errorMessages}
                            </div>

                            <div className='second'>
                                <label>Wpisz swoją wiadomość
                                    <textarea onChange={this.handleChange} cols='50' rows='5' className='message'
                                              name='pass' value={this.state.pass}
                                              placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'/>
                                </label>
                                {errorsMessages}
                            </div>

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
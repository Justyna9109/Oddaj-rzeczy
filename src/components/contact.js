import React,{Component} from 'react';

class Contact extends Component{
    render() {
        return(<>
            <section className='contact'>
                <img className='background-contact' src='/src/assets/Background-Contact-Form.jpg'/>

                <div className='contact-us'>

                    <div className='title-contact'>
                    <p>Skontaktuj się z nami</p>
                    <img src='/src/assets/Decoration.svg'/>
                    </div>


                    <form>

                        <div className='first'>
                        <label>Wpisz swoje imię
                            <input type='text' name='name' placeholder='Krzysztof'/>
                        </label>
                        <label>Wpisz swój email
                            <input type='email' placeholder="abc@xyz.pl"/>
                        </label>
                        </div>

                        <div className='second'>
                        <label>Wpisz swoją wiadomość
                            <input className='message' type='text' placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'/>
                        </label>
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
import React, {Component} from 'react';
import Contact from "./Contact.js";
import Step1 from './Step1.js';
import Step2 from "./Step2.js";
import Step3 from './Step3.js';

class GiveBack extends Component{
    render() {
        return(<>
            <section className='give-back'>
                <img className='background-give' src='/src/assets/Form-Hero-Image.jpg'/>

                <div className='give-text'>

                    <div className='give-title'>
                        <p>Oddaj rzeczy, których już nie chcesz</p>
                        <p className='help'>POTRZEBUJĄCYM</p>
                        <img src='/src/assets/Decoration.svg'/>
                        <p className='four'>Wystarczą 4 proste kroki:</p>
                        <ul className='steps'>
                            <li>1 Wybierz rzeczy</li>
                            <li>2 Spakuj je w worki</li>
                            <li>3 Wybierz fundację</li>
                            <li>4 Zamów kuriera</li>
                        </ul>
                    </div>
                </div>
            </section>

                <Step1/>
                <Step2/>
                <Step3/>
                <Contact/>
                </>




        )
    }
}

export default GiveBack;
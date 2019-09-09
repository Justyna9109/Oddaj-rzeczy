import React,{Component} from 'react';
import {Link} from "react-router-dom";

class Four_steps extends Component{
    render() {
        return(<section className="four_steps">
                <div className='title-four'>Wystarczą 4 proste kroki</div>
                <img className='decoration' src='/src/assets/Decoration.svg'/>

                <div className='four-columns'>

                    <div className='box-first'>
                        <img className='icon' src='/src/assets/Icon-1.svg'/>
                        <p className='steps'>Wybierz rzeczy</p>
                        <img className='line' src='/src/assets/icon.png'/>
                        <p>ubrania, zabawki, sprzęt i inne</p>
                    </div>

                    <div className='box-two'>
                        <img className='icon2' src='/src/assets/Icon-2.svg'/>
                        <p className='steps'>Spakuj je</p>
                        <img className='line2' src='/src/assets/icon.png'/>
                        <p>skorzystaj z worków na śmieci</p>
                    </div>

                    <div className='box-three'>
                        <img className='icon3' src='/src/assets/Icon-3.svg'/>
                        <p className='steps'>Zdecyduj komu chcesz pomóc</p>
                        <img className='line3' src='/src/assets/icon.png'/>
                        <p>wybierz zaufane miejsce</p>
                    </div>

                    <div className='box-four'>
                        <img className='icon4' src='/src/assets/Icon-4.svg'/>
                        <p className='steps'>Zamów kuriera</p>
                        <img className='line4' src='/src/assets/icon.png'/>
                        <p>kurier przyjedzie w dogodnym terminie</p>
                    </div>

                </div>

                <div className='back-things'>
                    <p><Link to="/logowanie">ODDAJ RZECZY</Link></p>
                </div>

            </section>

        )
    }
}

export default Four_steps;

import React,{Component} from 'react';
import ThreeColumns from './ThreeColums.js';
import FourSteps from './FourSteps.js';
import AboutUs from './AboutUs.js';
import Organizations from "./Organizations.js";
import Contact from './Contact.js';
import {
    Link,
} from 'react-router-dom';


class SectionOne extends Component{
    render() {
        return( <>
            <section className='one'>
                <div className='two_columns'>
                    <img className='hero' src='/src/assets/Home-Hero-Image.jpg'/>

                    <div className='text'>
                        <p>Zacznij pomagać!</p>
                        <p>Oddaj niechciane rzeczy w zaufane ręce</p>
                        <img src='/src/assets/Decoration.svg'/>

                        <div className='box'>
                            <p><Link to="/logowanie">ODDAJ <br></br> RZECZY</Link></p>
                            <p><Link to="/logowanie">ZORGANIZUJ <br></br>ZBIÓRKĘ</Link></p>
                        </div>

                    </div>

                </div>
            </section>

            <ThreeColumns/>
            <FourSteps/>
            <AboutUs/>
            <Organizations/>
            <Contact/>

            </>

        )
    }
}

export default SectionOne;
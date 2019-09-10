import React,{Component} from 'react';
import Three_columns from './three_colums.js';
import Four_steps from './four_steps.js';
import About_us from './about_us.js';
import Organizations from "./organizations";
import {
    Link,
} from 'react-router-dom';


class Section_one extends Component{
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

            <Three_columns/>
            <Four_steps/>
            <About_us/>
            <Organizations/>

            </>

        )
    }
}

export default Section_one;
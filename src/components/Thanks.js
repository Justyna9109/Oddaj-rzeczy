import React, {Component} from 'react';

class Thanks extends Component{
    render() {
        return(<section className="thanks">

                <div className='text-thanks'>
                <div className='thanks-box1'>
                    <h3>Dziękujemy za przesłanie fomularza</h3>
                    <p>Na maila prześlemy wszelkie <br></br>informacje o odbiorze.</p>
                    <img src='/src/assets/Decoration.svg'/>
                </div>


                <div className='thanks-box2'>
                    <img className='background-thanks' src='/src/assets/Background-Form.jpg'/>
                </div>

                </div>

            </section>

        )
    }
}
export default Thanks;
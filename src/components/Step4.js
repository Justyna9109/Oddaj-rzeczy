import React, {Component} from 'react';

class Step4 extends Component {
    state = {
        step: true,
    }
    handleClick = e => {
        this.setState({
            step: false
        })

    }

    render() {
        const step1 = {
            display: this.state.step ? '' : "none"
        }
        return (<section style={step1} className='Step4'>

                <div className='yellow-step2'>
                    <h1>Ważne!</h1>
                    <p>Podaj adres oraz termin odbioru rzeczy.</p>
                </div>

                <div className='text-step4'>
                    <div className='step4-box1'>
                        <h5>Krok 4/4</h5>

                        <h3>Podaj adres oraz termin odbioru rzeczy przez kuriera:</h3>

                        <div className='form-form'>
                        <form className='form-adress'>
                            <legend>Adres odbioru:</legend>
                            <label>Ulica
                                <input className='adress-first'/>
                            </label>
                            <label>Miasto
                                <input className='adress-second'/>
                            </label>
                            <label>Kod <br></br> pocztowy
                                <input className='adress-three'/>
                            </label>
                            <label>Numer <br></br>telefonu
                                <input className='adress-four'/>
                            </label>
                        </form>

                        <form className='form-data'>
                            <legend>Termin odbioru:</legend>
                            <label>Data
                                <input className='data-first'/>
                            </label>
                            <label>Godzina
                                <input className='data-second'/>
                            </label>
                            <label>Uwagi
                                <textarea className='data-three' cols='-10' rows='2'/>
                            </label>
                        </form>
                        </div>


                    <div className='button-step4'>
                        <label>
                            <button onClick={this.handleClick} className='then-step3'>Wstecz</button>
                            <button onClick={this.handleClick} className='then-step3'>Dalej</button>
                        </label>
                    </div>

                    </div>

                    <div className='step4-box2'>
                        <img className='background-step4' src='/src/assets/Background-Form.jpg'/>
                    </div>

                </div>


            </section>

        )
    }

}

export default Step4;
import React, {Component} from 'react';

class Step4 extends Component {
    handleClick = e => {
        e.preventDefault();
        const data = {};
        for (let el of e.target) {
            data[el.name] = el.checked
        }
        this.props.onNext(data)
    }

    render() {
        return (<section className='Step4'>

                <div className='yellow-step2'>
                    <h1>Ważne!</h1>
                    <p>Podaj adres oraz termin odbioru rzeczy.</p>
                </div>

                <div className='text-step4'>
                    <div className='step4-box1'>
                        <h5>Krok 4/4</h5>

                        <h3>Podaj adres oraz termin odbioru rzeczy przez kuriera:</h3>

                        <div className='form-form'>
                        <form onSubmit={this.handleClick} className='form-adress'>
                            <legend>Adres odbioru:</legend>
                            <label>Ulica
                                <input name='ulica' className='adress-first'/>
                            </label>
                            <label>Miasto
                                <input name='miasto' className='adress-second'/>
                            </label>
                            <label>Kod <br></br> pocztowy
                                <input name='pocztowy' className='adress-three'/>
                            </label>
                            <label>Numer <br></br>telefonu
                                <input name='telefon' className='adress-four'/>
                            </label>
                        </form>

                        <form onSubmit={this.handleClick} className='form-data'>
                            <legend>Termin odbioru:</legend>
                            <label>Data
                                <input name='data' className='data-first'/>
                            </label>
                            <label>Godzina
                                <input name='godzina' className='data-second'/>
                            </label>
                            <label>Uwagi
                                <textarea name='uwagi' className='data-three' cols='-10' rows='2'/>
                            </label>

                            <div className='button-step4'>
                                <label>
                                    <button className='then-step3'>Wstecz</button>
                                    <button type="submit" className='then-step3'>Dalej</button>
                                </label>
                            </div>
                        </form>
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
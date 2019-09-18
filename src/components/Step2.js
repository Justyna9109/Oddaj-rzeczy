import React, {Component} from 'react';

class Step2 extends Component{
    state={
        step: true
    }
    handleClick =e => {
        this.setState({
            step: false
        })

    }
    render() {
        const step1 = {
            display: this.state.step ? '' : "none"
        }
        return(<section style={step1} className='step2'>

                <div className='yellow-step2'>
                    <h1>Ważne!</h1>
                    <p>Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.</p>
                </div>

                <div className='text-step2'>
                    <div className='step2-box1'>
                        <h5>Krok 2/4</h5>

                        <h3>Podaj liczbę 60l worków, w które spakowałe/aś rzeczy:</h3>

                        <div className='select-step2'>
                            <div className='bags'>
                            <p>Liczba 60l worków:</p>
                        <select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                            </div>


                        <label>
                            <button onClick={this.handleClick} className='then-step2'>Wstecz</button>
                            <button onClick={this.handleClick} className='then-step2'>Dalej</button>
                        </label>
                        </div>
                    </div>

                    <div className='step2-box2'>
                        <img className='background-step2' src='/src/assets/Background-Form.jpg'/>
                    </div>


                </div>
            </section>

        )
    }
}

export default Step2;
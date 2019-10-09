import React, {Component} from 'react';

class Step2 extends Component {
    handleClick = e => {
        e.preventDefault();
        const data = {};
        for (let el of e.target) {
            data[el.name] = el.checked
        }
        this.props.onNext(data)
    }

    render() {
        return (<section className='step2'>

                <div className='yellow-step2'>
                    <h1>Ważne!</h1>
                    <p>Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować
                        rzeczy znajdziesz TUTAJ.</p>
                </div>

                <div className='text-step2'>
                    <div className='step2-box1'>
                        <h5>Krok 2/4</h5>

                        <h3>Podaj liczbę 60l worków, w które spakowałe/aś rzeczy:</h3>

                        <div className='select-step2'>
                            <div className='bags'>
                                <p>Liczba 60l worków:</p>
                                <form onSubmit={this.handleClick}>
                                    <select>
                                        <option name='1'>1</option>
                                        <option name="2">2</option>
                                        <option name="3">3</option>
                                        <option name="4">4</option>
                                        <option name="5">5</option>
                                    </select>
                                    <label className='button-step2'>
                                        <button className='then-step2'>Wstecz</button>
                                        <button type="submit" className='then-step2'>Dalej</button>
                                    </label>
                                </form>
                            </div>

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
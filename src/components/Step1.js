import React, {Component} from 'react';

class Step1 extends Component{
    state={
        step: true
    }
    handleClick = e => {
        this.setState({
            step: false
        })

    }
    render() {
        const step = {
            display: this.state.step ? '' : "none"
        }
        return(<section style={step} className='step1'>

                <div className='yellow-step1'>
                    <h1>Ważne!</h1>
                    <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>
                </div>

                <div className='text-step1'>
                    <div className='step1-box1'>
                    <h5>Krok 1/4</h5>
                    <form>
                        <legend>Zaznacz co chcesz dodać:</legend>

                        <label> ubrania, które nadają się do ponownego użycia
                            <input type='checkbox'/>
                        </label>

                        <label>ubrania do wyrzucenia
                            <input type='checkbox'/>
                        </label>

                        <label> zabawki
                            <input type='checkbox'/>
                        </label>

                        <label> książki
                            <input type='checkbox'/>
                        </label>

                        <label> Inne
                            <input type='checkbox'/>
                        </label>
                    </form>

                    <label>
                        <button onClick={this.handleClick} className='then-step1'>Dalej</button>
                    </label>
                    </div>

                    <div className='step1-box2'>
                        <img className='background-step1' src='/src/assets/Background-Form.jpg'/>
                    </div>
                </div>
            </section>

        )
    }
}
export default Step1;
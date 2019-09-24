import React, {Component} from 'react';

class Step1 extends Component{
    handleClick = e => {
        e.preventDefault();
        const data = {};
        for (let el of e.target) {
            data[el.name] = el.checked
        }
        this.props.onNext(data)
    }
    render() {
        return(<section className='step1'>

                <div className='yellow-step1'>
                    <h1>Ważne!</h1>
                    <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>
                </div>

                <div className='text-step1'>
                    <div className='step1-box1'>
                    <h5>Krok 1/4</h5>
                    <form onSubmit={this.handleClick}>
                        <legend>Zaznacz co chcesz dodać:</legend>

                        <label> ubrania, które nadają się do ponownego użycia
                            <input name='ubrania1' type='checkbox'/>
                        </label>

                        <label>ubrania do wyrzucenia
                            <input name='ubrania' type='checkbox'/>
                        </label>

                        <label> zabawki
                            <input name='zabawki' type='checkbox'/>
                        </label>

                        <label> książki
                            <input name='książki' type='checkbox'/>
                        </label>

                        <label> Inne
                            <input name='inne' type='checkbox'/>
                        </label>

                        <label>
                            <button type="submit" className='then-step1'>Dalej</button>
                        </label>
                    </form>


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
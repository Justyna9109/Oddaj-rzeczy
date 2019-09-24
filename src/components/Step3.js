import React, {Component} from 'react';

class Step3 extends Component {
    state = {
        pos: true,
    }

    handleClickColor = e => {
        this.setState({
            pos: false
        })

    }
    handleClick = e => {
        e.preventDefault();
        const data = {};
        for (let el of e.target) {
            data[el.name] = el.checked
        }
        this.props.onNext(data)
    }
    render() {
        const style = {
            backgroundColor: this.state.pos ? "" : "orange"
        }

        return (<section className='Step3'>

                <div className='yellow-step2'>
                    <h1>Ważne!</h1>
                    <p>Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce.
                        Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.</p>
                </div>

                <div className='text-step3'>
                    <div className='step3-box1'>
                        <h5>Krok 3/4</h5>

                        <h3>Lokalizacja:</h3>

                        <div className='select-step3'>
                            <div className='city'>
                                <form onSubmit={this.handleClick}>
                                    <select>
                                        <option value="1">wybierz</option>
                                        <option value="2">Poznań</option>
                                        <option value="3">Warszawa</option>
                                        <option value="4">Kraków</option>
                                        <option value="5">Wrocław</option>
                                        <option value="5">Katowice</option>
                                    </select>
                                </form>
                            </div>

                            <h2 className='title-help'>Komu chcesz pomóc?</h2>

                            <form onSubmit={this.handleClick} className='help-who'>
                                <label>
                                    <input style={style} onClick={this.handleClickColor} type="text"
                                           placeholder='dzieciom'/>
                                    <input type="text" placeholder='samotnym matkom'/>
                                    <input type="text" placeholder='bezdomnym'/>
                                    <input type="text" placeholder='niepełnosprawny'/>
                                    <input type="text" placeholder='osobom starszym'/>
                                </label>
                            </form>

                            <div className='input-empty'>
                                <h2 className='title-organizations'>Wpisz nazwę konkretnej organizacji
                                    (opcjonalnie)</h2>
                                <form onSubmit={this.handleClick}>
                                    <label>
                                        <input/>
                                    </label>

                                    <div className='button-step4'>
                                        <label>
                                            <button className='then-step3'>Wstecz</button>
                                            <button type='submit' className='then-step3'>Dalej</button>
                                        </label>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>

                    <div className='step3-box2'>
                        <img className='background-step3' src='/src/assets/Background-Form.jpg'/>
                    </div>


                </div>

            </section>

        )
    }
}

export default Step3;
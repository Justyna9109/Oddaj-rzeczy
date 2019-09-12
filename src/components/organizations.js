import React, {Component} from 'react';

class Organizations extends Component {
    state = {
        pos: true,
        pos1: true,
        pos2: true,
        number: true,
    };
    handleClickShow = () => {
        this.setState({
            pos: true,
            pos1: true,
            pos2: true,
        })
    };
    handleClickHide = () => {
        this.setState({
            pos: false,
            pos1: false,
            pos2: true,
        })
    };
    handleClickHideShow = () => {
        this.setState({
            pos: false,
            pos1: true,
            pos2: false,
        })
    };
    handleClickNumber = () => {
        this.setState({
            number: true,
        })
    };
    handleClickNumbers = () => {
        this.setState({
            number: false,
        })
    };
    handleClickNumberies = () => {
        this.setState({
            number: false,
        })
    };

    render() {
        const style = {
            display: this.state.pos ? "" : 'none'
        };
        const style1 = {
            display: this.state.pos1 ? "none" : ""
        };
        const style2 = {
            display: this.state.pos2 ? "none" : ""
        };
        const style3 = {
            display: this.state.number ? "" : "none"
        };
        const style4 = {
            display: this.state.number ? "none" : ""
        };
        const style5 = {
            display: this.state.number ? "none" : ""
        };
        const style6 = {
            display: this.state.number ? "none" : ""
        };
        return (<section className='organizations'>
                <p className='who'>Komu pomagamy?</p>
                <img src='/src/assets/Decoration.svg'/>

                <div className='fundation'>
                    <p onClick={this.handleClickShow}>Fundacjom</p>
                    <p onClick={this.handleClickHide}>Organizacjom pozarządowym</p>
                    <p onClick={this.handleClickHideShow}>Lokalnym zbiórkom</p>
                </div>

                <div style={style}>
                    <p className='fundation-list'>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
                        współpracujemy.
                        Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>

                    <div className='local-text' style={style3}>
                        <div className='local-first-text'>
                            <table>
                                <tr>
                                    <td>Fundacja "Dbam o Zdrowie"
                                        <p>cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                                    </td>
                                    <td className='substation'>ubrania, jedzenie, sprzęt AGD, meble, zabawki</td>
                                </tr>
                            </table>
                        </div>

                        <div className='local-second-text'>
                            <table>
                                <tr>
                                    <td>Fundacja "Dla dzieci"
                                        <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                                    </td>
                                    <td className='substation'>ubrania, meble, zabawki</td>
                                </tr>
                            </table>
                        </div>

                        <div className='local-three-text'>
                            <table>
                                <tr>
                                    <td>Fundacja "Bez domu"
                                        <p>Cel i misja: Pomoc dla osób nie posiadająych miejsca zamieszkania.</p>
                                    </td>
                                    <td className='substation'>ubrania, jedzenie, ciepłe koce</td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <div className='local-text2' style={style5}>
                        <div className='local-three-text'>
                            <table>
                                <tr>
                                    <td>Fundacja "Bez domu"
                                        <p>Cel i misja: Pomoc dla osób nie posiadająych miejsca zamieszkania.</p>
                                    </td>
                                    <td className='substation'>ubrania, jedzenie, ciepłe koce</td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <div className='local-text3' style={style6}>
                        <div className='local-second-text'>
                            <table>
                                <tr>
                                    <td>Fundacja "Dla dzieci"
                                        <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                                    </td>
                                    <td className='substation'>ubrania, meble, zabawki</td>
                                </tr>
                            </table>
                        </div>
                    </div>


                    <div className='number'>
                        <p onClick={this.handleClickNumber}>1</p>
                        <p onClick={this.handleClickNumbers}>2</p>
                        <p onClick={this.handleClickNumberies}>3</p>
                    </div>
                </div>


                <div style={style1}>
                    <p className='organizations-list'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation.</p>

                    <div className='local-text' style={style3}>
                        <div className='local-first-text'>
                            <table>
                                <tr>
                                    <td>Zbiórka "Lorem Ipsum 1"
                                        <p>Quis varius quam quisque id diam vel quam elementum pulvinar.</p>
                                    </td>
                                    <td className='substation'>Egestas, sed, tempus</td>
                                </tr>
                            </table>
                        </div>

                        <div className='local-second-text'>
                            <table>
                                <tr>
                                    <td>Zbiórka "Lorem Ipsum 2"
                                        <p>Hendrerit gravida rutrum quisque non tellus orci ac autor augue.</p>
                                    </td>
                                    <td className='substation'>Ut, aliquam, purus, sit, amet</td>
                                </tr>
                            </table>
                        </div>

                        <div className='local-three-text'>
                            <table>
                                <tr>
                                    <td>Zbiórka "Lorem Ipsum 3"
                                        <p>Scelerisque in dictum non consectetur a erat nam.</p>
                                    </td>
                                    <td className='substation'>Mi, quis, hendrerit, dolor</td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <div className='local-text1' style={style4}>
                        <div className='local-four-text'>
                            <table>
                                <tr>
                                    <td>Zbiórka "Lorem Ipsum 3"
                                        <p>Scelerisque in dictum non consectetur a erat nam.</p>
                                    </td>
                                    <td className='substation'>Mi, quis, hendrerit, dolor</td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <div className='number'>
                        <p onClick={this.handleClickNumber}>1</p>
                        <p onClick={this.handleClickNumbers}>2</p>
                    </div>
                </div>


                <div style={style2}>

                    <div className='local-list'>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
                            quasi
                            architecto beatae vitae dicta sunt explicabo.</p>
                    </div>

                    <div className='local-text'>
                        <div className='local-first-text'>
                            <table>
                                <tr>
                                    <td>Zbiórka "Lorem Ipsum 1"
                                        <p>Quis varius quam quisque id diam vel quam elementum pulvinar.</p>
                                    </td>
                                    <td className='substation'>Egestas, sed, tempus</td>
                                </tr>
                            </table>
                        </div>

                        <div className='local-second-text'>
                            <table>
                                <tr>
                                    <td>Zbiórka "Lorem Ipsum 2"
                                        <p>Hendrerit gravida rutrum quisque non tellus orci ac autor augue.</p>
                                    </td>
                                    <td className='substation'>Ut, aliquam, purus, sit, amet</td>
                                </tr>
                            </table>
                        </div>

                        <div className='local-three-text'>
                            <table>
                                <tr>
                                    <td>Zbiórka "Lorem Ipsum 3"
                                        <p>Scelerisque in dictum non consectetur a erat nam.</p>
                                    </td>
                                    <td className='substation'>Mi, quis, hendrerit, dolor</td>
                                </tr>
                            </table>
                        </div>
                    </div>

                </div>

            </section>
        )
    }
}
export default Organizations;
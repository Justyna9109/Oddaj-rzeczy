import React, {Component} from 'react';

const description = {
    function1: 'W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się' +
        ' zajmują komu pomagają i czego potrzebują.',
    organizations: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' +
        ' dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    local: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, ' +
        ' eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.',
}

class Organizations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            org: 'function1'
        };
    }

    componentDidMount() {
        this.fetchData(this.state.org)
    }

    handleClick = name => () => this.fetchData(name)

    fetchData(name) {
        fetch(`http://localhost:3000/${name}`)
            .then(resp => resp.json())
            .then(d => {
                console.log(d);

                this.setState({
                    list: d,
                    org: name
                })
            })
    }
    get list() {
        return this.state.list.map(element => (
            <tr>
                <td>{element.name}
                    <p>{element.meta}</p>
                </td>
                <td className='substation'>{element.thing}</td>
            </tr>
        ))
    }

    render() {
        return (
            <section className='organizations'>
                <p className='who'>Komu pomagamy?</p>
                <img src='/src/assets/Decoration.svg'/>

                <div className='fundation'>
                    <p onClick={this.handleClick('function1')}>Fundacjom</p>
                    <p onClick={this.handleClick('organizations')}>Organizacjom pozarządowym</p>
                    <p onClick={this.handleClick('local')}>Lokalnym zbiórkom</p>
                </div>
                <div className="local-text">
                    <p>{description[this.state.org]}</p>
                </div>
                <table>
                    <tbody>
                    {this.list}
                    </tbody>
                </table>
            </section>
        )
    }
}
export default Organizations;
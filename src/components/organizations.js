import React,{Component} from 'react';

class Organizations extends Component{
    state={
        pos: true,
        pos1:true,
        pos2: true,
    };
    handleClickShow = () => {
        this.setState({
            pos:true,
            pos1:true,
            pos2:true,
        })
    };
    handleClickHide = () => {
        this.setState({
            pos:false,
            pos1:false,
            pos2:true,
        })
    };
    handleClickHideShow = () => {
        this.setState({
            pos:false,
            pos1:true,
            pos2: false,
        })
    };

    render() {
        const style={
            display: this.state.pos ? "" : 'none'
        };
        const style1={
            display: this.state.pos1 ? "none" : ""
        };
        const style2={
            display: this.state.pos2 ? "none" : ""
        };
        return(<section className='organizations'>
                <p className='who'>Komu pomagamy?</p>
                <img src='/src/assets/Decoration.svg'/>
                <div className='fundation'>
                    <p onClick={this.handleClickShow}>Fundacjom</p>
                    <p onClick={this.handleClickHide}>Organizacjom pozarządowym</p>
                    <p onClick={this.handleClickHideShow}>Lokalnym zbiórkom</p>
                </div>
                <div style={style}>
                <p className='fundation-list'>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy.
                    Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                </div>

                <div style={style1}>
                    <p className='organizations-list'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation.</p>
                </div>

                <div style={style2}>
                    <p className='local-list'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                        architecto beatae vitae dicta sunt explicabo.</p>
                </div>
            </section>

        )
    }
}

export default Organizations;
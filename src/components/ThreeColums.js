import React, {Component} from 'react';

class ThreeColumns extends Component {
    render() {
        return (<section className="three_columns">
                <div className='one_column'>
                    <span>10</span>
                    <p className='title'>ODDANYCH WORKÓW</p>
                    <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Excepteur sint
                        occaecat.</p>
                </div>

                <div className='two_column'>
                    <span>5</span>
                    <p className='title'>WSPARTYCH ORGANIZACJI</p>
                    <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Excepteur sint
                        occaecat.</p>
                </div>

                <div className='three_column'>
                    <span>7</span>
                    <p className='title'>ZORGANIZOWANYCH ZBIÓREK</p>
                    <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Excepteur sint
                        occaecat.</p>
                </div>

            </section>
        )
    }
}
export default ThreeColumns;
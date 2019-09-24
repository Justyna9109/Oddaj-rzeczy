import React, {Component} from 'react';
import Step1 from "./Step1.js";
import Step2 from "./Step2.js";
import Step3 from "./Step3.js";
import Step4 from "./Step4.js";
import Thanks from "./Thanks.js";

class Step extends Component{
    state= {
        step: 1
    }

    handleOnNext = (data) => {
        this.setState(prevState => ({
            ...prevState,
            ...data,
            step:  prevState.step + 1
        }))
    }
    render() {
        console.log(this.state)
        switch (this.state.step) {
            case 1: {
                return <Step1 onNext={this.handleOnNext} />
            }
            case 2: {
                return <Step2 onNext={this.handleOnNext} />
            }
            case 3: {
                return <Step3 onNext={this.handleOnNext} />
            }
            case 4: {
                return <Step4 onNext={this.handleOnNext} />
            }
            case 5: {
                return <Thanks onNext={this.handleOnNext} />
            }
        }
    }

}
export default Step;
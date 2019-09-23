import React, {Component} from 'react';
import Step1 from "./Step1.js";
import Step2 from "./Step2.js";
import Step3 from "./Step3.js";
import Step4 from "./Step4.js";
import Thanks from "./Thanks.js";

class Step extends Component{
    render() {
        return(<>
                <Step1/>
                <Step2/>
                <Step3/>
                <Step4/>
                <Thanks/>
            </>

        )
    }

}
export default Step;
import React, {Component} from 'react';
import MultySteps from '../components/MultySteps';

class Informations extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="information_page">
                <div className="container"> 
               <MultySteps />
            </div>
            </div>
        );
    }
}
export default  Informations;

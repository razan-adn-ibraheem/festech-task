import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import { Radio } from 'antd';
import yes from '../../static/images/icons/yes.png';
import no from '../../static/images/icons/no.png';

class First extends Component {
    continue = e => {
        e.preventDefault();
        // if (this.props.q1 == '' || this.props.q2=='' || this.props.q3=='') {

        // }
        // else {
        //     this.props.nextStep();
        // }

        this.props.nextStep();

    }

    back = e => {
        e.preventDefault();

        // this.props.prevStep();
    }



    render() {
        const { q1, q2, q3, handleChange} = this.props;
        const options = [
            { value: 'No', img: "no.png" },
            { value: 'Yes', img: "calen.png" },
        ];
        const options2 = [
            { value: 'No', img: "no.png" },
            { value: 'Yes', img: "calen.png" },
        ];
        const options3 = [
            { value: 'Upto 3 months' },
            { value: '3 to 6 months' },
            { value: '6 to 12 months' },
            { value: '+ 12 months' },
            { value: '+ 3 years' },
        ];


        return (
            <div >
               <div className="title">
               <div className="row">
                    <div className="col-2">
                        <h2>digg</h2>
                    </div>
                    <div className="col-10">
                        <div className="progressBar">
                            <h4>Progress</h4>
                            <ProgressBar now={100 / 7} />
                        </div>
                    </div>
                </div>
               </div>
                <div className="q_body">
                    <p className="q" > Have you ever visited Dubai?</p>
                    <Radio.Group onChange={handleChange('option')} >
                        {
                            options.map((option, key) => (
                                <Radio value={option.value}><img src={yes} alt="logo" />
                                    {option.value}</Radio> ))}
                    </Radio.Group>
                </div>

               <div className="q_body">
               <p className="q">  Do you have any friends or family in Dubai?</p>
                <Radio.Group onChange={handleChange('option')} >
                    {
                        options2.map((option, key) => (
                            <Radio value={option.value}><img src={yes} alt="logo" />
                                {option.value}</Radio> ))}
                </Radio.Group>
               </div>
              <div className="q_body">
              <p className="q"> How long do you want to stay in stay in Dubai?</p>
                <Radio.Group onChange={handleChange('option')} >
                    {
                        options3.map((option, key) => (
                            <Radio value={option.value}><img src={yes} alt="logo" />
                                {option.value}</Radio> ))}
                </Radio.Group>
              </div>
                <div className="btn_wrapper">
                <button className="dis_btn" onClick={this.back}>
                 Back
                </button>
                <button className="main_btn" onClick={this.continue}>
                    Next
                </button>
                </div>
            </div>
        );
    };
}

export default First;
import React, { Component } from 'react';
import  First  from './stepsForm/First';
import  Second  from './stepsForm/Second';
import  Third  from './stepsForm/Third';
import  Fourth  from './stepsForm/Fourth';
import  Fifth  from './stepsForm/Fifth';
import  Sixth  from './stepsForm/Sixth';
import Seventh  from './stepsForm/Seventh';
import AllInfo from './stepsForm/AllInfo';

export class MultySteps extends Component {
    state = {
        step: 1,

        // step 1
        q1: '',
        q2: '',
        q3: '',

        // step 2
        q4: '',
        // step 3
        q5: '',
        // step 4
        q6: '',
        // step 5
        q7: '',
        // step 6
        q8: '',
        // step 7
        q9: '',
    }

    nextStep = () => {
        const { step } = this.state;

        this.setState({
            step: step + 1
        });
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }

    showStep = () => {
        const { step, q1, q2, q3, q4, q5, q6, q7, q8, q9 } = this.state;

        if (step === 1)
            return (<First
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                q1={q1}
                q2={q2}
                q3={q3}
            />);
        if (step === 2)
            return (<Second
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                q1={q1}
                q2={q2}
                q3={q3}
                q4={q4}
            />);
        if (step === 3)
            return (<Third
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                q1={q1}
                q2={q2}
                q3={q3}
                q4={q4}
                q5={q5}
            />);

            if (step === 4)
            return (<Fourth
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                q1={q1}
                q2={q2}
                q3={q3}
                q4={q4}
                q5={q5}
                q6={q6}
            />);

            if (step === 5)
            return (<Fifth
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                q1={q1}
                q2={q2}
                q3={q3}
                q4={q4}
                q5={q5}
                q6={q6}
                q7={q7}
            />);

            if (step === 6)
            return (<Sixth
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                q1={q1}
                q2={q2}
                q3={q3}
                q4={q4}
                q5={q5}
                q6={q6}
                q7={q7}
                q8={q8}
            />);
            if (step === 7)
            return (<Seventh
                prevStep={this.prevStep}
                q1={q1}
                q2={q2}
                q3={q3}
                q4={q4}
                q5={q5}
                q6={q6}
                q7={q7}
                q8={q8}
                q9={q9}
            />);
            if(step === 8)
            return (<AllInfo 
                q1={q1}
                q2={q2}
                q3={q3}
                q4={q4}
                q5={q5}
                q6={q6}
                q7={q7}
                q8={q8}
                q9={q9}
                prevStep = {this.prevStep}
            />);
    }

    render() {
        const { step } = this.state;

        return (
            <>
                {this.showStep()}
            </>
        );
    }
}

export default MultySteps;
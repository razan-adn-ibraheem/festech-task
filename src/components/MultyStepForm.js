import React from 'react';
import { useForm, useStep } from "react-hooks-helper";
import { First } from './stepsForm/First';
import { Second } from './stepsForm/Second';
import { Third } from './stepsForm/Third';
import { Fourth } from './stepsForm/Fourth';
import { Fifth } from './stepsForm/Fifth';
import { Sixth } from './stepsForm/Sixth';
import { Seventh } from './stepsForm/Seventh';

const defaultData = {
    q1: "",
    q2: "",
    q3:"",
};

const steps = [
    { id: "first" },
    { id: "second" },
    { id: "third" },
    { id: "fourth" },
    { id: "fifth" },
    { id: "sixth" },
    { id: "seventh" },
]

const MultyStepForm = () => {
    const [formData, setForm] = useForm(defaultData);
    const { step, navigation } = useStep({
        steps,
        initialStep: 0,
    });

    const props = { formData, setForm, navigation }
    switch (step.id) {
        case 'first':
            return <First {...props} />
        case 'second':
            return <Second   {...props} />
        case 'third':
            return <Third  {...props}  />
        case 'fourth':
            return <Fourth  {...props} />
        case 'fifth':
            return <Fifth   {...props} />
        case 'sixth':
            return <Sixth   {...props} />
        case 'seventh':
            return <Seventh   {...props} />
    }
    return (
        <div>
            <h2> Multy step</h2>
        </div>
    )
}

export default MultyStepForm;
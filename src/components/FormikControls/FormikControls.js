import React from 'react';
import Input from './Input';
import DatePicker from './DatePicker';
import RadioButton from './RadioButton';
import Select from './Select';

function FormikControls(props){
    const { control, ...rest} = props
    switch(control){
        case 'input':
            return <Input {...rest} />
        case 'textarea':
        case 'select':
            return <Select {...rest} />
        case 'radio' :
            return <RadioButton {...rest} />
        case 'checkbox':
        case 'date':
            return <DatePicker {...rest} />
        default: return null
    }

}

export default FormikControls;
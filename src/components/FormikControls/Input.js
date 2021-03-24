import React from 'react';
import { Field, ErrorMessage} from 'formik';
import TextError from './TextError';
function Input(props){
    const { label, name,type,placeholder, ...rest}= props;
    return(
        <div className="form-control">
            <Field id={name} name={name} {...rest} type={type}  placeholder={placeholder}/>
            <label htmlFor={name}> {label}</label>
            <ErrorMessage name={name} component={TextError} />

        </div>
    )
}

export default Input;
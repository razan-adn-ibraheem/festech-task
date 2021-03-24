import React from 'react';
import { Field, ErrorMessage} from 'formik';
import TextError from './TextError';
function Select(props){
    const { label, name,options, ...rest}= props;
    return(
        <div className="form-control">
            <Field as="select" id={name} name={name} {...rest} >
                {options.map(option =>{
                    <option key={option.num_code} value={option.num_code}>
                        {option.nationality}
                    </option>
                })}
                </Field>
            <label htmlFor={name}> {label}</label>
            <ErrorMessage name={name} component={TextError} />

        </div>
    )
}

export default Select;
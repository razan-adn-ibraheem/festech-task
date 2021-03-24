import React from 'react';
import { Field, ErrorMessage} from 'formik';
import TextError from './TextError';
import DateView from 'react-datepicker';
import '../../../node_modules/react-datepicker/dist/react-datepicker.css';
import icon from '../../static/images/icon.png'
function DatePicker(props){
    const { label, name,type, placeholder, ...rest}= props;
    return(
        <div className="form-control">
            <Field id={name}
            className="date_pick"
             name={name}
             type={type}
              {...rest}    placeholder="Please select a date">
                  {
                      ({ form, field}) =>{
                          const { setFieldValue} =form 
                          const { value} = field
                          return <DateView
                          placeholder="Please select a date"
                            id={name}
                            {...field}
                            {...rest}
                            selected={value}
                            onChange={ val => setFieldValue(name, val)} />
                      }
                  }
            </Field>
            <img src={icon} alt="icon" />
            {/* <label htmlFor={name}> {label}</label> */}
            <ErrorMessage name={name} component={TextError} />

        </div>
    )
}

export default DatePicker;
import React from 'react';
import { Formik, Form, validateYupSchema, Field } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControls/FormikControls';
import Nationality from '../Api/q1.json';
import { Redirect, useHistory } from "react-router-dom";
import 'antd/dist/antd.css';
import { Radio } from 'antd';


function ApplyForm() {
    let history = useHistory();

    const option = [
        {
            num_code: "",
            alpha_2_code: "AF",
            alpha_3_code: "AFG",
            en_short_name: "Afghanistan",
            nationality: "Nationality"

        },
        {
            num_code: "4",
            alpha_2_code: "AF",
            alpha_3_code: "AFG",
            en_short_name: "Afghanistan",
            nationality: "Afghan"
        }];

    const initialValues = {
        firstName: '',
        lastName: '',
        birthDate: null,
        gender: 'm',
        // nationality:'',
        contactNum: '',
        email: ''
    }
    const validationSchema = Yup.object({
        firstName: Yup.string().required('Required!'),
        lastName: Yup.string().required('Required!'),
        birthDate: Yup.date().required('Required').nullable(),
        gender: Yup.string().required('Required!'),
        // nationality: Yup.string().required('Required!'),
        contactNum: Yup.number()
            .typeError("Not phone number")
            .positive("Should start via number")
            .integer("Just Number")
            .min(8)
            .required('Required!'),
        email: Yup.string().email('Invalid email format').required('Required')
    })
    const onSubmit = values => {
        console.log("val", values);
        let info = [{ firstName: values.firstName },
        { lastName: values.lastName },
        { birthDate: values.birthDate },
        { gender: values.gender },
        { contactNum: values.contactNum },
        { email: values.email }]
        localStorage.setItem("Home_values", JSON.stringify(info));
        history.push('/Informations')

    }

    return (
  <div>
            <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {
                formik => (
                    <Form>
                        <div className="row">
                            <div className="col-md-6 col-12">
                                <FormikControl control='input' type="text" label="First Name" placeholder="." name="firstName" />
                            </div>
                            <div className="col-md-6 col-12">
                                <FormikControl control='input' type="text" label="Last Name" placeholder="." name="lastName" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-12">
                                <FormikControl control='date' type="date" label="Birth Of Date" placeholder="Date Of Birth" name="birthDate" />
                            </div>
                            <div className="col-md-6 col-12">
                                <div id="my-radio-group">Gender</div>
                                <div role="group" >

                                    <Field type="radio" name="gender" value="m" className="gender_radio" />
                                    <label htmlFor="m">Male</label>


                                    <Field type="radio" name="gender" value="f" className="gender_radio" />
                                    <label htmlFor="f">female</label>
                                </div>
                            </div>
                        </div>
                        {/* <div className="row">
                            <div className="col-md-6 col-12">
                                <FormikControl control='select'  label=""  name="nationality" options={option} />
                            </div>
                            <div className="col-md-6 col-12">
                                
                            </div>
                        </div> */}
                        <div className="row">
                            <div className="col-md-6 col-12">
                                <FormikControl control='input' type="num" label="Contact Number" placeholder="." name="contactNum" />
                            </div>
                            <div className="col-md-6 col-12">
                                <FormikControl control='input' type="email" label="Email Address" placeholder="." name="email" />
                            </div>
                        </div>
                        <button type="submit" className="main_btn"> Apply now</button>
                    </Form>
                )
            }

        </Formik>
  </div>
    )
}

export default ApplyForm;
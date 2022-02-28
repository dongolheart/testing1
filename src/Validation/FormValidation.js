import React from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'
const FormValidation = () => {
    return (
        <>
          <Formmik initialValues={{firstName:'',lastName:'',email:'', passowrd:'',cpassword:''}}>
              validationSchema={Yup.object({
                  firstName:Yup.string()
                  .max(20,'Must be 20 characters or less')
                  .required('Firstname is required'),
                  
                  lastName:Yup.string()
                  .max(20,'Must be 20 characters or less')
                  .required('lastname is required'),
                  email:Yup.string()
                  .email('Invalid email format')
                  .required('Email is required'),

                  password:Yup.string()
                  .matches(/(?=.*[A-za-z])(?=.*)(?=.*[@$!%*#?&])[A-za-z@$!%*#?&]{8,}$/,
                  "must contain 8 characters,one uppercase,one lowercase,one number and one special charcters")

                  .required('password is required'),
                  cpassword:Yup.string()
                  .required('Required field')
                  .oneOf([Yup.ref("password"),null],"password and confirm password must match")
              })}
              <div className="col-md-6 offset-md-3 p-3 mt-4 shadow-lg">
                  <Form>
                      <div className="mb-3">
                          <label htmlFor="firstName">FirstName</label>
                        <Field type="text" name="firstName" id="firstName" className="form-control"/>
                        <ErrorMessage name="firstName">
                            {msg=><div style={{color:'red'}}>{msg}</div>}

                        </ErrorMessage>
                      </div>
                  </Form>
                  <Form>
                      <div className="mb-3">
                          <label htmlFor="lastName">lastName</label>
                        <Field type="text" name="lastName" id="lastName" className="form-control"/>
                        <ErrorMessage name="lastName">
                            {msg=><div style={{color:'red'}}>{msg}</div>}

                        </ErrorMessage>
                      </div>
                  </Form>
                  <Form>
                      <div className="mb-3">
                          <label htmlFor="email">Email</label>
                        <Field type="text" name="email" id="email" className="form-control"/>
                        <ErrorMessage name="email">
                            {msg=><div style={{color:'red'}}>{msg}</div>}

                        </ErrorMessage>
                      </div>
                  </Form>
                  <Form>
                      <div className="mb-3">
                          <label htmlFor="password">Password</label>
                        <Field type="text" name="password" id="password" className="form-control"/>
                        <ErrorMessage name="password">
                            {msg=><div style={{color:'red'}}>{msg}</div>}

                        </ErrorMessage>
                      </div>
                      
                  </Form>
                  <Form>
                      <div className="mb-3">
                          <label htmlFor="cpassword">FirstName</label>
                        <Field type="text" name="cpassword" id="cpassword" className="form-control"/>
                        <ErrorMessage name="cpassword">
                            {msg=><div style={{color:'red'}}>{msg}</div>}

                        </ErrorMessage>
                      </div>
                      <div className="mb-3">
                          <button type="submit" className="btn btn-primary">Register</button>
                      </div>
                  </Form>
                  
              </div>
              
              </Formmik>  
        </>
    )
}

export default FormValidation

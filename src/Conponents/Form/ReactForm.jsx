import React from "react"
import Form from "react-bootstrap/Form"
import { Formik, useFormik } from "formik"

const SignUpForm = () => {
  const formik = useFormik(
    {
      initialValues: {
        userName: '',
        email: '',
        password: ''
      },
      onSubmit: (formStates) => {
        alert(JSON.stringify(formStates, null, 2))
      }
    }
  )

  return (
    <Form
  )
}




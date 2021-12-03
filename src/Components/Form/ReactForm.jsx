import React from 'react';
import { useFormik } from 'formik';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export const SignupForm = () => {
  // Note that we have to initialize ALL of fields with values. These
  // could come from props, but since we don’t want to prefill this form,
  // we just use an empty string. If we don’t do this, React will yell
  // at us.
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Label htmlFor="firstName">First Name</Form.Label>
      <Form.Control
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />

      <Form.Label htmlFor="lastName">Last Name</Form.Label>
      <Form.Control
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />

      <Form.Label htmlFor="email">Email Address</Form.Label>
      <Form.Control
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <Button type="submit">Submit</Button>
    </Form>
  );
};

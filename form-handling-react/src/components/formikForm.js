import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Initial form values
const initialValues = {
  username: '',
  email: '',
  password: ''
};

// Validation schema
const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required')
});

function FormikForm() {
  const handleSubmit = (values, { resetForm }) => {
    console.log('Formik Form submitted:', values);
    resetForm(); // Clear form after submission
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form className="max-w-md mx-auto p-4 bg-gray-100 rounded shadow-md">
        <div className="mb-4">
          <label className="block mb-1">Username</label>
          <Field name="username" type="text" className="w-full p-2 border border-gray-300 rounded" />
          <ErrorMessage name="username" component="p" className="text-red-500 text-sm" />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <Field name="email" type="email" className="w-full p-2 border border-gray-300 rounded" />
          <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Password</label>
          <Field name="password" type="password" className="w-full p-2 border border-gray-300 rounded" />
          <ErrorMessage name="password" component="p" className="text-red-500 text-sm" />
        </div>

        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Register
        </button>
      </Form>
    </Formik>
  );
}

export default FormikForm;

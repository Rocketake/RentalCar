import { Formik } from "formik";
import React from "react";

const BookForm = () => {
  const initialValues = {};
  return (
    <Formik initialValues={initialValues}>
      <Form></Form>
    </Formik>
  );
};

export default BookForm;

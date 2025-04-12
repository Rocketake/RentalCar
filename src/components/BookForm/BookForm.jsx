import { Field, Form, Formik } from "formik";
import React from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import CalendarField from "./CalendarField.jsx";

const BookForm = () => {
  const initialValues = {
    name: "",
    email: "",
    bookingDate: {
      startDate: new Date(),
      endDate: new Date(),
    },
    comment: "",
  };

  const handleSubmit = (values, actions) => {
    console.log("Form values:", values);
    actions.resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <Field name="name" type="text" placeholder="name"></Field>
        <Field name="email" type="text" placeholder="email"></Field>
        <Field name="bookingDate" component={CalendarField} />
        <Field name="comment" type="text" placeholder="comment"></Field>
      </Form>
    </Formik>
  );
};

export default BookForm;

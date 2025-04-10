import axios from "axios";
import { Field, Formik, Form } from "formik";
import React, { useEffect, useId, useState } from "react";
import s from "./CatalogForm.module.css";
import clsx from "clsx";
import Button from "../Button/Button.jsx";

const CatalogForm = ({ onSubmit }) => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    async function fetchCarBrands() {
      const response = await axios.get(
        "https://car-rental-api.goit.global/brands"
      );
      setBrands(response.data);
    }
    fetchCarBrands();
  }, []);

  const brandFieldId = useId();
  const priceFieldId = useId();
  const fromMileageFieldId = useId();
  const toMileageFieldId = useId();

  const handleSubmit = (values, actions) => {
    onSubmit(values);

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        brand: "",
        rentalPrice: "",
        minMileage: "",
        maxMileage: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={s.formWrapper}>
        <div className={s.fieldWrapper}>
          <label className={s.label} htmlFor={brandFieldId}>
            Car brand
          </label>
          <Field
            className={clsx(s.brandSelect, s.field)}
            as="select"
            name="brand"
            id={brandFieldId}
          >
            <option value="" hidden>
              Choose a brand
            </option>
            {brands.map((brand) => {
              return (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              );
            })}
          </Field>
        </div>

        <div className={s.fieldWrapper}>
          <label className={s.label} htmlFor={priceFieldId}>
            Price/ 1 hour
          </label>
          <Field
            className={clsx(s.priceSelect, s.field)}
            as="select"
            name="rentalPrice"
            id={priceFieldId}
          >
            <option value="" hidden>
              Choose a price
            </option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
            <option value="60">60</option>
            <option value="70">70</option>
            <option value="80">80</option>
            <option value="90">90</option>
            <option value="100">100</option>
          </Field>
        </div>

        <div className={s.fieldWrapper}>
          <label className={s.label} htmlFor={fromMileageFieldId}>
            Car mileage / km
          </label>

          <div className={s.mileageWrapper}>
            <Field
              className={s.mileageInput}
              type="number"
              name="minMileage"
              placeholder="From"
              id={fromMileageFieldId}
            />
            <Field
              className={s.mileageInput}
              type="number"
              name="maxMileage"
              placeholder="To"
              id={toMileageFieldId}
            />
          </div>
        </div>

        <Button variant="search" type="submit">
          Search
        </Button>
      </Form>
    </Formik>
  );
};

export default CatalogForm;

import React, { useState, useRef, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const CalendarField = ({ field, form }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const formattedValue =
    field.value?.startDate && field.value?.endDate
      ? `${field.value.startDate.toLocaleDateString()} - ${field.value.endDate.toLocaleDateString()}`
      : "";

  return (
    <div className="calendar-wrapper" ref={ref}>
      <input
        type="text"
        readOnly
        onClick={() => setOpen(!open)}
        value={formattedValue}
        placeholder="Booking date"
        className="calendar-input"
      />
      {open && (
        <div className="calendar-popup">
          <DateRange
            ranges={[
              {
                startDate: field.value?.startDate || new Date(),
                endDate: field.value?.endDate || new Date(),
                key: "selection",
              },
            ]}
            onChange={(ranges) => {
              form.setFieldValue(field.name, {
                startDate: ranges.selection.startDate,
                endDate: ranges.selection.endDate,
              });
            }}
            moveRangeOnFirstSelection={false}
          />
        </div>
      )}
    </div>
  );
};

export default CalendarField;

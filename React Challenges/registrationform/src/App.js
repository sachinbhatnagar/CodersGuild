import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [values, setValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const handleFirstName = (e) => {
    setValue({ ...values, firstName: e.target.value });
  };
  const handleLastName = (e) => {
    setValue({ ...values, lastName: e.target.value });
  };
  const handleEmail = (e) => {
    setValue({ ...values, email: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    setValue({ firstName: "", lastName: "", email: "" });
  };
  const [submit, setSubmit] = useState(false);
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="register-form">
        {submit ? (
          <div className="success-message">
            Success! Thank you for registering
          </div>
        ) : null}

        <input
          onChange={handleFirstName}
          value={values.firstName}
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          required
        />

        <input
          onChange={handleLastName}
          value={values.lastName}
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          required
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="last-name-error">Please enter a last name</span> */}
        <input
          onChange={handleEmail}
          value={values.email}
          id="email"
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
          required
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="email-error">Please enter an email address</span> */}
        <button className="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

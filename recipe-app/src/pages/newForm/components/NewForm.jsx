import React, { useState } from "react";
import TextInput from "./TextInput";
import { Label, Form } from "./styledComponents/Form.styled";
import RadioInput from "./styledComponents/RadioInput";
import "../formStyling/form.css";

function NewForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    isChecked: false,
    text: null,
  });
  const onChangeHandler = (e) => {
    setFormData((state) => ({ ...state, [e.target.name]: e.target.value }));
  };
  console.log(formData);
  return (
    <div className="row">
      <div className="col-md-12">
        <Form>
          <h1> Sign Up </h1>

          <fieldset>
            <legend>
              <span className="number">1</span> Your Basic Info:
            </legend>
            <TextInput
              onChangeHandler={onChangeHandler}
              formData={formData}
              value={formData.name}
              labelValue="Name"
              type="text"
              name="name"
              id="name"
            />
            <TextInput
              onChangeHandler={onChangeHandler}
              value={formData.email}
              labelValue="Email"
              type="email"
              name="email"
              id="mail"
            />
            <TextInput
              onChangeHandler={onChangeHandler}
              value={formData.password}
              labelValue="Password"
              type="password"
              name="password"
              id="password"
            />

            <Label>Age:</Label>
            <RadioInput
              labelValue=" Under 13"
              name="user_age"
              id="under_13"
              value="under_13"
            />

            <RadioInput
              labelValue=" Over 13"
              name="user_age"
              id="over_13"
              value="over_13"
            />
          </fieldset>

          <fieldset>
            <legend>
              <span className="number">2</span> Your Profile
            </legend>
            <label htmlFor="bio">Bio:</label>
            <textarea id="bio" name="user_bio"></textarea>
            <label htmlFor="job">Job Role:</label>
            <select id="job" name="user_job">
              <optgroup label="Web">
                <option value="frontend_developer">Front-End Developer</option>
                <option value="php_developer">PHP Developer</option>
                <option value="python_developer">Python Developer</option>
                <option value="rails_developer">Rails Developer</option>
                <option value="web_designer">Web Designer</option>
                <option value="wordpress_developer">Wordpress Developer</option>
              </optgroup>
              <optgroup label="Mobile">
                <option value="android_developer">Android Developer</option>
                <option value="ios_developer">IOS Developer</option>
                <option value="mobile_designer">Mobile Designer</option>
              </optgroup>
              <optgroup label="Business">
                <option value="business_owner">Business Owner</option>
                <option value="freelancer">Freelancer</option>
              </optgroup>
            </select>
            <Label>Interests:</Label>
            <input
              type="checkbox"
              id="development"
              value="interest_development"
              name="user_interest"
            />
            <label className="light" htmlFor="development">
              Development
            </label>
            <br />
            <input
              type="checkbox"
              id="design"
              value="interest_design"
              name="user_interest"
            />
            <label className="light" htmlFor="design" />
            Design
            <label>
              <br />
              <input
                type="checkbox"
                id="business"
                value="interest_business"
                name="user_interest"
              />
              <label className="light" htmlFor="business" />
              Business
            </label>
          </fieldset>

          <button type="submit">Sign Up</button>
        </Form>
      </div>
    </div>
  );
}

export default NewForm;

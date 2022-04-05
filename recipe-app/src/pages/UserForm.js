import React, { useState } from "react";

function UserForm() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    gender: "",
  });
  const captureData = (e) => {
    e.preventDefault();
    const body = formData;
    // const body = {
    //   first_Name: formData.name,
    //   second: formData.surname,
    //   email_address: formData.email,
    //   urser_password: formData.password,
    //   user_gender: formData.gender,
    // };
    console.log(body);
  };
  return (
    <section className="container">
      <form onSubmit={captureData}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            value={formData.name}
            type="text"
            className="form-control"
            id="firstName"
            placeholder="Enter name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="LastName">Last Name</label>
          <input
            onChange={(e) =>
              setFormData({ ...formData, surname: e.target.value })
            }
            value={formData.surname}
            type="text"
            className="form-control"
            id="LastName"
            placeholder="Enter last name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            value={formData.password}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Gender</label>
          <select
            onChange={(e) =>
              setFormData({ ...formData, gender: e.target.value })
            }
            value={formData.gender}
            className="form-control"
            id="exampleFormControlSelect1"
          >
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <p>{formData.name}</p>
    </section>
  );
}

export default UserForm;

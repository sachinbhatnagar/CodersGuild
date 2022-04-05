import React, { useState } from "react";

function MyForm() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData.name, formData.surname);
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          type="text"
          className="form-control"
          placeholder="name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input
          onChange={(e) =>
            setFormData({ ...formData, surname: e.target.value })
          }
          type="text"
          className="form-control"
          placeholder="Enter your last name"
        />
      </div>

      <button onClick={handleSubmit} type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default MyForm;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const UserRegistration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/add",
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <Link to="/">
        <button>Go to Home Page</button>
      </Link>
    </div>
  );
};

export default UserRegistration;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";

export default function Users() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/users");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleEdit = (id) => {
    // console.log("hi :" + id);
    window.location.href = `/edit-user/${id}`;
  };

  const handleDelete = async (id) => {
    try {
      console.log(`Deleting entry with id ${id}`);
      await axios.delete(`http://127.0.0.1:8000/api/users/${id}`);
      setData(data.filter((item) => item.id !== id));
      console.log("Entry deleted successfully");
    } catch (error) {
      console.error("Error deleting entry:", error);
    }
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>
                <Link to={`/user/${item.id}`}>{item.name}</Link>
              </td>
              <td>{item.email}</td>
              <td>
                <button onClick={() => handleEdit(item.id)}>Edit</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/">
        <button>Go to Home Page</button>
      </Link>
    </div>
  );
}

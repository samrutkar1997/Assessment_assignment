import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
export default function Edituser() {
  const { id } = useParams();
  const [newName, setNewName] = useState();
  useEffect(() => {
    console.log("my user:" + id);
  });
  const handleEdit = async () => {
    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/api/users/${id}/edit-username`,
        {
          username: newName,
        }
      );
      console.log("Username updated:", response.data);
      setNewName("");
    } catch (error) {
      console.error("Error updating username:", error);
    }
  };

  return (
    <div>
      <label>Write new username:</label>
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        placeholder="Enter new name"
      />
      <button onClick={handleEdit}>Update Name</button>
      <Link to="/users">
        <button>Go to User List</button>
      </Link>
    </div>
  );
}

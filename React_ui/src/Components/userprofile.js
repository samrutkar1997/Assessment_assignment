import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

export default function Userprofile() {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    console.log(id);
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/users/${id}`
        );
        console.log(response.data);
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [id]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      <p>
        <strong>Name:</strong> {userData.user.name}
      </p>
      <p>
        <strong>Email:</strong> {userData.user.email}
      </p>
      <Link to="/">
        <button>Go to Home Page</button>
      </Link>
    </div>
  );
}

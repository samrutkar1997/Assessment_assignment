import React from "react";

import { Link } from "react-router-dom";
export default function home() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/registration">registration</Link>
          </li>
          <li>
            <Link to="/Users">Users</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

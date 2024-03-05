import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./Components/register";
import Users from "./Components/users";
import Home from "./Components/home";
import EditUser from "./Components/edituser";
import UserProfile from "./Components/userprofile";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="registration" element={<Registration />} />
        <Route path="users" element={<Users />} />
        <Route path="/edit-user/:id" element={<EditUser />}></Route>
        <Route path="/user/:id" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

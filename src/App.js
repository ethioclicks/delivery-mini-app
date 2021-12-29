// import { Route,  Routes } from "react-router";

import { BrowserRouter, Redirect, Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import Home from "./pages/Home";
import HeaderSection from "./components/Header-Section";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserDashboard from "./pages/UserDashboard";
import AddDeliveryOrder from "./pages/deliveryOrder";
import FooterSection from "./components/Footer-Section";

function App() {
  const usersList= [
    {email:'a@b.com', password:'1234'},
    {email:'c@d.com', password:'1234'}]

  return (
    <div className="App">
      
      <BrowserRouter>
        <HeaderSection />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/user-dashboard" element={<UserDashboard />} />
            <Route path="/add-delivery" element={<AddDeliveryOrder />} />
          </Routes>
        </main>
      </BrowserRouter>
     <FooterSection/>
    </div>
  );
}

export default App;

import "./App.css";
import React from "react";
import Login from "./components/Login/Login";
// import RegisterUser from './components/Registration/RegisterUser';
// import Registration from './components/Registration/Registration';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import OwnerRegistration from "./components/Registration/OwnerRegistration/ownerRegistration";
import UserDetails from "./components/UserDetails/UserDetails";
import Forget from "./components/Login/Forget";
import Navbar from "./components/Home/Navbar/Navbar";
import Footer from "./components/Home/Footer/Footer";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/user/details' element={<UserDetails />}></Route>
        <Route path='/ownerSignUp' element={<OwnerRegistration />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/forget-password' element={<Forget />}></Route>

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
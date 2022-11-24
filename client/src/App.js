import "./App.css";
import React from "react";
import Login from "./components/Login/Login";
// import RegisterUser from './components/Registration/RegisterUser';
// import Registration from './components/Registration/Registration';
import UserRegistration from "./components/Registration/Registration";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import OwnerRegistration from "./components/Registration/OwnerRegistration/ownerRegistration";
import UserDetails from "./components/UserDetails/UserDetails";
import Forget from "./components/Login/Forget";
import Navbar from "./components/Home/Navbar/Navbar";
import Footer from "./components/Home/Footer/Footer";
import StepperForm from "./components/HostelRegistration/HostelStepperForm";
import DataProvider from "./ContextAPI/DataProvider";
import UserStepperForm from "./components/UserRegistration/UserStepperForm";
import Explore from "./components/Explore/Explore";
import SideBar from "./components/MyAccount/SideBar/SideBar";
import Profile from "./components/MyAccount/Profile/Profile";
import Accomodation from "./components/MyAccount/Accomodation/Accomodation";
function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path="/explore" element={ <Explore/>}> </Route>
          <Route path='/hostelRegistration' element={<StepperForm />}></Route>
          <Route path='/userRegistration' element={<UserStepperForm />}></Route>

          <Route path='/user/details' element={<UserDetails />}></Route>
          <Route path='/ownerSignUp' element={<OwnerRegistration />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/profile' element={<SideBar />}></Route>
          <Route path='/forget-password' element={<Forget />}></Route>
          <Route path='/userProfile' element={<Profile/>}></Route>
          <Route path="/userAccomodation" element={<Accomodation/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;

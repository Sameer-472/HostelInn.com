import "./App.css";
import React, { useState , useEffect} from "react";
import { BrowserRouter, Routes, Route, useMatches , useLocation } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import UserDetails from "./components/UserDetails/UserDetails";
import Navbar from "./components/Home/Navbar/Navbar";
import Footer from "./components/Home/Footer/Footer";
import StepperForm from "./components/HostelRegistration/HostelStepperForm";
import DataProvider from "./ContextAPI/DataProvider";
import UserStepperForm from "./components/UserRegistration/UserStepperForm";
import Explore from "./components/Explore/Explore";
import SideBar from "./components/MyAccount/SideBar/SideBar";
import Dashboard from "./components/MyAccount/Dashboard/Dashboard";
import Accomodation from "./components/MyAccount/Accomodation/Accomodation";
import Profile from "./components/MyAccount/Profile/Profile";
import ProfileSetup from "./components/HostelRegistration/ProfileSetup/ProfileSetup";
import OwnerRegistration from "./components/SignUp/OwnerRegistration/ownerRegistration";
import OwnerNavbar from "./Pages/HostelOwner/Navbar/Navbar";
import { State } from "./Redux/Actions/state";
import { useSelector } from "react-redux";
import OwnerSignIn from "./components/SignIn/ownerSignIn/OwnerSignIn";







function App() {  
  const result = useSelector((state)=> state);
  // const state = result.state;

  const [role, setRole] = useState('owner');
  console.log(role);
  return (
    <DataProvider>
      <BrowserRouter>
      {/* {!state ? <Navbar/>: <OwnerNavbar/>} */}
      {role === 'user' ? <Navbar setRole = {setRole}/> : <OwnerNavbar setRole={setRole}/>}
      {/* <OwnerNavbar/> */}
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path="/explore" element={ <Explore/>}> </Route>
          <Route path='/hostelRegistration' element={<StepperForm />}></Route>
          <Route path='/userRegistration' element={<UserStepperForm />}></Route>
          <Route path='/user/details' element={<UserDetails />}></Route>
          <Route path='/profile' element={<SideBar />}>
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='accommodation' element={<Accomodation />} />
            <Route path='profile' element={<Profile />} />
          </Route>
          <Route path='/ownerSignUp' element={<OwnerRegistration/>}></Route>
          <Route path='/OwnerSignIn' element={<OwnerSignIn/>}></Route>
          {/* <Route path='/forget-password' element={<Forget />}></Route> */}
          <Route path='/userProfile' element={<Profile/>}></Route>
          <Route path="/userAccomodation" element={<Accomodation/>}></Route>
          <Route path='/profileSetup' element={<ProfileSetup />}></Route>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;

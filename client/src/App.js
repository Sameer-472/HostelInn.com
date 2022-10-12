import './App.css';
import Login from './components/Login/Login';
// import RegisterUser from './components/Registration/RegisterUser';
// import Registration from './components/Registration/Registration';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import Home from './components/Home/Home';
import OwnerRegistration from './components/Registration/OwnerRegistration/ownerRegistration';
import UserDetails from "./components/UserDetails/UserDetails";
import Forget from './components/Login/Forget';
import { MainBody } from './components/Home/MainBody/MainBody';
import { ChooseAnimation } from './components/Home/ChooiceAnimation/ChooseAnimation';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/user/details" element={<UserDetails />}></Route>        
        <Route path='/ownerSignUp' element={<OwnerRegistration/>} ></Route>
        <Route path='/login' element={<Login/>} ></Route>
        {/* <Route path='/home' element={<Home/>} ></Route> */}
        <Route path='/forget-password' element={<Forget/>} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
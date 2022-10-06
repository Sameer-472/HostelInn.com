import './App.css';
import Login from './components/Login/Login';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import OwnerRegistration from './components/Registration/OwnerRegistration/ownerRegistration';
import UserRegistration from './components/Registration/Registration';
import UserDetails from "./components/UserDetails/UserDetails";
import Forget from './components/Login/Forget';
import Home from './components/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/userSignUp' element={<UserRegistration />} />
        <Route path='/user/details' element={<UserDetails />}></Route>
        <Route path='/ownerSignUp' element={<OwnerRegistration />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/forget-password' element={<Forget />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import Login from './components/Login/Login';
// import RegisterUser from './components/Registration/RegisterUser';
import Registration from './components/Registration/Registration';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home/Home';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Registration/>} ></Route>
        <Route path='/login' element={<Login/>} ></Route>
        <Route path='/home' element={<Home/>} ></Route>
      {/* <Login/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

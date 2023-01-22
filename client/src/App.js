import './App.css';
import Navbar from './components/components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/components/Footer/Footer';
import { useSelector } from 'react-redux'
import Login from './components/components/Login/Login';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { getMyProfile, loadUser } from './Actions/userActions'
import Home from './components/components/Home/Home';
import AboutUs from './components/components/AboutUs/AboutUs';
import Register from './components/components/Register/Register';
import Account from './components/components/Account/Account';
import DoctorLogin from './components/components/DoctorLogin/DoctorLogin';
import { loadDoctor } from './Actions/userActions';
import MyPatients from './components/components/MyPatients/MyPatients';
import DoctorRegister from './components/components/DoctorRegister/DoctorRegister';


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadUser())
    dispatch(loadDoctor())
  }, [])


  const { isAuthenticated } = useSelector((state) => state.user);
  const { isDocAuthenticated } = useSelector((state) => state.doctor)

  return (
    <div className="App">

      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={isAuthenticated ? <Home /> : <Login />}></Route>
          <Route path='/register' element={isAuthenticated ? <Home /> : <Register />}></Route>
          <Route path='/about' element={<AboutUs />}></Route>
          <Route path='/account' element={isAuthenticated || isDocAuthenticated ? <Account /> : <Login />}></Route>
          <Route path='/login/doctor' element={isDocAuthenticated ? <Home /> : <DoctorLogin />}></Route>
          <Route path='/myPatients' element={isDocAuthenticated ? <MyPatients /> : <DoctorLogin />}></Route>
          <Route path='/register/doctor' element={isDocAuthenticated ? <Home /> : <DoctorRegister />}></Route>
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;

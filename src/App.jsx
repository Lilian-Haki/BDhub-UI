import React from 'react';
import Navbar from './components/Navbar/Navbar';
import LoginForm from './components/LoginForm/Login';
import Footer from './components/Footer/Footer';
import RegisterForm from './components/RegisterForm/Register';
import OTP from './components/OTP/Otp';
import OTPNotice from './components/RegisterForm/Otpnotice'
import Envelope from './components/Envelope/Envelope';
import LandingPage from './components/LandingPage/LandingP';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import './App.css'; // Optional for styling

const App = () => {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/LandingPage' element={<LandingPage/>}/>
        <Route path='/Envelope' element={<Envelope/>}/>
        <Route  path='/' element={<LoginForm/>}/>
        <Route  path='/register' element={<RegisterForm/>}/>
        <Route path='/OTP' element={<OTP/>}/>
        <Route path='/notification' element={<OTPNotice/>}/>
      </Routes>
      <main>
      </main>
      <Footer />
    </div>
    </Router>
  );
}

export default App;

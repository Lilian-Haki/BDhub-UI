import React from 'react';
import Navbar from './components/Navbar/Navbar';
import LoginForm from './components/LoginForm/Login';
import Footer from './components/Footer/Footer';
import RegisterForm from './components/RegisterForm/Register';
import OTP from './components/OTP/Otp';
import OTPNotice from './components/RegisterForm/Otpnotice'
import Popup from './components/Popup/Popup'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import './App.css'; // Optional for styling

const App = () => {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path ='/popup' element={<Popup/>}></Route>
        <Route  path='/' element={<LoginForm/>}/>
        <Route  path='/register' element={<RegisterForm/>}/>
        <Route path='/otp' element={<OTP/>}/>
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

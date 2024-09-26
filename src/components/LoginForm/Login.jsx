import React, { useState } from 'react';
import './Login.css';

const LoginForm = ()=> {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with: ", { email, password });
    // You can add form validation and authentication logic here
  };

  return (
    <div className="lcontainer">
      <form onSubmit={handleSubmit} className="form">
        <h2>Hello there,</h2>
        <h5>Sign in now for great values at Agile BidHub</h5>
        {/*<div className="inputGroup">
          <label>First Name</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="inputGroup">
          <label>Last Name</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>*/}
        <div className="inputGroup">
          <label>Username</label>
          <input
            type="text"
            /*value={username}*/
            placeholder='Your Username'
            /*onChange={(e) => setusername(e.target.value)}*/
            required
          />
        </div>
        
        <div className="inputGroup">
          <label>Password</label>
          <input
            type="password"
            placeholder='Enter your Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="button">Sign In</button>
        <h5>Forgot your Username or Password?</h5>
      </form>
      <div>
    <h2>Don't have an account?</h2>
    <button className='button2'>Register</button>
      </div>
    </div>
  );
}
export default LoginForm;

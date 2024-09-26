import React, { useState } from 'react';
import './Register.css';
import OTPNotice from './Otpnotice'


const RegisterForm = ()=> {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleAgreeClick = () => {
    setPopupVisible(true); // Show the popup when clicking "I Agree to the User Agreement"
    document.body.style.overflow = 'hidden'; // Disable page scrolling
  };
  const closePopup = () => {
    setPopupVisible(false); // Close OTP popup when needed
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with: ", { email, password });
    // You can add form validation and authentication logic here
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h2>Complete Account Setup</h2>
        <div className="inputGroup1">
          <div>
          <label>First Name</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          </div>
          <div>
          <label>Last Name</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            // required
          />
        </div>
        </div>
        <div className="inputGroup">
          <label>Username</label>
          <input
            type="text"
            /*value={username}*/
            placeholder='Your Username'
            /*onChange={(e) => setusername(e.target.value)}*/
            // required
          />
        </div>
        <div className="inputGroup1">
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            // required
          />
          </div>
           <div>
          <label>Physical Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            // required
          />
          </div>
        </div>
        <div className="inputGroup">
          <label>Company</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            // required
          />
          </div>
          <div className="inputGroup">
          <label>Phone Number</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            // required
          />
        </div>
        <div className="inputGroup">
          <label>Password</label>
          <input
            type="password"
            placeholder='Enter your Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            // required
          />
        </div>
        <button type="submit" className="button">Sign In</button>
        <h5>Please give your consent for electronic arketing communications.</h5>
        <div>
        <input
        type="radio"
        name="options"
        value="option1"
        // checked={selectedOption === 'option1'}
        // onChange={handleOptionChange}
      />
Yes, I would like to receive electronnic marketing communications<br></br>
<input
        type="radio"
        name="options"
        value="option2"
        // checked={selectedOption === 'option2'}
        // onChange={handleOptionChange}
      />
No, please do not send any electronic marketing communications
</div>
<div className='agreement'>
    <h5>By Clicking the "I Agree to the User Agreement" button, you are bound to the <u>User Agreement.</u>If you disagree with the terms and conditions of this User Agreement, you may not complete your account registration,gain access, or otherwise use the Sites or te Services. </h5>
    <button className='button2'>I Disagree </button>
    <button onClick={handleAgreeClick} >I Agree to the User Agreement</button>
      </div>
      </form>
      {/* OTP Popup */}
      {isPopupVisible && (
        <div className="popup-overlay">
          <div className="popup-content">
            <OTPNotice /> {/* Render your OTPNotice component */}
            <button onClick={closePopup} className="close-popup">Close</button>
          </div>
        </div>
      )}
    </div>
  );

}
export default RegisterForm;

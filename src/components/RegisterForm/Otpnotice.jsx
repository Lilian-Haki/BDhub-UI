import React, { useState } from 'react';
import './Otpnotice.css';
import frame from '../../assets/Frame.svg';

const OTPNotice = ()=> {

    return (
    <div className='mainn'>
      <h3>An OTP has been sent to your email</h3>
      <div className='main-frame'>
      <img src={frame} alt="BidHub" className="otp-notification" />
      </div>
    <button className='verify-email'>Verify Email</button>
    </div>
    )
}
export default OTPNotice;


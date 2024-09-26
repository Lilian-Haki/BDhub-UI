import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.jpeg';
import menu from '../../assets/menu.svg';
import search from '../../assets/search.svg';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="hero-container">
    <div className="hero">
      <img src={logo} alt="Hero" className="hero-image" />
      <div className="search-container">
      <img src={menu} alt="Menu" className="menu-icon" />
        <input
          type="text"
          placeholder="Search items"
          className="search-input"
        />
        <img src={search} alt="Search" className="search-icon" />
      </div>
      <ul>
        <li>Online Auctions</li>
        <li>Live Auctions</li>
        <li className="tenders-login">
          <span>Tenders</span>
          <Link to='/'><button className="login">Log in</button></Link>
        </li>
        <li className="contact-register">
          <span>Contact Us</span>
          <Link to='/register'><button className="register">Register</button></Link>
        </li>
      </ul>
    </div>
    <div className="listingCategories">
        <ul>
           <div className='selected'> <li>All<svg  xmlns="http://www.w3.org/2000/svg" width="79" height="6" viewBox="0 0 79 6" fill="none">
  <path d="M3 3H76" stroke="#1478A3" stroke-width="5" stroke-linecap="round"/>
</svg></li></div>
            <li>Categories</li>
            <li>Location Search</li>
            <li>New Listing</li>
            <li>Closing Today</li>
        </ul>
    </div>
  </div>
  );
}

export default Navbar;

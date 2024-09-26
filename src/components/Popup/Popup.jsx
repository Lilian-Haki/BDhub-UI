import React, { useState } from 'react';
import './Popup.css'; // Optional: External CSS for styling

const Popup = ({ message, closePopup }) => {
  return (
    <div className="popup">
      <div className="popup-inner">
        <h3>{message}</h3>
        <button onClick={closePopup}>Close</button>
      </div>
    </div>
  );
};

const App = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
    <div>
      <h1>React Popup Example</h1>
      <button onClick={togglePopup}>Show Popup</button>

      {isPopupVisible && (
        <Popup message="This is your popup message!" closePopup={togglePopup} />
      )}
    </div>
  );
};

export default App;

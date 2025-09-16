import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <div className="loader-spinner"></div>
        <p className="loader-text">Loading Portfolio</p>
      </div>
    </div>
  );
};

export default Loader;
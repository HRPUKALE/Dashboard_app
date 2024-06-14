import React from 'react';
import './HeroSection.css';

const HeroSection = ({ totalSeminars, attendedSeminars }) => {
  return (
    <div className="hero-section">
      <h1>Welcome to Our Seminar Dashboard</h1>
      <p>Total Seminars Provided By Organisation: {totalSeminars}</p>
      <p>Seminars Attended By Student: {attendedSeminars}</p>
    </div>
  );
};

export default HeroSection;
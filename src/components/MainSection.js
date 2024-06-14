
import React from 'react';
import SeminarCard from './SeminarCard';
import './MainSection.css';

const MainSection = ({ seminars }) => {
  return (
    <div className="main-section">
      <h2>Latest Seminars</h2>
      {seminars.map(seminar => (
        <SeminarCard key={seminar.id} seminar={seminar} />
      ))}
    </div>
  );
};

export default MainSection;
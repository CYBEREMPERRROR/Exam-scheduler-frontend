import React from 'react';
import '../css/Timetable.css';
import Card from '../components/Card';

const Timetable = () => {
  return (
    <div className="timetable-container">
      <h2>Exam Timetable</h2>
      {/* Example of using Card component */}
      <Card title="PHY101" content="Physics 101 - 10th March, 9:00AM - 12:00PM" />
      <Card title="CSC102" content="Computer Science 102 - 11th March, 1:00PM - 4:00PM" />
      {/* You will replace with dynamic data later */}
    </div>
  );
};

export default Timetable;

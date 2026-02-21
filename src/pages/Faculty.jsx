import React from 'react';
import '../css/Faculty.css';

const FacultyDashboard = ({ roleState }) => {
  return (
    <div className="faculty-container">
      <h2>Faculty Dashboard</h2>
      {roleState && <p>Role: {roleState.role}</p>}
      {/* Future content: Manage exams, view schedules, etc. */}
    </div>
  );
};

export default FacultyDashboard;

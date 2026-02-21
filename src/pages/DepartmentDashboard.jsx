import React from 'react';
import '../css/Department.css';

const DepartmentDashboard = ({ roleState }) => {
  return (
    <div className="department-container">
      <h2>Department Dashboard</h2>
      {roleState && <p>Role: {roleState.role}</p>}
      {roleState && roleState.department && <p>Department: {roleState.department}</p>}
      {/* Future content: View department exams, submit schedules, etc. */}
    </div>
  );
};

export default DepartmentDashboard;

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import FacultyDashboard from './pages/FacultyDashboard';
import DepartmentDashboard from './pages/DepartmentDashboard';
import { validateAccessKey } from './api/api'; // import helper
import './css/base.css';

const App = () => {
  const [roleState, setRoleState] = useState(null);

  // Auto-check access key from LocalStorage
  useEffect(() => {
    const key = localStorage.getItem('accessKey');
    if (key) {
      (async () => {
        try {
          const res = await validateAccessKey(key);
          const { role, department } = res.data;
          setRoleState({ role, department });

          // Redirect to dashboard
          if (role === 'faculty') {
            window.location.href = '/faculty-dashboard';
          } else {
            window.location.href = '/department-dashboard';
          }
        } catch (err) {
          console.error('Invalid stored access key', err);
          localStorage.removeItem('accessKey'); // remove invalid key
        }
      })();
    }
  }, []);

  return (
    <Router>
      <Header roleState={roleState} />
      <Routes>
        <Route path="/" element={<Home setRoleState={setRoleState} />} />
        <Route path="/faculty-dashboard" element={<FacultyDashboard roleState={roleState} />} />
        <Route path="/department-dashboard" element={<DepartmentDashboard roleState={roleState} />} />
      </Routes>
    </Router>
  );
};

export default App;

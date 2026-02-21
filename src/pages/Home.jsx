import '../css/Home.css';
import React, { useState } from 'react';
import { validateAccessKey } from '../api/api';

const Home = ({ setRoleState }) => {
  const [key, setKey] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await validateAccessKey(key);
      const { role, department } = res.data;

      // Save key in LocalStorage for future requests
      localStorage.setItem('accessKey', key);

      // Update role state in App.jsx
      setRoleState({ role, department });

      // Redirect to proper dashboard
      if (role === 'faculty') {
        window.location.href = '/faculty-dashboard';
      } else {
        window.location.href = '/department-dashboard';
      }
    } catch (err) {
      console.error(err);
      setError('Invalid access key. Please try again.');
    }
  };

  return (
    <div className="home-container">
      <h1>Uniabuja Exam Scheduler</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Access Key"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          required
        />
        <button type="submit">Enter</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Home;

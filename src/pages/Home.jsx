import '../css/Home.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Uniabuja Exam Scheduler</h1>

      <div className="role-buttons">
        <button onClick={() => navigate('/faculty-login')}>
          Faculty
        </button>

        <button onClick={() => navigate('/department-login')}>
          Department
        </button>
      </div>
    </div>
  );
};

export default Home;


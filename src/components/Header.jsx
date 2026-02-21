import React from 'react';
import '../css/Header.css';

const Header = ({ role }) => {
  return (
    <header className="header">
      <div className="header-top">
        <img src="/logo.png" alt="Uniabuja Logo" className="logo" />
        <h1 className="title">Uniabuja Exam Scheduler</h1>
      </div>
      {role && (
        <div className="header-role">
          <span>{role}</span>
        </div>
      )}
    </header>
  );
};

export default Header;

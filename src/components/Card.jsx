import React from 'react';
import '../css/Card.css';

const Card = ({ title, content }) => {
  return (
    <div className="card">
      {title && <h3 className="card-title">{title}</h3>}
      {content && <p className="card-content">{content}</p>}
    </div>
  );
};

export default Card;

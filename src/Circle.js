import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Circle({ url, id }) {
  return (
    <div className="circle">
      <Link to={`/info/${id}`}>
        <img src={url} alt="" />
      </Link>
    </div>
  );
}

export default Circle;

import React from 'react';
import { useNavigate } from 'react-router-dom';

const MyWork = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>My Work</h2>
      <p>Here's a summary of my work...</p>

      <button onClick={() => navigate('/art')}>View Art Portfolio</button>
      <button onClick={() => navigate('/gdsn')}>View GDSN Portfolio</button>
    </div>
  );
};

export default MyWork;

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleNav = (sectionId) => {
    navigate(`/#${sectionId}`); // go back to the home page and scroll to the section
  };

  return (
    <nav>
      <ul>
        <li><button onClick={() => handleNav('about')}>About Me</button></li>
        <li><button onClick={() => handleNav('qualifications')}>Qualifications</button></li>
        <li><button onClick={() => handleNav('work')}>My Work</button></li>
        <li><button onClick={() => handleNav('contact')}>Contact</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;

import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleNav = (sectionId) => {
    navigate(`/#${sectionId}`);
  };

  return (
    <nav>
      <div className="navbar-container">
        <div className="nav-links">
          <li onClick={() => handleNav('about')}>About Me</li>
          <li onClick={() => handleNav('qualifications')}>Qualifications</li>
          <li onClick={() => handleNav('work')}>My Work</li>
        </div>
        <li>
          <button className="contact-opt" onClick={() => handleNav('contact')}>Let's Talk!</button>
        </li>
      </div>
    </nav>
  );
};

export default Navbar;

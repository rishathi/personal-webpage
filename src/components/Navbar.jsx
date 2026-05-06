import { useNavigate } from 'react-router-dom';
import logo from '/logo.svg';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleNav = (sectionId) => {
    navigate(`/#${sectionId}`);
  };

  return (
    <nav>
      <div className="navbar-container">
        <div className="logo" onClick={() => navigate('/')}>
          <img src={logo} alt="Logo" />
          {/* <p>wjdjhsfad</p> */}
        </div>
        <div className="nav-links">
          <li onClick={() => handleNav('about')}>About Me</li>
          <li onClick={() => handleNav('work')}>My Work</li>
          <li onClick={() => handleNav('qualifications')}>Qualifications</li>
        </div>
        <li>
          <button className="button1" onClick={() => handleNav('contact')}>Let's Talk!</button>
        </li>
      </div>
    </nav>
  );
};

export default Navbar;

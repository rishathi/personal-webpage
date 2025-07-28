import './AboutMe.css';

function AboutMe() {
  return (
    <div
      style={{ marginRight: "5vw" }}
    >
      <div className="about-me-container">
        <img
          src="/about_me_img2.png"
          alt="Risha Thimmancherla"
          className="about-me-img"
        />
        <div className="about-me-description" style={{ display: 'flex', flexDirection: 'column' }}>
          <p style={{ marginBottom: '1rem' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div style={{ marginTop: 'auto', alignSelf: 'flex-end' }}>
            <a
              href="https://www.linkedin.com/in/risha-thimmancherla-80bbb8252/"
              target="_blank"
              rel="noopener noreferrer" // Recommended for security
              style={{ textDecoration: 'none' }} // Remove default link styles
            >
              <button className="button1">
                Find me on LinkedIn!
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="about-me-header">
        <p>Hello, my name is</p>
        <h1>Risha Thimmancherla</h1>
        <p>Full-Stack Developer</p>
      </div>
    </div>
  );
}

export default AboutMe;

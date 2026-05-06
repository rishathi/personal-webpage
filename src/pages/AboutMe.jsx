import '../styles/AboutMe.css';

function AboutMe() {
  return (
    <div
      style={{ marginRight: "5vw" }}
    >
      <div className="about-me-container">
        {/* <img
          src="/risha_img_shadow1.png"
          alt="Risha Thimmancherla"
          className="about-me-img-shadow1"
        />
        <img
          src="/risha_img_shadow2.png"
          alt="Risha Thimmancherla"
          className="about-me-img-shadow2"
        />
        <img
          src="/risha_img_shadow3.png"
          alt="Risha Thimmancherla"
          className="about-me-img-shadow3"
        /> */}
        <img
          src="/risha_img2.png"
          alt="Risha Thimmancherla"
          className="about-me-img"
        />
        <div className="about-me-description" style={{ display: 'flex', flexDirection: 'column' }}>
          <p style={{ marginBottom: '1rem' }}>
            As a new Computer Science graduate with a Minor in Graphic Design, I am passionate about the intersection of technology and creativity to make intuitive, human-centered products. Through projects and internships I have gained valuable skills in full-stack development, working with React and Node.js to create user-friendly and secure products. I am always eager to learn new technologies and improve my skills in the ever-evolving fields of web development and graphic design.
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

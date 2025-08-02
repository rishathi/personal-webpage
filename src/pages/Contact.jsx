import IconButton from "@mui/material/IconButton";

import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h1>Let's Talk!</h1>
      <h3>
        Feel free to contact me about employment, design work, or commisions!
      </h3>

      <div>
        <IconButton
          aria-label="email"
          href="mailto:risha.thimmancherla@gmail.com"
          className="contact-icon-button"
        >
          <MailOutlineIcon />
        </IconButton>
        <IconButton
          aria-label="linkedin"
          href="https://www.linkedin.com/in/risha-thimmancherla-80bbb8252/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon-button"
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          aria-label="email"
          href="https://www.instagram.com/froggyfishie/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon-button"
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          aria-label="email"
          href="https://github.com/rishathi"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon-button"
        >
          <InstagramIcon />
        </IconButton>
      </div>

      <div className="contact-buttons"></div>
    </div>
  );
}

export default Contact;

/*
<div className="contact-buttons">
  <a href="mailto:risha.thimmancherla@gmail.com">
    <button className="button1">Email Me</button>
  </a>
  <a
    href="https://www.linkedin.com/in/risha-thimmancherla-80bbb8252/"
    target="_blank"
    rel="noopener noreferrer" // Recommended for security
    style={{ textDecoration: "none" }} // Remove default link styles
  >
    <button className="button1">Connect on LinkedIn</button>
  </a>
</div>
*/

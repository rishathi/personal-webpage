import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AboutMe from './AboutMe';
import Qualifications from './Qualifications';
import MyWork from './MyWork';
import Contact from './Contact';

const Home = () => {
  const location = useLocation();

  // Scroll to the section based on the hash in the URL
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace('#', ''); // Remove the '#' from the hash
      // Scroll to the section with the corresponding ID
      const el = document.getElementById(sectionId); // Get the element by ID
      if (el) { // Check if the element exists
        el.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
      }
    }
  }, [location]);

  return (
    <div>
      <section id="about">
        <AboutMe />
      </section>
      <section id="qualifications">
        <Qualifications />
      </section>
      <section id="work">
        <MyWork />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;

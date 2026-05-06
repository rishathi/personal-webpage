import {
  tools,
  languages,
  education,
  experience,
  recognition,
} from "../utils/qualData";

import "../styles/Qualifications.css";

function Qualifications() {
  return (
    <div
      className="qualifications"
      style={{ marginLeft: "5vw", marginRight: "5vw" }}
    >
      <h1>Qualifications</h1>

      <div className="qualification-content">
        <div className="left-column">
          <p className="qualifications-intro">
            Through my internships and projects, I have developed strong proficiency in JavaScript/TypeScript, React, SQL, and REST API integration, enjoying learning while building products that positively impact others. At MerQube, I redesigned and built a modular React-based tool to manage internal company documents, making it significantly easier and faster for employees to find, update, track, and delete files. At BizAcuity, I contributed to a large-scale React-based production codebase by developing new React components for a healthcare portal. 
          </p>

          <div className="tools-languages">
            <div className="tools">
              <ul>
                {tools.map((tool, index) => (
                  <li key={index}>{tool}</li>
                ))}
              </ul>
            </div>

            <div className="languages">
              <ul>
                {languages.map((lang, index) => (
                  <li key={index}>{lang}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="right-column">
          <div className="education">
            <h2>Education</h2>
            <ul>
              {education.map((school, index) => (
                <li key={index}>
                  <p>
                    {school.school} - {school.degree}
                  </p>
                  <p>({school.minor})</p>
                  <p>Class of {school.year}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="experience">
            <h2>Experience</h2>
            <ul>
              {experience.map((job, index) => (
                <li key={index}>
                  {job.title} at {job.company} ({job.year})
                </li>
              ))}
            </ul>
          </div>

          <div className="recognition">
            <ul>
              {recognition.map((rec, index) => (
                <li key={index}>
                  <button className="button2">{rec}</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Qualifications;

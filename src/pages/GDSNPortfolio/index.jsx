// import "../../styles/GDSNPortfolia.css";

// function GDSNPortfolio() {
//   return (
//     <div
//       className="gdsn-portfolio"
//     >
//       <h1>GDSN Portfolio</h1>
//       <p>This is the GDSN Portfolio page!</p>
//     </div>
//   );
// }

// export default GDSNPortfolio;

import { Link } from "react-router-dom";
import { gdsnData } from "../../utils/gdsnData";
import "../../styles/ArtPortfolio.css";

function GDSNPortfolio() {
  return (
    <div className="art-portfolio-container">
      <h1>Graphic Design Portfolio</h1>

      <div className="art-grid">
        {gdsnData.map((project) => (
          <div key={project.id} className="art-item">
            <Link to={`/gdsn-portfolio/${project.id}`}>
              <div className="art-image-wrapper">
                <img src={project.thumbnail} alt={project.title} />
                <div className="overlay"></div>
                <p className="overlay-text">
                    {project.title}
                </p>
              </div>
            </Link>
            <p className="static-text">
              {project.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GDSNPortfolio;
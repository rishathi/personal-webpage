import { artData } from "../utils/artData";
import "../styles/ArtPortfolio.css";

function ArtPortfolio() {
  return (
    <div className="art-portfolio-container">
      <h1>Art Portfolio</h1>

      <p>
        Here you can find a collection of my artwork, including various styles
        and mediums. If you have any questions or would like to collaborate,
        feel free to reach out!
      </p>

      <div className="art-grid">
        {artData.map((art) => (
          <div className="art-item" key={art.title}>
            <a href={art.post_link} target="_blank" rel="noopener noreferrer">
              <div className="art-image-wrapper">
                <img src={art.image_link} alt={art.title} />
                <div className="overlay">
                  <p className="overlay-text">
                    {art.materials}, {art.date}
                  </p>
                </div>
              </div>
            </a>
            <p className="static-text">
              {art.materials}, {art.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArtPortfolio;

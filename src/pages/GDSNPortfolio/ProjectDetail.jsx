import { useParams } from "react-router-dom";
import { gdsnData } from "../../utils/gdsnData";
import { useState } from "react";
import { Document, Page } from "react-pdf";
import HTMLFlipBook from "react-pageflip";
import "../../styles/ArtPortfolio.css";

function ProjectDetail() {
  const { id } = useParams();
  const project = gdsnData.find((p) => p.id === id);

  const [selectedImage, setSelectedImage] = useState(null);

  if (!project) return <p>Project not found</p>;

  return (
    <div className="art-portfolio-container">
      <h1>{project.title}</h1>

      <h2>Project Details</h2>
      {project.year && (
        <p className="details"><strong>Year:</strong> {project.year}</p>
      )}
      {project.duration && (
        <p className="details"><strong>Duration:</strong> {project.duration}</p>
      )}
      {project.description && (
        <p className="art-portfolio-container-description">{project.description}</p>
      )}
      {project.tools && (
        <ul className="tools-list">
            {project.tools.map((tool, index) => (
                <li className="tool-item" key={index}>
                    {tool}
                </li>
            ))}
        </ul>
      )} 

      {project.pdfs && (
        <>
            {project.category === "magazine" && (
                <h2>Magazine</h2>
            )}
            {project.category === "branding" && (
                <h2>Branding Guidelines</h2>
            )}
        </>
      )}
      <div className="flipbook-grid">
        {project.pdfs && project.pdfs.map((asset, index) => {
            return (
                <div className="flipbook-item" key={index}>
                    {/* TRUE centered cover */}
                    {/* <div className="flipbook-cover">
                        <img
                        src={asset.pages[0].src}
                        alt={asset.pages[0].caption || "cover"}
                        />
                        <p className="static-text">{asset.caption}</p>
                    </div> */}
                    <HTMLFlipBook
                        width={window.innerWidth * asset.width}
                        height={window.innerHeight * asset.height}
                        showCover={true}
                        usePortrait={false}
                        className="flipbook"
                    >
                        {asset.pages.map((page, i) => (
                        <div key={i} className="page">
                            <img src={page.src} alt={page.caption || `page ${i}`} />
                        </div>
                        ))}
                    </HTMLFlipBook>
                    <p className="static-text">{asset.caption}</p>
                </div> 
            );
        })}
      </div>
      
      {project.assets && (
        <h2>Final Assets</h2>
      )}
      <div className="art-grid">
        {project.assets.map((asset, index) => {
          if (asset.type === "image") {
            return (
                <div className="art-item" key={index}>
                    <div className="art-image-wrapper">
                        <img
                            src={asset.src}
                            alt={asset.caption}
                            onClick={() => setSelectedImage(asset)}
                        />
                        <div className="overlay"></div>
                        <p className="overlay-text">
                            {asset.caption}
                        </p>
                    </div>
                    <p className="static-text">
                        {asset.caption}
                    </p>
                </div> 
            );
          }

          if (asset.type === "pdf") {
            return (
                <div className="art-item" key={index}>
                    <div className="art-image-wrapper">
                        <iframe
                            key={index}
                            src={asset.src}
                            title="PDF"
                            width="100%"
                            height="500px"
                        />
                    </div>
                    <p className="static-text">
                        {asset.caption}
                    </p>
                </div> 
            );
          }

          if (asset.type === "video") {
            return (
                <div className="art-item" key={index}>
                    <div className="art-image-wrapper">
                        <video controls width="100%">
                            <source src={asset.src} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <p className="static-text">
                        {asset.caption}
                    </p>
                </div> 
            );
          }

          if (asset.type === "youtube") {
            return (
                <div className="art-item" key={index}>
                    <div className="art-image-wrapper">
                        <iframe 
                            width="100%"
                            height="500px"
                            src={asset.src}
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerpolicy="strict-origin-when-cross-origin" 
                            allowfullscreen>
                        </iframe>
                    </div>
                    <p className="static-text">
                        {asset.caption}
                    </p>
                </div>
            );
          }

          if (asset.type === "flipbook") {
            return (
                <div className="art-item" key={index}>
                <HTMLFlipBook width={400} height={600}>
                    {asset.pages.map((page, i) => (
                    <div key={i} className="page">
                        <img src={page.src} alt={page.caption || `page ${i}`} />
                    </div>
                    ))}
                </HTMLFlipBook>
                <p className="static-text">{asset.caption}</p>
                </div>
            );
          }
          return null;
        })}
      </div>  

      {project.progress && (
        <h2>Progress</h2>
      )}
      <div className="art-grid">
        {project.progress && project.progress.map((asset, index) => {
          if (asset.type === "image") {
            return (
                <div className="art-item" key={index}>
                    <div className="art-image-wrapper">
                        <img
                            src={asset.src}
                            alt={asset.caption}
                            onClick={() => setSelectedImage(asset)}
                        />
                        <div className="overlay"></div>
                        <p className="overlay-text">
                            {asset.caption}
                        </p>
                    </div>
                    <p className="static-text">
                        {asset.caption}
                    </p>
                </div> 
            );
          }

          if (asset.type === "pdf") {
            return (
                <div className="art-item" key={index}>
                    <div className="art-image-wrapper">
                        <iframe
                            key={index}
                            src={asset.src}
                            title="PDF"
                            width="100%"
                            height="500px"
                        />
                    </div>
                    <p className="static-text">
                        {asset.caption}
                    </p>
                </div> 
            );
          }

          if (asset.type === "video") {
            return (
                <div className="art-item" key={index}>
                    <div className="art-image-wrapper">
                        <video controls width="100%">
                            <source src={asset.src} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <p className="static-text">
                        {asset.caption}
                    </p>
                </div> 
            );
          }
          return null;
        })}
      </div>

      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button 
                    className="close-btn"
                    onClick={() => setSelectedImage(null)}
                >
                    ×
                </button>
                <img src={selectedImage.src} alt={selectedImage.caption} />
                <p>{selectedImage.caption}</p>
            </div>
        </div>
        )}
    </div>
  );
}

export default ProjectDetail;
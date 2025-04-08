import './ProjectDetails.css'
import { useLocation, useNavigate } from 'react-router-dom'

function ProjectDetails() {
  const { state } = useLocation();
  const { title, detailedImage, detailedDescription, link } = state;
  const navigate = useNavigate();

  return (
    <div className="container py-5">
      <h1 className="mb-4 text-center">{title}</h1>

      <div className="row justify-content-center">
        {/* Detailed Image Section */}
        <div className="col-12 col-md-8 mb-4">
          <div className="card shadow-sm">
            <img 
              src={detailedImage} 
              alt="Project clip" 
              className="card-img-top detailed-image" 
            />
          </div>
        </div>

        {/* Description Section */}
        <div className="col-12 col-md-8 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <p>{detailedDescription}</p>
            </div>
          </div>
        </div>

        {/* Link & Back Button Section */}
        <div className="col-12 col-md-8 text-center">
          <a href={link} className="btn btn-primary mb-3" target="_blank" rel="noopener noreferrer">
            View Project
          </a>
          <br />
          <button className="btn btn-secondary" onClick={() => navigate('/')}>
            Go Back
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails;

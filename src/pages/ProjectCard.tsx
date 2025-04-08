import './ProjectCard.css';
import { Link } from 'react-router-dom';

interface ProjectCardProp {
  id: string;
  title: string;
  previewImage: string;
  detailedImage: string;
  detailedDescription: string;
  link: string;
}

function ProjectCard({ id, title, previewImage, detailedImage, detailedDescription, link }: ProjectCardProp) {
  return (
    <Link to={`/project/${id}`} state={{ title, detailedImage, detailedDescription, link }} className="text-decoration-none">
      <div className="card project-card shadow-sm border-0 text-center h-100">
        <img src={previewImage} className="card-img-top preview-image mx-auto mt-3" alt="Preview" />
        <div className="card-body p-2">
          <h5 className="card-title mb-0">{title}</h5>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;

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
    <Link to={`/project/${id}`} state={{ title, detailedImage, detailedDescription, link }}>
      <div className='project-card'>
        <h4 className='card-title'>{title}</h4>
        <img src={previewImage} className='preview-image' alt='Preview clip' />
      </div>
    </Link>
  )
}

export default ProjectCard;

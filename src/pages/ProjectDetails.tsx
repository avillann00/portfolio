import './ProjectDetails.css'
import { useLocation, useNavigate } from 'react-router-dom'

function ProjectDetails() {
  const { state } = useLocation();
  const { title, detailedImage, detailedDescription, link } = state;
  const navigate = useNavigate();
  return (
    <div className='details-page'>
      <h1>Details page</h1>
      <h1>{title}</h1>
      <img src={detailedImage} alt='Project clip' className='detailed-image' />
      <p>{detailedDescription}</p>
      <a href={link}>View project</a>
      <button onClick={() => navigate('/')}>Go back</button>
    </div>
  )
}

export default ProjectDetails;

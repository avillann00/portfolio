import { useNavigate } from 'react-router-dom';
import './Resume.css';

function Resume() {
  const navigate = useNavigate();

  return (
    <div className='resume-page'>
      <h1>Resume page</h1>
      <iframe className='resume' title='resume' src='/resume.pdf' />
      <button onClick={() => navigate('/')}>Go back</button>
    </div>
  )
}

export default Resume;

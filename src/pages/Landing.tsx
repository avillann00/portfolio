import './Landing.css';
import imgSrc from '../images/IMG_6032.jpg';

function Landing() {
  return (
    <div className='landing'>
      <h1>This is the Landing page</h1>
      <h1>Hello, my name is Austin Villanueva</h1>
      <img className='img' src={imgSrc} alt='Me' />
      <p>
        I am a second year computer science major at the University of Central Florida. I am currently learning about full stack development and machine learning. In my free time I enjoy 
        watching sports and working on some personal projects. I also have a hobby of collecting fragrances.
      </p>

      <h3>Related Coursework:</h3>
      <ul>
      <li>Data structures and algorithms</li>
      <li>Advanced data structures and algorithms</li>
      <li>Object-oriented programming</li>
      <li>Calculus 1</li>
      <li>Calculus 2</li>
      <li>Intro to discrete structures</li>
      <li>Probability and statistics</li>
      </ul>

      <h3>Technologies:</h3>
      <ul>
      <li>Django</li>
      <li>Flask</li>
      <li>React</li>
      <li>PostgreSQL</li>
      <li>MySQL</li>
      <li>Numpy</li>
      <li>Matplotlib</li>
      <li>Seaborn</li>
      <li>Scikit-learn</li>
      </ul>

      <h3>Languages:</h3>
      <ul>
      <li>Python</li>
      <li>JavaScript</li>
      <li>TypeScript</li>
      <li>Java</li>
      <li>SQL</li>
      <li>C</li>
      </ul>
    </div>
  )
}

export default Landing;

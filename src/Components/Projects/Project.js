import React from 'react';
import '../Projects/Project.css';
import InsertLinkIcon from '@mui/icons-material/InsertLink';

function Project() {
  return <div className='project'>
      
      <div className='projects'>
          <div className='projectName'>
              <h1><a href='https://flamboyant-volhard-e5e3e1.netlify.app' target="_blank" rel="noopener noreferrer">Instagram page</a><sup><InsertLinkIcon /></sup></h1>
          </div>
          <div className='projectImg'>
              <img src='XM5befO.png' alt='img' />
          </div>
          <div className='projectDetails'>
              <p>A project build using HTML and CSS.</p>  
          </div>
      </div>
      <div className='projects'>
          <div className='projectName'>
              <h1><a href='https://dazzling-snyder-514dd9.netlify.app' target="_blank" rel="noopener noreferrer">Swiggy web-page</a><sup><InsertLinkIcon /></sup></h1>
          </div>
          <div className='projectImg'>
              <img src='z2VFS0W.png' alt='img' />
          </div>
          <div className='projectDetails'>
              <p>Home page of Swiggy web-app build using HTML, CSS and ReactJS.</p>
          </div>
      </div>
      <div className='projects'>
          <div className='projectName'>
              <a href='https://romantic-swanson-f0c7ad.netlify.app' target="_blank" rel="noopener noreferrer"><h1>Amazon-clone</h1><sup><InsertLinkIcon /></sup></a>
          </div>
          <div className='projectImg'>
              <img src='Amazon.png' alt='img' />
          </div>
          <div className='projectDetails'>A clone of Amazon website build using React.</div>
      </div>
        <div className='projects'>
          <div className='projectName'>
              <h1><a href='https://cocky-mahavira-213d53.netlify.app' target="_blank" rel="noopener noreferrer">My Portfolio site</a><sup><InsertLinkIcon /></sup></h1>
          </div>
          <div className='projectImg'>
              <img src='Portfolio.png' alt='img' />
          </div>
          <div className='projectDetails'>
              <p>Complete portfolio of mine build using HTML, CSS and ReasctJS.</p>
          </div>
        </div>
      <div className='projects'>
          <div className='projectName'>
              <h1><a href='https://admiring-leavitt-a48cca.netlify.app' target="_blank" rel="noopener noreferrer">To Do App</a><sup><InsertLinkIcon /></sup></h1>
          </div>
          <div className='projectImg'>
              <img src='todo.png' alt='img' />
          </div>
          <div className='projectDetails'>A simple To Do App built using react. </div>
      </div>
      <div className='projects'>
          <div className='projectName'>
              <h1>404!</h1>
          </div>
          <div className='projectImg'>
              <img src='https://illustratious.s3.amazonaws.com/screenshots/hi9glq-Stitching-webp.webp' alt='img' />
          </div>
          <div className='projectDetails'>Hold on. Somethig more special is coming... </div>
      </div>
  </div>;
}

export default Project;

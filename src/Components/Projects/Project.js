import React from 'react';
import '../Projects/Project.css';

function Project() {
  return <div className='project'>
      
      <div className='projects'>
          <div className='projectName'>
              <h1>Instagram page</h1>
          </div>
          <div className='projectImg'>
              <img src='https://cdn.dribbble.com/users/288987/screenshots/5721780/media/cd076ea68b08c1ebb5a029e4e0b4a1da.png?compress=1&resize=1600x1200&vertical=top' alt='img' />
          </div>
          <div className='projectDetails'>Project detalis, link...</div>
      </div>
      <div className='projects'>
          <div className='projectName'>
              <h1>Swiggy web-page</h1>
          </div>
          <div className='projectImg'>
              <img src='https://cdn.dribbble.com/users/288987/screenshots/5600565/media/41ebff29df95b08824ece12db4bcea3c.png?compress=1&resize=800x600&vertical=top' alt='img' />
          </div>
          <div className='projectDetails'>Project detalis, link...</div>
      </div>
      <div className='projects'>
          <div className='projectName'>
              <h1>The Social Media App</h1>
          </div>
          <div className='projectImg'>
              <img src='https://cdn.dribbble.com/users/288987/screenshots/3163823/winter-wonderland.png?compress=1&resize=800x600&vertical=top' alt='img' />
          </div>
          <div className='projectDetails'>Project detalis, link...</div>
      </div>
        <div className='projects'>
          <div className='projectName'>
              <h1>My Portfolio site</h1>
          </div>
          <div className='projectImg'>
              <img src='https://cdn.dribbble.com/users/288987/screenshots/3342177/media/040c1c268ad20c08478cc384615fd603.jpg?compress=1&resize=800x600&vertical=top' alt='img' />
          </div>
          <div className='projectDetails'>Project detalis, link...</div></div>
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

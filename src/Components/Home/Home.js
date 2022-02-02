import React from 'react';
import '../Home/Home.css';
import { NavLink } from 'react-router-dom';

function Home() {
  return <div className='home'>
      <div className='main'>
                <h1>Hello World!</h1>
                <h3>Welcome to my portfolio</h3>
                <img className='home_img' src='https://illustratious.s3.amazonaws.com/screenshots/8ttz9r-people-studying-online-webp.webp' alt='img' />
                <h3>This is Pradyumna Gogoi, a full stack developer</h3>
                <div className='btn'>
                    <button><NavLink exact activeclassName="active_class" to="/about"> About Me </NavLink></button>
                    <button><NavLink exact activeclassName="active_class" to="/footer"> Connect with Me </NavLink></button>
                </div>
                </div>
                
  </div>;
}

export default Home;

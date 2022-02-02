import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import About from './Components/About/About';
import Contect from './Components/Contect me/Contect';
import Home from './Components/Home/Home';
import Project from './Components/Projects/Project';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SideNav from './Components/SideNavBar/SideNav';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function App() {
  const [showNav, setShowNav] = useState(false);
    return (
      <div>
        <header>
        <MenuOutlinedIcon onClick={() => setShowNav(!showNav)} />
        </header>
        <SideNav show={showNav} />
  
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/project" element={<Project />}/>
        <Route path="/contect" element={<Contect />}/>
      </Routes>
      
      <footer className='socialLinks'>
        <LinkedInIcon />
        <GitHubIcon />
        <InstagramIcon />
        <TwitterIcon />
      </footer>
      </div>
    );
}

export default App;

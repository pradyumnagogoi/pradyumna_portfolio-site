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
import Footer from './Components/Footer/Footer';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

function App() {
  const [showNav, setShowNav] = useState();
  const [showFooter, setShowFooter] = useState();
    return (
      <div>
        <header>
        <MenuOutlinedIcon className='headerBtn' onClick={() => setShowNav(!showNav)} />
        </header>
        <SideNav show={showNav} />

        <footer>
        <ArrowCircleUpIcon className='footerBtn' onClick={() => setShowFooter(!showFooter)} />
      </footer>
      <Footer show={showFooter} />
      
  
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/project" element={<Project />}/>
        <Route path="/contect" element={<Contect />}/>
      </Routes>
      
      </div>
    );
}

export default App;

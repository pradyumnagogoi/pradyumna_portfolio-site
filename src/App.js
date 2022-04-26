import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import About from './Components/About/About';
import Contect from './Components/Contect me/Contect';
import Home from './Components/Home/Home';
import Achivement from './Components/MyAchivments/Achivement';
import Project from './Components/Projects/Project';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SideNav from './Components/SideNavBar/SideNav';


function App() {
  const [showNav, setShowNav] = useState();
 
    return (
      <div>
        <header>
        <MenuOutlinedIcon className='headerBtn' onClick={() => setShowNav(!showNav)} />
        </header>
        <SideNav show={showNav} />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/project" element={<Project />}/>
        <Route path="/achivement" element={<Achivement />}/>
        <Route path="/contect" element={<Contect />}/>
      </Routes>
      
      </div>
    );
}

export default App;

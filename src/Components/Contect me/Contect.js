import React from 'react';
import '../Contect me/Contect.css';
import { NavLink } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

function Contect() {
  return <div className='contect'>
    <div className='randomClass'>
    <img className='vectorImg' src='Library.svg' alt='img' />
    <div>
    <NavLink exact activeclassName="active_class" to="/"><ArrowCircleUpIcon className='arrow' /></NavLink>
    </div>
    </div>
    <div className='footer'>
      <div className='socialLinks'>
        <LinkedInIcon className='link'/>
        <GitHubIcon className='link'/>
        <InstagramIcon className='link'/>
        <TwitterIcon className='link'/>
      </div>
      <p>Made with love by the Pradyumna Gogoi team &#10084;</p>
      <p>&copy;All credit goes to Pradyumna Gogoi - Copyright 2022. Design by <strong>Pradyumna</strong> </p>
    </div>
  </div>;
}

export default Contect;

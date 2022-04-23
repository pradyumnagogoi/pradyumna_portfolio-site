import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../Footer/Footer.css';
import { NavLink } from 'react-router-dom';


function Footer({show}) {
  return (
    <div className={show ? 'footer active' : 'footer'}>
            <ul className='footUl'>
                <li>
                <NavLink exact activeclassName="active_class" to=" "> <LinkedInIcon /></NavLink>
                </li>
                <li>
                <NavLink exact activeclassName="active_class" to=" "> <GitHubIcon /></NavLink>
                </li>
                <li>
                <NavLink exact activeclassName="active_class" to=" "> <InstagramIcon /></NavLink>
                </li>
                <li>
                <NavLink exact activeclassName="active_class" to=" "> <TwitterIcon /></NavLink>
                </li>
            </ul>
        </div>
  )
}

export default Footer;
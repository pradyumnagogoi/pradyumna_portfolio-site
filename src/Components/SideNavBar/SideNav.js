import React from 'react';
import { NavLink } from 'react-router-dom';
import '../SideNavBar/SideNav.css';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';


function SideNav({show}) {
  return (
  <div className={show ? 'sidenav active' : 'sidenav'}>
            <ul className='navUl'>
                <li>
                <NavLink exact activeclassName="active_class" to="/"> <HomeOutlinedIcon /> Home </NavLink>
                </li>
                <li>
                <NavLink exact activeclassName="active_class" to="/about"> <InfoOutlinedIcon /> About me </NavLink>
                </li>
                <li>
                <NavLink exact activeclassName="active_class" to="/project"> <WorkOutlineOutlinedIcon /> Project </NavLink>
                </li>
                <li>
                <NavLink exact activeclassName="active_class" to="/achivement"> <EmojiEventsIcon />  Achivements </NavLink>
                </li>
                <li>
                <NavLink exact activeclassName="active_class" to="/contect"> <ContactPageOutlinedIcon /> Contect me </NavLink>
                </li>
                
              </ul>
              <ul className='navSortUl'>
                <li>
                <NavLink exact activeclassName="active_class" to="/"> <HomeOutlinedIcon /></NavLink>
                </li>
                <li>
                <NavLink exact activeclassName="active_class" to="/about"> <InfoOutlinedIcon /></NavLink>
                </li>
                <li>
                <NavLink exact activeclassName="active_class" to="/project"> <WorkOutlineOutlinedIcon /></NavLink>
                </li>
                <li>
                <NavLink exact activeclassName="active_class" to="/achivement"><EmojiEventsIcon /></NavLink>
                </li>
                <li>
                <NavLink exact activeclassName="active_class" to="/contect"> <ContactPageOutlinedIcon /></NavLink>
                </li>
                
              </ul>
        </div>
  )
}

export default SideNav;

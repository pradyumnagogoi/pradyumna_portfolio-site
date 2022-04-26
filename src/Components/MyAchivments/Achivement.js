import React from 'react';
import '../MyAchivments/Achivment.css';


function Achivement() {
  return <div className='achivments'>
        <div className='doc'>
            <img className='docImg' src='resume.jpg' alt="resume" />
            <div className='page'>
            <h2>My resume</h2>
        </div>
           
        </div>
        <div className='doc'>
            <img className='docImg' src='comp.jpeg' alt="resume" />
            <div className='page'>
            <h2>Diploma cirtificate</h2>
            <p>I have completed a diploma course on "DIPLOMA IN OFFICE AUTOMATION AND FINANCIAL ACCOUNTANCY" under AMTRON.</p>
            </div>
        </div>
        <div className='doc'>
            <img className='docImg' src='Infosys.png' alt="resume" />
            <div className='page'>
            <h2>Infosys Springboard</h2>
            <p>A free course on how to build website from scratch using HTML &amp; CSS, organised by Infosys.</p>
            </div>
        </div>
        <div className='doc'>
            <img className='docImg' src='cisco.png' alt="resume" />
            <div className='page'>
            <h2>Cisco</h2>
            <p>A cyber security introduction course organised by Cisco.</p>
            </div>
        </div>
    </div>
  
};

export default Achivement;
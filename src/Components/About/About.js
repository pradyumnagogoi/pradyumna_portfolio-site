import React from 'react';
import '../About/About.css';

function About() {
  return <div className='about'>
      <div className='aboutMe'>
                <h1>About Me...</h1>
                <h3>Student | Web Developer | Stock Trader</h3>
                <p>Hii.. myself Pradyumna Gogoi. I'm a student with a keen interest in 'Full Stack-web dev'.<br/>I am seeking for a position
                in a reputed organization that fully utilize my skills<br/> and provides me with suitable opportunities to grow my technical and<br/>
                communication skills in order to leverage my learnings as well as to enhance<br/> my existing skills which would help
                me as a fresher to grow while working towards the growth of the organization.</p>
            </div>
            <div className='aboutSkill'>
                <div>
                <div>
                    <img className='about_Img' src='about_anime.gif' alt='img' />
                    </div>
                    <h2>My Skills</h2>
                    
                    <div class="skill-card-container">
                        <div className="skill">
                            <img src="https://madhavbahl.tech/portfolio-assets/html.png" alt="skill" />
                            <p>HTML</p>
                        </div>
                        <div className="skill">
                            <img src="https://madhavbahl.tech/portfolio-assets/css.png" alt="skill" />
                            <p>CSS</p>
                        </div>
                        <div className="skill">
                            <img src="https://madhavbahl.tech/portfolio-assets/js.png" alt="skill" />
                            <p>JavaScript</p>
                        </div>
                        <div className="skill">
                            <img src="https://madhavbahl.tech/portfolio-assets/react.png" alt="skill" />
                            <p>React</p>
                        </div>
                        <div className="skill">
                            <img src="https://madhavbahl.tech/portfolio-assets/node.png" alt="skill" />
                            <p>NodeJS</p>
                        </div>
                        <div className="skill">
                            <img src="https://madhavbahl.tech/portfolio-assets/java.png" alt="skill" />
                            <p>Java</p>
                        </div>
                        <div className="skill">
                            <img src="https://madhavbahl.tech/portfolio-assets/mongo.png" alt="skill" />
                            <p>MongoDB</p>
                        </div>
                        
                    </div>
                </div>
                
                
            </div>
  </div>;
}

export default About; 

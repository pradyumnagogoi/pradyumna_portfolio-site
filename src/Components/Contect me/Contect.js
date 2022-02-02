import React from 'react';
import '../Contect me/Contect.css';

function Contect() {
  return <div className='contect'>
      <div>
            <h1>Get in touch.</h1>
            <h3>Any query? Please feel free to drop me an email.</h3>
            </div>
            <div class="contact-form-container">
                <form action="https://formspree.io/f/xwkypyed" method="POST" class="contact-form">
                    <input type="email" placeholder="Your Email ID" name="_replyto" class="input-box email-input" />
                    <textarea type="text" placeholder="Your Message" name="message" class="input-box body-input"></textarea>
                    <button type="submit" class="contact-btn">Send Email</button>
                </form>
            </div>
            
        
  </div>;
}

export default Contect;

import React from 'react';
import './MainMenu.css';
import { Link } from 'react-router-dom'; // Import Link for routing

function MainMenu() {
  return (
    <div className="mainmenu-container">

      {/* Section 1: Website Title and Intro */}
      <div className="section-intro">
        <div className="intro-text">
          <h1 className="site-title">manovaani</h1>
          <p className="site-description">
            manovaani is your digital companion for emotional wellness.  
            Access support, track your mood, and gain insights to improve mental well-being.
          </p> 
        </div>
        <div className="intro-image">
          <img src="/intro-image.png" alt="Mental Health" />
        </div>
      </div>

      {/* Section 2: Problems Faced */}
      <div className="section-problems">
        <h2>Problems We Address</h2>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Nullam in est vitae arcu suscipit tincidunt.</li>
          <li>Sed ac risus ac nulla vehicula scelerisque.</li>
          <li>Praesent volutpat orci at metus eleifend, nec congue eros bibendum.</li>
        </ul>
      </div>

      {/* Section 3: Services Offered */}
      <div className="section-services">
        <h2>Services Offered</h2>

        <div className="service-item">
          <img src="/chatbot.png" alt="Chatbot" className="service-image-left" />
          <div className="service-info">
          <h3>
            <a href="https://manovaani-chatbot.streamlit.app/" 
              className="chatbot-link"
              target="_blank" 
            >
            Mental Health Chatbot
            </a>
            </h3>
            <p className="service-desc">
              An intelligent conversational bot to guide you through tough times, answer your questions, and offer comfort.
            </p>
          </div>
        </div>

        <div className="service-item reverse">
          <div className="service-info">
            <Link to="/journal" className="service-link">
              <h3>Journal Your Feelings</h3>
            </Link>
            <p className="service-desc">
              Write, reflect, and track your emotional journey securely and privately.
            </p>
          </div>
          <img src="/journal.png" alt="Journal" className="service-image-right" />
        </div>

        <div className="service-item">
          <img src="/survey.png" alt="Surveys" className="service-image-left" />
          <div className="service-info">
            <Link to="/surveys" className="service-link">
              <h3>Surveys</h3>
            </Link>
            <p className="service-desc">
              Engage with surveys that help you reflect and also contribute to better wellness research.
            </p>
          </div> 
        </div>
      </div>

      {/* Feedback Form */}
    

      <div className="feedback-form"> 
      <h1>Share your feedback with us</h1>
        <div className='feedbackDiv'>
        <form>  
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send</button>
        </form>
        </div>

      </div> 
    </div>
  );
}

export default MainMenu;

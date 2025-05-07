import React from 'react';
import './MainMenu.css';
import { Link } from 'react-router-dom'; // Import Link for routing
import HomeImg from '../../assets/HomeImg.png';
import Journal from '../../assets/Journal.png';
import ChatLogo2 from '../../assets/ChatLogo2.png';
import ChatLogo from '../../assets/ChatLogo.png';
import Survey2 from '../../assets/Survey2.png';
import survey from '../../assets/survey.png';
import img from '../../assets/img.png';
import diary from '../../assets/diary.png';

function MainMenu() {
  return (
    <div className="mainmenu-container">

      {/* Section 1: Website Title and Intro */}
      <div className="section-intro">
        <div className="intro-text">
          <p className='site-title'>Chat,Journal,Take surveys</p>
          <p className="site-description">your safe haven powered with AI-driven care</p> 
          <p className='site-desc2'> manovaani - digital companion for emotional wellness</p>
        </div> 
        <div className="intro-image">
          <img src={HomeImg} alt="Mental Health" />
        </div>
      </div>

      {/* Section 2: Problems Faced */}
      <div className="section-problems" id="about">
        <h2>About</h2> 
        <div className='about-div-container'>
          <div className='about-div'>
            <p>
            ManoVaani aims to use technologies like AI and NLP to bridge gaps in
   mental health care services. It strives to create a safe space for people with
   mental health struggles and their caregivers to seek immediate help. The 
   application complements traditional services by providing a centralised
   platform for quick access to various resources and informational content. It
   leverages the power of Generative AI to create a conversational chatbot
   that helps users ease their mental load while ensuring they feel heard and
   validated while simultaneously offers advice and support.
            </p>  
          </div>
        </div> 
      </div>

      {/* Section 3: Services Offered */}
      <div className="section-services" id="services">
        <h2>Services Offered</h2>

        <div className="service-item">
          <img  src={img} alt="Chatbot" className="service-image-left" />
          <div className="service-info">
          <h3 className='serviceText'>
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
          <img src={diary} alt="Journal" className="service-image-right" />
        </div>

        <div className="service-item">
          <img src={survey} alt="Surveys" className="service-image-left" />
          <div className="service-info">
            <Link to="/survey" className="service-link">
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
          <button type="submit" id="btn-send">Send</button>
        </form>
        </div> 
      </div> 
    </div>
  );
}

export default MainMenu;
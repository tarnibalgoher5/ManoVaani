import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Resources.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

function Resources() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="resources-container">
        <div className="resources-header">
          <h1 className="resources-title"><i>Explore Resources</i></h1>
          <p className="resources-subtitle">Discover tools and information to support your mental health journey</p>
        </div>

        <div className="card-grid">
          {/* Card 1 */} 
          <div className="resource-card">
            <div className="icon-circle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.44,13c-.22,0-.45-.07-.67-.12a9.44,9.44,0,0,1-1.31-.39,2,2,0,0,0-2.48,1l-.22.45a12.18,12.18,0,0,1-2.66-2,12.18,12.18,0,0,1-2-2.66L10.52,9a2,2,0,0,0,1-2.48,10.33,10.33,0,0,1-.39-1.31c-.05-.22-.09-.45-.12-.68a3,3,0,0,0-3-2.49h-3a3,3,0,0,0-3,3.41A19,19,0,0,0,18.53,21.91l.38,0a3,3,0,0,0,2-.76,3,3,0,0,0,1-2.25v-3A3,3,0,0,0,19.44,13Z"/>
              </svg>
            </div>
            <h2>Govt Services & Helplines</h2>
            <p>Explore important helplines and mental health services available in India and across the globe.</p>
            <button onClick={() => navigate('/resources/helplines')}>Access Resources</button>
          </div>

          {/* Card 2 */}
          <div className="resource-card">
            <div className="icon-circle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21,7H3V5H21ZM21,9H3v2H21Zm-4,4H3v2H17Zm0,4H3v2H17Z"/>
                <path d="M19,15l4,4V15Z"/>
              </svg>
            </div>
            <h2>YouTube Videos</h2>
            <p>Watch curated videos that promote mental health awareness and self-care practices.</p>
            <button onClick={() => navigate('/resources/videos')}>Watch Videos</button>
          </div>

          {/* Card 3 */}
          <div className="resource-card">
            <div className="icon-circle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21,4H3A2,2,0,0,0,1,6V19a2,2,0,0,0,2,2H21a2,2,0,0,0,2-2V6A2,2,0,0,0,21,4ZM11,17H4V15h7Zm9-4H4V11H20Zm0-4H4V7H20Z"/>
              </svg>
            </div>
            <h2>Educational Materials</h2>
            <p>Access educational resources to better understand mental health conditions and treatment options.</p>
            <button onClick={() => navigate('/resources/education')}>Learn More</button>
          </div>

          {/* Card 4 */}
          <div className="resource-card">
            <div className="icon-circle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.5,14a3,3,0,0,0-1.39.34l-2.9-2.9A3,3,0,0,0,13,10a3,3,0,0,0-6,0,3,3,0,0,0,.78,2l-2.32,3.11A3,3,0,0,0,4.5,15a3,3,0,1,0,3,3,3,3,0,0,0-.34-1.39L9.41,13.5a3,3,0,0,0,4.18,0l2.9,2.9A3,3,0,0,0,16.5,20a3,3,0,1,0,0-6Z"/>
              </svg>
            </div>
            <h2>Support Groups</h2>
            <p>Connect with others who understand what you're going through in safe and supportive environments.</p>
            <button onClick={() => navigate('/resources/support')}>Find Support</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Resources;
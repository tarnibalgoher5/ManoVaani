// import "Resources.css"
import React from 'react';
import { useNavigate } from 'react-router-dom';


function Resources() {
  const navigate = useNavigate();

  return (
    <div className="resources-container">
      <h1 className="resources-title">Explore Resources</h1>
      <div className="card-grid">
        {/* Card 1 */}
        <div className="resource-card">
          <h2>Govt Services & Helplines</h2>
          <p>Explore important helplines and mental health services available in India and across the globe.</p>
          <button onClick={() => navigate('/resources/helplines')}>Access</button>
        </div>

        {/* Card 2 */}
        <div className="resource-card">
          <h2>YouTube Videos</h2>
          <p>Watch curated videos that promote mental health awareness and self-care practices.</p>
          <button onClick={() => navigate('/resources/youtube')}>Access</button>
        </div>

        {/* Card 3 */}
        <div className="resource-card">
          <h2>Lorem Ipsum One</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
          <button onClick={() => navigate('/resources/one')}>Access</button>
        </div>

        {/* Card 4 */}
        <div className="resource-card">
          <h2>Lorem Ipsum Two</h2>
          <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa.</p>
          <button onClick={() => navigate('/resources/two')}>Access</button>
        </div>
      </div>
    </div>
  );
}

export default Resources;

import React, { useState } from 'react';
import './helplines.css'; 
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';


function Helplines() {
  const [activeRegion, setActiveRegion] = useState('north');

  const handleRegionChange = (region) => {
    setActiveRegion(region);
  }; 

  const navigate = useNavigate();

  return ( <>
  <Navbar />
    <div className="helplines-container">
      <header className="helplines-header">
        <h1>Mental Health Helplines</h1>
        <p className="subtitle">24/7 support when you need it most</p>
        <div className="breadcrumbs">
          <a href="/">Home</a> &gt; <a href="/resources">Resources</a> &gt; Helplines
        </div>
      </header>

      <section className="emergency-banner">
        <h2>In Immediate Danger?</h2>
        <p>If you or someone you know is in immediate danger, call emergency services:</p>
        <div className="emergency-numbers">
          <div className="emergency-number">
            <span className="number">112</span>
            <span className="label">National Emergency Number</span>
          </div>
          <div className="emergency-number">
            <span className="number">108</span>
            <span className="label">Emergency Ambulance Services</span>
          </div>
        </div>
      </section>

      <section className="helplines-section">
        <h2>National Mental Health Helplines</h2>
        <div className="helplines-grid">
          <div className="helpline-card priority">
            <div className="card-header">
              <h3>KIRAN Mental Health Helpline</h3>
              <span className="badge">24/7</span>
            </div>
            <p>National toll-free helpline for psychological support and early screening</p>
            <div className="contact-info">
              <div className="phone">
                <strong>1800-599-0019</strong>
              </div>
              <p className="details">Available in 13 languages including Hindi, Tamil, Malayalam, Kannada</p>
              <p className="operator">Operated by: Department of Empowerment of Persons with Disabilities, Ministry of Social Justice and Empowerment</p>
            </div>
          </div>

          <div className="helpline-card">
            <div className="card-header">
              <h3>Tele MANAS</h3>
              <span className="badge">24/7</span>
            </div>
            <p>Tele-mental health assistance and networking across states</p>
            <div className="contact-info">
              <div className="phone">
                <strong>14416</strong> or <strong>1-800-891-4416</strong>
              </div>
              <p className="details">Free counseling in multiple languages</p>
              <p className="operator">Operated by: Ministry of Health and Family Welfare</p>
            </div>
          </div>

          <div className="helpline-card">
            <div className="card-header">
              <h3>NIMHANS</h3>
              <span className="badge">Daily</span>
            </div>
            <p>National Institute of Mental Health and Neurosciences helpline for psychological support</p>
            <div className="contact-info">
              <div className="phone">
                <strong>080-26995000</strong> / <strong>080-26995100</strong>
              </div>
              <p className="details">Available from 9 AM to 4:30 PM</p>
              <p className="operator">Operated by: NIMHANS, Bengaluru</p>
            </div>
          </div>
        </div>
      </section>

      <section className="helplines-section">
        <h2>Suicide Prevention Helplines</h2>
        <div className="helplines-grid">
          <div className="helpline-card">
            <div className="card-header">
              <h3>AASRA</h3>
              <span className="badge">24/7</span>
            </div>
            <p>Crisis intervention center for emotional support and suicide prevention</p>
            <div className="contact-info">
              <div className="phone">
                <strong>+91 9820466726</strong>
              </div>
              <p className="email">Email: aasrahelpline@yahoo.com</p>
              <p className="website">Website: <a href="http://www.aasra.info/">www.aasra.info</a></p>
            </div>
          </div>

          <div className="helpline-card">
            <div className="card-header">
              <h3>Vandrevala Foundation</h3>
              <span className="badge">24/7</span>
            </div>
            <p>Mental health support and suicide prevention helpline</p>
            <div className="contact-info">
              <div className="phone">
                <strong>1860-2662-345</strong> / <strong>+91 9999666555</strong>
              </div>
              <p className="email">Email: help@vandrevalafoundation.com</p>
            </div>
          </div>

          <div className="helpline-card">
            <div className="card-header">
              <h3>iCALL</h3>
              <span className="badge">Mon-Sat</span>
            </div>
            <p>Psychosocial helpline by TISS</p>
            <div className="contact-info">
              <div className="phone">
                <strong>022-25521111</strong> / <strong>+91 9152987821</strong>
              </div>
              <p className="details">Available from 8 AM to 10 PM</p>
              <p className="email">Email: icall@tiss.edu</p>
            </div>
          </div>
        </div>
      </section>

      <section className="region-helplines">
        <h2>State-Specific Helplines</h2>
        
        <div className="region-tabs">
          <button 
            className={`tab-button ${activeRegion === 'north' ? 'active' : ''}`} 
            onClick={() => handleRegionChange('north')}
          >
            North India
          </button>
          <button 
            className={`tab-button ${activeRegion === 'south' ? 'active' : ''}`}
            onClick={() => handleRegionChange('south')}
          >
            South India
          </button>
          <button 
            className={`tab-button ${activeRegion === 'east' ? 'active' : ''}`}
            onClick={() => handleRegionChange('east')}
          >
            East India
          </button>
          <button 
            className={`tab-button ${activeRegion === 'west' ? 'active' : ''}`}
            onClick={() => handleRegionChange('west')}
          >
            West India
          </button>
        </div>

        {activeRegion === 'north' && (
          <div className="region-content">
            <div className="helplines-grid">
              <div className="helpline-card">
                <div className="card-header">
                  <h3>Delhi</h3>
                </div>
                <div className="contact-info">
                  <p><strong>IHBAS Helpline:</strong> 011-22112136</p>
                  <p><strong>Delhi Mental Health Helpline:</strong> 011-23370600</p>
                </div>
              </div>
              <div className="helpline-card">
                <div className="card-header">
                  <h3>Punjab</h3>
                </div>
                <div className="contact-info">
                  <p><strong>Mental Health Program:</strong> 0172-2601023</p>
                  <p><strong>GMCH Psychiatry Helpline:</strong> 0172-2700001</p>
                </div>
              </div>
              <div className="helpline-card">
                <div className="card-header">
                  <h3>Haryana</h3>
                </div>
                <div className="contact-info">
                  <p><strong>DMHP Coordinator:</strong> 0172-2584220</p>
                  <p><strong>State Mental Health Authority:</strong> 0172-2560115</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeRegion === 'south' && (
          <div className="region-content">
            <div className="helplines-grid">
              <div className="helpline-card">
                <div className="card-header">
                  <h3>Tamil Nadu</h3>
                </div>
                <div className="contact-info">
                  <p><strong>State Health Helpline:</strong> 044-24794983</p>
                  <p><strong>Sneha Suicide Prevention:</strong> 044-24640050</p>
                </div>
              </div>
              <div className="helpline-card">
                <div className="card-header">
                  <h3>Kerala</h3>
                </div>
                <div className="contact-info">
                  <p><strong>DISHA Helpline:</strong> 1056 / 0471-2552056</p>
                  <p><strong>Mental Health Authority:</strong> 0471-2528698</p>
                </div>
              </div>
              <div className="helpline-card">
                <div className="card-header">
                  <h3>Karnataka</h3>
                </div>
                <div className="contact-info">
                  <p><strong>NIMHANS Helpline:</strong> 080-26995000</p>
                  <p><strong>Sahai Helpline:</strong> 080-25497777</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeRegion === 'east' && (
          <div className="region-content">
            <div className="helplines-grid">
              <div className="helpline-card">
                <div className="card-header">
                  <h3>West Bengal</h3>
                </div>
                <div className="contact-info">
                  <p><strong>Lifeline Foundation:</strong> 033-24637401</p>
                  <p><strong>State Mental Health Program:</strong> 033-23205555</p>
                </div>
              </div>
              <div className="helpline-card">
                <div className="card-header">
                  <h3>Odisha</h3>
                </div>
                <div className="contact-info">
                  <p><strong>Mental Health Institute:</strong> 0674-2390265</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeRegion === 'west' && (
          <div className="region-content">
            <div className="helplines-grid">
              <div className="helpline-card">
                <div className="card-header">
                  <h3>Maharashtra</h3>
                </div>
                <div className="contact-info">
                  <p><strong>State Mental Health Authority:</strong> 022-24931126</p>
                  <p><strong>iCALL:</strong> 022-25521111</p>
                </div>
              </div>
              <div className="helpline-card">
                <div className="card-header">
                  <h3>Gujarat</h3>
                </div>
                <div className="contact-info">
                  <p><strong>State Mental Health Program:</strong> 079-23250290</p>
                </div>
              </div>
            </div>
          </div> 
        )}
      </section>

      <div className="footer-container ft2">
        <div className="footerText">
          <h3>manovaani</h3>
          <h6>your safe haven powered with AI driven care</h6>
        </div>
        <ul className="footer-nav">
          <li onClick={() => window.location.href = '/aboutus'}>About Us</li>
          <li onClick={() => window.location.href = '/surveys'}>Surveys</li>
          <li onClick={() => window.location.href = '/resources'}>Resources</li>
        </ul>
      </div>
    </div>
  
    </>
  );
}

export default Helplines;
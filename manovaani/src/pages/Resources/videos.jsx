import React, { useState } from 'react';
import './videos.css'; 
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

function Videos() {
  const [activeCategory, setActiveCategory] = useState('all');

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };


  const videos = [
    {
      id: 1,
      title: "Understanding Anxiety and Depression",
      channel: "NIMHANS Official",
      thumbnail: "/api/placeholder/320/180",
      videoId: "example1",
      category: "educational",
      description: "Experts from NIMHANS explain the science behind anxiety and depression."
    },
    {
      id: 2,
      title: "Meditation for Mental Peace - 10 Minutes",
      channel: "Indian Mindfulness",
      thumbnail: "/api/placeholder/320/180",
      videoId: "example2",
      category: "meditation",
      description: "A guided meditation practice specifically designed for stress relief."
    },
    {
      id: 3,
      title: "Breaking Mental Health Stigma in Indian Society",
      channel: "Mental Health Foundation India",
      thumbnail: "/api/placeholder/320/180",
      videoId: "example3",
      category: "awareness",
      description: "Discussion about overcoming stigma around mental health in Indian communities."
    },
    {
      id: 4,
      title: "Breathing Exercises for Stress Management",
      channel: "Yoga for Mental Health",
      thumbnail: "/api/placeholder/320/180",
      videoId: "example4",
      category: "exercises",
      description: "Simple breathing techniques to reduce anxiety and manage stress."
    },
    {
      id: 5,
      title: "Understanding Schizophrenia: Symptoms and Treatment",
      channel: "AIIMS Mental Health",
      thumbnail: "/api/placeholder/320/180",
      videoId: "example5",
      category: "educational",
      description: "Medical professionals explain schizophrenia, its symptoms, and modern treatments."
    },
    {
      id: 6,
      title: "My Journey with Bipolar Disorder - A Personal Story",
      channel: "Mental Health Stories",
      thumbnail: "/api/placeholder/320/180",
      videoId: "example6",
      category: "testimonials",
      description: "A personal account of living with and managing bipolar disorder."
    }
  ];

  // Filter videos based on active category
  const filteredVideos = activeCategory === 'all' 
    ? videos 
    : videos.filter(video => video.category === activeCategory);

  return (
    <>
    <Navbar />
    <div className="videos-container">
      <header className="videos-header">
        <h1>Mental Health Videos</h1>
        <p className="subtitle">Educational content and supportive resources</p>
        <div className="breadcrumbs">
          <a href="/">Home</a> &gt; <a href="/resources">Resources</a> &gt; Videos
        </div>
      </header>

      <section className="video-categories">
        <h2>Browse by Category</h2>
        <div className="category-tabs">
          <button 
            className={`category-tab ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('all')}
          >
            All Videos
          </button>
          <button 
            className={`category-tab ${activeCategory === 'educational' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('educational')}
          >
            Educational
          </button>
          <button 
            className={`category-tab ${activeCategory === 'meditation' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('meditation')}
          >
            Meditation
          </button>
          <button 
            className={`category-tab ${activeCategory === 'exercises' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('exercises')}
          >
            Exercises
          </button>
          <button 
            className={`category-tab ${activeCategory === 'testimonials' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('testimonials')}
          >
            Testimonials
          </button>
          <button 
            className={`category-tab ${activeCategory === 'awareness' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('awareness')}
          >
            Awareness
          </button>
        </div>
      </section>

      <section className="videos-grid">
        {filteredVideos.map(video => (
          <div className="video-card" key={video.id}>
            <div className="video-thumbnail">
              <img src={video.thumbnail} alt={video.title} />
              <div className="play-button">▶</div>
            </div>
            <div className="video-info">
              <h3>{video.title}</h3>
              <p className="channel">{video.channel}</p>
              <p className="description">{video.description}</p>
              <a 
                href={`https://www.youtube.com/watch?v=${video.videoId}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="watch-button"
              >
                Watch Video
              </a>
            </div>
          </div>
        ))}
      </section>

      <section className="disclaimer">
        <h2>Disclaimer</h2>
        <p>These videos are provided for educational and informational purposes only. They are not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.</p>
      </section>

    </div>
    <Footer />
    </>
  );
}

export default Videos;
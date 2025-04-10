import React, { useState } from 'react';
import './Survey.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

function Survey(){
    const navigate = useNavigate();

  return (
<>
<Navbar />
    <div className="survey-container">
  <h1 className="survey-title">Mental Health Self-Assessments</h1>

  <div className="survey-grid">
    {/* Card 1 */}
    <div className="survey-card">
      <h2>Anxiety Test</h2>
      <p>Take a quick screening to assess symptoms of anxiety and how they impact your daily life.</p>
      <p>This can help you identify potential concerns and seek guidance.</p>
      <div className="survey-buttons">
        <a href="https://screening.mhanational.org/screening-tools/anxiety/" target="_blank" rel="noopener noreferrer">
          <button>General Anxiety</button>
        </a>
        <a href="https://psychcentral.com/quizzes/anxiety-quiz" target="_blank" rel="noopener noreferrer">
          <button>PsychCentral Test</button>
        </a>
      </div>
    </div>

    {/* Card 2 */}
    <div className="survey-card">
      <h2>Depression Test</h2>
      <p>Evaluate your current mood and emotional state using this brief self-assessment.</p>
      <p>Learn whether you’re showing signs of depression and find resources to support you.</p>
      <div className="survey-buttons">
        <a href="https://screening.mhanational.org/screening-tools/depression/" target="_blank" rel="noopener noreferrer">
          <button>MHA Depression</button>
        </a>
        <a href="https://www.mind-diagnostics.org/depression-test" target="_blank" rel="noopener noreferrer">
          <button>Mind Diagnostics</button>
        </a>
      </div>
    </div>
  </div>

  <div className="survey-grid">
    {/* Card 3 */}
    <div className="survey-card">
      <h2>Stress Assessment</h2>
      <p>Understand how stress is affecting your mental and physical well-being.</p>
      <p>This test provides insight into your stress triggers and coping skills.</p>
      <div className="survey-buttons">
        <a href="https://psychcentral.com/quizzes/stress-quiz" target="_blank" rel="noopener noreferrer">
          <button>Stress Quiz</button>
        </a>
        <a href="https://www.mindtools.com/pages/article/newTCS_82.htm" target="_blank" rel="noopener noreferrer">
          <button>MindTools Test</button>
        </a>
      </div>
    </div>

    {/* Card 4 */}
    <div className="survey-card">
      <h2>PTSD Check</h2>
      <p>Check if your symptoms match PTSD criteria with this short screener.</p>
      <p>Great starting point to seek help if you’ve faced traumatic events.</p>
      <div className="survey-buttons">
        <a href="https://screening.mhanational.org/screening-tools/ptsd/" target="_blank" rel="noopener noreferrer">
          <button>MHA PTSD</button>
        </a>
        <a href="https://www.ptsd.va.gov/professional/assessment/screens/pc-ptsd.asp" target="_blank" rel="noopener noreferrer">
          <button>VA PTSD Screener</button>
        </a>
      </div>
    </div>
  </div>
</div>
<Footer />
</>
  );


}
export default Survey;
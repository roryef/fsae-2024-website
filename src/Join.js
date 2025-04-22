import React from 'react';
import './Join.css';

function Join() {
  return (
    <div className="join-page">
      {/* Hero Section */}
      <section className="join-hero">
        <img src="/groups/team.png" alt="Team Hero" className="join-hero-image" />
        <div className="join-hero-overlay">
          <h1 className="join-hero-title">JOIN US</h1>
        </div>
      </section>

      {/* Invitation Section */}
      <section className="join-intro">
        <h2 className="join-intro-heading">Ready to Build, Drive, and Compete?</h2>
        <p className="join-intro-text">
          We welcome students from all majors and backgrounds — no experience required. Whether you’re into 
          engineering, design, business, or simply love racing, there's a place for you on our team.
        </p>
        <a 
          href="https://linktr.ee/cufr_onboarding" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="join-linktree"
        >
          View Opportunities & Resources
        </a>
      </section>

      <section className="team-photo-section">
        <h2 className="team-photo-heading">Life on the Team</h2>
        <div className="team-photo-grid">
          <div className="photo-card">
            <img src="/car/test.jpg" alt="Testing" />
            <p className="caption">Testing</p>
          </div>
          <div className="photo-card">
            <img src="/groups/comp.jpg" alt="Race Day at Michigan" />
            <p className="caption">Race Day at Michigan</p>
          </div>
          <div className="photo-card">
            <img src="/groups/eboard.jpg" alt="E-Board" />
            <p className="caption">E-Board</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="join-contact">
        <p className="join-contact-text">Questions? We’d love to hear from you.</p>
        <a href="mailto:fsae@columbia.edu" className="join-button">
          Contact Us
        </a>
      </section>

    </div>
  );
}

export default Join;

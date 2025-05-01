import React from 'react';
import './News.css';

function News() {
  return (
    <div className="news-page">
      {/* Hero Section */}
      <section className="news-hero">
        <img
          src={`${process.env.PUBLIC_URL}/groups/team_wide.png`}
          alt="News Hero"
          className="news-hero-image"
        />
        <div className="news-overlay">
          <h1 className="news-title">NEWS & UPDATES</h1>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="subscribe-section">
        <h2>Join our mailing list</h2>
        <p>Get updates about events, builds, and competition directly to your inbox.</p>
        <div className="mailchimp-container">
          <iframe 
            title="Mailchimp Form"
            src="https://columbia.us8.list-manage.com/subscribe?u=8f5b16d3f1298f4c5e2ab5005&id=d609a01ac3"
            width="100%" 
            height="300px" 
            frameBorder="0"
            style={{ border: "none", backgroundColor: "white", borderRadius: "8px" }}
          ></iframe>
        </div>
      </section>

      {/* Featured Newsletter */}
      <section className="newsletter-section">
        <h2>Latest Newsletter</h2>
        <div className="newsletter-frame">
          <iframe
            title="Latest Newsletter"
            src={`${process.env.PUBLIC_URL}/newsletters/Career Advice, Livery, and Updates!!.pdf`}
            width="100%"
            height="700px"
            frameBorder="0"
          ></iframe>
        </div>
      </section>

      {/* Past Newsletters */}
      <section className="newsletter-section">
        <h2>Past Newsletters</h2>
        <div className="newsletter-frame">
          <iframe
            title="Past Newsletter"
            src={`${process.env.PUBLIC_URL}/newsletters/No Speed Limits Here!!.pdf`}
            width="100%"
            height="700px"
            frameBorder="0"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default News;


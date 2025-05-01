import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  // Timer Calculations
  const competitionDate = new Date("2025-06-01T06:30:00");
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = competitionDate - now;
    let timeLeft = {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00'
    };
    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0'),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0'),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const cars = [
    {
      title: '2024–25 EV',
      description: 'Coming Soon!',
      image: `${process.env.PUBLIC_URL}/car/2324-2.jpg`,
    },
    {
      title: '2023–24 EV',
      description: 'Mid-engine electric platform built for precision and acceleration.',
      image: `${process.env.PUBLIC_URL}/car/2324-2.jpg`,
    },
    {
      title: '2022–23 EV',
      description: 'Rear-engine combustion design with optimized suspension geometry.',
      image: `${process.env.PUBLIC_URL}/car/2324-2.jpg`,
    },
    {
      title: '2021–22 IC',
      description: 'Rear-engine combustion design with optimized suspension geometry.',
      image: `${process.env.PUBLIC_URL}/car/2324-2.jpg`,
    },
    {
      title: '2020–21 IC',
      description: 'First-gen EV prototype with custom drivetrain and telemetry.',
      image: `${process.env.PUBLIC_URL}/car/2324-2.jpg`,
    },
    {
      title: '2019–20 EV',
      description: 'Lightweight chassis and track-ready aerodynamics.',
      image: `${process.env.PUBLIC_URL}/car/2324-2.jpg`,
    },
  ];

  return (
    <div className="page">
      {/* Hero Section */}
      <section className="hero-section">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src={`${process.env.PUBLIC_URL}/car/hero_short.mov`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay"></div>
        <div className="overlay-content">
          <img src={`${process.env.PUBLIC_URL}/logos/LogoWhite.png`} alt="Logo" className="logo" />
          <h1 className="heading">Columbia University Formula Racing</h1>
          <div className="stats-button-container">
            <Link to="/join" className="button">JOIN US</Link>
            <Link to="/sponsors" className="donate-button">DONATE</Link>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="countdown-section">
        <div className="countdown-content-wrapper">
          <div className="countdown-left">
            <h2 className="countdown-heading">COUNTDOWN TO COMPETITION</h2>
            <div className="timer">
              {['days', 'hours', 'minutes', 'seconds'].map((unit) => (
                <div key={unit} className="unit">
                  <span className="number">{timeLeft[unit]}</span>
                  <span className="label">{unit.charAt(0).toUpperCase() + unit.slice(1)}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="countdown-image-card">
            <img
              src={`${process.env.PUBLIC_URL}/groups/comp.jpg`}
              alt="Last Year's Competition"
              className="countdown-image"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <img
          src={`${process.env.PUBLIC_URL}/groups/team_wide.png`}
          alt="Team Stats"
          className="stats-image"
        />
        <div className="stats-overlay">
          <h2 className="stats-heading">COLUMBIA'S LARGEST ENGINEERING CLUB</h2>
          <p className="stats-text">230 MEMBERS, 20 SPONSORS, 16 E-BOARD</p>
          <div className="stats-button-container">
            <Link to="/about" className="small-button">ABOUT</Link>
            <Link to="/sponsors" className="small-button">SPONSORS</Link>
            <Link to="/join" className="small-button">JOIN</Link>
          </div>
        </div>
      </section>

      {/* Cars Section (commented out) */}
      {/* <section className="cars-section">
        <h2 className="section-title">OUR CARS</h2>
        <p className="section-text">
          Explore some of our recent vehicles — each designed, built, and tested by Columbia students.
        </p>
        <div className="cars-grid">
          {cars.map((car, i) => (
            <div
              key={i}
              className="car-card"
              style={{ backgroundImage: `url(${car.image})` }}
            >
              <div className="car-overlay"></div>
              <div className="car-content">
                <div className="car-title">{car.title}</div>
                <div className="car-desc">{car.description}</div>
              </div>
            </div>
          ))}
        </div>
      </section> */}
    </div>
  );
}

export default Home;


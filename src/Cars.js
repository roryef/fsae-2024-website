import React, { useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './Cars.css';

function CarsStatCard({ end, label, suffix, prefix, decimals = 0 }) {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div ref={ref} className="cars-stat-card">
      {inView && (
        <>
          <div className="cars-stat-number">
            {prefix && <span>{prefix}</span>}
            <CountUp end={end} duration={2} decimals={decimals} />
            {suffix && <span>{suffix}</span>}
          </div>
          <div className="cars-stat-label">{label}</div>
        </>
      )}
    </div>
  );
}

function Cars() {
  const [selectedCar, setSelectedCar] = useState('ev25');

  const renderEV25 = () => (
    <div className="car-content">
      <div className="cars-hero-intro-container">
        <img src="/ev25/25-1.jpg" alt="EV25 Hero" className="cars-hero-intro-image" />
        <div className="cars-hero-intro-text">
          <h2>Introducing EV25</h2>
          <p>
            The culmination of a year of relentless effort, engineering innovation, and cross-functional collaboration
          </p>
        </div>
      </div>

       {/* High-Level Sections with Images and Text */}
       <section className="cars-overlay-block-1">
        <img src="/ev25/25-hero.jpg" alt="Design Philosophy" className="cars-overlay-image-1" />
        <div className="cars-overlay-text-1">
          <h3>Design and Academic Philosophy</h3>
          <ul>
            <li>EV25’s main goal was to optimize endurance performance and improve static event scores at competition.</li>
            <li>We employed a systems-first, integration-heavy design methodology across mechanical and electrical subteams.</li>
            <li>Balanced emphasis was placed on innovation, manufacturability, serviceability, and in-house iteration to reduce risk.</li>
          </ul>
        </div>
      </section>

      <section className="cars-overlay-block-2">
        <img src="/ev25/IMG_1286.jpeg" alt="Team Goals" className="cars-overlay-image-2" />
        <div className="cars-overlay-text-2">
          <h3>Team Goals</h3>
          <p><strong>Develop a performance-focused single-motor FSAE vehicle by:</strong></p>
          <ul>
            <li>Optimizing overall vehicle weight by 25kg while preserving structural integrity and reliability.</li>
            <li>Leveraging data-driven engineering principles through simulation, validation, and physical testing feedback loops.</li>
            <li>Ensuring endurance-ready reliability by testing drivetrain, suspension, and thermal systems rigorously.</li>
          </ul>
        </div>
      </section>

      <section className="cars-overlay-block-3">
        <img src="/ev25/25-teamtest.jpg" alt="Vehicle Architecture" className="cars-overlay-image-3" />
        <div className="cars-overlay-text-3">
          <h3>Architecture</h3>
          <ul>
            <li>4130 steel full space-frame</li>
            <li>Emrax 208 MV | Cascadia PM100DX</li>
            <li>Rear-wheel drive, chain, fixed ratio</li>
            <li>5.391 kWh, 302.4V, 80 kW peak (10 sec)</li>
            <li>Hoosier LC0 16.0 x 7.5-10 Tires</li>
          </ul>
        </div>
      </section>

      <section className="cars-overlay-block">
        <img src="/ev25/25-angle.jpg" alt="Vehicle Highlights" className="cars-overlay-image" />
        <div className="cars-overlay-text">
          <h3>Vehicle Highlights</h3>
          <ul>
            <li>Introduced a new accumulator thermal path to resolve prior cooling bottlenecks from EV24.</li>
            <li>Fast, iterative design and manufacturing cycle with emphasis on reliability and subteam coordination.</li>
            <li>Custom-length, reliable wiring harness: optimized electrical integration and data acquisition</li>
            <li>NYC-themed livery and cohesive design identity contributing to team pride and visibility at events.</li>
          </ul>
        </div>
      </section>

      <section className="cars-stats-section">
        <h2 className="cars-stats-title">KEY METRICS</h2>
        <div className="cars-stats-grid">
          <CarsStatCard end={68.0} label="Peak Power (kW)" decimals={0} />
          <CarsStatCard end={300} label="Battery Voltage (V)" decimals={0} />
          <CarsStatCard end={5.4} label="Battery Capacity (kWh)" decimals={1} />
          <CarsStatCard end={242.5} label="Total Weight Without Driver (kg)" decimals={1} />

          <CarsStatCard end={2326} decimals={0} label="Torsional Stiffness (N·m/deg)" />
          <CarsStatCard end={237.3} label="Center of Gravity Height (mm)" decimals={1} />
          <CarsStatCard end={51.4} label="Front Weight Distribution (%)" decimals={1} />
          <CarsStatCard end={48.6} label="Left Weight Distribution (%)" decimals={1} />
          
          <CarsStatCard end={25.4} label="Ride Height (mm)" decimals={1} />
          <CarsStatCard end={2908.9} decimals={1} label="Length (mm)" />
          <CarsStatCard end={1413.5} decimals={1} label="Width (mm)" />
          <CarsStatCard end={1066.5} decimals={1} label="Height (mm)" />
          
        </div>
      </section>


      
    </div>
  );



  const renderEV24 = () => (
    <div className="car-content">
      <div className="cars-hero-intro-container-1">
        <img src="/car/profile-3.jpg" alt="EV24 Hero" className="cars-hero-intro-image-1" />
        <div className="cars-hero-intro-text-1">
          <h2>Explore EV24</h2>
          <p>
            Content coming soon.
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="cars-page">
      {/* Hero Section */}
      <section className="cars-hero-section">
        <img src="/ev25/25-hero2.jpg" alt="Cars Hero" className="cars-hero-image" />
        <div className="cars-hero-overlay"></div>
        <div className="cars-hero-text">
          <h1>OUR CARS</h1>
          <div className="car-toggle-section">
            <button
              className={`car-toggle-button ${selectedCar === 'ev25' ? 'active' : ''}`}
              onClick={() => setSelectedCar('ev25')}
            >
              EV25
            </button>
            <button
              className={`car-toggle-button ${selectedCar === 'ev24' ? 'active' : ''}`}
              onClick={() => setSelectedCar('ev24')}
            >
              EV24
            </button>
          </div>
        </div>
      </section>

      {/* Dynamic Content */}
      {selectedCar === 'ev25' ? renderEV25() : renderEV24()}
    </div>
  );
}

export default Cars;


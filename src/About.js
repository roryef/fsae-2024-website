import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './About.css';

function StatCard({ end, label, prefix }) {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <div ref={ref} className="stat-card">
      {inView && (
        <>
          <div className="stat-number">
            {prefix && <span>{prefix}</span>}
            <CountUp end={end} duration={2} />
          </div>
          <div className="stat-label">{label}</div>
        </>
      )}
    </div>
  );
}

function About() {
  const eras = [
    { title: "The Early Teams", years: "1997–2000", color: "#001f3f" },
    { title: "The First Decade", years: "2000–2008", color: "#003366" },
    { title: "Superleggera", years: "2008–2019", color: "#336699" },
    { title: "CFR-21", years: "2019–2022", color: "#6699cc" },
    { title: "eCFR", years: "2022–Present", color: "#91b4d1" },
  ];

  const subteams = [
    {
      title: 'Electrical',
      description: 'Low and high voltage EE projects for functionality, integration, and rules compliance of all electrical systems.',
      image: `${process.env.PUBLIC_URL}/groups/team_wide.png`,
    },
    {
      title: 'Mechanical',
      description: 'Dynamics, powertrain, controls, and other structural components for performance and safety.',
      image: `${process.env.PUBLIC_URL}/groups/team_wide.png`,
    },
    {
      title: 'Admin',
      description: 'Systems integration, project management, business, and PR to support the engineering team.',
      image: `${process.env.PUBLIC_URL}/groups/eboard.jpg`,
    },
  ];

  const eboard = [
    { name: 'Calvin Moon', title: 'President', image: `${process.env.PUBLIC_URL}/headshots/Calvin.jpg` },
    { name: 'Godwill Agbehonou', title: 'VP of Techincal Operations', image: `${process.env.PUBLIC_URL}/headshots/Godwill.jpg` },
    { name: 'Grace Zhang', title: 'VP of Business Affairs', image: `${process.env.PUBLIC_URL}/headshots/Grace.jpg` },
    { name: 'Nika Zamyatina', title: 'Chief Mechanical Engineer', image: `${process.env.PUBLIC_URL}/headshots/Calvin.jpg` },
    { name: 'Rosnel Leyva-Cortes', title: 'Chief Electrical Engineer', image: `${process.env.PUBLIC_URL}/headshots/Rosnel.jpg` },
    { name: 'Steven Tian', title: 'Chief Manufacturing Engineer', image: `${process.env.PUBLIC_URL}/headshots/Steven.jpg` },
    { name: 'Karime Mejia', title: 'Vehicle Dynamics Chief', image: `${process.env.PUBLIC_URL}/headshots/Karime.jpg` },
    { name: 'John Paul Salvatore', title: 'Powertrain Chief', image: `${process.env.PUBLIC_URL}/headshots/JP.jpg` },
    { name: 'Aileen Liu', title: 'Controls Chief', image: `${process.env.PUBLIC_URL}/headshots/Aileen.jpg` },
    { name: 'Hadley Pade', title: 'High Voltage Chief', image: `${process.env.PUBLIC_URL}/headshots/Hadley.jpg` },
    { name: 'Lizzie Scott', title: 'Low Voltage Chief', image: `${process.env.PUBLIC_URL}/headshots/Lizzie.jpg` },
    { name: 'William Ostling', title: 'Frame/Body/Aero Chief', image: `${process.env.PUBLIC_URL}/headshots/William.jpg` },
    { name: 'Nikaia He', title: 'Electrical Engineering Treasurer', image: `${process.env.PUBLIC_URL}/headshots/Nikaia.jpg` },
    { name: 'Eva Sherman', title: 'Mechanical Engineering Treasurer', image: `${process.env.PUBLIC_URL}/headshots/Eva.jpg` },
    { name: 'Audrey Ahn', title: 'Secretary', image: `${process.env.PUBLIC_URL}/headshots/Calvin.jpg` },
    { name: 'Louise Goldenberg', title: 'Social Chair', image: `${process.env.PUBLIC_URL}/headshots/Louise.jpg` },
  ];

  const faculty = [
    {
      name: 'Jeffrey Kysar',
      link: 'https://www.me.columbia.edu/faculty/jeffrey-kysar',
      title: 'Professor and Chair of Mechanical Engineering',
      image: `${process.env.PUBLIC_URL}/headshots/Kysar.jpg`,
    },
    {
      name: 'Josh Browne',
      link: 'https://www.me.columbia.edu/joshua-browne',
      title: 'Adjunct Professor of Mechanical Engineering',
      image: `${process.env.PUBLIC_URL}/headshots/Browne.jpg`,
    },
    {
      name: 'Matthias Preindl',
      link: 'https://www.ee.columbia.edu/matthias-preindl',
      title: 'Associate Professor of Electrical Engineering',
      image: `${process.env.PUBLIC_URL}/headshots/Preindl.jpg`,
    }
  ];

  return (
    <div className="page">
      <section className="hero-section">
        <img src={`${process.env.PUBLIC_URL}/groups/team.png`} alt="Our Team" className="hero-image" />
        <div className="gray-overlay"></div>
        <div className="overlay">
          <h1 className="hero-heading">ABOUT US</h1>
        </div>
      </section>

       {/* Who We Are & Mission - Side-by-Side */}
      <section className="side-by-side-wrapper">
        <div className="side-by-side-column">
          <h2 className="section-title">WHO WE ARE</h2>
          <p className="section-text">
            We're a student-run engineering team that designs, builds, and races a formula-style electric
            vehicle each year. Our team blends hands-on fabrication, advanced design, and project management, preparing
            students for real-world engineering challenges. The finished racecar is a testament to our team's incredible
            work ethic and dedication.
          </p>
        </div>
        <div className="side-by-side-column">
          <h2 className="section-title">OUR MISSION</h2>
          <p className="section-text">
            Our mission is to educate and develop the next generation of engineers through real-world project experience,
            teamwork, and innovation. We strive to push the boundaries of electric vehicle technology and cultivate a strong,
            inclusive engineering community.
          </p>
        </div>
      </section>

      {/* By the Numbers */}
      <section className="numbers-section">
      <h2 className="section-title">2025 BY THE NUMBERS</h2>
      <div className="stats-grid">
        <StatCard end={230} label="Members" />
        <StatCard end={23} label="Nationalities" />
        <StatCard end={16} label="Majors" />
        <StatCard end={16} label="E-Board Members" />
        <StatCard end={20} label="Sponsors" />
        <StatCard end={5} label="Seconds 0-60 MPH" suffix="s" />
        <StatCard end={9} label="Increase in Club Involvement" prefix="x" />
        <StatCard end={5000} label="Spending Reductions" prefix="$" />
      </div>
      </section>
      
      <section className="subteams-section">
        <h2 className="section-title">SUBTEAMS</h2>
        <div className="subteams-wrapper">
          {subteams.map((team, i) => (
            <div
              key={i}
              className="subteam-card"
              style={{ backgroundImage: `url(${team.image})` }}
            >
              <div className="subteam-overlay">
                <h3 className="subteam-title">{team.title}</h3>
                <p className="subteam-desc">{team.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="eboard-section">
        <h2 className="section-title">E-BOARD</h2>
        <div className="eboard-grid">
          {eboard.map((member, i) => (
            <div key={i} className="eboard-card">
              <img src={member.image} alt={member.name} className="eboard-image" />
              <div className="eboard-name">{member.name}</div>
              <div className="eboard-title">{member.title}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="eboard-section">
        <h2 className="section-title">Faculty Advisors</h2>
        <div className="fac-grid">
          {faculty.map((advisor, i) => (
            <div key={i} className="eboard-card">
              <img src={advisor.image} alt={advisor.name} className="eboard-image" />
              <a href={advisor.link} target="_blank" rel="noopener noreferrer" className="fac-name">
                {advisor.name}
              </a>
              <p className="fac-title">{advisor.title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;

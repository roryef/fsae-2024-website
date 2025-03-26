import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

function StatCard({ end, label, prefix }) {
    const { ref, inView } = useInView({ triggerOnce: true });
  
    return (
      <div ref={ref} style={statCardStyle}>
        {inView && (
          <>
            <div style={statNumberStyle}>
              {prefix && <span>{prefix}</span>}
              <CountUp end={end} duration={2} />
            </div>
            <div style={statLabelStyle}>{label}</div>
          </>
        )}
      </div>
    );
  }

function About() {
  return (
    <div style={pageStyle}>
      {/* Hero */}
      <section style={heroSectionStyle}>
        <img src="/team.png" alt="Our Team" style={heroImageStyle} />
        <div style={grayOverlayStyle}></div>
        <div style={overlayStyle}>
          <h1 style={heroHeadingStyle}>ABOUT US</h1>
        </div>

      </section>

      {/* What We Do & Mission - Side-by-Side */}
      <section style={sideBySideWrapperStyle}>
        <div style={sideBySideColumnStyle}>
          <h2 style={sectionTitleStyle}>WHAT WE DO</h2>
          <p style={sectionTextStyle}>
            We're a student-run engineering team that designs, builds, and races a formula-style electric 
            vehicle each year. Our team blends hands-on fabrication, advanced design, and project management, preparing 
            students for real-world engineering challenges. The finished racecar is a testament to our team's incredible
            work ethic and dedication.
          </p>
        </div>
        <div style={sideBySideColumnStyle}>
          <h2 style={sectionTitleStyle}>OUR MISSION</h2>
          <p style={sectionTextStyle}>
            Our mission is to educate and develop the next generation of engineers through real-world project experience, teamwork, and innovation. We strive to push the boundaries of electric vehicle technology and cultivate a strong, inclusive engineering community.
          </p>
        </div>
      </section>

      {/* By the Numbers */}
      <section style={numbersSectionStyle}>
        <h2 style={sectionTitleStyle}>OUR PAST YEAR BY THE NUMBERS</h2>
        <div style={statsGridStyle}>
            <StatCard end={230} label="Members" />
            <StatCard end={23} label="Countries" />
            <StatCard end={16} label="Majors" />
            <StatCard end={16} label="E-Board" />
            <StatCard end={24} label="Sponsors" />
            <StatCard end={5} label="Seconds 0-60 MPH" suffix="s"/>
            <StatCard end={9} label="Increase in Club Involvement" prefix="x" />
            <StatCard end={5000} label="Costs Cut" prefix="$" />
        </div>
        </section>


      {/* Team History */}
      <section style={contentSectionStyle}>
        <h2 style={sectionTitleStyle}>TEAM HISTORY</h2>
        <p style={sectionTextStyle}>
          Since our founding, Columbia FSAE has evolved from a small group of student engineers into a competitive racing team. We've grown in size, scope, and capability each year—building faster, smarter electric vehicles with every iteration. Our cars represent not just technical advancement, but the teamwork and tenacity of our members.
        </p>
      </section>

      {/* Subteams */}
      <section style={contentSectionStyle}>
        <h2 style={sectionTitleStyle}>Subteams</h2>
        <p style={sectionTextStyle}>
          Our team is organized into subteams including Powertrain, Chassis, Controls, Business, and more—each contributing to different aspects of the car’s design, fabrication, and competition.
        </p>
      </section>

      {/* E-Board */}
      <section style={contentSectionStyle}>
        <h2 style={sectionTitleStyle}>E-Board</h2>
        <p style={sectionTextStyle}>
          Our executive board oversees team operations, long-term goals, and strategic decisions. It includes the team captain, technical and business leads, and other core leadership roles.
        </p>
      </section>
    </div>
  );
}

const pageStyle = {
    width: '100%',
    overflowX: 'hidden',
    backgroundColor: 'black',
    color: 'white',
  };
  
  //hero
  const heroSectionStyle = {
    position: 'relative',
    width: '100%',
    height: '70vh',
    overflow: 'hidden',
  };
  
  const heroImageStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center 80%', 
  };
  
  const overlayStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    zIndex: 2, 
  };
  
  const grayOverlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)', 
    zIndex: 1,
  };

  const heroHeadingStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
  };

  //what we do / mission
  const sideBySideWrapperStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '40px',
    padding: '60px 30px',
    maxWidth: '1000px',
    margin: '0 auto',
    textAlign: 'left',
  };
  
  const sideBySideColumnStyle = {
    flex: '1 1 400px',
    minWidth: '300px',
  };
  
  //by the numbers
  const numbersSectionStyle = {
    backgroundColor: '#111',
    backgroundImage: 'url("/carbon-fiber.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '80px 30px',
    textAlign: 'center',
    color: 'white',
  };
  
  const statsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)', // 🔁 Exactly 4 columns
    gap: '30px',
    marginTop: '40px',
    maxWidth: '1100px',
    marginLeft: 'auto',
    marginRight: 'auto',
  };
  
  const statCardStyle = {
    backgroundColor: '#1a1a1a',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
    display: 'flex',
    flexDirection: 'row',      // 🔁 Horizontal layout
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',                // ➕ Space between number and label
    minHeight: '100px',
  };
  
  const statNumberStyle = {
    fontSize: '2.4rem',
    fontWeight: 'bold',
    color: '#00C8FF',
  };
  
  const statLabelStyle = {
    fontSize: '1.1rem',
    color: 'white',
    textAlign: 'left',
  };
  
  
  
  
  
    
  const contentSectionStyle = {
    padding: '60px 30px',
    maxWidth: '1000px',
    margin: '0 auto',
    textAlign: 'center',
  };
  
  const sectionTitleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '20px',
  };
  
  const sectionTextStyle = {
    fontSize: '1.1rem',
    lineHeight: '1.6',
  };
  

export default About;


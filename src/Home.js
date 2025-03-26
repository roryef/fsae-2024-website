import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {

  {/* Timer Calculations */}
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

  {/* Page Sections */}
  return (
    <div style={pageStyle}>
      {/* Hero Section */}
      <section style={heroSectionStyle}>
        {/* Background Video */}
        <video autoPlay loop muted playsInline style={heroVideoStyle}>
          <source src="/hero_short.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content on top of video */}
        <div style={heroOverlayStyle}></div>
        <div style={overlayContentStyle}>
          <img src="/LogoWhite.png" alt="Logo" style={logoStyle} />
          <h1 style={headingStyle}>Columbia University Formula Racing</h1>
          <div style={statsButtonContainerStyle}>
            <Link to="/join" style={buttonStyle}>JOIN US</Link>
            <Link to="/sponsors" style={donateButtonStyle}>DONATE</Link>
          </div>

        </div>
      </section>

      {/* Countdown Section */}
      <section style={countdownSectionStyle}>
        <h2 style={countdownHeadingStyle}>COUNTDOWN TO COMPETITION</h2>
        <div style={timerStyle}>
          <div style={unitStyle}>
            <span style={numberStyle}>{timeLeft.days}</span>
            <span style={labelStyle}>Days</span>
          </div>
          <div style={unitStyle}>
            <span style={numberStyle}>{timeLeft.hours}</span>
            <span style={labelStyle}>Hours</span>
          </div>
          <div style={unitStyle}>
            <span style={numberStyle}>{timeLeft.minutes}</span>
            <span style={labelStyle}>Minutes</span>
          </div>
          <div style={unitStyle}>
            <span style={numberStyle}>{timeLeft.seconds}</span>
            <span style={labelStyle}>Seconds</span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={statsSectionStyle}>
        <img src="/team_wide.png" alt="Team Stats" style={statsImageStyle} />
        <div style={statsOverlayStyle}>
          <h2 style={statsHeadingStyle}>COLUMBIA'S LARGEST ENGINEERING CLUB</h2>
          <p style={statsTextStyle}>230 MEMBERS, 24 SPONSORS, 16 E-BOARD</p>
          <div style={statsButtonContainerStyle}>
            <Link to="/about" style={smallButtonStyle}>ABOUT</Link>
            <Link to="/sponsors" style={smallButtonStyle}>SPONSORS</Link>
            <Link to="/join" style={smallButtonStyle}>JOIN</Link>
          </div>
        </div>
      </section>

      {/* Cars Section */}
      <section style={carsSectionStyle}>
        <h2 style={sectionHeadingStyle}>EXPLORE OUR CARS</h2>
        <p style={sectionTextStyle}>
          Each year, we dedicate ourselves to pushing the limits of performance and building the next 
          generation of racecars. Explore our vehicles and click to learn more!
        </p>
        
        <div style={carsGridStyle}>
          {carData.map((car, index) => (
            <div key={index} style={carCardStyle}>
              <img src={car.image} alt={car.title} style={carImageStyle} />
              <div style={carOverlayStyle}>
                <h3 style={carTitleStyle}>{car.title}</h3>
                <p style={carDescriptionStyle}>{car.description}</p>
              </div>
            </div>
          ))}
        </div>
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

/* hero */
const heroSectionStyle = {
  position: 'relative',
  width: '100%',
  height: '100vh', // Full screen
  overflow: 'hidden',
};

const heroVideoStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

const heroOverlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'rgba(0, 0, 0, 0.3)',
  zIndex: 1,
};

const overlayContentStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
  color: 'white',
  zIndex: 2,
};

const logoStyle = {
  display: 'block',
  margin: '0 auto',
  height: '100px',
  marginBottom: '20px',
};

const headingStyle = {
  fontSize: '2.8rem',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  marginBottom: '20px',
};


const buttonStyle = {
  padding: '12px 24px',
  border: '2px solid white',
  borderRadius: '30px',
  fontSize: '18px',
  fontWeight: 'bold',
  background: 'transparent',
  color: 'white',
  cursor: 'pointer',
  transition: 'all 0.3s ease-in-out',
};

const donateButtonStyle = {
  ...buttonStyle,
  background: 'white',
  color: 'black',
};

/* countdown */
const countdownSectionStyle = {
  backgroundColor: 'black',
  color: 'white',
  textAlign: 'center',
  padding: '250px 40px',
};

const countdownHeadingStyle = {
  fontSize: '2rem',
  fontWeight: 'bold',
  marginBottom: '30px',
};

const timerStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '30px',
  flexWrap: 'wrap',
};

const unitStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const numberStyle = {
  fontSize: '2.5rem',
  fontWeight: 'bold',
};

const labelStyle = {
  fontSize: '1rem',
  marginTop: '5px',
};

/* stats */
const statsSectionStyle = {
  position: 'relative',
  width: '100%',
  height: '70vh',
  overflow: 'hidden',
};

const statsImageStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

const statsOverlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'rgba(0, 0, 0, 0.6)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  color: 'white',
  padding: '40px',
};

const statsHeadingStyle = {
  fontSize: '2rem',
  fontWeight: 'bold',
  marginBottom: '10px',
};

const statsTextStyle = {
  fontSize: '1.2rem',
  marginBottom: '20px',
};

const statsButtonContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '10px',
};

const smallButtonStyle = {
  padding: '8px 15px',
  border: '1px solid white',
  borderRadius: '20px',
  background: 'transparent',
  color: 'white',
  fontSize: '16px',
  cursor: 'pointer',
};

/* cars */
const carsSectionStyle = {
  textAlign: 'center',
  padding: '50px 20px',
};

const sectionHeadingStyle = {
  fontSize: '2.5rem',
  fontWeight: 'bold',
  marginBottom: '20px',
};

const sectionTextStyle = {
  fontSize: '1.2rem',
  maxWidth: '800px',
  margin: '0 auto 40px',
  lineHeight: '1.6',
};

const carsGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '20px',
  maxWidth: '1000px',
  margin: '0 auto',
};

const carCardStyle = {
  position: 'relative',
  borderRadius: '15px',
  overflow: 'hidden',
  cursor: 'pointer',
  background: '#1a1a1a',
};

const carImageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '15px',
  transition: 'transform 0.3s ease-in-out',
};

const carOverlayStyle = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  width: '100%',
  background: 'rgba(0, 0, 0, 0.4)',
  padding: '20px',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const carTitleStyle = {
  fontSize: '2rem',
  fontWeight: 'bold',
  color: 'white',
  marginBottom: '10px',
};

const carDescriptionStyle = {
  fontSize: '1.2rem',
  color: 'white',
  maxWidth: '80%',
  textAlign: 'center',
};

const carData = [
  { title: "2022-23 EV", description: "Small description here", image: "/Banana.jpg" },
  { title: "2021-22 IC", description: "Small description here", image: "/Banana.jpg" },
  { title: "2020-21 IC", description: "Small description here", image: "/Banana.jpg" },
  { title: "2019-20 EV", description: "Small description here", image: "/Banana.jpg" },
];


export default Home;


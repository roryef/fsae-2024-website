import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
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

      {/* Stats Section */}
      <section style={statsSectionStyle}>
        <img src="/team_wide.png" alt="Team Stats" style={statsImageStyle} />
        <div style={statsOverlayStyle}>
          <h2 style={statsHeadingStyle}>FOUNDED IN [DATE], WE’VE BUILT [X] CARS</h2>
          <p style={statsTextStyle}>WE HAVE [X] MEMBERS AND [X] SPONSORS</p>
          <div style={statsButtonContainerStyle}>
            <button style={smallButtonStyle}>ABOUT</button>
            <button style={smallButtonStyle}>SPONSORS</button>
            <button style={smallButtonStyle}>JOIN</button>
          </div>
        </div>
      </section>


      {/* Mission Section */}
      <section style={missionSectionStyle}>
        <h2 style={missionHeadingStyle}>OUR MISSION</h2>
        <p style={missionTextStyle}>
          Our mission is to educate and develop the next generation of engineers and managers 
          while building a racecar for the Formula SAE competition. The design, construction, and 
          financing of the car provides students with an introduction to all aspects of project and 
          engineering management. By applying theoretical principles to real-world problems, team 
          members develop collaborative problem-solving skills.
        </p>
        <div style={imageContainerStyle}>
          <img src="/Banana.jpg" alt="Team" style={missionImageStyle} />
          <img src="/Banana.jpg" alt="Team" style={missionImageStyle} />
        </div>
      </section>

      {/* Cars Section */}
      <section style={carsSectionStyle}>
        <h2 style={sectionHeadingStyle}>OUR CARS</h2>
        <p style={sectionTextStyle}>
          Each year, we dedicate ourselves to pushing the limits of performance and building the next 
          generation of racecars. Explore our past vehicles here and click to learn more!
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

// const buttonContainerStyle = {
//   display: 'flex',
//   gap: '20px',
//   justifyContent: 'center',
//   marginTop: '20px',
// };

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

/* stats */
const statsSectionStyle = {
  position: 'relative',
  width: '100%',
  height: '40vh',
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

/* mission */
const missionSectionStyle = {
  background: 'black',
  color: 'white',
  padding: '80px 20px',
  textAlign: 'center',
};

const missionHeadingStyle = {
  fontSize: '2.5rem',
  fontWeight: 'bold',
  marginBottom: '20px',
};

const missionTextStyle = {
  fontSize: '1.2rem',
  maxWidth: '800px',
  margin: '0 auto',
};

const imageContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  marginTop: '40px',
};

const missionImageStyle = {
  width: '300px',
  height: 'auto',
  borderRadius: '10px',
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


import React from 'react';

function Subteams() {
  return (
    <div style={pageStyle}>
      {/* Hero */}
      <section style={heroSectionStyle}>
        <img src="/team.png" alt="Our Team" style={heroImageStyle} />
        <div style={grayOverlayStyle}></div>


        <div style={overlayStyle}>
          <h1 style={heroHeadingStyle}>OUR TEAM</h1>
        </div>

      </section>

      {/* Team Intro */}
      <section style={introSectionStyle}>
        <p style={introTextStyle}>
          <strong>Formula SAE (Society of Automotive Engineers)</strong> is a series of international competitions in 
          which university teams compete to design and manufacture the best performing racecars. 
          [good to have something about x number of members]
        </p>
      </section>

      {/* Subteams */}
      <section style={subteamsSectionStyle}>
        <h2 style={subteamsHeadingStyle}>OUR SUBTEAMS</h2>
        <div style={subteamsContainerStyle}>
          <div style={subteamStyle}>
            <h3 style={subteamTitleStyle}>CONTROLS</h3>
            <p style={subteamTextStyle}>
              The controls subteam is responsible for the pedals, seat, driver controls, and 
              electronics mounting of the vehicle.
            </p>
          </div>
          <div style={subteamStyle}>
            <h3 style={subteamTitleStyle}>CONTROLS</h3>
            <p style={subteamTextStyle}>
              The controls subteam is responsible for the pedals, seat, driver controls, and 
              electronics mounting of the vehicle.
            </p>
          </div>
          <div style={subteamStyle}>
            <h3 style={subteamTitleStyle}>CONTROLS</h3>
            <p style={subteamTextStyle}>
              The controls subteam is responsible for the pedals, seat, driver controls, and 
              electronics mounting of the vehicle.
            </p>
          </div>
        </div>
      </section>

      {/* Buttons */}
      <section style={buttonsSectionStyle}>
        <button style={smallButtonStyle}>JOIN</button>
        <button style={smallButtonStyle}>SPONSORS</button>
        <button style={smallButtonStyle}>CONTACT</button>
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

const heroSectionStyle = {
  position: 'relative',
  width: '100%',
  height: '70vh', // Adjusted to fit the image
  overflow: 'hidden',
};

const heroImageStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center 80%', // 👈 Shows the bottom part
};


const overlayStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
  zIndex: 2, // 👈 above gray overlay
};


const heroHeadingStyle = {
  fontSize: '3rem',
  fontWeight: 'bold',
};

const introSectionStyle = {
  textAlign: 'center',
  padding: '50px 20px',
  fontSize: '1.2rem',
  maxWidth: '800px',
  margin: '0 auto',
};

const introTextStyle = {
    fontSize: '1.2rem',
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
    lineHeight: '1.6',
    padding: '20px',
  };
  
const subteamsSectionStyle = {
  textAlign: 'center',
  padding: '50px 20px',
};

const subteamsHeadingStyle = {
  fontSize: '2.5rem',
  fontWeight: 'bold',
  marginBottom: '30px',
};

//(3 Columns)
const subteamsContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '30px',
  maxWidth: '1000px',
  margin: '0 auto',
  flexWrap: 'wrap',
};

const subteamStyle = {
  flex: '1',
  minWidth: '250px',
  maxWidth: '300px',
  textAlign: 'center',
};

const subteamTitleStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
};

const subteamTextStyle = {
  fontSize: '1rem',
};

const buttonsSectionStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  marginTop: '40px',
};

const smallButtonStyle = {
  padding: '10px 20px',
  border: '2px solid white',
  borderRadius: '30px',
  fontSize: '16px',
  fontWeight: 'bold',
  background: 'transparent',
  color: 'white',
  cursor: 'pointer',
  transition: 'all 0.3s ease-in-out',
};

const grayOverlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.4)', // 👈 semi-transparent dark gray
  zIndex: 1,
};


export default Subteams;

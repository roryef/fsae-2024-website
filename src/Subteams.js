import React from 'react';
import { Link } from 'react-router-dom';

function Subteams() {
  return (
    <div style={pageStyle}>
      {/* Hero */}
      <section style={heroSectionStyle}>
        <img src="/car/2324-1.jpg" alt="Our Team" style={heroImageStyle} />
        <div style={grayOverlayStyle}></div>


        <div style={overlayStyle}>
          <h1 style={heroHeadingStyle}>SUBTEAMS</h1>
        </div>

      </section>

      <div style={horizontalCardStyle}>
      {/* Section Title Column */}
      <div style={sectionTitleColumnStyle}>
        <h3 style={sectionTitleStyle}>Mechanical Systems</h3>
      </div>

      {/* Subteam Columns */}
      <div style={subteamsWrapperStyle}>
        <div style={subteamColumnStyle}>
          <h4 style={subteamTitleStyle}>Controls</h4>
          <p style={subteamDescStyle}>
            Responsible for the pedals, seat, driver controls, and electronics mounting of the vehicle.
          </p>
        </div>
        <div style={subteamColumnStyle}>
          <h4 style={subteamTitleStyle}>Vehicle Dynamics</h4>
          <p style={subteamDescStyle}>
            Handles suspension, brakes, steering, and hubs/uprights systems.
          </p>
        </div>
        <div style={subteamColumnStyle}>
          <h4 style={subteamTitleStyle}>Frame/Body/Aero</h4>
          <p style={subteamDescStyle}>
            Designs the chassis, body, aero, and airflow systems.
          </p>
        </div>
        <div style={subteamColumnStyle}>
          <h4 style={subteamTitleStyle}>Powertrain</h4>
          <p style={subteamDescStyle}>
            Manages the drivetrain, cooling hardware, and HV enclosure components.
          </p>
        </div>
      </div>
    </div>

    {/* Electrical Systems */}
    <div style={horizontalCardStyle}>
      <div style={sectionTitleColumnStyle}>
        <h3 style={sectionTitleStyle}>Electrical Systems</h3>
      </div>
      <div style={subteamsWrapperStyle}>
        <div style={subteamColumnStyle}>
          <h4 style={subteamTitleStyle}>High Voltage</h4>
          <p style={subteamDescStyle}>
            Oversees the tractive system, battery pack, charging, and high-voltage electronics.
          </p>
        </div>
        <div style={{ ...subteamColumnStyle, borderRight: 'none' }}>
          <h4 style={subteamTitleStyle}>Low Voltage</h4>
          <p style={subteamDescStyle}>
            Handles software, wiring harness, shutdown system, and vehicle telemetry.
          </p>
        </div>
      </div>
    </div>

    {/* Admin */}
    <div style={horizontalCardStyle}>
      <div style={sectionTitleColumnStyle}>
        <h3 style={sectionTitleStyle}>Admin</h3>
      </div>
      <div style={subteamsWrapperStyle}>
        <div style={subteamColumnStyle}>
          <h4 style={subteamTitleStyle}>Business</h4>
          <p style={subteamDescStyle}>
            Builds the business case for competition and develops the club’s growth strategy.
          </p>
        </div>
        <div style={subteamColumnStyle}>
          <h4 style={subteamTitleStyle}>Sponsor Team</h4>
          <p style={subteamDescStyle}>
            Conducts sponsor outreach, maintains partnerships, and manages fundraising.
          </p>
        </div>
        <div style={{ ...subteamColumnStyle, borderRight: 'none' }}>
          <h4 style={subteamTitleStyle}>Social</h4>
          <p style={subteamDescStyle}>
            Coordinates club events, team culture, and external engagement.
          </p>
        </div>
      </div>
    </div>


      {/* Buttons */}
      <section style={buttonsSectionStyle}>
        <Link to="/join" style={smallButtonStyle}>JOIN US</Link>
        <Link to="/sponsors" style={smallButtonStyle}>SPONSORS</Link>
        <Link to="/join" style={smallButtonStyle}>CONTACT</Link>
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
  objectPosition: 'center 60%',
};


const overlayStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
  zIndex: 2,
};

const heroHeadingStyle = {
  fontSize: '3rem',
  fontWeight: 'bold',
};

const horizontalCardStyle = {
  display: 'flex',
  width: '100%',
  maxWidth: '1200px',
  margin: '40px auto',
  borderRadius: '16px',
  overflow: 'hidden',
  border: '2.5px solid #333',
  backgroundColor: '#111',
  color: 'white',
};

const sectionTitleColumnStyle = {
  flex: '0 0 200px',
  backgroundColor: '#000',
  borderRight: '1px solid #444',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
};

const sectionTitleStyle = {
  textAlign: 'center',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  letterSpacing: '1px',
  textTransform: 'uppercase',
};

const subteamsWrapperStyle = {
  display: 'flex',
  flex: 1,
};

const subteamColumnStyle = {
  flex: 1,
  borderRight: '1px solid #333',
  padding: '20px',
  textAlign: 'center',
};

const subteamTitleStyle = {
  fontSize: '1rem',
  fontWeight: 'bold',
  marginBottom: '10px',
};

const subteamDescStyle = {
  fontSize: '0.9rem',
  lineHeight: '1.4',
};

subteamColumnStyle[':last-child'] = {
  borderRight: 'none',
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
  backgroundColor: 'rgba(0, 0, 0, 0.55)',
  zIndex: 1,
};


export default Subteams;

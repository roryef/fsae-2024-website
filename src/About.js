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
    const eras = [
        { title: "The Early Teams", years: "1997–2000", color: "#001f3f" }, 
        { title: "The First Decade", years: "2000–2008", color: "#003366" },  
        { title: "Superleggera", years: "2008–2019", color: "#336699" },       
        { title: "CFR-21", years: "2019–2022", color: "#6699cc" },             
        { title: "eCFR", years: "2022–Present", color: "#00C8FF" },            
    ];

    const subteams = [
        { title: 'Electrical',
        description: 'Low and high voltage EE projects for functionality, integration, and rules compliance of all electrical systems.',
        image: '/team_wide.png',},
        { title: 'Mechanical',
        description: 'Dynamics, powertrain, controls, and other structural components for performance and safety.',
        image: '/team_wide.png',},
        { title: 'Admin',
        description: 'Systems integration, project management, business, and PR to support the engineering team.',
        image: '/eboard.jpg',},
    ];

    const eboard = Array.from({ length: 16 }).map((_, i) => ({
        name: `Member ${i + 1}`,
        title: `Title ${i + 1}`,
        image: '/Banana.jpg',
      }));
      
  


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
            Our mission is to educate and develop the next generation of engineers through real-world project experience, 
            teamwork, and innovation. We strive to push the boundaries of electric vehicle technology and cultivate a strong, 
            inclusive engineering community.
          </p>
        </div>
      </section>

      {/* By the Numbers */}
      <section style={numbersSectionStyle}>
        <h2 style={sectionTitleStyle}>2025 BY THE NUMBERS</h2>
        <div style={statsGridStyle}>
            <StatCard end={230} label="Members" />
            <StatCard end={23} label="Countries" />
            <StatCard end={16} label="Majors" />
            <StatCard end={16} label="E-Board" />
            <StatCard end={24} label="Sponsors" />
            <StatCard end={5} label="Seconds 0-60 MPH" suffix="s"/>
            <StatCard end={9} label="Increase in Club Involvement" prefix="x" />
            <StatCard end={5000} label="Savings" prefix="$" />
        </div>
        </section>


      {/* Team History */}
      <section style={historySectionStyle}>
        <h2 style={historyTitleStyle}>TEAM HISTORY</h2>
        <p style={historyTextStyle}>
        Columbia FSAE has a rich legacy that spans over two decades, evolving through multiple eras of innovation,
        learning, and engineering excellence. Originally an internal combustion team, we began transitioning to electric 
        in 2022 — and today, we’re proud to be fully electric. Explore the major chapters 
        in our journey from garage-built racers to nationally competitive EVs.
        </p>

        <div style={timelineWrapperStyle}>
            {eras.map((era, i) => (
            <React.Fragment key={i}>
                <div style={{ ...timelineBlockStyle, backgroundColor: era.color }}>
                <div style={blockTextContainerStyle}>
                    <div style={blockTitleStyle}>{era.title}</div>
                    <div style={blockYearsStyle}>{era.years}</div>
                </div>
                </div>
                {i < eras.length - 1 && <div style={dividerLineStyle}></div>}
            </React.Fragment>
            ))}
        </div>
        </section>



      {/* Subteams */}
      <section style={subteamsSectionStyle}>
        <h2 style={sectionTitleStyle}>SUBTEAMS</h2>
        <div style={subteamsWrapperStyle}>
            {subteams.map((team, i) => (
            <div
                key={i}
                style={{
                ...subteamCardStyle,
                backgroundImage: `url(${team.image})`,
                }}
            >
                <div style={subteamOverlayStyle}>
                <h3 style={subteamTitleStyle}>{team.title}</h3>
                <p style={subteamDescStyle}>{team.description}</p>
                </div>
            </div>
            ))}
        </div>
        </section>


      {/* E-Board */}
      <section style={eboardSectionStyle}>
        <h2 style={sectionTitleStyle}>E-BOARD</h2>
        <div style={eboardGridStyle}>
            {eboard.map((member, i) => (
            <div key={i} style={eboardCardStyle}>
                <img src={member.image} alt={member.name} style={eboardImageStyle} />
                <div style={eboardNameStyle}>{member.name}</div>
                <div style={eboardTitleStyle}>{member.title}</div>
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
    gridTemplateColumns: 'repeat(4, 1fr)', //4 columns
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
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
  
  //history
  const historySectionStyle = {
    backgroundColor: 'black',
    color: 'white',
    padding: '80px 30px',
    textAlign: 'center',
  };
  
  const historyTitleStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '20px',
  };
  
  const historyTextStyle = {
    maxWidth: '800px',
    margin: '0 auto 60px auto',
    fontSize: '1.1rem',
    lineHeight: '1.6',
  };
  
  const timelineWrapperStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '0px',
  };
  
  const timelineBlockStyle = {
    width: '180px',
    height: '100px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    color: 'white',
    padding: '10px',
    boxSizing: 'border-box',
  };
  
  const blockTextContainerStyle = {
    textAlign: 'center',
  };
  
  const blockTitleStyle = {
    fontSize: '1rem',
    fontWeight: 'bold',
  };
  
  const blockYearsStyle = {
    fontSize: '0.9rem',
    marginTop: '4px',
    opacity: 0.9,
  };
  
  const dividerLineStyle = {
    width: '20px',
    height: '2px',
    backgroundColor: '#888',
    margin: '0 5px',
  };
  
  //subteams
  const subteamsSectionStyle = {
    backgroundColor: 'black',
    color: 'white',
    padding: '80px 30px',
    textAlign: 'center',
  };
  
  const subteamsWrapperStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: '40px',
    flexWrap: 'wrap', 
    maxWidth: '1200px',
    margin: '0 auto',
  };
  
  
  const subteamCardStyle = {
    position: 'relative',
    width: '100%',
    maxWidth: '400px',
    flex: '1 1 300px',
    height: '250px',
    borderRadius: '12px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  
  const subteamOverlayStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    width: '100%',
    height: '100%',
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
  };
  
  const subteamTitleStyle = {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    marginBottom: '10px',
  };
  
  const subteamDescStyle = {
    fontSize: '1.05rem',
    lineHeight: '1.5',
  };
  
  
  //eboard
  const eboardSectionStyle = {
    backgroundColor: 'black',
    color: 'white',
    padding: '80px 30px',
    textAlign: 'center',
  };
  
  const eboardGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)', // 4 columns
    gap: '40px',
    maxWidth: '1100px',
    margin: '0 auto',
  };
  
  const eboardCardStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  };
  
  const eboardImageStyle = {
    width: '100%',
    maxWidth: '180px',
    height: '240px',
    objectFit: 'cover',
    borderRadius: '12px',
    marginBottom: '12px',
  };
  
  const eboardNameStyle = {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    marginBottom: '4px',
  };
  
  const eboardTitleStyle = {
    fontSize: '0.95rem',
    color: '#ccc',
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


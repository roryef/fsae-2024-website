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
        { title: "eCFR", years: "2022–Present", color: "#91b4d1" },            
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

    const eboard = [
        { name: 'Calvin Moon', title: 'President', image: '/headshots/Calvin.jpg' },
        { name: 'Godwill Agbehonou', title: 'VP of Techincal Operations', image: '/headshots/Godwill.jpg' },
        { name: 'Grace Zhang', title: 'VP of Business Affairs', image: '/headshots/Grace.jpg' },
        { name: 'Niya Zamyatina', title: 'Chief Mechanical Engineer', image: '/headshots/Calvin.jpg' },

        { name: 'Rosnel Leyva-Cortes', title: 'Chief Electrical Engineer', image: '/headshots/Rosnel.jpg' },
        { name: 'Steven Tian', title: 'Chief Manufacturing Engineer', image: '/headshots/Steven.jpg' },
        { name: 'Karime Meija', title: 'Vehicle Dynamics Chief', image: '/headshots/Karime.jpg' },
        { name: 'John Paul Salvatore', title: 'Powertrain Chief', image: '/headshots/JP.jpg' },

        { name: 'Aileen Liu', title: 'Controls Chief', image: '/headshots/Aileen.jpg' },
        { name: 'Hadley Pade', title: 'High Voltage Chief', image: '/headshots/Hadley.jpg' },
        { name: 'Lizzie Scott', title: 'Low Voltage Chief', image: '/headshots/Lizzie.jpg' },
        { name: 'William Ostling', title: 'Frame/Body/Aero Chief', image: '/headshots/William.jpg' },

        { name: 'Nikaia He', title: 'Electrical Engineering Treasurer', image: '/headshots/Nikaia.jpg' },
        { name: 'Eva Sherman', title: 'Mechanical Engineering Treasurer', image: '/headshots/Eva.jpg' },
        { name: 'Audrey Ahn', title: 'Secretary', image: '/headshots/Calvin.jpg' },
        { name: 'Louise Goldenberg', title: 'Social Chair', image: '/headshots/Louise.jpg' },
    ]

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

      {/* Who We Are & Mission - Side-by-Side */}
      <section style={sideBySideWrapperStyle}>
        <div style={sideBySideColumnStyle}>
          <h2 style={sectionTitleStyle}>WHO WE ARE</h2>
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
            <StatCard end={23} label="Nationalities" />
            <StatCard end={16} label="Majors" />
            <StatCard end={16} label="E-Board Members" />
            <StatCard end={24} label="Sponsors" />
            <StatCard end={5} label="Seconds 0-60 MPH" suffix="s"/>
            <StatCard end={9} label="Increase in Club Involvement" prefix="x" />
            <StatCard end={5000} label="Spending Reductions" prefix="$" />
        </div>
        </section>


      {/* What We Do
      <section style={engagementSectionStyle}>
        <h2 style={sectionTitleStyle}>WHAT WE DO</h2>
        <div style={engagementGridStyle}>
            
            <div style={engagementRowStyle}>
            {[
                { title: 'Engineering', desc: 'Design and build an electric race car, then test drive and tune it to perfection.', bg: '#001f3f' },
                { title: 'Learning', desc: 'Develop core engineering skills, collaborate in teams, and solve real-world challenges.', bg: '#003366' },
                { title: 'Career Development', desc: 'Attend alumni recruiting events and connect with sponsors at competition.', bg: '#336699' },
            ].map((item, i) => (
                <div key={i} style={{ ...engagementCardStyle, backgroundColor: item.bg }}>
                <div style={cardContentStyle}>
                    <h3 style={cardTitleStyle}>{item.title}</h3>
                    <p style={{ ...cardTextStyle, }}>{item.desc}</p>
                </div>
                </div>
            ))}
            </div>
            
            <div style={engagementRowStyle}>
            {[
                { title: 'Outreach', desc: 'Secure sponsorships, attend SAE events, and collaborate with teams worldwide.', bg: '#91b4d1' }, //
                { title: 'Competition', desc: 'Race in June at Michigan International Speedway with over 70 international teams.', bg: '#6699cc' },
            ].map((item, i) => (
                <div key={i} style={{ ...engagementCardStyle, backgroundColor: item.bg }}>
                <div style={cardContentStyle}>
                    <h3 style={cardTitleStyle}>{item.title}</h3>
                    <p style={{ ...cardTextStyle, }}>{item.desc}</p>
                </div>
                </div>
            ))}
            </div>
        </div>
        </section> */}

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


      {/* Team History */}
      <section style={historySectionStyle}>
        <h2 style={sectionTitleStyle}>TEAM HISTORY</h2>
        <p style={historyTextStyle}>
        Columbia FSAE has a rich legacy that spans over two decades, evolving through multiple eras of innovation,
        learning, and engineering excellence. Originally an internal combustion team, we began transitioning to electric 
        in 2022, and today, we’re proud to be fully electric. Explore the major chapters 
        in our journey from garage-built racers to internationally competitive EVs.
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

      {/* Faculty Advisors */}
      <section style={eboardSectionStyle}>
        <h2 style={sectionTitleStyle}>Faculty Advisors</h2>
        <div style={facGridStyle}>
            {[
            {
                name: 'Jeffrey Kysar',
                link: 'https://www.me.columbia.edu/faculty/jeffrey-kysar',
                title: 'Professor and Chair of Mechanical Engineering',
                image: '/headshots/Kysar.jpg',
            },
            {
                name: 'Josh Browne',
                link: 'https://www.me.columbia.edu/joshua-browne',
                title: 'Adjunct Professor of Mechanical Engineering',
                image: '/headshots/Browne.jpg',
            },
            {
                name: 'Matthias Preindl',
                link: 'https://www.ee.columbia.edu/matthias-preindl',
                title: 'Associate Professor of Electrical Engineering',
                image: '/headshots/Preindl.jpg',
            }
            ].map((advisor, i) => (
            <div key={i} style={eboardCardStyle}>
                <img src={advisor.image} alt={advisor.name} style={eboardImageStyle} />
                <a href={advisor.link} target="_blank" rel="noopener noreferrer" style={facNameStyle}>
                {advisor.name}
                </a>
                <p style={facTitleStyle}>{advisor.title}</p>
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
    objectPosition: 'center 90%', 
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

  //who we are / mission
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

  //what we do
  const engagementSectionStyle = {
    backgroundColor: 'black',
    padding: '100px 30px',
    textAlign: 'center',
  };
  
  const engagementGridStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    alignItems: 'center',
  };
  
  const engagementRowStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    flexWrap: 'wrap',
  };
  
  const engagementCardStyle = {
    width: '280px',
    height: '200px',
    borderRadius: '12px',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '20px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
  };
  
  const cardContentStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    textAlign: 'center',
  };
  
  const cardTitleStyle = {
    fontSize: '1.4rem',
    fontWeight: 'bold',
    marginBottom: '10px',
  };
  
  const cardTextStyle = {
    fontWeight: 400,
    lineHeight: '1.5',
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
    fontSize: '1.8rem',
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
    maxWidth: '220px',
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
  
  //faculty
  const facGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)', // 3 columns
    gap: '40px',
    maxWidth: '1100px',
    margin: '0 auto',
  };

  const facNameStyle = {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: 'white',
    textDecoration: 'none',
    border: '1px solid white',
    borderRadius: '8px',
    padding: '6px 10px',
    marginTop: '10px',
    marginBottom: '6px',
    display: 'inline-block',
  };
  
  const facTitleStyle = {
    fontSize: '0.95rem',
    lineHeight: '1.4',
    marginBottom: '6px',
    color: '#ccc',
  };
  
  
  const sectionTitleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '30px',
  };
  
  const sectionTextStyle = {
    fontSize: '1.1rem',
    lineHeight: '1.6',
  };
  

export default About;


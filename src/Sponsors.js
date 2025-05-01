import React from 'react';
import './Sponsors.css';

const sponsors = [
  { name: 'Tesla', url: 'https://www.tesla.com', image: `${process.env.PUBLIC_URL}/sponsors/tesla.png` },
  { name: 'Ansys', url: 'https://www.ansys.com', image: `${process.env.PUBLIC_URL}/sponsors/ansys.png` },
  { name: 'Kennametal', url: 'https://www.kennametal.com', image: `${process.env.PUBLIC_URL}/sponsors/kmt.png` },
  { name: 'ADI', url: 'https://www.adiglobaldistribution.us/', image: `${process.env.PUBLIC_URL}/sponsors/adi.png` },
  { name: 'Altium', url: 'https://www.altium.com', image: `${process.env.PUBLIC_URL}/sponsors/altium.svg` },
  { name: 'Enepaq', url: 'https://www.enepaq.com', image: `${process.env.PUBLIC_URL}/sponsors/enepaq.svg` },
  { name: 'Mastercam', url: 'https://www.mastercam.com', image: `${process.env.PUBLIC_URL}/sponsors/mastercam.png` },
  { name: 'Ramsis', url: 'https://www.human-solutions.com/en/products/ramsis-general/index.html', image: `${process.env.PUBLIC_URL}/sponsors/ramsis.svg` },
  { name: 'MPLab', url: 'https://www.microchip.com/en-us/tools-resources/develop/mplab-x-ide', image: `${process.env.PUBLIC_URL}/sponsors/mplab.png` },
  { name: 'IndyWiring', url: 'https://www.indywiring.net/', image: `${process.env.PUBLIC_URL}/sponsors/indy.png` },
  { name: 'Altair', url: 'https://www.altair.com', image: `${process.env.PUBLIC_URL}/sponsors/altair.png` },
  { name: 'P&M Finishing', url: 'https://pmfinishing.com', image: `${process.env.PUBLIC_URL}/sponsors/pm.png` },
  { name: 'Protocase', url: 'https://www.protocase.com', image: `${process.env.PUBLIC_URL}/sponsors/protocase.png` },
  { name: 'Rapid Harness', url: 'https://www.rapidharness.com', image: `${process.env.PUBLIC_URL}/sponsors/rapidharness.png` },
  { name: 'Farks', url: 'https://www.farkssupercars.com/', image: `${process.env.PUBLIC_URL}/sponsors/farks.png` },
  { name: 'VR3', url: 'https://vr3.ca/', image: `${process.env.PUBLIC_URL}/sponsors/VR3.png` },
  { name: 'Columbia ME', url: 'https://www.me.columbia.edu/', image: `${process.env.PUBLIC_URL}/sponsors/CU_ME.png` },
  { name: 'Columbia EE', url: 'https://www.ee.columbia.edu/', image: `${process.env.PUBLIC_URL}/sponsors/CU_EE.png` },
  { name: 'Columbia Makerspace', url: 'https://make.columbia.edu/', image: `${process.env.PUBLIC_URL}/sponsors/CU_MS.png` },
  { name: 'Columbia Facilities', url: 'https://cufo.columbia.edu/', image: `${process.env.PUBLIC_URL}/sponsors/CU_fac.png` },
];

function Sponsors() {
  return (
    <div className="sponsors-page">
      {/* Hero */}
      <section className="sponsors-hero-section">
        <img src={`${process.env.PUBLIC_URL}/car/profile-2.jpg`} alt="Sponsors Hero" className="sponsors-hero-image" />
        <div className="sponsors-hero-overlay"></div>
        <div className="sponsors-hero-text">
          <h1>OUR SPONSORS</h1>
        </div>
      </section>

      {/* CTA */}
      <section className="sponsor-cta">
        <p className="cta-text">
          Our sponsors make everything we do possible — from prototyping and parts to testing and travel. We’re incredibly grateful for their support.
        </p>
        <div className="sponsor-buttons">
          <a
            href="https://securepay.cuit.columbia.edu/payment/pub/cufrsponsorships/"
            className="donate-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Donate
          </a>
          <a
            href={`${process.env.PUBLIC_URL}/sponsorpacket.pdf`}
            className="donate-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Become a Sponsor
          </a>
        </div>
      </section>

      {/* Grid */}
      <section className="sponsor-grid">
        {sponsors.map((sponsor, i) => (
          <a
            key={i}
            href={sponsor.url}
            target="_blank"
            rel="noopener noreferrer"
            className="sponsor-logo-link"
          >
            <img src={sponsor.image} alt={sponsor.name} className="sponsor-logo" />
          </a>
        ))}
      </section>
    </div>
  );
}

export default Sponsors;

import React from 'react';
import Slider from 'react-slick';
import './Join.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


function Join() {

  const photos = [
    '6C498993-2C4B-4548-BDA8-604517AD295B_1_201_a.jpeg',
    '58C80213-C939-4284-87F3-F46332B018F0_1_201_a.jpeg',
    '541C7421-57E3-4921-8DB8-03E32BFB91E8_1_201_a.jpeg',
    '757FD8D5-4A7F-47FA-A3C4-DE4925F9BA9A_1_201_a.jpeg',
    '20250313_203406.jpg',
    'B7BCE399-AC07-4BF4-822C-B3251D9DB5B3.jpeg',
    'CD7BB248-53E8-4ACF-AAB0-7546C69374C6_1_201_a.jpeg',
    'FDABC2F2-9644-457B-B0BF-AD6DE72D13F3_1_201_a.jpeg',
    'IMG_0150.jpg',
    'IMG_0161.jpg',
    'IMG_2998.JPG',
    'IMG_3003.JPG',
    'IMG_3012.JPG',
    'IMG_3106.JPG',
    'IMG_3110.JPG',
    'IMG_5208.PNG',
    'IMG_5373.JPG',
    'IMG_5400.JPG',
    'IMG_5503.JPG',
    'IMG_5514.JPG',
    'IMG_5563.JPG',
    'IMG_5569.JPG',
    'IMG_6254.JPG',
    'IMG_6443.JPG',
    'IMG_6488.PNG',
    'photo1.jpg',
    'photo2.JPG',
    'photo5.JPG',
    'photo6.JPG',
    'photo7.JPG',
    'photo8.JPG',
    'photo9.jpg',
    'photo10.JPG',
    'photo11.JPG',
    'photo13.JPG',
    'ZoharFord_FSAE_4_10_2025_SF-06.jpg',
    'ZoharFord_FSAE_4_10_2025_SF-10.jpg',
    'ZoharFord_FSAE_4_10_2025_SF-14.jpg',
    'ZoharFord_FSAE_4_10_2025_SF-18.jpg'
  ];
  

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };


  return (
    <div className="join-page">
      {/* Hero Section */}
      <section className="join-hero">
        <img src="/groups/team.png" alt="Team Hero" className="join-hero-image" />
        <div className="join-hero-overlay">
          <h1 className="join-hero-title">JOIN US</h1>
        </div>
      </section>

      {/* Invitation Section */}
      <section className="join-intro">
        <h2 className="join-intro-heading">Ready to Build, Drive, and Compete?</h2>
        <p className="join-intro-text">
          We welcome students from all majors and backgrounds — no experience required. Whether you’re into 
          engineering, design, business, or simply love racing, there's a place for you on our team.
        </p>
        <a 
          href="https://linktr.ee/cufr_onboarding" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="join-linktree"
        >
          View Opportunities & Resources
        </a>
      </section>

      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
        {photos.map((filename, idx) => (
          <div key={idx}>
            <img src={`/shop/${filename}`} alt={`Team ${idx}`} />
          </div>
        ))}
      </Carousel>


      {/* Contact Section */}
      <section className="join-contact">
        <p className="join-contact-text">Questions? We’d love to hear from you.</p>
        <a href="mailto:fsae@columbia.edu" className="join-button">
          Contact Us
        </a>
      </section>

    </div>
  );
}

export default Join;

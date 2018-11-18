import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/home-page.scss';

const HomePage = () => (
  <main className="homepage">
    <header>
      <img
        className="intro__logo"
        src="./static/assets/images/better-change-logo-homepage.png"
        alt="homepage logo"
      />
      <p className="intro">Cashless donations that make a difference</p>
      <img
        className="intro__photo"
        src="./static/assets/images/iPhone.png"
        alt="Better Change app"
      />
    </header>
    <section className="getStarted">
      <h2 className="getStarted__header">Give generously</h2>
      <Link className="btn btn__secondary" to="/recipient">
        Receive donations
        {/* <i className="fas next-arrow fa-arrow-right" /> */}
      </Link>
      <Link className="btn btn__secondary" to="/donor">
        Become a donor
        {/* <i className="fas next-arrow fa-arrow-right" /> */}
      </Link>
      <h3 className="getStarted__strapline">Better Change solves a modern-day problem</h3>
      <p>
        Have you ever wanted to donate to a good cause but didn’t have any cash on you? Or you were
        put off because we are unsure of where your money was going?
      </p>
      <p>
        Better Change solves these problems by offering a cashless method of payment which is quick
        and easy.
      </p>
    </section>
    <section className="testimonial">
      <h2>Eva&rsquo;s story</h2>
      <blockquote>I raised £1,200 for Cancer Research</blockquote>
      <img
        className="testimonial__photo"
        src="./static/assets/images/matheus-ferrero-350443-unsplash.jpg"
        alt="happy fundraisers"
      />
      <p>
        Getting set up was very quick and easy. Within a few minutes of creating my account I had
        already received £100 in donations from my flatmates for the marathon I was running that
        month.
      </p>
    </section>
  </main>
);

export default HomePage;

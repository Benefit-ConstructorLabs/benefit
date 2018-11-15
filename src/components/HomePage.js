import React from 'react';
import '../../styles/components/home-page.scss';

const HomePage = () => (
  <main>
    <h1>Better Change</h1>
    <p className="intro">Chashless donations that make a difference</p>
    <section className="getStarted">
      <h2>Give generoulsy</h2>
      <button className="btn" type="submit">
        Receive donations
      </button>
      <button className="btn" type="submit">
        Become a donor
      </button>
      <h3>Better Change solves a modern-day problem</h3>
      <p>
        Have you ever wanted to donate to a good cause but didn’t have any cash on you. Or you were
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
      <p>
        Getting set up was very quick and easy. Within a few minutes of creating my account I had
        already received £100 in donations from my flatmates for the marathon I was running that
        month.
      </p>
    </section>
  </main>
);

export default HomePage;

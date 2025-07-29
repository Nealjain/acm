import React from 'react';
import Hero from '../components/Hero';
import About from './About';
import Team from './Team';
import Events from './Events';
import Gallery from './Gallery';
import WhyJoinUs from '../components/WhyJoinUs';
import Contact from './Contact';


const Home = () => {
  return (
    <div>
      <section id="hero">
        <Hero />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-4xl md:text-6xl font-bold">Welcome to ACM SAKEC</h1>
          <p className="text-lg md:text-xl mt-4">The future of technology starts here.</p>
          <button className="mt-8 px-8 py-3 bg-accent text-white font-bold rounded-full hover:bg-blue-700 transition-colors duration-300">
            Join Us
          </button>
        </div>
      </section>
      <section id="about">
        <About />
      </section>
      <section id="team">
        <Team />
      </section>
      <section id="events">
        <Events />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="why-join-us">
        <WhyJoinUs />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;

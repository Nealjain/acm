import React from 'react';
import EventCard from './EventCard';
import { motion } from 'framer-motion';

const EventsSection = () => {
  const events = [
    // Event data will go here
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Events</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {events.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;

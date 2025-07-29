import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-vanilla-tilt';

const events = [
  {
    title: 'Workshop: Intro to React',
    date: '2023-10-15',
    status: 'Upcoming',
  },
  {
    title: 'Hackathon: CodeFest 2023',
    date: '2023-11-01',
    status: 'Upcoming',
  },
  {
    title: 'Seminar: The Future of AI',
    date: '2023-09-20',
    status: 'Past',
  },
    {
    title: 'Competition: Competitive Programming',
    date: '2023-08-10',
    status: 'Past',
  },
];

const Events = () => {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-6xl font-bold text-center mb-16">Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Tilt
              className={`p-6 rounded-lg ${
                event.status === 'Upcoming' ? 'bg-accent bg-opacity-20' : 'bg-white bg-opacity-10'
              }`}
              options={{ max: 15, speed: 400, glare: true, 'max-glare': 0.2 }}
            >
              <h3 className="text-2xl font-bold">{event.title}</h3>
              <p className="mt-2">{event.date}</p>
              <p
                className={`mt-4 font-bold ${
                  event.status === 'Upcoming' ? 'text-accent' : 'text-gray-400'
                }`}
              >
                {event.status}
              </p>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Events;

import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-vanilla-tilt';

const teamMembers = [
  {
    name: 'John Doe',
    role: 'President',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Jane Doe',
    role: 'Vice President',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Peter Jones',
    role: 'Secretary',
    image: 'https://via.placeholder.com/150',
  },
    {
    name: 'Sarah Smith',
    role: 'Treasurer',
    image: 'https://via.placeholder.com/150',
  },
];

const Team = () => {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-6xl font-bold text-center mb-16">Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Tilt
              className="bg-white bg-opacity-10 rounded-lg backdrop-blur-md p-6 text-center"
              options={{ max: 25, speed: 400, glare: true, 'max-glare': 0.5 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto"
              />
              <h3 className="text-2xl font-bold mt-4">{member.name}</h3>
              <p className="text-accent">{member.role}</p>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Team;

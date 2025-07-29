import React from 'react';
import { motion } from 'framer-motion';

const aboutData = [
  {
    year: '2020',
    event: 'ACM SAKEC Chapter Established',
    description: 'Our journey began with a small group of passionate students.',
  },
  {
    year: '2021',
    event: 'First Major Event: "CodeFest"',
    description: 'A 24-hour hackathon that attracted over 100 participants.',
  },
  {
    year: '2022',
    event: 'Expansion of Workshops',
    description: 'We started offering workshops on various technologies like ML, Web Dev, and more.',
  },
  {
    year: '2023',
    event: 'ACM SAKEC Website Launch',
    description: 'The launch of our new cinematic website to better serve our community.',
  },
];

const About = () => {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-16">About Us</h1>
      <div className="hidden md:flex overflow-x-auto space-x-8 pb-8">
        {aboutData.map((item, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 w-80 p-6 bg-white bg-opacity-10 rounded-lg backdrop-blur-md"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-accent">{item.year}</h2>
            <h3 className="text-2xl font-bold mt-4">{item.event}</h3>
            <p className="mt-2">{item.description}</p>
          </motion.div>
        ))}
      </div>
      <div className="md:hidden space-y-8">
        {aboutData.map((item, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white bg-opacity-10 rounded-lg backdrop-blur-md"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-accent">{item.year}</h2>
            <h3 className="text-2xl font-bold mt-4">{item.event}</h3>
            <p className="mt-2">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;

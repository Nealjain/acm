import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-tilt';

const EventCard = ({ event }) => {
  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <motion.div variants={item}>
      <Tilt className="Tilt" options={{ max: 25 }}>
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-4">
          {/* Event card content will go here */}
        </div>
      </Tilt>
    </motion.div>
  );
};

export default EventCard;

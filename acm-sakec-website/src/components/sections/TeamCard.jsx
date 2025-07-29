import React from 'react';
import { motion } from 'framer-motion';

const TeamCard = ({ member }) => {
  return (
    <motion.div
      className="relative w-full h-64"
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="absolute w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
        whileHover={{ rotateY: 180 }}
      >
        <div className="absolute w-full h-full bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-4 flex flex-col items-center justify-center">
          {/* Front of the card */}
        </div>
        <div className="absolute w-full h-full bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-4 flex flex-col items-center justify-center" style={{ transform: 'rotateY(180deg)' }}>
          {/* Back of the card */}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TeamCard;

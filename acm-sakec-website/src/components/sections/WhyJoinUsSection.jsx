import React from 'react';
import { motion } from 'framer-motion';

const WhyJoinUsSection = () => {
  return (
    <section className="bg-black text-white py-20 overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Why Join Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Text content will go here */}
          </motion.div>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Testimonial slider will go here */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUsSection;

import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: 'Being a part of ACM SAKEC has been a transformative experience. I have learned so much and made great friends.',
    author: '- Alex Johnson, Member',
  },
  {
    quote: 'The workshops and events are top-notch. I highly recommend joining if you are passionate about technology.',
    author: '- Sarah Lee, Member',
  },
    {
    quote: 'A great platform to network with peers and industry professionals.',
    author: '- Michael Chen, Member',
  },
];

const WhyJoinUs = () => {
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
    }, 5000);
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="p-8 flex flex-col justify-center">
        <h2 className="text-5xl font-bold">Why Join Us?</h2>
        <ul className="mt-8 space-y-4 text-xl">
          <li>- Access to exclusive workshops and events</li>
          <li>- Networking opportunities with industry professionals</li>
          <li>- Hands-on experience with the latest technologies</li>
          <li>- A vibrant community of like-minded individuals</li>
        </ul>
      </div>
      <div className="p-8 flex flex-col justify-center bg-accent bg-opacity-20">
        <h3 className="text-4xl font-bold text-center">Testimonials</h3>
        <div className="relative mt-8 h-48">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="absolute w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: index === current ? 1 : 0 }}
              transition={{ duration: 1 }}
            >
              <p className="text-2xl italic">"{testimonial.quote}"</p>
              <p className="text-right mt-4 font-bold">{testimonial.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyJoinUs;

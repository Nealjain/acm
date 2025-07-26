import { motion } from 'framer-motion';
import { BookOpen, Users, Award, Briefcase, Globe, Code, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function WhyJoin() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const benefits = [
    {
      icon: BookOpen,
      title: 'Learning Opportunities',
      description: 'Access to workshops, seminars, and technical sessions conducted by industry experts and experienced professionals.'
    },
    {
      icon: Users,
      title: 'Networking',
      description: 'Connect with like-minded peers, alumni, and professionals in the computing field to build valuable relationships.'
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Participate in competitions, hackathons, and events to showcase your skills and gain recognition in the community.'
    },
    {
      icon: Briefcase,
      title: 'Career Development',
      description: 'Get guidance on career paths, internship opportunities, and industry insights to accelerate your professional growth.'
    },
    {
      icon: Globe,
      title: 'Global Community',
      description: 'Be part of the world\'s largest computing society with access to international resources and opportunities.'
    },
    {
      icon: Code,
      title: 'Technical Skills',
      description: 'Enhance your programming, problem-solving, and technical skills through hands-on projects and collaborative learning.'
    }
  ];

  const testimonials = [
    {
      name: 'Rahul Sharma',
      role: 'Software Engineer at Google',
      year: '2020 Graduate',
      quote: 'SAKEC ACM provided me with the platform to enhance my technical skills and connect with industry professionals. The workshops and competitions helped me land my dream job at Google.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Priya Patel',
      role: 'Data Scientist at Microsoft',
      year: '2019 Graduate',
      quote: 'The networking opportunities and mentorship I received through SAKEC ACM were invaluable. It shaped my career path and gave me the confidence to pursue my goals in data science.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Arjun Mehta',
      role: 'Startup Founder',
      year: '2021 Graduate',
      quote: 'SAKEC ACM taught me leadership skills and gave me the platform to organize events. These experiences were crucial when I started my own tech startup.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-8"
          >
            Why Join Us?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 leading-relaxed"
          >
            Discover the benefits of being part of the SAKEC ACM community
          </motion.p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Benefits of ACM Membership
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-minimal p-6 rounded-lg text-center"
              >
                <benefit.icon className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-16"
          >
            What Our Alumni Say
          </motion.h2>

          <div className="relative">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="card-minimal p-8 rounded-lg text-center"
            >
              <img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
              />
              <blockquote className="text-lg text-gray-300 mb-6 leading-relaxed italic">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              <div>
                <h4 className="text-xl font-semibold mb-1">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-gray-400 mb-1">
                  {testimonials[currentTestimonial].role}
                </p>
                <p className="text-gray-500 text-sm">
                  {testimonials[currentTestimonial].year}
                </p>
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
            >
              <ChevronRight size={24} />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-20 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Membership Options
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="card-minimal p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold mb-4">Student Membership</h3>
              <div className="text-3xl font-bold mb-6">Free</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Access to all chapter events</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Networking opportunities</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Workshop participation</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Competition eligibility</span>
                </li>
              </ul>
              <a href="/register" className="btn-minimal w-full text-center block">
                Join as Student
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card-minimal p-8 rounded-lg border-white/20"
            >
              <h3 className="text-2xl font-bold mb-4">Professional Membership</h3>
              <div className="text-3xl font-bold mb-6">₹500/year</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>All student benefits</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>ACM Digital Library access</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Career development resources</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Industry networking events</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Mentorship opportunities</span>
                </li>
              </ul>
              <a href="/register" className="btn-minimal w-full text-center block">
                Upgrade to Professional
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-8"
          >
            Ready to Join Our Community?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 leading-relaxed"
          >
            Take the first step towards advancing your career in computing. Join SAKEC ACM today and become part of a thriving community of innovators.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="/register" className="btn-minimal text-lg">
              Join Now
            </a>
            <a href="/contact" className="btn-minimal text-lg">
              Learn More
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
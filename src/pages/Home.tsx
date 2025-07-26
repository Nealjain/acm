import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Calendar, Award } from 'lucide-react';
import TypingEffect from '../components/TypingEffect';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-8"
          >
            Welcome to SAKEC ACM
          </motion.h1>
          
          <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.3 }}
  className="text-2xl md:text-3xl font-light mb-12 h-12"
>
  <TypingEffect
    texts={[
      "Innovation begins here",
      "Building the future",
      "Where ideas come alive",
      "Code. Create. Conquer."
    ]}
    speed={120}
    deleteSpeed={50}
    pause={1500}
  />
</motion.div>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link
              to="/register"
              className="btn-minimal inline-flex items-center gap-2 text-lg"
            >
              Join Us <ArrowRight size={20} />
            </Link>
            <Link
              to="/events"
              className="btn-minimal inline-flex items-center gap-2 text-lg"
            >
              View Events <Calendar size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, number: '40', label: 'Members' },
              { icon: Calendar, number: '14', label: 'Events' },
              { icon: Users, number: '400+', label: 'Participants' },
              { icon: Award, number: '25+', label: 'Speakers' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center card-minimal p-6 rounded-lg"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Events */}
      <section className="py-20 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Recent Events
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Become Winning Women',
                description: 'SAKEC ACM STUDENT CHAPTER under ACM-W in collaboration with Department of Information Technology is organizing a session on - "Becoming Winning Women"',
                date: '08 March, 2021'
              },
              {
                title: 'LinkedIn & Profile Building',
                description: 'As Our Nation is approaching towards complete Unlocking of all services let us UNLOCK Our Personality and add some glimmer to our Professional Profile.',
                date: '15 February, 2021'
              },
              {
                title: 'Hands-on Workshop on Python & Django',
                description: 'Python is the most emerging programming language in the world! Django is a high-level Python Web framework that encourages rapid web development.',
                date: '13 March, 2020'
              },
              {
                title: 'Trek to "Kothaligadh Fort"',
                description: 'Trek to "Kothaligadh Fort" was a fun activity with adventure and team building exercises.',
                date: '01 February, 2020'
              }
            ].map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-minimal p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{event.description}</p>
                <div className="text-sm text-gray-500">Date: {event.date}</div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/events" className="btn-minimal inline-flex items-center gap-2">
              View All Events <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
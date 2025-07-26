import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, ExternalLink } from 'lucide-react';

export default function Events() {
  const upcomingEvents = [
    {
      title: 'AI & Machine Learning Workshop',
      description: 'Hands-on workshop covering the fundamentals of AI and ML with practical implementations using Python and TensorFlow.',
      date: '2024-02-15',
      time: '10:00 AM - 4:00 PM',
      location: 'Computer Lab, SAKEC',
      capacity: '50 students',
      status: 'upcoming',
      registrationLink: '#'
    },
    {
      title: 'Hackathon 2024',
      description: '24-hour coding marathon where teams compete to build innovative solutions to real-world problems.',
      date: '2024-03-01',
      time: '9:00 AM - 9:00 AM (Next Day)',
      location: 'Main Auditorium, SAKEC',
      capacity: '100 participants',
      status: 'upcoming',
      registrationLink: '#'
    },
    {
      title: 'Industry Expert Talk: Future of Computing',
      description: 'Renowned industry experts will share insights about emerging trends and future opportunities in computing.',
      date: '2024-02-28',
      time: '2:00 PM - 4:00 PM',
      location: 'Seminar Hall, SAKEC',
      capacity: '200 students',
      status: 'upcoming',
      registrationLink: '#'
    }
  ];

  const pastEvents = [
    {
      title: 'Become Winning Women',
      description: 'SAKEC ACM STUDENT CHAPTER under ACM-W in collaboration with Department of Information Technology organized a session on "Becoming Winning Women"',
      date: '2021-03-08',
      time: '2:00 PM - 4:00 PM',
      location: 'Online Event',
      participants: '150+ participants',
      status: 'completed'
    },
    {
      title: 'LinkedIn & Profile Building',
      description: 'As Our Nation is approaching towards complete Unlocking of all services let us UNLOCK Our Personality and add some glimmer to our Professional Profile.',
      date: '2021-02-15',
      time: '3:00 PM - 5:00 PM',
      location: 'Online Event',
      participants: '200+ participants',
      status: 'completed'
    },
    {
      title: 'Hands-on Workshop on Python & Django Web Frameworks',
      description: 'Python is the most emerging programming language in the world! Django is a high-level Python Web framework that encourages rapid web development.',
      date: '2020-03-13',
      time: '10:00 AM - 4:00 PM',
      location: 'Computer Lab, SAKEC',
      participants: '80+ participants',
      status: 'completed'
    },
    {
      title: 'Trek to "Kothaligadh Fort"',
      description: 'Trek to "Kothaligadh Fort" was a fun activity with adventure and team building exercises.',
      date: '2020-02-01',
      time: '6:00 AM - 8:00 PM',
      location: 'Kothaligadh Fort',
      participants: '30+ participants',
      status: 'completed'
    }
  ];

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
            Events
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 leading-relaxed"
          >
            Discover our upcoming workshops, seminars, and past achievements
          </motion.p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Upcoming Events
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-minimal p-6 rounded-lg"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold flex-1">{event.title}</h3>
                  <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-medium">
                    Upcoming
                  </span>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">{event.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <Calendar size={16} />
                    <span>{new Date(event.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <Clock size={16} />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <MapPin size={16} />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <Users size={16} />
                    <span>{event.capacity}</span>
                  </div>
                </div>
                
                <a
                  href={event.registrationLink}
                  className="btn-minimal inline-flex items-center gap-2 w-full justify-center"
                >
                  Register Now <ExternalLink size={16} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Past Events
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-minimal p-6 rounded-lg opacity-80"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold flex-1">{event.title}</h3>
                  <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Completed
                  </span>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">{event.description}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <Calendar size={16} />
                    <span>{new Date(event.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <Clock size={16} />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <MapPin size={16} />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <Users size={16} />
                    <span>{event.participants}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
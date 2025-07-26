import { motion } from 'framer-motion';
import { Users, Target, Eye, Calendar } from 'lucide-react';

export default function About() {
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
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 leading-relaxed"
          >
            Discover the legacy of ACM and our journey at SAKEC
          </motion.p>
        </div>
      </section>

      {/* About ACM */}
      <section className="py-20 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-8">About ACM</h2>
            <div className="max-w-4xl mx-auto text-lg text-gray-300 leading-relaxed space-y-6">
              <p>
                ACM brings together computing educators, researchers, and professionals to inspire dialogue, 
                share resources, and address the field's challenges. As the world's largest computing society, 
                ACM strengthens the profession's collective voice through strong leadership, promotion of the 
                highest standards, and recognition of technical excellence.
              </p>
              <p>
                ACM supports the professional growth of its members by providing opportunities for life‐long 
                learning, career development, and professional networking. Founded at the dawn of the computer 
                age, ACM's reach extends to every part of the globe, with more than half of its 100,000 members 
                residing outside the U.S.
              </p>
              <p>
                Its growing membership has led to Councils in Europe, India, and China, fostering networking 
                opportunities that strengthen ties within and across countries and technical communities. Their 
                actions enhance ACM's ability to raise awareness of computing's important technical, educational, 
                and social issues around the world.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About SAKEC ACM */}
      <section className="py-20 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-8">About SAKEC ACM</h2>
            <div className="max-w-4xl mx-auto text-lg text-gray-300 leading-relaxed space-y-6">
              <p>
                <strong>Innovation Begins here</strong>
              </p>
              <p>
                SAKEC ACM, one of the most popular chapters at Shah and Anchor Kutchhi Engineering College 
                was started on 11th April, 2017. SAKEC ACM student chapter are carrying on the legacy of 
                ACM international from the beginning.
              </p>
              <p>
                SAKEC ACM Student Chapter has consistently proven itself as a successful committee in terms 
                of the versatility and productivity of the events held over the years. It has also established 
                itself as a successful committee for students.
              </p>
              <p>
                Every year knowledge is being imparted to hundreds of students and they are helped to understand 
                how they can contribute to the field of computing science. Several technical events are conducted 
                in a year. The growth of inquisitive minds is nurtured by providing them with the toolkit to 
                excel in various fields.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="card-minimal p-8 rounded-lg"
            >
              <Target className="w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To foster innovation and excellence in computing education, research, and professional 
                development while building a strong community of computing professionals and students.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card-minimal p-8 rounded-lg"
            >
              <Eye className="w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To be the leading student chapter that empowers the next generation of computing 
                professionals through knowledge sharing, innovation, and collaborative learning.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Our Journey
          </motion.h2>

          <div className="space-y-12">
            {[
              {
                year: '2017',
                title: 'Chapter Founded',
                description: 'SAKEC ACM Student Chapter was established on 11th April, 2017, marking the beginning of our journey in computing excellence.'
              },
              {
                year: '2018-2019',
                title: 'Growth Phase',
                description: 'Expanded our activities with technical workshops, coding competitions, and industry expert sessions.'
              },
              {
                year: '2020-2021',
                title: 'Digital Transformation',
                description: 'Adapted to virtual events during the pandemic, reaching more students through online platforms and webinars.'
              },
              {
                year: '2022-Present',
                title: 'Innovation Era',
                description: 'Continuing to foster innovation with cutting-edge workshops, hackathons, and industry collaborations.'
              }
            ].map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-6"
              >
                <div className="flex-shrink-0 w-20 h-20 bg-white text-black rounded-full flex items-center justify-center font-bold">
                  {milestone.year}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
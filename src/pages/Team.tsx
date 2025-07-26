import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Team() {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'President',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      bio: 'Leading the chapter with vision and dedication to computing excellence.',
      social: {
        github: '#',
        linkedin: '#',
        email: 'president@sakec.acm.org'
      }
    },
    {
      name: 'Jane Smith',
      role: 'Vice President',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      bio: 'Supporting organizational growth and member engagement initiatives.',
      social: {
        github: '#',
        linkedin: '#',
        email: 'vp@sakec.acm.org'
      }
    },
    {
      name: 'Mike Johnson',
      role: 'Technical Head',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      bio: 'Overseeing technical workshops and coding competitions.',
      social: {
        github: '#',
        linkedin: '#',
        email: 'tech@sakec.acm.org'
      }
    },
    {
      name: 'Sarah Wilson',
      role: 'Event Coordinator',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      bio: 'Managing events and ensuring seamless execution of all activities.',
      social: {
        github: '#',
        linkedin: '#',
        email: 'events@sakec.acm.org'
      }
    },
    {
      name: 'David Brown',
      role: 'Marketing Head',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face',
      bio: 'Promoting chapter activities and building community engagement.',
      social: {
        github: '#',
        linkedin: '#',
        email: 'marketing@sakec.acm.org'
      }
    },
    {
      name: 'Emily Davis',
      role: 'Secretary',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face',
      bio: 'Maintaining records and facilitating communication within the chapter.',
      social: {
        github: '#',
        linkedin: '#',
        email: 'secretary@sakec.acm.org'
      }
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
            Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 leading-relaxed"
          >
            Meet the dedicated individuals driving innovation at SAKEC ACM
          </motion.p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-minimal p-6 rounded-lg text-center group"
              >
                <div className="relative mb-6 mx-auto w-32 h-32 overflow-hidden rounded-full">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <div className="text-gray-400 mb-4 font-medium">{member.role}</div>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">{member.bio}</p>
                
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.social.github}
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={member.social.linkedin}
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Email"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-8"
          >
            Want to Join Our Team?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 leading-relaxed"
          >
            We're always looking for passionate individuals who want to contribute to the computing community. 
            Join us in our mission to foster innovation and excellence.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a href="mailto:acm@sakec.ac.in" className="btn-minimal text-lg">
              Get In Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
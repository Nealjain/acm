import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Code, Users } from 'lucide-react';

export default function Hero() {
  const floatingElements = [
    { icon: Code, delay: 0, x: 100, y: 50 },
    { icon: Users, delay: 0.5, x: -80, y: 80 },
    { icon: Sparkles, delay: 1, x: 120, y: -60 },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating background elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute opacity-10"
          style={{
            left: `calc(50% + ${element.x}px)`,
            top: `calc(50% + ${element.y}px)`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: element.delay,
            ease: "easeInOut",
          }}
        >
          <element.icon size={80} className="text-pink-500" />
        </motion.div>
      ))}

      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Animated badge */}
        <motion.div
          className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            className="w-2 h-2 bg-pink-500 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
          <span className="text-sm text-gray-300">Shah & Anchor Kutchhi Engineering College</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <motion.span
            className="block bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundSize: "200% 200%",
            }}
          >
            Welcome to
          </motion.span>
          <motion.span
            className="block text-white mt-2"
            animate={{
              textShadow: [
                "0 0 20px #ff0088",
                "0 0 40px #ff0088",
                "0 0 20px #ff0088",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            SAKEC ACM
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.span
            animate={{
              color: ["#d1d5db", "#8df0cc", "#d1d5db"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Innovation Begins Here
          </motion.span>
          {" – "}
          Where technology meets creativity and dreams become reality
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-white font-semibold text-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 0 20px rgba(255, 0, 136, 0.3)",
                "0 0 40px rgba(255, 0, 136, 0.5)",
                "0 0 20px rgba(255, 0, 136, 0.3)",
              ],
            }}
            transition={{
              boxShadow: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
            <span className="relative z-10 flex items-center">
              Join Us Now
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </span>
          </motion.button>

          <motion.button
            className="px-8 py-4 glass rounded-full text-white font-semibold text-lg border border-gray-600 hover:border-cyan-400 transition-colors"
            whileHover={{ scale: 1.05, borderColor: "#8df0cc" }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Quick stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {[
            { number: "500+", label: "Active Members" },
            { number: "50+", label: "Events Hosted" },
            { number: "10+", label: "Years of Excellence" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center glass p-6 rounded-xl"
              whileHover={{ scale: 1.05, y: -5 }}
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                y: {
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.5,
                  ease: "easeInOut",
                },
              }}
            >
              <motion.div
                className="text-3xl md:text-4xl font-bold text-pink-500 mb-2"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-pink-500 rounded-full mt-2"
            animate={{
              y: [0, 12, 0],
              opacity: [1, 0, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
import { motion } from 'framer-motion';

export default function Preloader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 3.5, duration: 0.5 }}
      className="fixed inset-0 bg-black flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        className="w-32 h-32 bg-gradient-to-br from-pink-500 to-cyan-400 rounded-full"
      />
    </motion.div>
  );
}

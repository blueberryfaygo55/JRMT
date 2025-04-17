'use client';

import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600"
        >
          Welcome to JRMT!
        </motion.h1>

        {/* Animated Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg text-gray-700 max-w-3xl mx-auto mb-8"
        >
          The Jackson-Reed Math Tournament (JRMT) is a free middle school math contest organized by the Jackson-Reed High School Math Club, with help from passionate high schoolers across the country. Our team consists of dedicated problem writers who have excelled at national competitions such as the AMC, AIME, and USA Math Olympiad.
        </motion.p>

        {/* Interactive CTA */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/registration"
          className="inline-block bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition-colors duration-200"
        >
          Register Your Team
        </motion.a>
      </div>
    </div>
  );
}
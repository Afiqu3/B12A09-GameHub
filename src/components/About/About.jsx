import React from "react";
import { motion } from "motion/react";
import { FaGamepad, FaUsers, FaGlobe, FaCode } from "react-icons/fa";

const About = () => {
  return (
    <section className="min-h-screen bg-black text-gray-300">
      <div className="max-w-6xl mx-auto py-16 text-gray-300 px-6 md:px-16">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-[#892CDC]">GameHub</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            GameHub is your gateway to discovering, supporting, and celebrating
            independent game developers. Explore a growing library of creative
            projects, connect with passionate creators, and experience the
            future of gaming innovation.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="bg-[#0a1a2f] rounded-2xl p-6 text-center shadow-lg hover:shadow-[#892CDC]/30 transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <FaGamepad className="text-5xl text-[#892CDC] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Discover Games
            </h3>
            <p className="text-gray-400 text-sm">
              Browse a vast selection of indie games with detailed insights,
              ratings, and developer info.
            </p>
          </motion.div>

          <motion.div
            className="bg-[#0a1a2f] rounded-2xl p-6 text-center shadow-lg hover:shadow-[#892CDC]/30 transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <FaUsers className="text-5xl text-[#892CDC] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Join the Community
            </h3>
            <p className="text-gray-400 text-sm">
              Connect with fellow gamers and developers to share feedback,
              reviews, and creative ideas.
            </p>
          </motion.div>

          <motion.div
            className="bg-[#0a1a2f] rounded-2xl p-6 text-center shadow-lg hover:shadow-[#892CDC]/30 transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <FaGlobe className="text-5xl text-[#892CDC] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Global Access
            </h3>
            <p className="text-gray-400 text-sm">
              GameHub connects players and creators from all over the world
              under one virtual space.
            </p>
          </motion.div>

          <motion.div
            className="bg-[#0a1a2f] rounded-2xl p-6 text-center shadow-lg hover:shadow-[#892CDC]/30 transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <FaCode className="text-5xl text-[#892CDC] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Support Developers
            </h3>
            <p className="text-gray-400 text-sm">
              Empower indie developers by exploring their creations and helping
              their projects grow.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-20 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          // viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-gray-400 leading-relaxed">
            At <span className="text-[#892CDC] font-semibold">GameHub</span>, we
            believe that every great game deserves to be discovered. Our mission
            is to bridge the gap between talented developers and players looking
            for fresh, authentic gaming experiences. We aim to create a
            transparent and engaging platform that celebrates creativity and
            community.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

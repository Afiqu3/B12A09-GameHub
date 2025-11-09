import React from "react";
import { motion } from "motion/react";

const Newsletter = () => {
  return (
    <section className="bg-linear-to-br from-gray-900 via-black to-gray-900 text-white py-16 px-6">
      <motion.div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-300 mb-8">
            Get the latest updates, news, and exclusive offers straight to your
            inbox.
          </p>
        </motion.div>

        <motion.form
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-2/3 px-5 py-3 rounded-full border border-white text-white focus:ring-2 focus:ring-[#892CDC]"
            required
          />
          <button
            type="submit"
            className="bg-linear-to-r from-[#632ee3] to-[#9f62f2] hover:from-[#52057B] hover:to-[#892CDC] text-white font-semibold px-8 py-3 rounded-full transition-all duration-500 cursor-pointer"
          >
            Subscribe
          </button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Newsletter;

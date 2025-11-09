import React from "react";
import { motion } from "motion/react";

const FAQ = () => {
  const faqs = [
    {
      question: "What is GameHub?",
      answer:
        "GameHub is an online library designed for discovering and supporting indie game developers. Users can explore games, read detailed information, and connect with creators.",
    },
    {
      question: "Do I need an account to browse games?",
      answer:
        "You can browse games without an account, but registering lets you unlock extra features like favoriting games, leaving reviews, and supporting developers.",
    },
    {
      question: "How can I support indie developers?",
      answer:
        "You can support developers by engaging with their profiles, leaving constructive reviews, and sharing their games within the GameHub community.",
    },
    {
      question: "Is GameHub free to use?",
      answer:
        "Yes! GameHub is completely free for players. Developers can also publish their indie games with optional promotional upgrades.",
    },
    {
      question: "Can I publish my own game on GameHub?",
      answer:
        "Absolutely. Developers can create an account, upload their game details, and showcase their projects to the GameHub audience.",
    },
  ];

  return (
    <div className="bg-black text-gray-300 py-20 px-6 md:px-16">
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-2">
          {" "}
          FAQs
        </h2>
        <div className="h-px bg-[#9f62f2] w-10 mx-auto"></div>
      </motion.div>

      {/* FAQ List */}
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((item, index) => (
          <motion.div
            key={index}
            className="collapse collapse-plus bg-[#0a1a2f] rounded-xl border border-gray-800 hover:border-primary/50 transition-colors"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-lg font-semibold text-white peer-checked:text-primary">
              {item.question}
            </div>
            <div className="collapse-content text-gray-400">
              <p>{item.answer}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

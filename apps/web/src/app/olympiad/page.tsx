"use client";
import { motion } from "framer-motion";

export default function Olympiad() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" as const }
    }
  };

  return (
    <main className="flex-grow bg-brand-base flex flex-col py-20 overflow-hidden">
      <motion.div
        className="container mx-auto px-6 md:px-10 max-w-4xl"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1 variants={itemVariants} className="font-display text-5xl md:text-6xl text-brand-text mb-8 border-b border-brand-border-light pb-6">
          Chemistry Olympiad
        </motion.h1>

        <div className="prose prose-lg text-brand-text-secondary font-ui leading-relaxed">
          <motion.p variants={itemVariants} className="mb-6 text-xl text-brand-text font-medium">
            The flagship competitive event hosted by the ZCC Foundation, challenging the brightest young minds across Bangladesh.
          </motion.p>

          <motion.h2 variants={itemVariants} className="font-display text-3xl text-brand-text mt-12 mb-4">About the Competition</motion.h2>
          <motion.p variants={itemVariants} className="mb-6">
            The ZCC Foundation Chemistry Olympiad is an annual, nationwide competition designed to inspire high school and college students to push the boundaries of their chemical knowledge. It goes far beyond the standard curriculum, testing logical reasoning, analytical problem-solving, and a deep conceptual understanding of theoretical and practical chemistry.
          </motion.p>

          <motion.h2 variants={itemVariants} className="font-display text-3xl text-brand-text mt-12 mb-4">Competition Format</motion.h2>
          <motion.div variants={itemVariants} className="mb-6">
            <p>The competition is structured into three rigorous tiers:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Regional Preliminary Round:</strong> A multiple-choice examination held simultaneously in major divisions across Bangladesh.</li>
              <li><strong>National Semi-Finals:</strong> Top performers from the regional rounds gather in Dhaka for a challenging theoretical paper requiring detailed, written solutions.</li>
              <li><strong>The Grand Finale:</strong> An intensive, multi-day camp featuring complex theoretical exams and practical laboratory challenges, judged by a panel of esteemed university professors.</li>
            </ul>
          </motion.div>

          <motion.h2 variants={itemVariants} className="font-display text-3xl text-brand-text mt-12 mb-4">Syllabus</motion.h2>
          <motion.p variants={itemVariants} className="mb-6">
            The syllabus encompasses a broad spectrum of topics, carefully curated to align with international standards while respecting the national educational framework. Key areas include:
          </motion.p>
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-brand-warm p-4 rounded-brand-md border border-brand-border-light">
              <ul className="list-disc pl-4 space-y-1">
                <li>Physical Chemistry (Thermodynamics, Kinetics)</li>
                <li>Inorganic Chemistry (Coordination Compounds)</li>
              </ul>
            </div>
            <div className="bg-brand-warm p-4 rounded-brand-md border border-brand-border-light">
              <ul className="list-disc pl-4 space-y-1">
                <li>Organic Chemistry (Reaction Mechanisms, Synthesis)</li>
                <li>Analytical Chemistry (Spectroscopy, Titrations)</li>
              </ul>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-brand-text text-brand-base rounded-brand-lg p-8 mt-12">
            <h3 className="font-display text-2xl text-brand-base mb-4">How to Participate</h3>
            <p className="mb-6 text-brand-base/80">
              Registration opens annually in the first quarter of the year. Students must be enrolled in a recognized Bangladeshi educational institution. Detailed registration guidelines, past papers, and study resources will be published on this portal prior to the registration period.
            </p>
            <button className="bg-brand-base text-brand-text font-bold font-ui px-6 py-3 rounded-brand-md hover:bg-brand-warm transition-colors">
              Registration Closed
            </button>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}

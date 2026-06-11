"use client";
import { motion } from "framer-motion";

export default function Scholarships() {
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
          Foundation Scholarships
        </motion.h1>

        <div className="prose prose-lg text-brand-text-secondary font-ui leading-relaxed">
          <motion.p variants={itemVariants} className="mb-6 text-xl text-brand-text font-medium">
            Removing financial barriers to ensure that talented minds in Bangladesh can pursue their passion for chemistry.
          </motion.p>

          <motion.h2 variants={itemVariants} className="font-display text-3xl text-brand-text mt-12 mb-4">Our Commitment</motion.h2>
          <motion.p variants={itemVariants} className="mb-6">
            The ZCC Foundation firmly believes that financial constraints should never stand in the way of academic excellence and scientific discovery. We have established a comprehensive scholarship fund dedicated to supporting meritorious students across Bangladesh who wish to build a career in the chemical sciences.
          </motion.p>

          <motion.h2 variants={itemVariants} className="font-display text-3xl text-brand-text mt-12 mb-4">Available Programs</motion.h2>

          <div className="space-y-6">
            <motion.div variants={itemVariants} className="bg-brand-warm rounded-brand-lg p-8 border border-brand-border-light">
              <h3 className="font-display text-2xl text-brand-text mb-3">ZCC Academic Excellence Award</h3>
              <p className="text-base mb-4">
                A highly competitive, merit-based scholarship awarded to the top-performing students in the annual Chemistry Olympiad. This grant covers full academic tuition for an undergraduate degree in Chemistry or Chemical Engineering at any public university in Bangladesh.
              </p>
              <span className="inline-block bg-brand-text text-brand-base text-xs font-bold px-3 py-1 rounded-full">Merit Based</span>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-brand-warm rounded-brand-lg p-8 border border-brand-border-light">
              <h3 className="font-display text-2xl text-brand-text mb-3">Future Innovator Grant</h3>
              <p className="text-base mb-4">
                A need-based scholarship designed for promising students from underprivileged backgrounds showing exceptional aptitude in the sciences. This grant provides a monthly stipend to support living and educational expenses during high school (HSC/A-Level equivalent) and university studies.
              </p>
              <span className="inline-block bg-brand-text text-brand-base text-xs font-bold px-3 py-1 rounded-full">Need Based</span>
            </motion.div>
          </div>

          <motion.h2 variants={itemVariants} className="font-display text-3xl text-brand-text mt-12 mb-4">Application Process</motion.h2>
          <motion.ul variants={itemVariants} className="list-decimal pl-6 space-y-3 mb-8">
            <li><strong>Initial Screening:</strong> Applicants submit their academic transcripts, standardized test scores, and a personal statement outlining their interest in chemistry.</li>
            <li><strong>Financial Assessment:</strong> For need-based grants, applicants must provide verifiable documentation regarding their family&apos;s financial status.</li>
            <li><strong>Interview Panel:</strong> Shortlisted candidates are invited for an interview with the Foundation&apos;s selection committee, which includes academic professionals.</li>
            <li><strong>Final Award:</strong> Selected scholars are notified and onboarded into the Foundation&apos;s mentorship program alongside receiving their financial grants.</li>
          </motion.ul>

          <motion.div variants={itemVariants} className="mt-12 text-center">
            <p className="mb-4">The application window for the current academic year is currently closed.</p>
            <p className="text-sm text-brand-text-muted">Please check back in late Autumn for the next intake schedule.</p>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}

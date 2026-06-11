"use client";
import { motion } from "framer-motion";

export default function AboutUs() {
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
          About ZCC Foundation
        </motion.h1>

        <div className="prose prose-lg text-brand-text-secondary font-ui leading-relaxed">
          <motion.p variants={itemVariants} className="mb-6 text-xl text-brand-text font-medium">
            The ZCC Foundation is a premier educational organization dedicated to the advancement of chemical sciences across Bangladesh.
          </motion.p>

          <motion.h2 variants={itemVariants} className="font-display text-3xl text-brand-text mt-12 mb-4">Our History</motion.h2>
          <motion.p variants={itemVariants} className="mb-6">
            Founded by a group of passionate educators and leading researchers, the ZCC Foundation was established with a singular goal: to elevate the standard of chemistry education in Bangladesh. Recognizing a gap between standard academic curricula and the practical, analytical skills required for modern scientific innovation, our founders created an organization designed to bridge that divide.
          </motion.p>

          <motion.h2 variants={itemVariants} className="font-display text-3xl text-brand-text mt-12 mb-4">Our Mission</motion.h2>
          <motion.p variants={itemVariants} className="mb-6">
            Our mission is to democratize access to high-quality chemistry education. We strive to empower students from all backgrounds by providing them with the resources, mentorship, and competitive platforms they need to excel. Through initiatives like the Chemistry Olympiad and our comprehensive scholarship programs, we aim to discover and nurture the next generation of scientific leaders in Bangladesh.
          </motion.p>

          <motion.h2 variants={itemVariants} className="font-display text-3xl text-brand-text mt-12 mb-4">Our Vision</motion.h2>
          <motion.p variants={itemVariants} className="mb-6">
            We envision a future where Bangladeshi students are at the forefront of global chemical research and industrial innovation. By fostering a deep, practical understanding of chemistry today, we are laying the groundwork for the sustainable, scientific solutions of tomorrow.
          </motion.p>

          <motion.div variants={itemVariants} className="bg-brand-warm rounded-brand-lg p-8 mt-12 border border-brand-border-light">
            <h3 className="font-display text-2xl text-brand-text mb-4">Leadership & Governance</h3>
            <p className="mb-0">
              The ZCC Foundation is governed by a board of directors comprising distinguished university professors, industry professionals, and educational policymakers committed to educational excellence and transparency.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}

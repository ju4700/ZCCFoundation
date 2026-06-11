"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" as const }
    }
  };

  return (
    <main className="flex-grow bg-brand-base flex flex-col">
      {/* Hero Section */}
      <section className="bg-brand-warm py-20 md:py-32 overflow-hidden">
        <motion.div
          className="container mx-auto px-6 md:px-10 max-w-5xl text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariants} className="font-display text-5xl md:text-7xl leading-tight text-brand-text mb-6">
            Empowering the Next Generation of Chemists in Bangladesh
          </motion.h1>
          <motion.p variants={itemVariants} className="font-ui text-lg md:text-xl text-brand-text-secondary max-w-3xl mx-auto mb-10 leading-relaxed">
            The ZCC Foundation is dedicated to advancing chemical education, supporting bright minds across Bangladesh through scholarships, and hosting the premier Chemistry Olympiad.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
            <Link
              href="/olympiad"
              className="rounded-brand-lg bg-brand-text px-8 py-4 font-ui text-base text-brand-base transition-colors hover:opacity-90"
            >
              Explore the Olympiad
            </Link>
            <Link
              href="/scholarships"
              className="rounded-brand-lg border border-brand-border bg-brand-base px-8 py-4 font-ui text-base text-brand-text transition-colors hover:bg-brand-warm-alt"
            >
              Apply for Scholarships
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 overflow-hidden">
        <motion.div
          className="container mx-auto px-6 md:px-10 max-w-5xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <p className="font-ui text-sm font-bold text-brand-text-muted tracking-widest uppercase mb-2">Who We Are</p>
              <h2 className="font-display text-3xl md:text-5xl text-brand-text mb-6">Dedicated to Chemistry Education</h2>
              <p className="font-ui text-base text-brand-text-secondary leading-relaxed mb-6">
                Founded by passionate educators and scientists in Bangladesh, the ZCC Foundation strives to ignite curiosity and foster excellence in the chemical sciences. We believe that chemistry holds the key to solving many of the world&apos;s most pressing challenges.
              </p>
              <p className="font-ui text-base text-brand-text-secondary leading-relaxed mb-6">
                By providing resources, competitive platforms, and financial support, we aim to build a strong community of young scientists ready to make a difference both locally and globally.
              </p>
              <Link
                href="/about"
                className="inline-block font-ui text-sm font-bold text-brand-text border-b border-brand-text pb-1 hover:opacity-70 transition-opacity"
              >
                Learn more about our mission &rarr;
              </Link>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-brand-warm rounded-brand-lg p-8 h-full flex flex-col justify-center border border-brand-border-light">
              <h3 className="font-accent text-2xl text-brand-text mb-4 italic">&quot;Chemistry is the study of matter, but I prefer to see it as the study of change.&quot;</h3>
              <p className="font-ui text-sm text-brand-text-muted">— Inspiring Future Innovators</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Programs Section with Background Image */}
      <section
        className="relative py-32 border-t border-brand-border-light overflow-hidden bg-brand-warm bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url('/initiatives-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-brand-base/80 backdrop-blur-sm"></div>
        <motion.div
          className="container relative z-10 mx-auto px-6 md:px-10 max-w-6xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-brand-text mb-4">Our Key Initiatives</h2>
            <p className="font-ui text-lg text-brand-text-secondary max-w-2xl mx-auto">
              Discover how we are making an impact through our core educational programs in Bangladesh.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Olympiad Card */}
            <motion.div variants={itemVariants} className="bg-brand-base/90 rounded-brand-lg p-8 md:p-12 border border-brand-border shadow-sm flex flex-col backdrop-blur">
              <h3 className="font-display text-3xl text-brand-text mb-4">Chemistry Olympiad</h3>
              <p className="font-ui text-base text-brand-text-secondary leading-relaxed mb-8 flex-grow">
                Our flagship event challenges students across Bangladesh with rigorous, thought-provoking problems that go beyond the standard national curriculum. Compete with top minds, test your knowledge, and earn recognition.
              </p>
              <ul className="space-y-3 font-ui text-sm text-brand-text-secondary mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-brand-text font-bold">&bull;</span> Annual nationwide competition
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-text font-bold">&bull;</span> Expert-crafted problems
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-text font-bold">&bull;</span> National leaderboard and awards
                </li>
              </ul>
              <Link
                href="/olympiad"
                className="inline-block font-ui text-sm font-bold text-brand-text border-b border-brand-text pb-1 hover:opacity-70 transition-opacity self-start"
              >
                View Olympiad details &rarr;
              </Link>
            </motion.div>

            {/* Scholarships Card */}
            <motion.div variants={itemVariants} className="bg-brand-base/90 rounded-brand-lg p-8 md:p-12 border border-brand-border shadow-sm flex flex-col backdrop-blur">
              <h3 className="font-display text-3xl text-brand-text mb-4">Foundation Scholarships</h3>
              <p className="font-ui text-base text-brand-text-secondary leading-relaxed mb-8 flex-grow">
                We believe financial barriers should never hinder educational potential. Our scholarship programs support outstanding Bangladeshi students pursuing higher education in chemistry and related scientific fields.
              </p>
              <ul className="space-y-3 font-ui text-sm text-brand-text-secondary mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-brand-text font-bold">&bull;</span> Merit-based awards
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-text font-bold">&bull;</span> Need-based educational grants
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-text font-bold">&bull;</span> Academic mentorship opportunities
                </li>
              </ul>
              <Link
                href="/scholarships"
                className="inline-block font-ui text-sm font-bold text-brand-text border-b border-brand-text pb-1 hover:opacity-70 transition-opacity self-start"
              >
                View scholarship requirements &rarr;
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

"use client";
import { motion } from "framer-motion";

export default function ContactUs() {
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
        className="container mx-auto px-6 md:px-10 max-w-5xl"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1 variants={itemVariants} className="font-display text-5xl md:text-6xl text-brand-text mb-8 border-b border-brand-border-light pb-6 text-center">
          Contact Us
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="prose prose-lg text-brand-text-secondary font-ui">
            <h2 className="font-display text-3xl text-brand-text mb-6">Get in Touch</h2>
            <p className="mb-8">
              Whether you have questions about the Chemistry Olympiad, need assistance with scholarship applications, or want to explore partnership opportunities, our team is here to help.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-brand-text text-lg mb-1">Office Address</h3>
                <p className="m-0">
                  ZCC Foundation Headquarters<br />
                  Level 5, Science and Technology Tower<br />
                  Agargaon, Dhaka-1207<br />
                  Bangladesh
                </p>
              </div>

              <div>
                <h3 className="font-bold text-brand-text text-lg mb-1">General Inquiries</h3>
                <p className="m-0 text-brand-text-muted">Email: contact@zccfoundation.org.bd</p>
                <p className="m-0 text-brand-text-muted">Phone: +880 2 5555 1234</p>
              </div>

              <div>
                <h3 className="font-bold text-brand-text text-lg mb-1">Office Hours</h3>
                <p className="m-0 text-brand-text-muted">Sunday - Thursday: 9:00 AM - 5:00 PM</p>
                <p className="m-0 text-brand-text-muted">Closed on National Holidays</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants} className="bg-brand-warm rounded-brand-lg p-8 border border-brand-border-light shadow-sm">
            <h3 className="font-display text-2xl text-brand-text mb-6">Send us a Message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block font-ui text-sm font-bold text-brand-text mb-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-brand-base border border-brand-border rounded-brand-md px-4 py-2 font-ui text-brand-text focus:outline-none focus:border-brand-text transition-colors"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-ui text-sm font-bold text-brand-text mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-brand-base border border-brand-border rounded-brand-md px-4 py-2 font-ui text-brand-text focus:outline-none focus:border-brand-text transition-colors"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block font-ui text-sm font-bold text-brand-text mb-1">Subject</label>
                <select
                  id="subject"
                  className="w-full bg-brand-base border border-brand-border rounded-brand-md px-4 py-2 font-ui text-brand-text focus:outline-none focus:border-brand-text transition-colors"
                >
                  <option>General Inquiry</option>
                  <option>Chemistry Olympiad</option>
                  <option>Scholarships</option>
                  <option>Partnerships</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block font-ui text-sm font-bold text-brand-text mb-1">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-brand-base border border-brand-border rounded-brand-md px-4 py-2 font-ui text-brand-text focus:outline-none focus:border-brand-text transition-colors resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-text text-brand-base font-bold font-ui px-6 py-3 rounded-brand-md hover:bg-brand-text-secondary transition-colors mt-4"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}

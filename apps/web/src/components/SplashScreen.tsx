"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FlickerSpinner from "./FlickerSpinner";

export default function SplashScreen({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="splash-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-base"
          >
            <FlickerSpinner size={80} />
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6 font-display text-2xl text-brand-text tracking-wide"
            >
              ZCC Foundation
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
      {/*
        Render children immediately but keep them hidden behind the splash screen
        until it animates away. This prevents layout shifting.
      */}
      {children}
    </>
  );
}

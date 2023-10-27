'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const FixedLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key={1}
          className="absolute left-0 z-[100] flex h-full w-full items-center justify-center bg-background-main"
          exit={{ opacity: 0 }}
        >
          <div className="h-[50px] w-[50px] animate-ping rounded-full bg-divider-light" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FixedLoader;

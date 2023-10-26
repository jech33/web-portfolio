'use client';
import Image from 'next/image';
import TagSphere from './TagSphere';
import ProfilePicture from '@/public/avatar-circle.jpg';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const IntroAvatar = () => {
  const [showAvatar, setShowAvatar] = useState(true);
  const animationVariants = {
    visible: { scale: 1 },
    hidden: { scale: 0 },
  };

  return (
    <button onClick={() => setShowAvatar((prev) => !prev)}>
      <AnimatePresence initial={false} mode="wait">
        {showAvatar ? (
          <motion.div
            key={1}
            initial={'hidden'}
            animate={'visible'}
            exit={'hidden'}
            variants={animationVariants}
          >
            <Image
              src={ProfilePicture}
              width={200}
              height={200}
              alt="avatar-picture"
              className="rounded-full"
            />
          </motion.div>
        ) : (
          <motion.div
            key={2}
            initial={'hidden'}
            animate={'visible'}
            exit={'hidden'}
            variants={animationVariants}
          >
            <TagSphere />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

export default IntroAvatar;

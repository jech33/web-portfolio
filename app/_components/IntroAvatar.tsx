'use client';
import Image from 'next/image';
import TagSphere from './TagSphere';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export type IntroAvatarProps = {
  imageUrl: string;
};

const IntroAvatar = (props: IntroAvatarProps) => {
  const { imageUrl } = props;
  const [showAvatar, setShowAvatar] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const animationVariants = {
    visible: { scale: 1 },
    hidden: { scale: 0 },
  };

  const handleAnimationEnd = () => {
    setIsAnimating(false);
  };

  return (
    <button
      onClick={() => {
        if (!isAnimating) {
          setIsAnimating(true);
          setShowAvatar((prev) => !prev);
        }
      }}
      className="relative h-[200px] w-[200px]"
    >
      <AnimatePresence initial={false} mode="wait" onExitComplete={handleAnimationEnd}>
        {showAvatar && (
          <motion.div
            key={1}
            initial={'hidden'}
            animate={'visible'}
            exit={'hidden'}
            variants={animationVariants}
            className="absolute top-0 h-full w-full"
          >
            <Image
              src={imageUrl}
              width={200}
              height={200}
              alt="avatar-picture"
              className="rounded-full"
            />
          </motion.div>
        )}
        {!showAvatar && (
          <motion.div
            key={2}
            initial={'hidden'}
            animate={'visible'}
            exit={'hidden'}
            variants={animationVariants}
            className="absolute top-0 h-full w-full"
          >
            <TagSphere />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

export default IntroAvatar;

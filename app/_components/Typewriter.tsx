'use client';

import { useEffect, useState } from 'react';

export type TypewriterProps = {
  phrases: string[];
};

const Typewriter = (props: TypewriterProps) => {
  const { phrases } = props;
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (currentIndex < currentPhrase.length) {
      timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + currentPhrase[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 100);
    } else {
      // ADD THIS CHECK
      const newPhraseIndex = phrases.findIndex((phrase) => phrase === currentPhrase) + 1;
      const newAvailableIndex = newPhraseIndex >= phrases.length ? 0 : newPhraseIndex;
      setTimeout(() => {
        setCurrentIndex(0);
        setCurrentText('');
        setCurrentPhrase(phrases[newAvailableIndex]);
      }, 1200);
    }

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  return (
    <>
      <span className="bg-primary-main px-2">{currentText}</span>
      <span className="animate-typewriter ">|</span>
    </>
  );
};

export default Typewriter;

import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FadeInSectionProps {
  children: React.ReactNode;
  direction?: 'up' | 'left' | 'right' | 'down';
  delay?: number;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children, direction = 'up', delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.16 });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  let y = 0, x = 0;
  if (direction === 'up') y = 40;
  if (direction === 'down') y = -40;
  if (direction === 'left') x = 40;
  if (direction === 'right') x = -40;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y, x }}
      animate={controls}
      transition={{ duration: 0.7, delay }}
      variants={{
        visible: { opacity: 1, y: 0, x: 0 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;

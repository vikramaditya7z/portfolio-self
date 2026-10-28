import React from 'react';
import { motion } from 'motion/react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { getMaskedLineVariants } from './variants';

interface MaskedLineProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  wrapperClassName?: string;
}

export const MaskedLine: React.FC<MaskedLineProps> = ({
  children,
  delay = 0,
  className = '',
  wrapperClassName = '',
}) => {
  const prefersReducedMotion = useReducedMotion();
  const variants = getMaskedLineVariants(prefersReducedMotion, delay);

  return (
    <div className={`overflow-hidden leading-none py-1 ${wrapperClassName}`}>
      <motion.div
        initial={prefersReducedMotion ? false : 'hidden'}
        animate="visible"
        variants={variants}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
};

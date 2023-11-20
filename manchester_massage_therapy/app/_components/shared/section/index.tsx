'use client';

import { ComponentProps } from 'react';
import { motion } from 'framer-motion';

interface SectionProps extends ComponentProps<'div'> {
  bgColor?: undefined | string;
}

export default function Section({
  bgColor,
  className,
  children,
}: SectionProps) {
  return (
    <div className={`w-full ${bgColor ?? ''}`}>
      <motion.div
        className={`w-full gap-8 py-16 md:py-32 ${className ?? ''}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.3 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

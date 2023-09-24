import { motion, useAnimation, useInView } from 'framer-motion';
import React, { useRef, useEffect, FC, CSSProperties } from 'react';
import scrollReveal from 'scrollreveal';

interface Props {
  style?: CSSProperties;
  children: React.ReactNode;
  revealConfig?: object;
}

const ScrollRevealWrapper: FC<Props> = ({ children, style, revealConfig }) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation()
  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
      slideControls.start('visible')
    }
  }, [isInView]);

  return (
    <main ref={ref} className='relative overflow-hidden' style={style} data-testid='section'>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial='hidden'
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: '100%' },
        }}
        initial='hidden'
        animate={slideControls}
        transition={{ duration: 0.5, ease: 'easeIn' }}
        style={{
          position: 'absolute',
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: 'rgba(240, 100, 38, 0.8)',
          backdropFilter: 'blur(10px)',
          zIndex: 40
        }}
      ></motion.div>
    </main>
  );
};

export default ScrollRevealWrapper;

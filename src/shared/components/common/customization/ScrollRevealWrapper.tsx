import { motion, useAnimation, useInView } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import React, { useRef, useEffect, FC, CSSProperties } from 'react';
interface Props {
  style?: CSSProperties;
  children: React.ReactNode;
  sectionCode?: string;
}

const ScrollRevealWrapper: FC<Props> = ({ children, style, sectionCode }) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
      slideControls.start('visible');
    }
  }, [isInView]);

  return (
    <section ref={ref} className='relative overflow-hidden' style={style} data-testid='sectionParent'>
      <ScrollLink to={sectionCode || ''} spy={true} smooth={true} duration={500}>
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
      </ScrollLink>
    </section>
  );
};

export default ScrollRevealWrapper;

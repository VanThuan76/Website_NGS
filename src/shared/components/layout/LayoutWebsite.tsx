import { motion, useScroll } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import { Toaster } from '../common/ui/toaster';
import Footer from './footer';
import Header from './header';
interface Props {
  children: React.ReactNode;
}
const LayoutWebsite = ({ children }: Props) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <React.Fragment>
      <Header />
      <main
        ref={ref}
        className='mx-auto flex min-h-screen max-w-[1980px] flex-col items-center justify-center overflow-x-hidden dark:bg-[#141523]'
      >
        {children}
      </main>
      <motion.div className='progress-bar' style={{ scaleX: scrollYProgress }} />
      <Toaster />
      <Footer />
    </React.Fragment>
  );
};

export default LayoutWebsite;

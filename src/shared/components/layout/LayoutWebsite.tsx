import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import { Toaster } from '../common/ui/toaster';
import Footer from './footer';
import Header from './header';
interface Props {
  children: React.ReactNode;
}
const LayoutWebsite = ({ children }: Props) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll();
  return (
    <>
      <Header />
      <main ref={ref} className='overflow-x-hidden max-w-[1980px] mx-auto min-h-screen dark:bg-[#141523] flex flex-col justify-center items-center'>
        {children}
      </main>
      <motion.div className='progress-bar' style={{ scaleX: scrollYProgress }} />
      <Toaster />
      <Footer />
    </>
  );
};

export default LayoutWebsite;

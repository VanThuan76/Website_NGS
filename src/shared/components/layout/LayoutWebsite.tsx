import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import Footer from './footer';
import Header from './header';
import InitBasicAnimation from '@/components/common/InitBasicAnimation';
import { sectionHomeData } from '@/mocks/banner';
import { Link } from 'react-scroll';
interface Props {
  children: React.ReactNode;
}
const LayoutWebsite = ({ children }: Props) => {
  const [currentSection, setCurrentSection] = useState<string>('Home');

  return (
    <>
      <Header />
      <main className='min-h-screen dark:bg-[#141523]'>
        {children}
        <InitBasicAnimation className='fixed bottom-10 right-10 z-40'>
          <div className='flex items-center justify-between gap-5'>
            <ul className='hidden md:flex flex-col items-end justify-between gap-5'>
              {sectionHomeData.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial='inactive'
                  className={`pl-5 pb-3 text-slate-500 ${
                    currentSection === item ? 'text-white border-b-2 dark:border-slate-300' : ''
                  } cursor-pointer font-medium`}
                >
                  <Link
                    to={item}
                    smooth={true}
                    duration={1000}
                    spy={true}
                    offset={-100}
                    onSetActive={() => setCurrentSection(item)}
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </InitBasicAnimation>
      </main>
      <Footer />
    </>
  );
};

export default LayoutWebsite;

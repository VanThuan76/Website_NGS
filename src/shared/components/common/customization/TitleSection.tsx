import { motion } from 'framer-motion';
import React from 'react';

interface Props {
  title: string;
  name: string;
  description: string;
  findMore: boolean;
  className?: string;
}
const TitleSection = (data: Partial<Props>) => {
  const title = data.title?.split(' ');
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };
  return (
    <div className='mx-auto my-auto mt-5 flex w-full max-w-[1440px] flex-col gap-4'>
      {data.title && title && (
        <p className={`text-center text-sm !text-[#FC5E03] md:text-2xl ${data.className}`}>
          <motion.div variants={container} transition={{ duration: 0.7, delay: 5 }} initial='hidden' animate='visible'>
            {title.map((word, idx) => (
              <motion.span variants={child} className='mr-[5px] md:mr-[10px]' key={idx}>
                {word}
              </motion.span>
            ))}
          </motion.div>
        </p>
      )}
      <div className={`grid w-full grid-cols-12 gap-[80px] ${data.className}`}>
        <div className='col-span-7 flex w-full flex-col'>
          <motion.div variants={container} className='flex flex-col' initial='hidden' animate='visible'>
            {data.name?.split('//').map((word, idx) => (
              <motion.span
                variants={child}
                className={`mr-[10px] flex flex-col text-2xl font-medium leading-8 text-[#29130F] md:text-[40px] md:leading-[48px] ${data.className}`}
                style={{ letterSpacing: -1 }}
                key={idx}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        </div>
        {data.findMore ? (
          <div className={`col-span-5 mb-10 flex w-full flex-col items-start justify-start ${data.className}`}>
            <motion.div variants={container} className='flex flex-col gap-2' initial='hidden' animate='visible'>
              {data.description?.split('//').map((word, idx) => (
                <motion.span
                  variants={child}
                  className='col-span-1 text-sm font-medium not-italic text-slate-500 dark:text-[#C2C0BF] md:text-base'
                  key={idx}
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>
          </div>
        ) : (
          <React.Fragment></React.Fragment>
        )}
      </div>
    </div>
  );
};

export default TitleSection;

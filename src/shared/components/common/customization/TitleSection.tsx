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
    <div className='max-w-[1440px] w-full mx-auto my-auto flex flex-col gap-4 mt-5'>
      <p className={`text-sm md:text-2xl !text-orange-500 ${data.className}`}>
        <motion.div variants={container} transition={{ duration: 0.7, delay: 5 }} initial='hidden' animate='visible'>
          {title && title.map((word, idx) => (
            <motion.span variants={child} className='mr-[10px]' key={idx}>
              {word}
            </motion.span>
          ))}
        </motion.div>
      </p>
      <div className={`w-full gap-[40px] ${data.className}`}>
        <div className='w-full flex flex-col'>
          <motion.div variants={container} className='flex flex-col gap-2' initial='hidden' animate='visible'>
            {data.name?.split('//').map((word, idx) => (
              <motion.span
                variants={child}
                className={`mr-[10px] w-full flex flex-col text-2xl md:text-4xl font-medium ${data.className}`}
                key={idx}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        </div>
        {data.findMore ? (
          <div className={`w-[550px] flex flex-col justify-start items-start mb-10 ${data.className}`}>
            <motion.div variants={container} className='flex flex-col gap-2' initial='hidden' animate='visible'>
              {data.description?.split('//').map((word, idx) => (
                <motion.span
                  variants={child}
                  className='col-span-1 text-sm md:text-base font-medium not-italic text-[#757575] dark:text-[#C2C0BF]'
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

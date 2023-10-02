import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useTheme } from 'next-themes';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import TitleSection from '@/components/common/customization/TitleSection';
import BackgroundDark from '@/components/icon/HO/solution/BackgroundDark';
import BackgroundLight from '@/components/icon/HO/solution/BackgroundLight';
import HOSolutionCard from './HOSolutionCard';

type Props = {
  title: string
  data: Partial<IBaseSectionComponent>;
  className?: string;
};

const HomeSolutionSection = ({ title, data, className }: Props) => {
  const { theme } = useTheme();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });
  const sectionControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      sectionControls.start('visible');
    }
  }, [isInView]);
  const animationVariants = {
    hidden: { opacity: 0, display: 'none' },
    visible: { opacity: 1, display: 'block' },
  };
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;
  return (
    <section ref={ref} id={data.section.code} className={`pb-4 md:pb-8 lg:pb-10 xl:pb-24 px-4 md:px-24 ${className}`}>
      <TitleSection
        title={title}
        name={data.section.name as string}
        description={data.section.description as string}
        findMore={true}
        className='w-full grid-cols-7 col-span-7 md:grid-cols-12 md:col-span-5 !gap-8 !text-left'
      />
      <div className='max-w-[1440px] mt-10 md:mt-20 mx-auto grid grid-cols-2 md:grid-cols-4 bg-transparent overflow-hidden gap-2'>
        {data &&
          data.components.map((item, idx) => (
            <motion.div 
              className="max-w-[310px] min-h-[300px] lg:min-h-[345px] border-card-solution-home pr-2" 
              key={idx}
              variants={{
                hidden: {opacity:0, translateX: -50},
                visible: {opacity: 1, translateX: 0}
              }}
              initial='hidden'
              animate={sectionControls}
              transition={{duration: 0.7, delay: idx * 0.7}}
            >
              <div className='relative max-w-[310px] min-h-[300px] lg:min-h-[345px] rounded-lg overflow-hidden'>
                <motion.div
                 className='absolute top-0 left-0 w-full min-h-[300px] lg:min-h-[345px]'
                 variants={animationVariants}
                 initial='hidden'
                 animate='visible'
                 exit='hidden'
                 transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                  {theme === 'dark' ? <BackgroundDark /> : <BackgroundLight />}
                </motion.div>
                <HOSolutionCard
                  id={item.id}
                  title={item.title || ''}
                  description={item.description || ''}
                  image={item.image}
                  url={item.slug}
                  className={'absolute top-0 left-0 w-full h-full'}
                />
              </div>
            </motion.div>
          ))}
      </div>
    </section>
  );
};

export default HomeSolutionSection;

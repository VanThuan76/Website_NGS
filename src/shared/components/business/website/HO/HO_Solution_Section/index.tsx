import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useTheme } from 'next-themes';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import TitleSection from '@/components/common/customization/TitleSection';
import BackgroundDark from '@/components/icon/HO/solution/BackgroundDark';
import BackgroundLight from '@/components/icon/HO/solution/BackgroundLight';
import HOSolutionCard from './HOSolutionCard';
import useBreakPoint from '@/hooks/useBreakPoint';

type Props = {
  title: string;
  data: Partial<IBaseSectionComponent>;
  className?: string;
};

const HomeSolutionSection = ({ title, data, className }: Props) => {
  const { theme } = useTheme();
  const currentBreakPoint = useBreakPoint();
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
    <section
      ref={ref}
      id={data.section.code}
      className={`max-w-[1440px] px-4 pb-4 md:px-24 md:pb-8 lg:pb-10 xl:pb-24 ${className}`}
    >
      <TitleSection
        title={title}
        name={data.section.name as string}
        description={data.section.description as string}
        findMore={true}
        className='col-span-7 w-full grid-cols-7 !gap-8 !text-left md:col-span-5 md:grid-cols-12'
      />
      <div className='mx-auto mt-10 grid w-full grid-cols-1 items-center justify-center gap-2 overflow-hidden bg-transparent md:mt-20 md:grid-cols-4'>
        {data &&
          data.components.map((item, idx) => (
            <motion.div
              className={`mx-auto w-full ${
                currentBreakPoint !== 'sm'
                  ? 'border-card-solution-home-right pr-2'
                  : 'border-card-solution-home-bottom pb-2'
              }`}
              key={idx}
              variants={{
                hidden: { opacity: 0, translateX: -50 },
                visible: { opacity: 1, translateX: 0 },
              }}
              initial='hidden'
              animate={sectionControls}
              transition={{ duration: 0.7, delay: idx * 0.7 }}
            >
              <div className='relative mx-auto min-h-[300px] max-w-[310px] overflow-hidden rounded-lg lg:min-h-[345px]'>
                <motion.div
                  className='absolute left-0 top-0 min-h-[300px] w-full lg:min-h-[345px]'
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
                  className={'absolute left-0 top-0 h-full w-full'}
                />
              </div>
            </motion.div>
          ))}
      </div>
    </section>
  );
};

export default HomeSolutionSection;

import BtnCommon from '@/components/common/customization/BtnCommon';
import TitleSection from '@/components/common/customization/TitleSection';
import BackgroundCoreValueLight from '@/components/icon/ES/BackgroundCoreValueLight';
import SectionCoreValue from '@/components/icon/ES/SectionCoreValue';
import SectionCoreValue3 from '@/components/icon/ES/SectionCoreValue3';
import SectionCoreValue2 from '@/components/icon/ES/SectionCoveValue2';
import BackgroundDark from '@/components/icon/HO/security/BackgroundDark';
import useBreakPoint from '@/hooks/useBreakPoint';
import useInviewScroll from '@/hooks/useInviewScroll';
import UseLinkRedirect from '@/utils/functions/UseLinkRedirect';
import { motion, useAnimation } from 'framer-motion';
import { useTheme } from 'next-themes';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import ESCoreValueResponsive from './ESCoreValueResponsive';

type Props = {
  title: string;
  data: Partial<IBaseSectionComponent>;
  sectionCodeLink?: string;
  className?: string;
};
const ESCoreValueSection = ({ title, data, sectionCodeLink, className }: Props) => {
  const { theme } = useTheme();
  const currentBreakPoint = useBreakPoint();
  const [sectionRef, inView] = useInView({
    threshold: 0.5,
  });
  const controls = useAnimation();
  const currentIndex = useInviewScroll({ amountComponent: 3, inView });
  useEffect(() => {
    controls.start({
      position: inView ? 'fixed' : 'relative',
      transition: { type: 'tween', duration: 0.5 },
      top: inView ? -0 : 0,
      zIndex: inView ? 50 : 0,
    });
  }, [controls, currentIndex, inView]);
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;
  return (
    <section
      ref={currentBreakPoint !== 'sm' ? sectionRef : null}
      id='ESCOREVALUE'
      className={`mt-10 flex h-auto flex-col items-center justify-center px-4 pb-4 md:h-[1105px] md:px-24 md:pb-8 lg:pb-16 xl:pb-24 2xl:mt-20 ${className}`}
    >
      <motion.div
        animate={controls}
        className='mx-auto my-auto hidden h-full w-full grid-cols-1 items-start justify-start bg-white md:grid'
      >
        <TitleSection
          title={title}
          name={data.section.name as string}
          description={data.section.description as string}
          findMore={true}
          className='col-span-7 w-full grid-cols-7 !gap-0 text-center'
        />
        {currentIndex === 0 ? (
          <SectionCoreValue className='hidden h-full w-full object-cover md:block' />
        ) : currentIndex === 1 ? (
          <SectionCoreValue2 className='hidden h-full w-full object-cover md:block' />
        ) : (
          <SectionCoreValue3 className='hidden h-full w-full object-cover md:block' />
        )}
        <div className={`${inView ? 'fixed -bottom-2 right-1/2 block translate-x-1/2' : 'hidden'}`}>
          <UseLinkRedirect sectionCode={sectionCodeLink || 'ConnectUs'}>
            <BtnCommon title='Khám phá dịch vụ của chúng tôi' cls='text-orange-500 p-4 rounded-sm' hover={false} />
          </UseLinkRedirect>
        </div>
        <motion.div
          className='absolute -top-24 left-0 -z-10 h-full w-full'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {theme === 'dark' ? (
            <BackgroundDark className='hidden w-full object-center md:block' />
          ) : (
            <BackgroundCoreValueLight className='hidden w-full scale-150 object-center md:block md:scale-100' />
          )}
        </motion.div>
      </motion.div>
      <ESCoreValueResponsive data={data.components} />
    </section>
  );
};

export default ESCoreValueSection;

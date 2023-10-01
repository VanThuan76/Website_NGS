import BtnCommon from '@/components/common/customization/BtnCommon';
import TitleSection from '@/components/common/customization/TitleSection';
import BackgroundCoreValueLight from '@/components/icon/ES/BackgroundCoreValueLight';
import SectionCoreValue from '@/components/icon/ES/SectionCoreValue';
import SectionCoreValue3 from '@/components/icon/ES/SectionCoreValue3';
import SectionCoreValue2 from '@/components/icon/ES/SectionCoveValue2';
import BackgroundDark from '@/components/icon/HO/security/BackgroundDark';
import useInviewScroll from '@/hooks/useInviewScroll';
import UseLinkRedirect from '@/utils/functions/UseLinkRedirect';
import { motion, useAnimation } from 'framer-motion';
import { useTheme } from 'next-themes';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';

type Props = {
  title: string;
  data: Partial<IBaseSectionComponent>;
  sectionCodeLink?: string;
  className?: string;
};
const ESCoreValueSection = ({ title, data, sectionCodeLink, className }: Props) => {
  const { theme } = useTheme();
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
      ref={sectionRef}
      id='ESCOREVALUE'
      className={`mt-10 2xl:mt-20 h-[1105px] flex flex-col justify-center items-center pb-4 md:pb-8 lg:pb-16 xl:pb-24 px-4 md:px-24 ${className}`}
    >
      <motion.div
        animate={controls}
        className='w-full h-full mx-auto my-auto grid grid-cols-1 justify-start items-start bg-white'
      >
        <TitleSection
          title={title}
          name={data.section.name as string}
          description={data.section.description as string}
          findMore={true}
          className='w-full grid-cols-7 col-span-7 text-center !gap-0'
        />
        {currentIndex === 0 ? (
          <SectionCoreValue className='w-full h-full object-cover' />
        ) : currentIndex === 1 ? (
          <SectionCoreValue2 className='w-full h-full object-cover' />
        ) : (
          <SectionCoreValue3 className='w-full h-full object-cover' />
        )}
        <div className={`${inView ? 'fixed -bottom-2 right-1/2 translate-x-1/2 block' : 'hidden'}`}>
        <UseLinkRedirect sectionCode={sectionCodeLink || 'PG003.1SE00008'}>
          <BtnCommon title='Discover our service' cls='text-orange-500 p-4 rounded-sm' hover={false} />
        </UseLinkRedirect>
        </div>
        <motion.div
          className='absolute -top-24 left-0 w-full h-full -z-10'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {theme === 'dark' ? (
            <BackgroundDark className='w-full object-center' />
          ) : (
            <BackgroundCoreValueLight className='w-full scale-150 md:scale-100 object-center' />
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ESCoreValueSection;

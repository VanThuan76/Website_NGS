import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import React from 'react';
import Border from '@/components/icon/HO/banner/Border';
import { PreImage } from '@/components/common/customization/PreImage';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import TitleSection from '@/components/common/customization/TitleSection';

type Props = {
  data: Partial<IBaseSectionComponent>;
  className?: string;
};
const EmpowerSuccessBannerSection = ({ data }: Props) => {
  const { theme } = useTheme();
  const colorBorder = theme === 'dark' ? '#141523' : '#fff';
  if(!data || !data.components || !data.section) return <React.Fragment></React.Fragment>
  return (
    <section id={data.section.code} className='block py-8'>
      <TitleSection
        title=''
        name={data && (data.section?.name as string)}
        description={data.section?.description as string}
        findMore={true}
        className='w-full flex flex-col justify-start items-start'
      />
      <div className='snap-x-mandatory scrollbar-none relative max-h-[700px] flex overflow-hidden dark:text-white'>
        <div className='relative w-full flex justify-between items-center mx-auto'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={data ? data.section?.code : 'empty'}
              initial={{ x: -10, opacity: 0.8 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, damping: 10, stiffness: 50 }}
              className='relative w-full flex-shrink-0 snap-start'
            >
              <Border color={colorBorder} className='absolute top-12 z-30' />
              <PreImage
                src={data && (data.section?.image as string)}
                height={1080}
                width={1980}
                layer={true}
                alt={'Banner'}
                className='rounded-lg'
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default EmpowerSuccessBannerSection;

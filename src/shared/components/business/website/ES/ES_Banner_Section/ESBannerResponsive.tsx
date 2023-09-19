import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { PreImage } from '@/components/common/customization/PreImage';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import TitleSection from '@/components/common/customization/TitleSection';
import Border from '@/components/icon/HO/banner/Border';
type Props = {
  data: Partial<IBaseSectionComponent>;
};
const ESBannerResponsive = ({ data }: Props) => {
  const { theme } = useTheme();
  const colorBorder = theme === 'dark' ? '#141523' : '#fff';
  return (
    <div className='block md:hidden'>
      <TitleSection
        title=''
        name={data && (data.section?.name as string)}
        description={data.section?.description as string}
        findMore={true}
        className='w-full flex flex-col justify-start items-start'
      />
      <div className='flex snap-x-mandatory scrollbar-none relative max-h-[700px] overflow-hidden dark:text-white'>
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
    </div>
  );
};

export default ESBannerResponsive;

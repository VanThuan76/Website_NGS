import React from 'react';
import { motion } from 'framer-motion';
import { PreImage } from '@/components/common/customization/PreImage';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import ESBannerResponsive from './ESBannerResponsive';
import UseLinkRedirect from '@/utils/functions/UseLinkRedirect';
import MouseScroll from '@/components/icon/HO/banner/MouseScroll';

type Props = {
  data: Partial<IBaseSectionComponent>;
  className?: string;
};
const EmpowerSuccessBannerSection = ({ data }: Props) => {
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;
  return (
    <section id={data.section.code} className='block'>
      <div className='snap-x-mandatory scrollbar-none light:text-white relative flex max-h-[600px] overflow-hidden md:block'>
        <div className='relative mx-auto flex w-full items-center justify-between'>
          <div className='absolute left-1/3 top-1/3 z-30 flex w-[50%] -translate-x-1/2 -translate-y-1/2 transform flex-col items-start justify-start gap-3 text-white'>
            <div className='flex flex-col items-start justify-start gap-3'>
              <h1 className='text-2xl font-semibold md:text-4xl'>{data.section.name}</h1>
              <div
                style={{ lineHeight: '120%' }}
                className='w-full text-2xl font-medium uppercase text-white lg:text-5xl'
              >
                {data.section.description}
              </div>
            </div>
          </div>
          <UseLinkRedirect sectionCode='PG001SE00002'>
            <motion.div
              animate={{ y: 10 }}
              transition={{ duration: 2, repeat: Infinity, delay: 1, repeatDelay: 1 }}
              className='absolute bottom-10 right-10 z-30'
            >
              <MouseScroll className='hidden lg:block' />
            </motion.div>
          </UseLinkRedirect>
          <div className='relative w-full flex-shrink-0 snap-start'>
            <PreImage
              src={data.section.image}
              height={760}
              width={1980}
              layer={true}
              alt={data.section.name}
              className='w-full object-cover'
            />
          </div>
        </div>
        <ESBannerResponsive data={data} />
      </div>
    </section>
  );
};

export default EmpowerSuccessBannerSection;

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTheme } from 'next-themes';
import HOCaseStudyItem from './HOCaseStudyItem';
import TitleSection from '@/components/common/customization/TitleSection';
import IconLineDirection from '@/components/icon/IconLineDirection';
import { PreImage } from '@/components/common/customization/PreImage';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import React from 'react';
import UseLinkRouter from '@/utils/functions/UseLinkRouter';
import { URLS_SYSTEM } from '@/utils/constants';

type Props = {
  data: Partial<IBaseSectionComponent>;
  className?: string;
};
const HomeCaseStudySection = ({ data, className }: Props) => {
  const { theme } = useTheme();
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;

  return (
    <section id={data.section.code} className={`px-4 pb-4 md:px-24 md:pb-8 lg:pb-16 xl:pb-24 ${className}`}>
      <div className='mx-auto my-auto w-full max-w-[1440px]'>
        <TitleSection
          title={data.section.name}
          description={data.section.description}
          findMore={false}
          className='flex w-full flex-col items-start justify-between gap-3 lg:flex-row xl:flex-row'
        />
        <div className='mt-10 flex w-full flex-col items-start justify-start gap-6 text-white md:flex-row'>
          <div className='relative flex w-full flex-col items-center justify-between rounded-lg md:w-1/2'>
            <PreImage
              src={data.components[0].image}
              height={620}
              width={1980}
              layer={false}
              alt={'CaseStudy'}
              className='w-full rounded-lg object-cover'
            />
            <div className='absolute bottom-10 left-0 flex w-full flex-col items-start justify-between px-5'>
              <p className='text-4xl'>{data.components[0].title}</p>
              <UseLinkRouter url={URLS_SYSTEM.NOTFOUND}>
                <div className='mt-2 flex items-center justify-between gap-3 md:mt-4 lg:mt-8'>
                  <motion.p className='text-sm'>Tìm hiểu thêm</motion.p>
                  <IconLineDirection color={theme !== 'dark' ? '#FC5E03' : '#fff'} />
                </div>
              </UseLinkRouter>
            </div>
          </div>
          <div className='grid w-full grid-rows-2 gap-5 md:w-1/2'>
            {data.components.slice(0, 2).map((item, idx) => (
              <HOCaseStudyItem key={idx} data={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCaseStudySection;

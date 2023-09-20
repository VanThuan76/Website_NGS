import IconLineDirection from '@/components/icon/IconLineDirection';
import UseLinkRouter from '@/utils/functions/UseLinkRouter';
import { PreImage } from '@/components/common/customization/PreImage';
import { ICaseStudyData } from '@/mocks/website/HO/caseStudy';
import { URLS_SYSTEM } from '@/utils/constants';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useState } from 'react';
interface Props {
  data: ICaseStudyData;
}
const HOCaseStudyItem = ({ data }: Props) => {
  const { theme } = useTheme();
  return (
    <div className='relative w-full flex flex-col justify-between items-center rounded-lg'>
      <div className='w-full'>
        <PreImage
          src={'/images/background_3.png'}
          height={300}
          width={1980}
          layer={false}
          alt={'CaseStudy'}
          className='w-full rounded-lg object-cover'
        />
      </div>
      <div className='absolute bottom-5 left-0 px-5 w-full flex flex-col justify-between items-start'>
        <p className='text-xl'>{data.title}</p>
        <UseLinkRouter url={URLS_SYSTEM.NOTFOUND}>
          <div className='flex justify-between items-center gap-3 mt-2 md:mt-4 lg:mt-8'>
            <motion.p className='text-sm'>Tìm hiểu thêm</motion.p>
            <IconLineDirection color={theme !== 'dark' ? '#FC5E03' : '#fff'} />
          </div>
        </UseLinkRouter>
      </div>
    </div>
  );
};

export default HOCaseStudyItem;

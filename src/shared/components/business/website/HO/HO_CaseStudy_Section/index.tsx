import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTheme } from 'next-themes';
import HOCaseStudyItem from './HOCaseStudyItem';
import TitleSection from '@/components/common/customization/TitleSection';
import IconLineDirection from '@/components/icon/IconLineDirection';
import { PreImage } from '@/components/common/customization/PreImage';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import React from 'react';

type Props = {
  data: Partial<IBaseSectionComponent>;
  className?: string;
};
const HomeCaseStudySection = ({ data, className }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;

  return (
    <section id='CaseStudy' className={`pb-4 md:pb-8 lg:pb-16 xl:pb-24 px-4 md:px-24 ${className}`}>
      <div className='max-w-[1440px] w-full mx-auto my-auto'>
        <TitleSection
          title='Casestudy'
          description='Tham khảo các casestudy thành công và cách phát triển doanh nghiệp của bạn.'
          findMore={false}
          className='w-full flex flex-col lg:flex-row xl:flex-row justify-between items-start gap-3'
        />
        <div className='mt-10 w-full flex flex-col md:flex-row justify-start items-start gap-6'>
          <div className='relative w-full md:w-1/2 flex flex-col justify-between items-center rounded-lg'>
            <PreImage
              src={data.components[0].image}
              height={620}
              width={1980}
              layer={false}
              alt={'CaseStudy'}
              className='w-full rounded-lg object-cover'
            />
            <div className='absolute bottom-10 left-0 px-5 w-full flex flex-col justify-between items-start'>
              <p className='text-xl'>{data.components[0].title}</p>
              <div className='flex justify-between items-center gap-3 mt-2 md:mt-4 lg:mt-8'>
                <motion.p className={`text-sm ${isHovered ? 'underline' : 'none'}`}>Tìm hiểu thêm</motion.p>
                <IconLineDirection color={theme !== 'dark' ? '#000' : '#fff'} />
              </div>
            </div>
          </div>
          <div className='w-full md:w-1/2 grid grid-rows-2 gap-5'>
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

import { PreImage } from '@/components/common/PreImage';
import TitleSection from '@/components/common/TitleSection';
import { caseStudyData } from '@/mocks/website/caseStudy';
import CaseStudyItem from './CaseStudyItem';
import { motion } from 'framer-motion';
import { useState } from 'react';
import IconLineDirection from '@/components/icon/IconLineDirection';
import { useTheme } from 'next-themes';

const CaseStudy = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();

  return (
    <section id='CaseStudy' className='pb-4 md:pb-8 lg:pb-16 xl:pb-24 px-4 md:px-24 lg:px-32 xl:px-52 2xl:px-96'>
      <div className='w-full my-10'>
        <TitleSection
          title='Casestudy'
          description='Tham khảo các casestudy thành công và cách phát triển doanh nghiệp của bạn.'
          findMore={false}
          className='w-full flex flex-col lg:flex-row xl:flex-row justify-between items-start gap-3'
        />
        <div className='mt-10 w-full flex flex-col md:flex-row justify-start items-start gap-6'>
          <div className='relative w-full md:w-1/2 flex flex-col justify-between items-center rounded-lg shadow-lg'>
            <PreImage
              src={'https://khoinguonsangtao.vn/wp-content/uploads/2022/11/hinh-nen-may-bay-vietnam-airline.jpg'}
              height={620}
              width={600}
              layer={false}
              alt={'CaseStudy'}
              className='w-full rounded-lg'
            />
            <div className='absolute bottom-10 left-0 px-5 w-full flex flex-col justify-between items-start'>
              <p className='text-xl'>{caseStudyData[0].title}</p>
              <div className='flex justify-between items-center gap-3 mt-2 md:mt-4 lg:mt-8'>
                <motion.p className={`text-sm ${isHovered ? 'underline' : 'none'}`}>Tìm hiểu thêm</motion.p>
                <IconLineDirection color={theme !== 'dark' ? '#000' : '#fff'} />
              </div>
            </div>
          </div>
          <div className='w-full md:w-1/2 grid grid-rows-2 gap-5'>
            {caseStudyData.slice(0, 2).map((item, idx) => (
              <CaseStudyItem key={idx} data={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;

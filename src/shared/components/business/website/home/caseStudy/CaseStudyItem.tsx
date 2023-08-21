import { PreImage } from '@/components/common/PreImage';
import IconLineDirection from '@/components/icon/IconLineDirection';
import { ICaseStudyData } from '@/mocks/website/caseStudy';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useState } from 'react';
interface Props {
  data: ICaseStudyData;
}
const CaseStudyItem = ({ data }: Props) => {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className='relative w-full flex flex-col justify-between items-center rounded-lg shadow-lg'>
      <div className='w-full'>
        <PreImage
          src={'https://khoinguonsangtao.vn/wp-content/uploads/2022/11/hinh-nen-may-bay-vietnam-airline.jpg'}
          height={300}
          width={600}
          layer={false}
          alt={'CaseStudy'}
          className='w-full rounded-lg object-cover'
        />
      </div>
      <div className='absolute bottom-5 left-0 px-5 w-full flex flex-col justify-between items-start'>
        <p className='text-xl'>{data.title}</p>
        <div className='flex justify-between items-center gap-3 mt-2 md:mt-4 lg:mt-8'>
          <motion.p className={`text-sm ${isHovered ? 'underline' : 'none'}`}>Tìm hiểu thêm</motion.p>
          <IconLineDirection color={theme !== 'dark' ? '#000' : '#fff'} />
        </div>
      </div>
    </div>
  );
};

export default CaseStudyItem;

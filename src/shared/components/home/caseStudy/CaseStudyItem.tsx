import BtnCommon from '@/components/common/BtnCommon';
import { PreImage } from '@/components/common/PreImage';
import { ICaseStudyData } from '@/mocks/caseStudy';
interface Props {
  data: ICaseStudyData;
}
const CaseStudyItem = ({ data }: Props) => {
  return (
    <div className='relative w-full flex flex-col justify-between items-center pb-5 rounded-lg'>
      <div className='w-full'>
        <PreImage
          src={'https://khoinguonsangtao.vn/wp-content/uploads/2022/11/hinh-nen-may-bay-vietnam-airline.jpg'}
          height={300}
          width={600}
          layer={true}
          alt={'News'}
          className='w-full rounded-lg'
        />
      </div>
      <div className='absolute bottom-5 left-0 px-5 w-full flex flex-col justify-between items-start'>
        <p className='text-xl'>{data.title}</p>
        <BtnCommon cls='bg-transparent p-0 m-0' title='Tìm hiểu thêm' />
      </div>
    </div>
  );
};

export default CaseStudyItem;

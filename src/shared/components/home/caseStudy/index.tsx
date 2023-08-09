import BtnCommon from '@/components/common/BtnCommon';
import { PreImage } from '@/components/common/PreImage';
import TitleSection from '@/components/common/TitleSection';
import { caseStudyData } from '@/mocks/caseStudy';
import CaseStudyItem from './CaseStudyItem';

const CaseStudy = () => {
  return (
    <section className='px-32 py-24'>
      <div className='w-full my-10'>
        <TitleSection
          title='Casestudy'
          description='Tham khảo các casestudy thành công và cách phát triển doanh nghiệp của bạn.'
          findMore={false}
        />
        <div className='mt-10 w-full flex justify-start items-start gap-6'>
          <div className='relative w-1/2 flex flex-col justify-between items-center pb-5 rounded-lg'>
            <PreImage
              src={'https://khoinguonsangtao.vn/wp-content/uploads/2022/11/hinh-nen-may-bay-vietnam-airline.jpg'}
              height={650}
              width={600}
              layer={true}
              alt={'News'}
              className='w-full rounded-lg'
            />
            <div className='absolute bottom-10 left-0 px-5 w-full flex flex-col justify-between items-start'>
              <p className='text-xl'>{caseStudyData[0].title}</p>
              <BtnCommon cls='bg-transparent p-0 m-0' title='Tìm hiểu thêm' />
            </div>
          </div>
          <div className='w-1/2 grid grid-rows-2 gap-5'>
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

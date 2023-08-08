import BtnCommon from '@/components/common/BtnCommon';
import { newsData } from 'src/shared/mock/news';
import { PreImage } from '../../common/PreImage';
import TitleSection from '../../common/TitleSection';
import NewsItem from './NewsItem';

const News = () => {
  return (
    <section className='px-32'>
      <div className='w-full my-10'>
        <TitleSection
          title='Tin tức'
          description='Gặp gỡ chuyên gia từ NGS và khám phá cách phát triển doanh nghiệp của bạn.'
          findMore={false}
        />
        <div className='mt-10 w-full flex justify-start items-start gap-6'>
          <div className='bg-[#1B1D35] flex flex-col justify-between items-center pb-5 rounded-lg'>
            <PreImage
              src={'https://khoinguonsangtao.vn/wp-content/uploads/2022/11/hinh-nen-may-bay-vietnam-airline.jpg'}
              height={350}
              width={600}
              layer={false}
              alt={'News'}
              className='w-full relative rounded-lg'
            />
            <div className='mt-10 px-5 w-full flex flex-col justify-between items-start gap-3'>
              <div className='w-full flex justify-between items-center'>
                <p className='text-orange-500'>{newsData[0].category}</p>
                <p className='text-sm text-slate-500'>{newsData[0].createAt}</p>
              </div>
              <h2 className='text-2xl'>{newsData[0].title}</h2>
              {/* <p className='text-sm text-slatse-500'>{newsData[0].description}</p> */}
              <p className='text-sm text-slate-500'>{newsData[0].author}</p>
              <BtnCommon cls='bg-transparent p-0 m-0' title='Tìm hiểu thêm' />
            </div>
          </div>
          <div className='w-1/2 grid grid-rows-2 gap-5'>
            {newsData.slice(0, 2).map((item, idx) => (
              <NewsItem key={idx} data={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;

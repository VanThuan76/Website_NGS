import BtnCommon from '@/components/common/BtnCommon';
import { PreImage } from '@/components/common/PreImage';
import TitleSection from '@/components/common/TitleSection';
import { newsData } from '@/mocks/website/news';
import NewsItem from './NewsItem';

const News = () => {
  return (
    <section
      id='News'
      className='w-full flex flex-col justify-around items-center mx-auto pb-4 md:pb-8 lg:pb-16 xl:pb-24 px-4 md:px-24 lg:px-32 xl:px-52 2xl:px-96'
    >
        <TitleSection
          title='Tin tức'
          description='Gặp gỡ chuyên gia từ NGS và khám phá cách phát triển doanh nghiệp của bạn.'
          findMore={false}
          className='w-full md:w-[80%] flex justify-between items-center gap-3'
        />
        <div className='mt-10 w-full grid grid-cols-1 lg:grid-cols-2 justify-start items-start gap-6'>
          <div className='dark:bg-[#1B1D35] flex flex-col justify-between items-center pb-5 rounded-lg shadow-lg'>
            <PreImage
              src={'https://khoinguonsangtao.vn/wp-content/uploads/2022/11/hinh-nen-may-bay-vietnam-airline.jpg'}
              height={300}
              width={600}
              layer={false}
              alt={'News'}
              className='w-full relative rounded-t-lg'
            />
            <div className='mt-10 px-5 w-full flex flex-col justify-between items-start gap-3'>
              <div className='w-full flex justify-between items-center'>
                <p className='text-orange-500'>{newsData[0].category}</p>
                <p className='text-sm text-slate-500'>{newsData[0].createAt}</p>
              </div>
              <h2 className='text-2xl'>{newsData[0].title}</h2>
              <p className='text-sm text-slatse-500'>{newsData[0].description}</p>
              <p className='w-full text-end text-sm text-slate-400'>{newsData[0].author}</p>
            </div>
          </div>
          <div className='w-full grid grid-rows-2 gap-5'>
            {newsData.slice(0, 2).map((item, idx) => (
              <NewsItem key={idx} data={item} />
            ))}
          </div>
        </div>
    </section>
  );
};

export default News;

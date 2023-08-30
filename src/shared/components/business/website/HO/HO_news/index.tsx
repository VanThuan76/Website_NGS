import HomeNewsItem from './HO_news_item';
import TitleSection from '@/components/common/customization/TitleSection';
import { PreImage } from '@/components/common/customization/PreImage';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';

type Props = {
  data: Partial<IBaseSectionComponent>;
  className?: string
}
const HomeNews = ({data, className}: Props) => {
  return (
    <section
      id='News'
      className={`w-full flex flex-col justify-around items-center mx-auto pb-4 md:pb-8 lg:pb-16 xl:pb-24 px-4 md:px-24 lg:px-32 xl:px-40 ${className}`}
    >
        <TitleSection
          title='Tin tức'
          name={data.section!.name as string}
        description={data.section!.description as string}
          findMore={false}
          className='w-full md:w-[80%] flex justify-between items-center gap-3'
        />
        <div className='max-w-[1440px] w-full mx-auto my-auto mt-10  grid grid-cols-1 lg:grid-cols-2 justify-start items-start gap-6'>
          <div className='dark:bg-[#1B1D35] flex flex-col justify-between items-center pb-5 rounded-lg shadow-lg'>
            <PreImage
              src={'https://khoinguonsangtao.vn/wp-content/uploads/2022/11/hinh-nen-may-bay-vietnam-airline.jpg'}
              height={275}
              width={1980}
              layer={false}
              alt={'News'}
              className='w-full relative rounded-t-lg object-cover'
            />
            <div className='mt-10 px-5 w-full flex flex-col justify-between items-start gap-3'>
              <div className='w-full flex justify-between items-center'>
                <p className='text-orange-500'>{data.components![0].category}</p>
                <p className='text-sm text-slate-500'>{data.components![0].createAt}</p>
              </div>
              <h2 className='text-2xl'>{data.components![0].title}</h2>
              <p className='text-sm text-slatse-500'>{data.components![0].description}</p>
              <p className='w-full text-end text-sm text-slate-400'>{data.components![0].author}</p>
            </div>
          </div>
          <div className='w-full grid grid-rows-2 gap-5'>
            {data.components!.slice(0, 2).map((item, idx) => (
              <HomeNewsItem key={idx} data={item} />
            ))}
          </div>
        </div>
    </section>
  );
};

export default HomeNews;

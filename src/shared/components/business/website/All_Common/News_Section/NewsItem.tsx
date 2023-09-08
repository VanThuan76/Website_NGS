import { PreImage } from '@/components/common/customization/PreImage';
import { IWebsiteNews } from 'src/shared/schemas/models/INews';
interface Props {
  data: Partial<IWebsiteNews>;
}
const NewsItem = ({ data }: Props) => {
  return (
    <div className='w-full dark:bg-[#1B1D35] grid grid-cols-3 lg:grid-cols-2 gap-0 lg:gap-3 rounded-lg shadow-lg'>
      <div className='w-full col-span-1'>
        <PreImage
          src={'https://khoinguonsangtao.vn/wp-content/uploads/2022/11/hinh-nen-may-bay-vietnam-airline.jpg'}
          height={270}
          width={300}
          layer={false}
          alt={'News'}
          className='w-full rounded-l-lg object-cover'
        />
      </div>
      <div className='w-full flex flex-col justify-start items-start gap-3 p-5 col-span-2 lg:col-span-1'>
        <div className='w-full flex flex-col justify-start items-start lg:flex-row lg:justify-between lg:items-center'>
          <p className='text-orange-500'>{data.categoryName}</p>
          <p className='hidden lg:block text-sm text-slate-500'>{data.id}</p> 
        </div>

        <h2 className='text-lg lg:text-xl'>{data.title}</h2>
        <p className='block lg:hidden text-sm text-slate-500'>{data.description}</p>
        <p className='text-sm text-slate-400'>{data.author}</p>
      </div>
    </div>
  );
};

export default NewsItem;

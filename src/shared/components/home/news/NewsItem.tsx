import BtnCommon from '@/components/common/BtnCommon';
import { PreImage } from '@/components/common/PreImage';
import { INews } from 'src/shared/mock/news';
interface Props {
  data: INews;
}
const NewsItem = ({ data }: Props) => {
  return (
    <div className='bg-[#1B1D35] grid grid-cols-2 gap-3'>
      <div className='w-full'>
        <PreImage
          src={'https://khoinguonsangtao.vn/wp-content/uploads/2022/11/hinh-nen-may-bay-vietnam-airline.jpg'}
          height={300}
          width={300}
          layer={false}
          alt={'News'}
          className='w-full rounded-lg'
        />
      </div>
      <div className='flex flex-col justify-between items-start gap-3 p-5'>
        <div className='w-full flex justify-between items-center'>
          <p className='text-orange-500'>{data.category}</p>
          <p className='text-sm text-slate-500'>{data.createAt}</p>
        </div>
        <h2 className='text-2xl'>{data.title}</h2>
        <p className='text-sm text-slate-500'>{data.author}</p>
        <BtnCommon cls='bg-transparent p-0 m-0' title='Tìm hiểu thêm' />
      </div>
    </div>
  );
};

export default NewsItem;

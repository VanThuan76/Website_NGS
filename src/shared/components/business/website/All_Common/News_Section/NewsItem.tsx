import BtnCommon from '@/components/common/customization/BtnCommon';
import { PreImage } from '@/components/common/customization/PreImage';
import { URLS_SYSTEM } from '@/utils/constants';
import UseLinkRouter from '@/utils/functions/UseLinkRouter';
import { useTheme } from 'next-themes';
import { IWebsiteNews } from 'src/shared/schemas/models/INews';
interface Props {
  data: Partial<IWebsiteNews>;
}
const NewsItem = ({ data }: Props) => {
  const { theme } = useTheme();
  const colorIcon = theme !== 'dark' ? '#F06426' : '#fff';
  return (
    <div className='relative grid h-full w-full grid-cols-3 gap-0 rounded-lg shadow-lg dark:bg-[#1B1D35] lg:grid-cols-2 lg:gap-3'>
      <PreImage
        src={data.image as string}
        height={350}
        width={300}
        layer={false}
        alt={data.title as string}
        className='absolute h-full w-full rounded-l-lg object-cover object-left-top'
      />
      <div className='col-span-2 flex w-full flex-col items-start justify-start gap-3 p-5 lg:col-span-1'>
        <div className='flex w-full flex-col items-start justify-start lg:flex-row lg:items-center lg:justify-between'>
          <p className='text-orange-500'>{data.categoryName}</p>
          <p className='hidden text-sm text-slate-500 lg:block'>{data.createdDate}</p>
        </div>
        <h2 className='text-lg lg:text-xl'>{data.title}</h2>
        <p className='block text-sm text-slate-500 lg:hidden'>{data.description}</p>
        <p className='text-sm text-slate-400'>{data.author}</p>
        <UseLinkRouter url={URLS_SYSTEM.NOTFOUND}>
          <BtnCommon title='Tìm hiểu thêm' cls='border border-orange-500' colorSvg={colorIcon} />
        </UseLinkRouter>
      </div>
    </div>
  );
};

export default NewsItem;

import TitleSection from '@/components/common/customization/TitleSection';
import YNG_IconArrowRight from '@/components/icon/YNG/YNG_ERP/YNG_ERP_solution/YNG_IconArrowRight';
import { IYourNextGen } from '@/mocks/website/YNG/YNG_Home/solution';
import UseLinkRouter from '@/utils/functions/UseLinkRouter';

interface Props {
  item: IYourNextGen;
  className: string;
}
const YNGHomeSolutionSectionItem = ({ item, className }: Props) => {
  const slugArray = item.slug.split(',');
  return (
    <div
      className={`grid w-full grid-cols-1 items-center justify-between gap-10 px-8 py-10 md:grid-cols-2 lg:px-24 lg:py-14 ${className}`}
    >
      <div className='flex w-full flex-col items-start justify-start'>
        <TitleSection
          title=''
          name={item.title}
          description={item.description}
          findMore={true}
          className='col-span-7 grid-cols-7 !gap-6'
        />
      </div>
      <div className='grid w-full grid-cols-1 items-start justify-start gap-6 md:grid-cols-2'>
        {item.solutions.map((solution, idx) => (
          <UseLinkRouter key={idx} url={`/your-next-gen${slugArray[idx].trim()}`}>
            <div className='flex items-center justify-between border-b-2 border-slate-300 pb-4'>
              <p className='text-sm font-normal'>{solution}</p>
              <YNG_IconArrowRight />
            </div>
          </UseLinkRouter>
        ))}
      </div>
    </div>
  );
};

export default YNGHomeSolutionSectionItem;

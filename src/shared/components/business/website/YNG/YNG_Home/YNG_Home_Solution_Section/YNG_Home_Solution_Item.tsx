import TitleSection from '@/components/common/customization/TitleSection';
import YNG_IconArrowRight from '@/components/icon/YNG/YNG_ERP/YNG_ERP_solution/YNG_IconArrowRight';
import { IYourNextGen } from '@/mocks/website/YNG/YNG_Home/solution';
import UseLinkRouter from '@/utils/functions/UseLinkRouter';

interface Props {
  item: IYourNextGen;
  className: string;
}
const YNGHomeSolutionSectionItem = ({ item, className }: Props) => {
  const slugArray = item.slug.split(",")
  return (
    <div
      className={`w-full grid grid-cols-2 justify-between items-center gap-10 px-8 py-10 lg:px-24 lg:py-14 ${className}`}
    >
      <div className='w-full flex flex-col justify-start items-start'>
        <TitleSection
          title=''
          name={item.title}
          description={item.description}
          findMore={true}
          className='grid-cols-7 col-span-7 !gap-6'
        />
      </div>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 justify-start items-start gap-6'>
        {item.solutions.map((solution, idx) => (
          <UseLinkRouter key={idx} url={`/your-next-gen${slugArray[idx].trim()}`}>
            <div className='flex justify-between items-center pb-4 border-b-2 border-slate-300'>
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

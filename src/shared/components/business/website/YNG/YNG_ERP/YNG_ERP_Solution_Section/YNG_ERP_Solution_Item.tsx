import BtnCommon from '@/components/common/customization/BtnCommon';
import TitleSection from '@/components/common/customization/TitleSection';
import YNG_IconArrowRight from '@/components/icon/YNG/YNG_ERP/YNG_ERP_solution/YNG_IconArrowRight';
import { IYNGYourNextGenSolution } from '@/mocks/website/YNG/YNG_ERP/solution';

interface Props {
  item: IYNGYourNextGenSolution;
  className: string;
}
const YNGERPSolutionSectionItem = ({ item, className }: Props) => {
  return (
    <div
      className={`w-full flex flex-col lg:flex-row justify-between items-center gap-4 px-8 py-10 lg:px-14 lg:py-24 ${className}`}
    >
      <div className='w-full flex flex-col justify-start items-start'>
        <TitleSection
          title=''
          name={item.name}
          description={item.description}
          findMore={true}
          className='w-full flex flex-col justify-start items-start'
        />
        <BtnCommon title='Khám phá ngay' cls='bg-orange-500 border-none !text-white p-4' />
      </div>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 justify-start items-start gap-6'>
        {item.solutions.map((solution, idx) => (
          <div key={idx} className='flex justify-between items-center pb-4 border-b-2 border-slate-300'>
            <p className='text-base md:text-lg'>{solution}</p>
            <YNG_IconArrowRight />
          </div>
        ))}
      </div>
    </div>
  );
};

export default YNGERPSolutionSectionItem;

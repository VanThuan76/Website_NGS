import BtnCommon from '@/components/common/customization/BtnCommon';
import YNG_IconArrowRight from '@/components/icon/YNG/YNG_ERP/YNG_ERP_solution/YNG_IconArrowRight';
import { IYNGYourNextGenSolution } from '@/mocks/website/YNG/YNG_ERP/solution';

interface Props {
  item: IYNGYourNextGenSolution;
  className: string
}
const YNGERPSolutionItem = ({ item, className }: Props) => {
  return (
    <div className={`w-full flex flex-col lg:flex-row justify-between items-center gap-4 py-4 md:py-8 lg:py-16 xl:py-24 px-4 md:px-16 lg:px-24 ${className}`}>
      <div className='w-full flex flex-col justify-start items-start'>
        <h1 className="text-2xl xl:text-2xl">{item.title}</h1>
        <p className='w-full lg:w-[70%] xl:w-[50%] text-xs md:text-sm lg:text-base dark:text-[#C2C0BF]'>{item.des}</p>
        <BtnCommon title='Khám phá ngay' cls='bg-orange-500 border-none !text-white' />
      </div>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 justify-start items-start gap-6'>
        {item.solutions.map((solution, idx) => (
          <div key={idx} className='flex justify-between items-center pb-4 border-b-2 border-slate-300'>
                <p className="text-base md:text-lg">{solution}</p>
                <YNG_IconArrowRight />
          </div>
        ))}
      </div>
    </div>
  );
};

export default YNGERPSolutionItem;

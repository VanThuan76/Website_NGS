import BtnCommon from '@/components/common/customization/BtnCommon';
import YNG_IconArrowRight from '@/components/icon/YNG/YNG_YourNextGen/YNG_YourNextGen_solution/YNG_IconArrowRight';
import { IYNGYourNextGenSolution } from '@/mocks/website/YNG/YNG_YourNextGen/solution';

interface Props {
  item: IYNGYourNextGenSolution;
  className: string
}
const YNGYourNextGenSolutionItem = ({ item, className }: Props) => {
  return (
    <div className={`w-full flex flex-col lg:flex-row justify-between items-center py-4 md:py-8 lg:py-16 xl:py-24 px-4 md:px-24 lg:px-32 xl:px-40 ${className}`}>
      <div className='w-full flex flex-col justify-start items-start'>
        <h1 className="text-2xl xl:text-2xl">{item.title}</h1>
        <p className='w-[70%] text-xs md:text-sm lg:text-base dark:text-[#C2C0BF]'>{item.des}</p>
        <BtnCommon title='Khám phát' cls='bg-orange-500 border-none !text-white' />
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

export default YNGYourNextGenSolutionItem;

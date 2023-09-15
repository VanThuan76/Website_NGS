import { YNG_ERP_solution } from '@/mocks/website/YNG/YNG_Home/solution';
import YNGHomeSolutionSectionItem from './YNG_Home_Solution_Item';

const YNGHomeSolutionSection = () => {
  return (
    <section id='YNGERPSolution' className='w-full'>
      <div className='w-full mx-auto my-auto mt-10 flex flex-col justify-between items-center'>
        <div className='flex flex-col justify-start items-start md:justify-center md:items-center gap-2'>
          <p className='text-sm md:text-2xl text-orange-500'>Giá trị cốt lõi</p>
          <h1 className='text-2xl md:text-4xl'>Giải pháp ERP</h1>
        </div>
        {YNG_ERP_solution.map((item, idx) => (
          <YNGHomeSolutionSectionItem key={idx} item={item} className={`${idx % 2 !== 0 ? 'bg-[#F9F9F9]' : ''}`} />
        ))}
      </div>
    </section>
  );
};

export default YNGHomeSolutionSection;

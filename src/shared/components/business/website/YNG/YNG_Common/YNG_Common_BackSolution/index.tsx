import TitleSection from '@/components/common/customization/TitleSection';
import YNG_IconArrowRight from '@/components/icon/YNG/YNG_ERP/YNG_ERP_solution/YNG_IconArrowRight';
import { ERPBackSolutionData } from '@/mocks/website/YNG/YNG_ERP/backSolution';

const YNGBackSolution = () => {
  return (
    <section id='YNGERPBackSolution' className='w-full mb-4 md:mb-12 lg:mb-24 px-8 py-10 lg:px-14 lg:py-24'>
      <div className='w-full mx-auto my-auto mt-10 flex flex-col justify-between items-center'>
        <div className='w-full flex flex-col justify-start items-start'>
          <TitleSection
            title='Back to Solution'
            name={ERPBackSolutionData.sections.name}
            description={ERPBackSolutionData.sections.description}
            findMore={true}
            className='w-full flex flex-col justify-start items-start'
          />
        </div>
        <div
          className={`w-full flex flex-col lg:flex-row justify-between items-center gap-4 mt-10`}
        >
          <div className='w-full grid grid-cols-1 md:grid-cols-2 justify-start items-start gap-6'>
            {ERPBackSolutionData.components.map((item, idx) => (
              <div key={idx} className='flex justify-between items-center pb-4 border-b-2 border-slate-300'>
                <p className='text-base md:text-lg'>{item.title}</p>
                <YNG_IconArrowRight />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default YNGBackSolution;

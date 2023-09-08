import TitleSection from '@/components/common/customization/TitleSection';
import YNG_IconCheck from '@/components/icon/YNG/YNG_ERP/YNG_IconCheck';
import { YNGPilotSubriceData } from '@/mocks/website/YNG/YNG_ERP/pilotSubrice';
import YNGCommonPilotSubriceForm from './YNGCommonPilotSubriceForm';

const YNGPilotSubrice = () => {
  return (
    <section id='YNGERPPilotSubrice' className='w-full mb-4 md:mb-12 lg:mb-24 px-8 py-10 lg:px-14 lg:py-24'>
      <div className='w-full mx-auto my-auto mt-10 flex flex-col justify-between items-center'>
        <div className='w-full flex flex-col justify-start items-start'>
          <TitleSection
            title='Pilot Subcribe'
            name={YNGPilotSubriceData.sections.name}
            description={YNGPilotSubriceData.sections.description}
            findMore={true}
            className='w-full flex flex-col justify-start items-start'
          />
        </div>
        <div className={`w-full flex flex-col lg:flex-row justify-between items-center gap-4 mt-10`}>
          <div className='w-full grid grid-cols-1 lg:grid-cols-2 justify-start items-start'>
            {YNGPilotSubriceData.components.map((item, idx) => (
              <div key={idx} className='flex justify-start items-start gap-4 pb-4'>
                <YNG_IconCheck />
                <p className='text-base md:text-lg'>{item.title}</p>
              </div>
            ))}
            <YNGCommonPilotSubriceForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default YNGPilotSubrice;

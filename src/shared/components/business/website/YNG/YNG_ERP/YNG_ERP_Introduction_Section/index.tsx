import TitleSection from '@/components/common/customization/TitleSection';
import { ERPIntroductionData } from '@/mocks/website/YNG/YNG_ERP/introduction';

const YNGERPIntroductionSection = () => {
  return (
    <section id='YNGERPIntroductionSection' className='w-full mb-4 md:mb-12 lg:mb-24 px-8 py-10 lg:px-14 lg:py-24'>
      <TitleSection
        title='Khách hàng'
        name={ERPIntroductionData.sections.name}
        description={ERPIntroductionData.sections.description}
        findMore={true}
        className='w-full flex flex-col justify-start items-start'
      />
    </section>
  );
};

export default YNGERPIntroductionSection;

import { AnimatePresence } from 'framer-motion';
import ServiceSection from './ServiceSection';
import TitleSection from '@/components/common/customization/TitleSection';
import { PreImage } from '@/components/common/customization/PreImage';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';

type Props = {
  data: Partial<IBaseSectionComponent>;
  className?: string;
};
const HomeService = ({ data, className }: Props) => {
  if(!data.components || !data.section) return <></>

  return (
    <section id='Service' className={`pb-4 md:pb-8 lg:pb-16 xl:pb-24 px-4 md:px-24 lg:px-32 xl:px-40 ${className}`}>
      <TitleSection
        title='Dịch vụ'
        name={data.section!.name as string}
        description={data.section!.description as string}
        findMore={true}
        className='w-full flex flex-col lg:flex-row xl:flex-row justify-between items-start gap-3'
      />
      <div className='max-w-[1440px] w-full h-full mx-auto my-auto mt-10 flex items-start justify-between lg:gap-10 xl:gap-10 overflow-hidden'>
        <AnimatePresence>
          <div className='w-full lg:w-1/2 flex flex-col justify-center items-center'>
            {data && data.components!.map((item, idx) => {
              return <ServiceSection key={idx} item={item} idx={idx} />;
            })}
          </div>
        </AnimatePresence>
        <PreImage
          src={'/images/HO_service_bg.png'}
          height={500}
          width={500}
          layer={false}
          alt={'Service'}
          className='hidden lg:block xl:block relative rounded-lg'
        />
      </div>
    </section>
  );
};

export default HomeService;

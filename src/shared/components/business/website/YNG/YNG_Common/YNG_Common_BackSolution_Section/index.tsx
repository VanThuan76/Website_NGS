import React from 'react';
import TitleSection from '@/components/common/customization/TitleSection';
import YNG_IconArrowRight from '@/components/icon/YNG/YNG_ERP/YNG_ERP_solution/YNG_IconArrowRight';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import UseLinkRouter from '@/utils/functions/UseLinkRouter';
import BorderStyleOneLight from '@/components/icon/TYO&SYB_Common/BorderStyleOneLight';

type Props = {
  title: string;
  data: Partial<IBaseSectionComponent>;
  className?: string;
};
const YNGCommonBackSolutionSection = ({ title, data, className }: Props) => {
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;
  return (
    <section id={data.section.code} className={`relative w-screen px-4 pb-4 md:px-24 md:pb-12 ${className}`}>
      <div className='grid min-h-[500px] w-full grid-cols-1 items-center justify-center md:grid-cols-2'>
        <div className='col-span-1 flex w-full flex-col items-start justify-start'>
          <TitleSection
            title={title}
            name={data.section.name}
            description={data.section.description}
            findMore={true}
            className='col-span-7 w-full grid-cols-7 !gap-6 !text-left'
          />
        </div>
        <div className={`col-span-1 mt-10 flex w-full flex-col items-center justify-between gap-4 lg:flex-row`}>
          <div className='grid w-full grid-cols-1 items-start justify-start gap-6 md:grid-cols-2'>
            {data.components.map((item, idx) => (
              <UseLinkRouter key={idx} url={`/your-next-gen${item.slug}`}>
                <div key={idx} className='flex items-center justify-between border-b-2 border-slate-300 pb-4'>
                  <p className='text-base font-normal'>{item.title}</p>
                  <YNG_IconArrowRight />
                </div>
              </UseLinkRouter>
            ))}
          </div>
        </div>
      </div>
      <BorderStyleOneLight className='absolute bottom-10 left-0 -z-10 object-cover' />
    </section>
  );
};

export default YNGCommonBackSolutionSection;

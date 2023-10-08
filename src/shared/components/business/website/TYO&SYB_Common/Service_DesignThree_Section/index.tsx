import BtnCommon from '@/components/common/customization/BtnCommon';
import TitleSection from '@/components/common/customization/TitleSection';
import BackgroundServiceDesignThreeSection from '@/components/icon/TYO&SYB_Common/BackgroundServiceDesignThreeSection';
import UseLinkRedirect from '@/utils/functions/UseLinkRedirect';
import React from 'react';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import ServiceDesignThreeResponsive from './ServiceDesignThreeResponsive';
import ServiceDesignThreeItem from './Service_DesignThree_Item';

type Props = {
  title: string;
  sub?: string;
  data: Partial<IBaseSectionComponent>;
  className?: string;
  sectionCodeLink?: string;
};

const ServiceDesignThreeSection = ({ title, sub, data, className, sectionCodeLink }: Props) => {
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;

  return (
    <section
      id={data.section.code}
      className={`relative max-w-[1440px] overflow-hidden px-4 pb-4 md:px-24 ${className}  `}
    >
      <div className='grid-col-1 mx-auto my-auto mt-10 hidden w-full items-start justify-between gap-10 md:grid md:grid-cols-2'>
        <div className='service-designthree-section-with-scrollbar flex max-h-[850px] w-full flex-col items-start justify-start gap-10 overflow-y-scroll pr-4 md:pl-12'>
          {data.components.map((item, idx) => {
            return (
              <div key={idx} className='w-full flex-shrink-0 cursor-pointer snap-start'>
                <ServiceDesignThreeItem data={item} />
              </div>
            );
          })}
        </div>
        <div className='flex w-full flex-col items-end justify-start'>
          <TitleSection
            title={title}
            name={data.section!.name as string}
            description={data.section!.description as string}
            findMore={true}
            className='col-span-7 w-full grid-cols-7 items-end justify-end !gap-0 text-right'
          />
          <div className='mt-10 flex flex-col items-end justify-end gap-3'>
            <p className='text-right'>{sub ? sub : ''}</p>
            <UseLinkRedirect sectionCode={'FormCTA'}>
              <BtnCommon title='Kết nối với NGS' cls='border border-orange-500' />
            </UseLinkRedirect>
          </div>
        </div>
      </div>
      {/* Responsive */}
      <ServiceDesignThreeResponsive data={data} title={title} sub={sub} />
      {/* Responsive */}
      <BackgroundServiceDesignThreeSection className='absolute left-0 top-0 -z-10 h-full w-full' />
    </section>
  );
};

export default ServiceDesignThreeSection;

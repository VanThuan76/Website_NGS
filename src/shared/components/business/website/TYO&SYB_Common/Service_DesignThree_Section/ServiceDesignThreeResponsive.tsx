import BtnCommon from '@/components/common/customization/BtnCommon';
import TitleSection from '@/components/common/customization/TitleSection';
import UseLinkRedirect from '@/utils/functions/UseLinkRedirect';
import React from 'react';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import ServiceDesignThreeItem from './Service_DesignThree_Item';

type Props = {
  title: string;
  sub?: string;
  data: Partial<IBaseSectionComponent>;
};
const ServiceDesignThreeResponsive = ({ title, sub, data }: Props) => {
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;

  return (
    <div className='grid-col-1 mx-auto my-auto mt-10 grid w-full items-start justify-between gap-10 md:hidden md:grid-cols-2'>
      <TitleSection
        title={title}
        name={data.section!.name as string}
        description={data.section!.description as string}
        findMore={true}
        className='col-span-7 block w-full grid-cols-7 items-end justify-end !gap-0 text-right md:hidden'
      />
      <div className='service-designthree-section-with-scrollbar flex max-h-[850px] w-full flex-col items-start justify-start gap-10 overflow-y-scroll pr-4 md:pl-12'>
        {data.components.map((item, idx) => {
          return (
            <div key={idx} className='w-full flex-shrink-0 cursor-pointer snap-start'>
              <ServiceDesignThreeItem data={item} />
            </div>
          );
        })}
      </div>
      <div className='flex flex-col items-center justify-center gap-3'>
        <p className='text-right'>{sub ? sub : ''}</p>
        <UseLinkRedirect sectionCode={'FormCTA'}>
          <BtnCommon title='Dùng thử' cls='border border-orange-500' />
        </UseLinkRedirect>
      </div>
    </div>
  );
};

export default ServiceDesignThreeResponsive;

import BtnCommon from '@/components/common/customization/BtnCommon';
import TitleSection from '@/components/common/customization/TitleSection';
import { URLS_SYSTEM } from '@/utils/constants';
import UseLinkRouter from '@/utils/functions/UseLinkRouter';
import React from 'react';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import ServiceDesignThreeItem from './Service_DesignThree_Item';

type Props = {
  title: string;
  sub?: string;
  data: Partial<IBaseSectionComponent>;
  className?: string;
};

const ServiceDesignThreeSection = ({ title,sub, data, className }: Props) => {
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;

  return (
    <section id={data.section.code} className={`pb-4 px-4 md:px-24 overflow-hidden ${className}  `}>
      <div className='w-full mx-auto my-auto mt-10 grid grid-cols-2 justify-between items-start gap-10'>
        <div className='w-full max-h-[472px] pr-4 flex flex-col justify-start items-start gap-10 service-designthree-section-with-scrollbar pl-12'>
          {data.components.map((item, idx) => {
            return (
              <div key={idx} className='w-full flex-shrink-0 snap-start cursor-pointer'>
                <ServiceDesignThreeItem data={item} />
              </div>
            );
          })}
        </div>
        <div className='w-full flex flex-col justify-start items-end'>
          <TitleSection
            title={title}
            name={data.section!.name as string}
            description={data.section!.description as string}
            findMore={true}
            className='w-full flex flex-col justify-end items-end gap-3 text-right'
          />
          <div className='mt-10 flex flex-col justify-end items-end gap-3'>
            <p className='text-right'>{sub ? sub : "Bạn muốn đăng ký bản dùng thử?"}</p>
            <UseLinkRouter url={URLS_SYSTEM.NOTFOUND}>
              <BtnCommon title='Dùng thử' cls='border border-orange-500' />
            </UseLinkRouter>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDesignThreeSection;

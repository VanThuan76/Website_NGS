import BtnCommon from '@/components/common/customization/BtnCommon';
import TitleSection from '@/components/common/customization/TitleSection';
import BackgroundServiceDesignThreeSection from '@/components/icon/TYO&SYB_Common/BackgroundServiceDesignThreeSection';
import UseLinkRedirect from '@/utils/functions/UseLinkRedirect';
import React from 'react';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import ServiceDesignThreeItem from './Service_DesignThree_Item';

type Props = {
  title: string;
  sub?: string;
  data: Partial<IBaseSectionComponent>;
  className?: string;
  sectionCodeLink?: string
};

const ServiceDesignThreeSection = ({ title,sub, data, className, sectionCodeLink }: Props) => {
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;

  return (
    <section id={data.section.code} className={`relative pb-4 px-4 md:px-24 overflow-hidden ${className}  `}>
      <div className='w-full mx-auto my-auto mt-10 grid grid-cols-2 justify-between items-start gap-10'>
        <div className='w-full max-h-[472px] pr-4 flex flex-col justify-start items-start gap-10 overflow-y-scroll service-designthree-section-with-scrollbar pl-12'>
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
            <UseLinkRedirect sectionCode={sectionCodeLink || 'PG003.1SE00008'}>
              <BtnCommon title='Dùng thử' cls='border border-orange-500' />
            </UseLinkRedirect>
          </div>
        </div>
      </div>
      <BackgroundServiceDesignThreeSection className='absolute left-0 top-0 w-full h-full -z-10' />
    </section>
  );
};

export default ServiceDesignThreeSection;

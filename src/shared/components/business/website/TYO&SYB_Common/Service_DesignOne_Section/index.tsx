import BtnCommon from '@/components/common/customization/BtnCommon';
import TitleSection from '@/components/common/customization/TitleSection';
import { URLS_SYSTEM } from '@/utils/constants';
import UseLinkRouter from '@/utils/functions/UseLinkRouter';
import React from 'react';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import ServiceDesignOneItem from './Service_DesignOne_Item';

type Props = {
  title: string;
  data: Partial<IBaseSectionComponent>;
  className?: string;
};

const ServiceDesignOneSection = ({ title, data, className }: Props) => {
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;
  const checkSolution = data.components.find(item => item.slug === 'solution');
  const checkServiceAndSupport = data.components.find(item => item.slug === 'service-and-support');
  return (
    <section id={data.section.code} className={`pb-4 px-4 md:px-24 overflow-hidden ${className}  `}>
      <div className={`w-full mx-auto my-auto mt-10 grid ${!checkSolution || !checkServiceAndSupport ? "grid-cols-3" : "grid-cols-4"} justify-start items-start gap-10`}>
        <div className='w-full h-full col-span-2 flex flex-col justify-start items-start'>
          <TitleSection
            title={title}
            name={data.section.name as string}
            description={data.section.description as string}
            findMore={true}
            className='w-full flex flex-col justify-start items-start gap-3'
          />
          <div className='flex flex-col justify-start items-start gap-3'>
            <p>Bạn muốn đăng ký bản dùng thử?</p>
            <UseLinkRouter url={URLS_SYSTEM.NOTFOUND}>
              <BtnCommon title='Dùng thử' cls='border border-orange-500' />
            </UseLinkRouter>
          </div>
        </div>
        {checkSolution && (
          <ServiceDesignOneItem titleItem='Giải pháp' data={data.components.filter(item => item.slug === 'solution')} />
        )}
        {checkServiceAndSupport && (
          <ServiceDesignOneItem
            titleItem='Dịch vụ và hỗ trợ'
            data={data.components.filter(item => item.slug === 'service-and-support')}
          />
        )}
      </div>
    </section>
  );
};

export default ServiceDesignOneSection;

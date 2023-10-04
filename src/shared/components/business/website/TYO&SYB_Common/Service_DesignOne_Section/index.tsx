import BtnCommon from '@/components/common/customization/BtnCommon';
import TitleSection from '@/components/common/customization/TitleSection';
import UseLinkRedirect from '@/utils/functions/UseLinkRedirect';
import React from 'react';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import ServiceDesignOneItem from './Service_DesignOne_Item';

type Props = {
  title: string;
  data: Partial<IBaseSectionComponent>;
  className?: string;
  sectionCodeLink?: string;
};

const ServiceDesignOneSection = ({ title, data, className, sectionCodeLink }: Props) => {
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;
  const checkSolution = data.components.find(item => item.slug === 'solution');
  const checkServiceAndSupport = data.components.find(item => item.slug === 'service-and-support');
  return (
    <section id={data.section.code} className={`max-w-[1440px] overflow-hidden px-4 pb-4 md:px-24 ${className}  `}>
      <div
        className={`mx-auto my-auto mt-10 grid w-full ${
          !checkSolution || !checkServiceAndSupport ? 'grid-cols-3' : 'grid-cols-4'
        } items-start justify-start gap-10`}
      >
        <div className='col-span-2 flex h-full w-full flex-col items-start justify-start'>
          <TitleSection
            title={title}
            name={data.section.name as string}
            description={data.section.description as string}
            findMore={true}
            className='col-span-7 w-full grid-cols-7 !text-left'
          />
          <div className='flex flex-col items-start justify-start gap-3'>
            <p>Bạn muốn đăng ký bản dùng thử?</p>

            <UseLinkRedirect sectionCode={'FormCTA'}>
              <BtnCommon title='Dùng thử' cls='border border-orange-500' />
            </UseLinkRedirect>
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

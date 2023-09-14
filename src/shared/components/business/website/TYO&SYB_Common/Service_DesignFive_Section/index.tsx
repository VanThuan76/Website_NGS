import BtnCommon from '@/components/common/customization/BtnCommon';
import { PreImage } from '@/components/common/customization/PreImage';
import TitleSection from '@/components/common/customization/TitleSection';
import React from 'react';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import ServiceDesignFiveItem from './Service_DesignFive_Item';

type Props = {
  title: string;
  data: Partial<IBaseSectionComponent>;
  className?: string;
};

const ServiceDesignFiveSection = ({ title, data, className }: Props) => {
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;

  return (
    <section
      id={data.section.code}
      className={`px-4 md:px-24 lg:px-32 overflow-hidden ${className}`}
    >
      <div className='w-full grid grid-cols-2 justify-start items-start gap-5'>
        <div className='cols-span-1 w-full flex flex-col justify-start items-start gap-3'>
          <TitleSection
            title={title}
            name={data.section!.name as string}
            description={data.section!.description as string}
            findMore={true}
            className='w-full flex flex-col justify-start items-start gap-3'
          />
           <div className='w-full max-h-[600px] flex flex-col justify-center items-center'>
            {data && data.components!.map((item, idx) => {
              return <ServiceDesignFiveItem key={idx} item={item} idx={idx} />;
            })}
          </div>
          <BtnCommon title='Đăng ký ngay' cls='text-white bg-orange-500 p-4' />
        </div>
        <div className='relative w-full h-full flex-shrink-0 snap-start'>
          <PreImage
            src={data.section.image}
            width={1980}
            height={704}
            alt={data.section.name}
            className='w-full h-full object-cover'
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceDesignFiveSection;

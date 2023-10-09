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
      className={`mx-auto max-w-[1440px] overflow-hidden px-4 py-24 md:px-24 ${className}`}
    >
      <div className='grid w-full grid-cols-1 items-start justify-start gap-36 md:grid-cols-2'>
        <div className='flex w-full flex-col items-start justify-start gap-3'>
          <TitleSection
            title={title}
            name={data.section!.name as string}
            description={data.section!.description as string}
            findMore={true}
            className='col-span-7 w-full grid-cols-7 !text-left'
          />
          <div className='-mt-14 flex w-full flex-col items-center justify-center'>
            {data &&
              data.components!.map((item, idx) => {
                return <ServiceDesignFiveItem key={idx} item={item} idx={idx} />;
              })}
          </div>
        </div>
        <div className='relative h-full w-full'>
          <PreImage
            src={data.section.image}
            width={1980}
            height={840}
            alt={data.section.name}
            className='h-full w-full object-cover'
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceDesignFiveSection;

import BtnCommon from '@/components/common/customization/BtnCommon';
import React from 'react';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import ServiceDesignThreeItem from './Service_DesignThree_Item';

type Props = {
  title: string;
  data: Partial<IBaseSectionComponent>;
  className?: string;
};

const ServiceDesignThreeSection = ({ title, data, className }: Props) => {
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;

  return (
    <section id={data.section.code} className={`pb-4 px-4 md:p-24 lg:px-32 overflow-hidden ${className}  `}>
      <div className='w-full mx-auto my-auto mt-10 grid grid-cols-2 justify-between items-start gap-10'>
        <div className='lg:mt-10 w-full max-h-[500px] pr-4 overflow-hidden overflow-y-scroll flex flex-col justify-start items-start gap-10 service-designthree-section-with-scrollbar'>
          {data.components.map((item, idx) => {
            return (
              <div key={idx} className='w-full flex-shrink-0 snap-start cursor-pointer'>
                <ServiceDesignThreeItem data={item} />
              </div>
            );
          })}
        </div>
        <div className='w-full h-full flex flex-col justify-start items-end'>
          <div className='flex flex-col justify-end items-end gap-3'>
            <p className='text-sm md:text-2xl'>{title}</p>
            <h1 className='text-2xl md:text-4xl font-semibold text-end'>{data.section.name}</h1>
            <p className='mt-5 font-thin'>{data.section.description}</p>
          </div>
          <div className='mt-10 flex flex-col justify-end items-end gap-3'>
            <p>Bạn muốn đăng ký bản dùng thử?</p>
            <BtnCommon title='Dùng thử' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDesignThreeSection;

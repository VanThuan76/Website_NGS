import BtnCommon from '@/components/common/customization/BtnCommon';
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

  return (
    <section id={data.section.code} className={`pb-4 px-4 md:px-24 lg:px-32 overflow-hidden ${className}  `}>
      <div className='w-full mx-auto my-auto mt-10 grid grid-cols-4 justify-between items-start gap-10'>
        <div className='w-full h-full col-span-2 flex flex-col justify-between items-start'>
          <div className='flex flex-col justify-start items-start gap-3'>
            <p className='text-sm md:text-2xl'>{title}</p>
            <h1 className='text-2xl md:text-4xl font-semibold'>{data.section.name}</h1>
            <p className='mt-5'>{data.section.description}</p>
          </div>
          <div className='flex flex-col justify-start items-start gap-3'>
            <p>Bạn muốn đăng ký bản dùng thử?</p>
            <BtnCommon title='Dùng thử' />
          </div>
        </div>
        <ServiceDesignOneItem titleItem='Giải pháp' data={data.components.filter(item => item.slug === "solution")} />
        <ServiceDesignOneItem titleItem='Dịch vụ và hỗ trợ' data={data.components.filter(item => item.slug === "service-and-support")} />
      </div>
    </section>
  );
};

export default ServiceDesignOneSection;

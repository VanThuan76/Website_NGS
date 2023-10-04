import React from 'react';
import { PreImage } from '@/components/common/customization/PreImage';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import TitleSection from '@/components/common/customization/TitleSection';

type Props = {
  title: string;
  data: Partial<IBaseSectionComponent>;
  className?: string;
};

const YNGCommonCustomerSection = ({ title, data, className }: Props) => {
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;

  return (
    <section id={data.section.code} className={`w-full px-4 pb-2 md:px-24 md:pb-12 ${className}`}>
      <TitleSection
        title={title}
        name={data.section.name}
        description={data.section.description}
        findMore={true}
        className='col-span-7 grid-cols-7 !gap-0 !text-left'
      />
      <div className='flex w-full max-w-[1440px] flex-col items-center justify-between'>
        <div className='grid w-full grid-cols-2 items-end justify-end md:grid-cols-6'>
          {data.components.map((item, idx) => (
            <div
              key={idx}
              className={`relative h-[100px] max-w-[310px] overflow-hidden ${
                data.components && data.components?.length - 7 >= idx && 'border-b'
              } border-r border-r-slate-300 p-3`}
            >
              <PreImage
                key={idx}
                alt={`ERPCustomer ${idx}`}
                src={item.image}
                style={{ opacity: 0.8, transition: 'opacity 0.3s ease-in-out' }}
                objectPosition='center'
                objectFit='contain'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YNGCommonCustomerSection;

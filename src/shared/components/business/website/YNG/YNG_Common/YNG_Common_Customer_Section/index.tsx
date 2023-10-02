import React from 'react';
import { PreImage } from '@/components/common/customization/PreImage';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import TitleSection from '@/components/common/customization/TitleSection';
import BorderCard from '@/components/icon/HO/security/BorderCard';

type Props = {
  title: string;
  data: Partial<IBaseSectionComponent>;
  className?: string;
};

const YNGCommonCustomerSection = ({ title, data, className }: Props) => {
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;

  return (
    <section
      id={data.section.code}
      className={`w-full mb-2 md:mb-12 lg:px-24 lg:py-20 ${className}`}
    >
      <TitleSection
        title={title}
        name={data.section.name}
        description={data.section.description}
        findMore={true}
        className='w-full grid col-span-7 !gap-0 !text-left'
      />
      <div className='max-w-[1440px] w-full flex flex-col justify-between items-center'>
        <div className='w-full bg-red grid grid-cols-2 justify-end items-end md:grid-cols-6 gap-4 p-2'>
          {data.components.map((item, idx) => (
            <div key={idx} className={`relative max-w-[310px] h-[100px] py-3 rounded-lg overflow-hidden`}>
              <PreImage
                key={idx}
                alt={`ERPCustomer ${idx}`}
                src={item.image}
                style={{ opacity: 0.8, transition: 'opacity 0.3s ease-in-out' }}
                objectPosition="center"
                objectFit="contain"
              />
              <div className='absolute top-0 left-0 w-full h-full'>
                <BorderCard />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YNGCommonCustomerSection;

import React from 'react';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import { PreImage } from '@/components/common/customization/PreImage';
type Props = {
  title?: string;
  data: Partial<IBaseSectionComponent>;
  className?: string;
};

const PartnerDesignTwoSection = ({ title, data, className }: Props) => {
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;

  return (
    <section
      id={data.section.code}
      className={`w-screen overflow-hidden bg-[#FC5E03] px-4 pb-4 md:px-24 md:pb-8 lg:px-32 lg:pb-16 xl:px-52 xl:pb-24 2xl:px-96 ${className} `}
    >
      <div className='mx-auto my-auto mt-10 flex max-w-[1440px] flex-col items-center justify-between'>
        <div className='flex flex-col items-center justify-center gap-2'>
          <h1 className='text-center text-2xl font-semibold text-white md:text-4xl'>{data.section.name}</h1>
        </div>
        <div className='mt-10 grid w-full grid-cols-4 gap-5'>
          {data.components.map((item, idx) => (
            <div key={idx} className='border-card-partner-designTwo-section mr-4 pr-4'>
              <PreImage
                src={item.image as string}
                height={100}
                width={200}
                layer={false}
                alt={item.title}
                className={`cursor-pointer rounded-lg object-contain`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerDesignTwoSection;

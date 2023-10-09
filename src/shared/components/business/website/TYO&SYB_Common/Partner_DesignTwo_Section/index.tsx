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
      className={`w-screen overflow-hidden bg-[#FC5E03] px-4 pb-4 md:px-24 md:pb-8 lg:pb-16 ${className} `}
    >
      <div className='mx-auto my-auto mt-10 flex max-w-[1440px] flex-col items-center justify-between'>
        <div className='flex flex-col items-center justify-center gap-2'>
          <h1 className='text-center text-2xl font-semibold text-white md:text-4xl'>{data.section.name}</h1>
        </div>
        <div className='mt-10 grid w-full grid-cols-2 items-center justify-center gap-y-4 md:grid-cols-4 md:gap-y-24'>
          {data.components.map((item, idx) => (
            <div className='border-card-partner-designTwo-section col-span-1 h-[75px] w-full p-2' key={idx}>
              <PreImage
                key={idx}
                src={item.image}
                layer={false}
                alt={item.title}
                objectFit='contain'
                objectPosition='center'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerDesignTwoSection;

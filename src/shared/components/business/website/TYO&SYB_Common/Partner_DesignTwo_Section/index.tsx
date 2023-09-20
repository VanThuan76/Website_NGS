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
      className={`pb-4 md:pb-8 lg:pb-16 xl:pb-24 px-4 md:px-24 lg:px-32 xl:px-52 2xl:px-96 overflow-hidden bg-[#FC5E03] ${className} `}
    >
      <div className='w-full mx-auto my-auto mt-10 flex flex-col justify-between items-cente shrink-0'>
        <div className='flex flex-col justify-center items-center gap-2'>
          <h1 className='text-2xl md:text-4xl font-semibold text-center text-white'>{data.section.name}</h1>
        </div>
        <div className='w-full mt-10 grid grid-cols-4 gap-3'>
          {data.components.map((item, idx) => (
            <div key={idx} className="border-r-2 border-r-slate-300 mr-4">
              <PreImage
                src={item.image as string}
                height={100}
                width={200}
                layer={false}
                alt={item.title}
                className={`rounded-lg cursor-pointer`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerDesignTwoSection;
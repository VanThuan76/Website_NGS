import { PreImage } from '@/components/common/customization/PreImage';
import React from 'react';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';

type Props = {
  title: string;
  data: Partial<IBaseSectionComponent>;
  className?: string;
};

const ClientStoriesDesignTwoSection = ({ title, data, className }: Props) => {
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;

  return (
    <section
      id={data.section.code}
      className={`pb-4 md:pb-8 lg:pb-16 xl:pb-24 px-4 md:px-24 overflow-hidden bg-[#051C2C] ${className} `}
    >
      <div className='w-full mx-auto my-auto mt-10 flex flex-col justify-between items-center'>
        <div className='flex flex-col justify-center items-center gap-2 z-20 bg-[#051C2C]'>
          <p className='mb-3 text-sm md:text-2xl text-orange-500'>{title}</p>
          <h1 className='w-full flex flex-col text-2xl md:text-4xl font-medium text-white'>{data.section.name}</h1>
        </div>
        <div className='w-full border-t border-orange-500 transform -translate-y-4 z-10'></div>
        <div className='w-full mt-10 grid grid-cols-6 gap-5'>
          {data.components.map((item, idx) => (
            <div
              key={idx}
              className={`${
                data.components &&
                data.components?.length - 1 !== idx &&
                'border-clientStories-designTwo-section mx-auto pr-4'
              }`}
            >
              <PreImage
                src={item.image as string}
                height={100}
                width={200}
                layer={false}
                alt={item.title}
                className={`rounded-lg cursor-pointer object-contain`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientStoriesDesignTwoSection;

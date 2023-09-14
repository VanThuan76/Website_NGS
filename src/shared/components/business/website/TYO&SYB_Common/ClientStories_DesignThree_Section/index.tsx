import { PreImage } from '@/components/common/customization/PreImage';
import React from 'react';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';

type Props = {
  title: string;
  data: Partial<IBaseSectionComponent>;
  className?: string;
};

const ClientStoriesDesignThreeSection = ({ title, data, className }: Props) => {
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;

  return (
    <section
      id={data.section.code}
      className={`pb-4 md:pb-8 lg:pb-16 xl:pb-24 px-4 md:px-24 lg:px-32 xl:px-52 2xl:px-96 overflow-hidden bg-[#2B2B2B] ${className} `}
    >
      <div className='w-full mx-auto my-auto mt-10 flex flex-col justify-between items-center'>
        <div className='flex flex-col justify-center items-center gap-2 z-20 bg-[#2B2B2B]'>
          <p className='text-sm md:text-2xl text-orange-500'>{title}</p>
          <h1 className='text-2xl md:text-4xl font-semibold text-center text-white'>{data.section.name}</h1>
        </div>
        <div className='w-full border-t-2 border-orange-500 transform -translate-y-4 z-10'></div>
        <p className='mt-5 text-xs md:text-base text-center text-white'>{data.section.description}</p>
        <div className='w-full mt-10 grid grid-cols-3 justify-center gap-6'>
          {data.components.map((item, idx) => (
            <div key={idx} className='flex flex-col items-center border-r-2 border-orange-500 mr-12'>
              <PreImage
                src={item.image as string}
                height={100}
                width={200}
                layer={false}
                alt={item.title}
                className={`cursor-pointer`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientStoriesDesignThreeSection;

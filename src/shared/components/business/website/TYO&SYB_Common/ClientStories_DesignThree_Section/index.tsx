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
      className={`w-screen overflow-hidden bg-[#051C2C] px-4 pb-4 md:px-24 md:pb-8 lg:pb-16 xl:pb-24 ${className} `}
    >
      <div className='mx-auto my-auto mt-10 flex w-full flex-col items-center justify-between'>
        <div className='z-20 flex flex-col items-center justify-center gap-2 bg-[#051C2C]'>
          <p className='text-sm text-orange-500 md:text-2xl'>{title}</p>
          <h1 className='flex w-full flex-col text-2xl font-medium text-white md:text-4xl'>{data.section.name}</h1>
        </div>
        <div className='z-10 w-full -translate-y-4 transform border-t border-orange-500'></div>
        <p className='mt-5 text-center text-sm font-medium not-italic text-white md:text-base'>
          {data.section.description}
        </p>
        <div className='mt-10 grid w-full grid-cols-3 items-center justify-center gap-6'>
          {data.components.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center justify-center ${
                data.components &&
                data.components?.length - 1 !== idx &&
                'border-clientStories-designThree-section mx-auto pr-14'
              }`}
            >
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

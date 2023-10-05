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
      className={`w-screen overflow-hidden bg-[#051C2C] px-4 pb-4 md:px-24 md:pb-8 lg:pb-16 xl:pb-24 ${className} `}
    >
      <div className='mx-auto my-auto mt-10 flex w-full flex-col items-center justify-between'>
        <div className='z-20 flex flex-col items-center justify-center gap-2 bg-[#051C2C]'>
          <p className='mb-3 text-sm text-orange-500 md:text-2xl'>{title}</p>
          <h1 className='flex w-full flex-col text-2xl font-medium text-white md:text-4xl'>{data.section.name}</h1>
        </div>
        <div className='border-card-clientStories-top z-10 w-full -translate-y-4 transform'></div>
        <div className='mt-10 grid w-full grid-cols-2 gap-5 md:grid-cols-6'>
          {data.components.map((item, idx) => (
            <div
              key={idx}
              className={`mx-auto w-full pr-5 ${
                data.components && data.components?.length - 1 !== idx && 'border-clientStories-designTwo-section'
              }`}
            >
              <div className='relative h-[87px] w-full cursor-pointer overflow-hidden rounded-lg'>
                <PreImage
                  src={item.image as string}
                  layer={false}
                  alt={item.title}
                  objectFit='contain'
                  objectPosition='center'
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientStoriesDesignTwoSection;

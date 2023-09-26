import { PreImage } from '@/components/common/customization/PreImage';
import { splitTextToArrayByDoubleSlash } from '@/utils/functions/splitTextToArray';
import React from 'react';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';

type Props = {
  data: Partial<IBaseSectionComponent>;
  className?: string;
};
const ESEnvironment = ({ data, className }: Props) => {
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;
  return (
    <section id={data.section.code} className={`relative w-full px-4 md:px-10 bg-[#FFF8F5] ${className}`}>
      <div className='w-full mx-auto my-auto grid grid-cols-1 justify-center items-center gap-8  pt-16 pb-4 md:pb-8 lg:pb-16 xl:pb-24'>
        <div className='relative w-full h-full mx-auto ml-0 md:ml-56 flex justify-center items-center md:justify-normal md:items-start'>
          <PreImage
            src={data.components[0].image}
            width={210}
            height={210}
            alt={data.section.name}
            className='w-full h-full rounded-lg object-cover'
          />
        </div>
        <div className='w-full mx-auto my-auto grid grid-cols-1 md:grid-cols-4 justify-center items-center'>
          <div className='relative w-full h-full'>
            <PreImage
              src={data.components[1].image}
              width={210}
              height={210}
              alt={data.section.name}
              className='w-full h-full rounded-lg object-cover'
            />
          </div>
          <div className='col-span-2 w-full flex flex-col justify-center items-center gap-3'>
            <h1 className='text-xl md:text-3xl text-orange-500 font-semibold text-center'>{data.section.name}</h1>
            <div className='w-full flex flex-col justify-center items-center gap-2'>
              {splitTextToArrayByDoubleSlash(data.section.description || '').map((item: string, idx: number) => (
                <p key={idx} className='text-center'>
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className='relative w-full h-full flex justify-end items-start'>
            <PreImage
              src={data.components[2].image}
              width={272}
              height={363}
              alt={data.section.name}
              className='w-full h-full rounded-lg object-cover'
            />
          </div>
        </div>
        <div className='relative w-full h-full flex justify-center items-center'>
          <PreImage
            src={data.components[3].image}
            width={590}
            height={295}
            alt={data.section.name}
            className='w-full h-full rounded-lg object-cover'
          />
        </div>
      </div>
    </section>
  );
};

export default ESEnvironment;

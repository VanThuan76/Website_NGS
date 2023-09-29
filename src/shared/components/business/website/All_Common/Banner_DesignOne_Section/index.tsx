import React from 'react';
import BtnCommon from '@/components/common/customization/BtnCommon';
import { PreImage } from '@/components/common/customization/PreImage';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import { URLS_SYSTEM } from '@/utils/constants';
import UseLinkRouter from '@/utils/functions/UseLinkRouter';

type Props = {
  title?: string;
  data: Partial<IBaseSectionComponent>;
  className?: string;
};
const BannerDesignOneSection = ({ title, data, className }: Props) => {
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;
  return (
    <section id={data.section.code} className={`relative mb-10 w-full ${className}`}>
      <div className='snap-x-mandatory scrollbar-none relative max-h-[600px] flex overflow-hidden light:text-white'>
        <div className='relative w-full mx-auto flex justify-start items-start'>
          <div className='absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-[50%] flex flex-col justify-start items-start gap-6 z-30 text-white'>
            <div className='flex flex-col justify-start items-start gap-6'>
              <p className='text-sm md:text-xl text-[#FC5E03]'>{title}</p>
              <div className='w-full flex flex-col justify-start items-start'>
                {data.section.name.split('//').map((word, idx) => (
                  <h1 className='text-5xl font-semibold' key={idx}>
                    {word}
                  </h1>
                ))}
              </div>
              <p className='mt-5 font-thin text-lg'>{data.section.description}</p>
              <UseLinkRouter url={URLS_SYSTEM.ES}>
                <BtnCommon title='Tìm hiểu ngay' cls='bg-white text-orange-500 p-4 rounded-sm' />
              </UseLinkRouter>
            </div>
          </div>
          <div className='mx-auto w-[100vw] h-[100vh] relative overflow-hidden'>
            <PreImage
              src={data.section.image}
              height={760}
              width={1980}
              layer={true}
              alt={data.section.name}
              className='w-full h-full object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerDesignOneSection;

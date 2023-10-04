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
      <div className='snap-x-mandatory scrollbar-none light:text-white relative flex max-h-[600px] overflow-hidden'>
        <div className='relative mx-auto flex w-full items-start justify-start'>
          <div className='absolute left-1/3 top-1/2 z-30 flex w-[50%] -translate-x-1/2 -translate-y-1/2 transform flex-col items-start justify-start gap-6 text-white'>
            <div className='flex flex-col items-start justify-start gap-6'>
              <p className='text-sm text-[#FC5E03] md:text-xl'>{title}</p>
              <div className='flex w-full flex-col items-start justify-start'>
                {data.section.name.split('//').map((word, idx) => (
                  <h1 className='text-5xl font-semibold' key={idx}>
                    {word}
                  </h1>
                ))}
              </div>
              <p className='mt-5 text-lg font-thin'>{data.section.description}</p>
              <UseLinkRouter url={URLS_SYSTEM.ES}>
                <BtnCommon title='Tìm hiểu ngay' cls='bg-white text-orange-500 p-4 rounded-sm' />
              </UseLinkRouter>
            </div>
          </div>
          <div className='relative mx-auto h-[100vh] w-[100vw] overflow-hidden'>
            <PreImage
              src={data.section.image}
              height={760}
              width={1980}
              layer={true}
              alt={data.section.name}
              className='h-full w-full object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerDesignOneSection;

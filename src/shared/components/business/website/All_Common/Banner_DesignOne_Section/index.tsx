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
    <section id={data.section.code} className={`relative w-full${className}`}>
      <div className='snap-x-mandatory scrollbar-none relative max-h-[700px] flex overflow-hidden light:text-white'>
        <div className='relative w-full flex justify-between items-center mx-auto'>
          <div className='absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-[50%] flex flex-col justify-start items-start gap-3 z-30 text-white'>
            <div className='flex flex-col justify-start items-start gap-3'>
              <p className='text-sm md:text-xl text-orange-500'>{title}</p>
              <h1 className='text-2xl md:text-4xl font-semibold'>{data.section.name}</h1>
              <p className='mt-5 font-thin text-lg'>{data.section.description}</p>
            </div>
            <UseLinkRouter url={URLS_SYSTEM.ES}>
              <BtnCommon title='Tìm hiểu ngay' cls='bg-white text-orange-500 p-4 rounded-sm' />
            </UseLinkRouter>
          </div>
          <div className='relative w-full flex-shrink-0 snap-start'>
            <PreImage
              src={data.section.image}
              height={760}
              width={1980}
              layer={true}
              alt={data.section.name}
              className='w-full object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerDesignOneSection;

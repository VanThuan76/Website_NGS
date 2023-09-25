import React from 'react';
import BtnCommon from '@/components/common/customization/BtnCommon';
import { PreImage } from '@/components/common/customization/PreImage';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import { ChevronRight } from 'lucide-react';
import UseLinkRouter from '@/utils/functions/UseLinkRouter';
import { URLS_SYSTEM } from '@/utils/constants';

type Props = {
  breadcrumb: string[];
  data: Partial<IBaseSectionComponent>;
  className?: string;
};
const BannerDesignTwoSection = ({ breadcrumb, data, className }: Props) => {
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;

  return (
    <section id={data.section.code} className={`relative w-full${className}`}>
      <div className='snap-x-mandatory scrollbar-none relative max-h-[700px] flex overflow-hidden light:text-white'>
        <div className='relative w-full flex justify-between items-center mx-auto'>
          <div className='absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-[50%] flex flex-col justify-start items-start gap-3 z-30 text-white'>
            <div className='flex flex-col justify-start items-start gap-3'>
              <div className='mb-4 flex justify-start items-start gap-3'>
                {breadcrumb.map((item: string, idx: number) => (
                  <div key={idx} className='flex justify-center items-center gap-2'>
                    <p className={`text-sm ${idx === breadcrumb.length - 1 ? 'text-white' : 'text-orange-500'}`}>
                      {item}
                    </p>
                    {idx !== breadcrumb.length - 1 && <ChevronRight color='#FC5E03' />}
                  </div>
                ))}
              </div>
              <h1 className='text-2xl md:text-4xl font-[500px]'>{data.section.name}</h1>
              <p className='mt-5 font-thin leading-7'>{data.section.description}</p>
            </div>
            <UseLinkRouter url={URLS_SYSTEM.ES}>
              <BtnCommon title='Đăng ký ngay' cls='bg-white text-orange-500 p-4 rounded-sm' />
            </UseLinkRouter>
          </div>
          <div className='mx-auto w-[100vw] h-[100vh] relative overflow-hidden'>
            <PreImage
              src={data.section.image}
              height={760}
              width={1980}
              layer={true}
              alt={data.section.name}
              className='w-full h-full object-cover object-center'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerDesignTwoSection;

import React from 'react';
import BtnCommon from '@/components/common/customization/BtnCommon';
import { PreImage } from '@/components/common/customization/PreImage';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import { ChevronRight } from 'lucide-react';
import UseLinkRedirect from '@/utils/functions/UseLinkRedirect';

type Props = {
  breadcrumb: string[];
  data: Partial<IBaseSectionComponent>;
  className?: string;
  sectionCodeLink?: string;
};
const BannerDesignTwoSection = ({ breadcrumb, data, className, sectionCodeLink }: Props) => {
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;

  return (
    <section id={data.section.code} className={`relative mb-10 w-full${className}`}>
      <div className='snap-x-mandatory scrollbar-none relative max-h-[600px] flex overflow-hidden light:text-white'>
        <div className='relative w-full flex justify-between items-center mx-auto'>
          <div className='absolute top-1/2 left-1/4 transform -translate-x-[30%] -translate-y-1/2 w-[60%] flex flex-col justify-start items-start gap-3 z-30 text-white'>
            <div className='flex flex-col justify-start items-start gap-3'>
              <div className='mb-4 flex justify-center items-center gap-3'>
                {breadcrumb.map((item: string, idx: number) => (
                  <div key={idx} className='flex justify-center items-center gap-2'>
                    <p className={`text-sm ${idx === breadcrumb.length - 1 ? 'text-white' : 'text-[#FC5E03]'}`}>
                      {item}
                    </p>
                    {idx !== breadcrumb.length - 1 && <ChevronRight color='#FC5E03' />}
                  </div>
                ))}
              </div>
              <div className='w-full flex flex-col justify-start items-start gap-4'>
                {data.section.name.split('//').map((word, idx) => (
                  <h1 className='text-5xl font-semibold' key={idx}>
                    {word}
                  </h1>
                ))}
              </div>
              <div className='mt-5 w-full flex flex-col justify-start items-start'>
                {data.section.description.split('//').map((word, idx) => (
                  <p className='font-normal leading-7' key={idx}>
                    {word}
                  </p>
                ))}
              </div>
            </div>
            <UseLinkRedirect sectionCode={sectionCodeLink || 'PG003.1SE00008'}>
              <BtnCommon title='Đăng ký ngay' cls='bg-white text-orange-500 p-4 rounded-sm' />
            </UseLinkRedirect>
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

export default BannerDesignTwoSection;

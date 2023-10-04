import React from 'react';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import BtnCommon from '@/components/common/customization/BtnCommon';
import TitleSection from '@/components/common/customization/TitleSection';
import HOTestimonialContent from './HOTestimonialContent';
import { useTheme } from 'next-themes';
import UseLinkRouter from '@/utils/functions/UseLinkRouter';
import { URLS_SYSTEM } from '@/utils/constants';

type Props = {
  title: string;
  data: Partial<IBaseSectionComponent>;
  className?: string;
};

const HomeTestimonialSection = ({ title, data, className }: Props) => {
  const { theme } = useTheme();
  const colorIcon = theme !== 'dark' ? '#F06426' : '#fff';
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;

  return (
    <section id={data.section.code} className={`px-4 pb-4 md:px-24 md:pb-8 lg:pb-16 xl:pb-24 ${className}`}>
      <div className='mx-auto my-auto grid max-w-[1440px] grid-cols-1 items-start justify-between gap-10 lg:grid-cols-3'>
        <div className='col-span-1 flex w-full flex-col items-start justify-start'>
          <TitleSection
            title={title}
            name={data.section!.name as string}
            description={data.section!.description as string}
            findMore={true}
            className='col-span-7 w-full grid-cols-7 !gap-8 !text-left'
          />
          <UseLinkRouter url={URLS_SYSTEM.NOTFOUND}>
            <BtnCommon title='Tìm hiểu thêm' cls='mt-3 w-full border border-orange-500' colorSvg={colorIcon} />
          </UseLinkRouter>
        </div>
        <div className='col-span-2 flex max-h-[700px] w-full flex-col items-start justify-center gap-5 overflow-hidden overflow-y-scroll lg:mt-10 lg:flex-row'>
          <div className='flex flex-col items-start justify-start gap-5 pt-6 lg:gap-10 lg:pt-12'>
            {data.components.map((item, idx) => {
              return (
                <div key={idx} className='w-full flex-shrink-0 cursor-pointer snap-start'>
                  <HOTestimonialContent data={item} />
                </div>
              );
            })}
          </div>
          <div className='flex flex-col items-start justify-start gap-5 lg:gap-10'>
            {data.components!.map((item, idx) => {
              return (
                <div key={idx} className='w-full flex-shrink-0 cursor-pointer snap-start'>
                  <HOTestimonialContent data={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonialSection;

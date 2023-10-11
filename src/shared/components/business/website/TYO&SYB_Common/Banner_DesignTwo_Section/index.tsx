import React from 'react';
import BtnCommon from '@/components/common/customization/BtnCommon';
import { PreImage } from '@/components/common/customization/PreImage';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import { ChevronRight } from 'lucide-react';
import UseLinkRedirect from '@/utils/functions/UseLinkRedirect';
import useBreakPoint from '@/hooks/useBreakPoint';
import useTrans from '@/hooks/useTrans';

type Props = {
  breadcrumb: string[];
  data: Partial<IBaseSectionComponent>;
  className?: string;
  sectionCodeLink?: string;
};
const BannerDesignTwoSection = ({ breadcrumb, data, className, sectionCodeLink }: Props) => {
  const currentBreakPoint = useBreakPoint();
  const { trans } = useTrans();
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;
  return (
    <section id={data.section.code} className={`relative mb-10 w-full${className}`}>
      <div className='snap-x-mandatory scrollbar-none light:text-white relative flex max-h-[600px] overflow-hidden'>
        <div className='relative mx-auto flex w-full items-center justify-between'>
          <div className='absolute left-1/4 top-1/2 z-30 mx-auto flex w-[90%] -translate-x-[20%] -translate-y-1/2 transform flex-col items-start justify-start gap-3 text-white md:w-[60%] md:-translate-x-[30%]'>
            <div className='flex flex-col items-start justify-start gap-3'>
              <div className='mb-4 hidden items-center justify-center gap-3 md:flex'>
                {breadcrumb.map((item: string, idx: number) => (
                  <div key={idx} className='flex items-center justify-center gap-2'>
                    <p className={`text-sm ${idx === breadcrumb.length - 1 ? 'text-white' : 'text-[#FC5E03]'}`}>
                      {item}
                    </p>
                    {idx !== breadcrumb.length - 1 && <ChevronRight color='#FC5E03' />}
                  </div>
                ))}
              </div>
              <div className='flex w-full flex-col items-start justify-start gap-4'>
                {data.section.name.split('//').map((word, idx) => (
                  <h1 className='text-5xl font-semibold uppercase leading-[56px] text-white' key={idx}>
                    {word}
                  </h1>
                ))}
              </div>
              <div className='mt-5 flex w-full flex-col items-start justify-start'>
                {data.section.description.split('//').map((word, idx) => (
                  <p className='text-sm font-normal leading-5 md:text-lg md:leading-7' key={idx}>
                    {word}
                  </p>
                ))}
              </div>
            </div>
            <UseLinkRedirect sectionCode={sectionCodeLink || 'FormCTA'}>
              <BtnCommon title={trans.common.findOutMore} cls='bg-white text-orange-500 p-4 rounded-sm' />
            </UseLinkRedirect>
          </div>
          <div
            className={`mx-auto w-[100vw] ${
              currentBreakPoint === 'sm' ? 'h-[454px]' : 'h-[864px]'
            } relative overflow-hidden`}
          >
            <PreImage
              src={data.section.image as string}
              layer={true}
              alt={data.section.name as string}
              objectPosition='center'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerDesignTwoSection;

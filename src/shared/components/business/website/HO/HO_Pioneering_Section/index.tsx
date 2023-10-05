import React from 'react';
import BtnCommon from '@/components/common/customization/BtnCommon';
import { PreImage } from '@/components/common/customization/PreImage';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import { useTheme } from 'next-themes';
import { URLS_EXTERNAL } from '@/utils/constants';
import UseNextLink from '@/utils/functions/UseNextLink';
import useBreakPoint from '@/hooks/useBreakPoint';

type Props = {
  data: Partial<IBaseSectionComponent>;
  className?: string;
};
const HomePioneeringSection = ({ data, className }: Props) => {
  const { theme } = useTheme();
  const colorIcon = theme !== 'dark' ? '#F06426' : '#fff';
  const currentBreakPoint = useBreakPoint();
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;
  return (
    <section
      id={data.section.code}
      className={`relative z-30 mx-auto w-full ${className}`}
      style={{
        background: `linear-gradient(180deg, rgba(248, 133, 80, 0.3) -9.34%, rgba(255, 255, 255, 0.3) 129.73%)`,
      }}
    >
      <div className='mx-auto my-auto grid max-w-[1440px] grid-cols-1 items-center justify-between gap-8 px-4 py-6 md:grid-cols-12 md:px-24'>
        <div className='flex max-w-[1440px] flex-col items-start justify-start gap-3 md:col-span-8'>
          {/* <div className='flex w-full flex-col items-start justify-start'>
            {data.section.name.split('//').map((item, idx) => (
              <h1 key={idx} className='text-2xl font-semibold lg:text-4xl' style={{ letterSpacing: -1 }}>
                {item}
              </h1>
            ))}
          </div> */}
          <h1 className='text-2xl font-semibold lg:text-4xl'>{data.section.name}</h1>
          <p className='text-sm text-slate-500'>{data.section.description}</p>
          <UseNextLink path={URLS_EXTERNAL.ISPACE_EDU}>
            <BtnCommon
              title='Tìm hiểu thêm'
              cls='mt-3 w-[190px] md:w-[170px] border border-orange-500'
              colorSvg={colorIcon}
            />
          </UseNextLink>
        </div>
        <div
          className={`relative w-full scale-110 md:col-span-4 ${
            currentBreakPoint === 'sm' ? 'h-[100px]' : 'h-[100px]'
          }`}
        >
          <PreImage src={data.section.image} layer={false} alt={data.section.name} objectFit='contain' />
        </div>
      </div>
    </section>
  );
};

export default HomePioneeringSection;

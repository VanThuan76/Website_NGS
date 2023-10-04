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
      className={`relative z-30 w-full px-4 md:px-24 ${className}`}
      style={{
        background: `linear-gradient(180deg, rgba(248, 133, 80, 0.3) -9.34%, rgba(255, 255, 255, 0.3) 129.73%)`,
      }}
    >
      <div className='mx-auto my-auto grid w-full max-w-[1440px] grid-cols-1 items-center justify-between gap-5 py-14 md:grid-cols-2'>
        <div className='flex w-full flex-col items-start justify-start gap-3'>
          <h1 className='text-2xl font-medium lg:text-4xl'>{data.section.name}</h1>
          <p className='text-sm text-slate-500'>{data.section.description}</p>
          <UseNextLink path={URLS_EXTERNAL.ISPACE_EDU}>
            <BtnCommon
              title='Tìm hiểu thêm'
              cls='mt-3 w-[190px] md:w-[170px] border border-orange-500'
              colorSvg={colorIcon}
            />
          </UseNextLink>
        </div>
        <div className={`relative col-span-1 max-w-[600px] ${currentBreakPoint === 'sm' ? 'h-[100px]' : 'h-[150px]'}`}>
          <PreImage src={data.section.image} layer={false} alt={data.section.name} objectFit='contain' />
        </div>
      </div>
    </section>
  );
};

export default HomePioneeringSection;

import React from 'react';
import BtnCommon from '@/components/common/customization/BtnCommon';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import UseLinkRedirect from '@/utils/functions/UseLinkRedirect';

type Props = {
  data: Partial<IBaseSectionComponent>;
  className?: string;
};
const YNGDetailDirectionSetion = ({ data, className }: Props) => {
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;

  return (
    <section
      id={data.section.code}
      className={`relative z-30 my-10 max-h-[470px] w-screen px-4 md:max-h-[350px] md:px-24 lg:px-32 xl:px-40 ${className}`}
      style={{
        background: `linear-gradient(180deg, rgba(248, 133, 80, 0.3) -9.34%, rgba(255, 255, 255, 0.3) 129.73%)`,
      }}
    >
      <div className='mx-auto my-auto flex w-full max-w-[1440px] flex-col items-center justify-between gap-5 pb-4 pt-16 md:pb-8 lg:flex-row lg:pb-16 xl:pb-24'>
        <div className='flex w-full flex-col items-center justify-center gap-3'>
          <h1 className='text-3xl lg:text-4xl'>{data.section.name}</h1>
          <p className='text-center'>{data.section.description}</p>
          <UseLinkRedirect sectionCode='FormYNG'>
            <BtnCommon title='Khám phá ngay' cls='text-white bg-orange-500 p-4' />
          </UseLinkRedirect>
        </div>
      </div>
    </section>
  );
};

export default YNGDetailDirectionSetion;

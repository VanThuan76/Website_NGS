import React from 'react';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import { PreImage } from '@/components/common/customization/PreImage';
import BtnCommon from '@/components/common/customization/BtnCommon';
import TitleSection from '@/components/common/customization/TitleSection';
import { useTheme } from 'next-themes';
import UseLinkRouter from '@/utils/functions/UseLinkRouter';
import { URLS_SYSTEM } from '@/utils/constants';

type Props = {
  data: Partial<IBaseSectionComponent>;
  className?: string;
};
const HomeAboutUsSection = ({ data, className }: Props) => {
  const { theme } = useTheme();
  const colorIcon = theme !== 'dark' ? '#F06426' : '#fff';
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;

  return (
    <section id={data.section.code} className={`pb-4 md:pb-8 lg:pb-16 xl:pb-24 px-4 md:px-24 mt-[120px] ${className}`}>
      <div className='mb-20 w-full grid grid-cols-1 lg:grid-cols-2 justify-start items-start gap-20 '>
        <div className='w-full'>
          <PreImage
            src={data.section.image}
            height={370}
            width={650}
            layer={false}
            alt={data.section.name}
            className='w-full h-full object-contain'
          />
        </div>
        <div className='w-full flex flex-col justify-start items-start'>
          <TitleSection
            title='Về chúng tôi'
            name={data.section.name as string}
            description={data.section!.description as string}
            findMore={true}
            className='w-full flex flex-col justify-start items-start'
          />
          <UseLinkRouter url={URLS_SYSTEM.ES}>
            <BtnCommon title='Tìm hiểu thêm' cls='mt-3 w-[170px] border border-orange-500' colorSvg={colorIcon} />
          </UseLinkRouter>
        </div>
      </div>
      <div className='w-full flex flex-col lg:flex-row justify-center items-start gap-5 mt-16 bg-transparent overflow-hidden'>
        {data.components.map((item, idx) => {
          return (
            <div
              key={idx}
              className={`w-full dark:bg-[#1B1D35] ${
                data.components && data.components?.length - 1 !== idx && 'border-card-aboutUs-home'
              } p-5 flex flex-col justify-center items-center gap-5 text-center`}
            >
              <div className='text-orange-500 text-5xl'>{item.title}</div>
              <p className='w-2/3'>{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HomeAboutUsSection;
1;

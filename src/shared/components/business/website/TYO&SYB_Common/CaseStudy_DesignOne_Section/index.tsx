import BtnCommon from '@/components/common/customization/BtnCommon';
import { PreImage } from '@/components/common/customization/PreImage';
import TitleSection from '@/components/common/customization/TitleSection';
import { URLS_SYSTEM } from '@/utils/constants';
import UseLinkRouter from '@/utils/functions/UseLinkRouter';
import { useTheme } from 'next-themes';
import React from 'react';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';

type Props = {
  title: string;
  data: Partial<IBaseSectionComponent>;
  className?: string;
};

const CaseStudyDesignOneSection = ({ title, data, className }: Props) => {
  const { theme } = useTheme();
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;
  const colorIcon = theme !== 'dark' ? '#F06426' : '#fff';

  return (
    <section
      id={data.section.code}
      className={`px-4 md:px-24 lg:px-32 py-4 md:py-12 lg:py-24 overflow-hidden bg-[#051C2C] ${className}`}
    >
      <div className='w-full grid grid-cols-2 justify-center items-center gap-5 text-white'>
        <div className='cols-span-1 w-full flex flex-col justify-end items-end gap-10'>
          <TitleSection
            title={title}
            name={data.section!.name as string}
            description={data.section!.description as string}
            findMore={true}
            className='w-full flex flex-col justify-end items-end gap-3 text-end'
          />
          <UseLinkRouter url={URLS_SYSTEM.ES}>
            <BtnCommon cls='border-orange-500 bg-white px-4' title='Đăng ký ngay' colorSvg={colorIcon} />
          </UseLinkRouter>
        </div>
        <div className='relative w-full flex-shrink-0 snap-start'>
          <PreImage
            src={data.section.image}
            width={1980}
            height={500}
            alt={data.section.name}
            className='w-full h-full object-cover rounded-lg'
          />
        </div>
      </div>
    </section>
  );
};

export default CaseStudyDesignOneSection;

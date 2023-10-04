import BtnCommon from '@/components/common/customization/BtnCommon';
import { PreImage } from '@/components/common/customization/PreImage';
import TitleSection from '@/components/common/customization/TitleSection';
import UseLinkRedirect from '@/utils/functions/UseLinkRedirect';
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
      className={`w-screen px-4 md:px-24 py-4 md:py-12  overflow-hidden bg-[#051C2C] ${className}`}
    >
      <div className='w-full grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-5 text-white'>
        <div className='cols-span-1 w-full flex flex-col justify-start items-start gap-10'>
          <TitleSection
            title={title}
            name={data.section!.name as string}
            description={data.section!.description as string}
            findMore={true}
            className='w-full grid-cols-7 col-span-7 !gap-5 md:!gap-10 !text-left text-white'
          />
          <UseLinkRedirect sectionCode={'FormCTA'}>
            <BtnCommon cls='border-orange-500 bg-white px-4' title='Đăng ký ngay' colorSvg={colorIcon} />
          </UseLinkRedirect>
        </div>
        <div className='ols-span-1 block relative w-full h-[500px] rounded-lg overflow-hidden'>
          <PreImage src={data.section.image} alt={data.section.name} />
        </div>
      </div>
    </section>
  );
};

export default CaseStudyDesignOneSection;

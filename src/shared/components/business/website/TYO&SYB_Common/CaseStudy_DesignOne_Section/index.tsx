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
      className={`w-screen overflow-hidden bg-[#051C2C] px-4 py-4  md:px-24 md:py-12 ${className}`}
    >
      <div className='grid w-full grid-cols-1 items-center justify-center gap-5 text-white md:grid-cols-2'>
        <div className='cols-span-1 flex w-full flex-col items-start justify-start gap-10'>
          <TitleSection
            title={title}
            name={data.section!.name as string}
            description={data.section!.description as string}
            findMore={true}
            className='col-span-7 w-full grid-cols-7 !gap-5 !text-left text-white md:!gap-10'
          />
          <UseLinkRedirect sectionCode={'FormCTA'}>
            <BtnCommon cls='border-orange-500 bg-white px-4' title='Đăng ký ngay' colorSvg={colorIcon} />
          </UseLinkRedirect>
        </div>
        <div className='ols-span-1 relative block h-[500px] w-full overflow-hidden rounded-lg'>
          <PreImage src={data.section.image} alt={data.section.name} />
        </div>
      </div>
    </section>
  );
};

export default CaseStudyDesignOneSection;

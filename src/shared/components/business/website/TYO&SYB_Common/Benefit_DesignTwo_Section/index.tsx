import React from 'react';
import BtnCommon from '@/components/common/customization/BtnCommon';
import TitleSection from '@/components/common/customization/TitleSection';
import { PreImage } from '@/components/common/customization/PreImage';
import { useTheme } from 'next-themes';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import IconCheckSuccess from '@/components/icon/TYO&SYB_Common/IconCheckSuccess';
import UseLinkRedirect from '@/utils/functions/UseLinkRedirect';

type Props = {
  title: string;
  data: Partial<IBaseSectionComponent>;
  className?: string;
};

const BenefitDesignTwoSection = ({ title, data, className }: Props) => {
  const { theme } = useTheme();
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;
  const colorIcon = theme !== 'dark' ? '#F06426' : '#fff';

  return (
    <section id={data.section.code} className={`relative overflow-hidden ${className} bg-[#051C2C]`}>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-5'>
        <div className='w-full px-4 py-2 md:px-24 md:py-20 flex flex-col justify-start items-start gap-8 text-white'>
          <TitleSection
            title={title}
            name={data.section.name as string}
            description={data.section.description as string}
            findMore={true}
            className='w-full !text-left text-white'
          />
          {data.components.map((item, idx) => (
            <div key={idx} className='flex justify-start items-start gap-2'>
              <IconCheckSuccess className='w-[24px] h-[24px]' />
              <p className='w-full'>{item.title}</p>
            </div>
          ))}
          <UseLinkRedirect sectionCode={'FormCTA'}>
            <BtnCommon cls='border border-orange-500 !bg-none px-4' title='Đăng ký ngay' colorSvg={colorIcon} />
          </UseLinkRedirect>
        </div>
        <div className='relative w-full h-full object-cover overflow-hidden'>
          <PreImage src={data.section.image} width={1980} height={1000} alt={data.section.name} />
        </div>
      </div>
    </section>
  );
};

export default BenefitDesignTwoSection;

import React from 'react';
import BtnCommon from '@/components/common/customization/BtnCommon';
import TitleSection from '@/components/common/customization/TitleSection';
import { PreImage } from '@/components/common/customization/PreImage';
import { useTheme } from 'next-themes';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import IconCheckSuccess from '@/components/icon/TYO&SYB_Common/IconCheckSuccess';

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
    <section id={data.section.code} className={`px-4 md:px-24 lg:px-32 overflow-hidden ${className} bg-[#051C2C]`}>
      <div className='w-full grid grid-cols-2 justify-center items-center gap-5'>
        <div className='cols-span-1 w-full flex flex-col justify-start items-start gap-3 text-white'>
          <TitleSection
            title={title}
            name={data.section!.name as string}
            description={data.section!.description as string}
            findMore={true}
            className='w-full flex flex-col justify-start items-start gap-3'
          />
          {data.components.map((item, idx) => (
            <div key={idx} className='flex justify-start items-start gap-5'>
              <IconCheckSuccess />
              <p>{item.title}</p>
            </div>
          ))}
          <BtnCommon cls='border-orange-500 bg-white px-2' title='Go Carrer' colorSvg={colorIcon} />
        </div>
        <div className='relative w-full flex-shrink-0 snap-start'>
          <PreImage
            src={data.section.image}
            width={1980}
            height={704}
            alt={data.section.name}
            className='w-full h-full object-cover'
          />
        </div>
      </div>
    </section>
  );
};

export default BenefitDesignTwoSection;

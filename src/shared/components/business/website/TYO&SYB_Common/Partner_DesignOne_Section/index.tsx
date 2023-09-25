import React from 'react';
import BtnCommon from '@/components/common/customization/BtnCommon';
import { PreImage } from '@/components/common/customization/PreImage';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import UseLinkRouter from '@/utils/functions/UseLinkRouter';
import { URLS_SYSTEM } from '@/utils/constants';
import { useTheme } from 'next-themes';

type Props = {
  title?: string;
  data: Partial<IBaseSectionComponent>;
  className?: string;
};
const PartnerDesignOneSection = ({ title, data, className }: Props) => {
  const { theme } = useTheme();
  const colorIcon = theme !== 'dark' ? '#F06426' : '#fff';
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;
  return (
    <section
      id={data.section.code}
      className={`relative w-full my-10 z-30 px-4 md:px-24 ${className}`}
      style={{
        background: `linear-gradient(180deg, rgba(248, 133, 80, 0.3) -9.34%, rgba(255, 255, 255, 0.3) 129.73%)`,
      }}
    >
      <div className='max-w-[1440px] w-full mx-auto my-auto flex flex-col lg:flex-row gap-5 justify-between items-center py-14'>
        <div className='w-full flex flex-col justify-start items-start gap-3'>
          <h1 className='text-2xl lg:text-4xl font-medium'>{data.section.name}</h1>
          <p>{data.section.description}</p>
          <UseLinkRouter url={URLS_SYSTEM.ES}>
            <BtnCommon title='Tìm hiểu thêm' cls='mt-3 w-[170px] border border-orange-500' colorSvg={colorIcon} />
          </UseLinkRouter>
        </div>
        <div className='w-full'>
          <PreImage
            src={data.section.image}
            height={150}
            width={600}
            layer={false}
            alt={data.section.name}
            className='w-full object-contain'
          />
        </div>
      </div>
    </section>
  );
};

export default PartnerDesignOneSection;

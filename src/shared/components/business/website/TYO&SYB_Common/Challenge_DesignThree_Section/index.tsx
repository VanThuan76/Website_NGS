import BtnCommon from '@/components/common/customization/BtnCommon';
import { PreImage } from '@/components/common/customization/PreImage';
import TitleSection from '@/components/common/customization/TitleSection';
import { URLS_SYSTEM } from '@/utils/constants';
import UseLinkRouter from '@/utils/functions/UseLinkRouter';
import React from 'react';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';

type Props = {
  title: string;
  data: Partial<IBaseSectionComponent>;
  className?: string;
};

const ChallengeDesignThreeSection = ({ title, data, className }: Props) => {
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;

  return (
    <section id={data.section.code} className={`md: lg: overflow-hidden ${className} bg-[#051C2C]`}>
      <div className='w-full grid grid-cols-2 justify-center items-center gap-5'>
        <div className='cols-span-1 w-full flex flex-col justify-start items-start gap-3 px-20 py-24'>
          <TitleSection title={title} className='gap-5 text-2xl font-medium' />
          <TitleSection
            name={data.section!.name as string}
            description={data.section!.description as string}
            findMore={true}
            className='w-full flex flex-col justify-start items-start gap-10 text-white'
          />
          <UseLinkRouter url={URLS_SYSTEM.NOTFOUND}>
            <BtnCommon title='Đăng ký ngay' cls='border-orange-500' />
          </UseLinkRouter>
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

export default ChallengeDesignThreeSection;

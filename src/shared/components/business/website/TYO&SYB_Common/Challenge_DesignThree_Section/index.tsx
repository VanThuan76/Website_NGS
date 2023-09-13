import BtnCommon from '@/components/common/customization/BtnCommon';
import { PreImage } from '@/components/common/customization/PreImage';
import TitleSection from '@/components/common/customization/TitleSection';
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
    <section
      id={data.section.code}
      className={`px-4 md:px-24 lg:px-32 overflow-hidden ${className} bg-[#051C2C]`}
    >
      <div className='w-full grid grid-cols-2 justify-center items-center gap-5'>
        <div className='cols-span-1 w-full flex flex-col justify-start items-start gap-3'>
          <TitleSection
            title={title}
            name={data.section!.name as string}
            description={data.section!.description as string}
            findMore={true}
            className='w-full flex flex-col justify-start items-start gap-3 text-white'
          />
          <BtnCommon title='Xem giá chi tiết' cls='border-orange-500' />
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

import BtnCommon from '@/components/common/customization/BtnCommon';
import { PreImage } from '@/components/common/customization/PreImage';
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
    <section id={data.section.code} className={`overflow-hidden ${className} bg-[#051C2C]`}>
      <div className='w-full grid grid-cols-2 justify-center items-center gap-5'>
        <div className='cols-span-1 w-full flex flex-col justify-start items-start gap-3 px-20 py-24'>
          <p className='text-sm md:text-2xl text-orange-500 font-medium'>{title}</p>
          <div className='w-full flex flex-col justify-start items-start gap-12'>
            <div className='flex flex-col gap-2'>
              {data.section.name.split('//').map((word, idx) => (
                <p className='text-white mr-[10px] w-full flex flex-col text-2xl md:text-4xl font-medium' key={idx}>
                  {word}
                </p>
              ))}
            </div>
            <div className='max-h-[450px] pr-4 challenge-designThree-section-with-scrollbar flex flex-col gap-2'>
              {data.section.description.split('//').map((word, idx) => (
                <p className='text-sm md:text-base font-medium not-italic text-[#757575] dark:text-[#C2C0BF]' key={idx}>
                  {word}
                </p>
              ))}
            </div>
          </div>
          <UseLinkRouter url={URLS_SYSTEM.NOTFOUND}>
            <BtnCommon title='Đăng ký ngay' cls='border border-orange-500 !bg-none cursor-pointer' />
          </UseLinkRouter>
        </div>
        <div className='relative w-full h-full flex-shrink-0 snap-start'>
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

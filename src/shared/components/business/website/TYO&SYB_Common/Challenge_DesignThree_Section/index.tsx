import BtnCommon from '@/components/common/customization/BtnCommon';
import { PreImage } from '@/components/common/customization/PreImage';
import UseLinkRedirect from '@/utils/functions/UseLinkRedirect';
import React from 'react';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';

type Props = {
  title: string;
  data: Partial<IBaseSectionComponent>;
  className?: string;
  sectionCodeLink?: string;
};

const ChallengeDesignThreeSection = ({ title, data, className, sectionCodeLink }: Props) => {
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;

  return (
    <section id={data.section.code} className={`w-screen overflow-hidden ${className} bg-[#051C2C]`}>
      <div className='grid w-full grid-cols-1 items-center justify-center gap-5 md:grid-cols-2'>
        <div className='cols-span-1 flex w-full flex-col items-start justify-start gap-3 px-20 py-24'>
          <p className='text-sm font-medium text-orange-500 md:text-2xl'>{title}</p>
          <div className='flex w-full flex-col items-start justify-start gap-12'>
            <div className='flex flex-col gap-2'>
              {data.section.name.split('//').map((word, idx) => (
                <p className='mr-[10px] flex w-full flex-col text-2xl font-medium text-white md:text-4xl' key={idx}>
                  {word}
                </p>
              ))}
            </div>
            <div className='challenge-designThree-section-with-scrollbar flex max-h-[450px] flex-col gap-2 pr-4'>
              {data.section.description.split('//').map((word, idx) => (
                <p className='text-sm font-medium not-italic text-[#757575] dark:text-[#C2C0BF] md:text-base' key={idx}>
                  {word}
                </p>
              ))}
            </div>
          </div>
          <UseLinkRedirect sectionCode={'FormCTA'}>
            <BtnCommon title='Đăng ký ngay' cls='border border-orange-500 !bg-none' />
          </UseLinkRedirect>
        </div>
        <div className='relative h-full w-full'>
          <PreImage src={data.section.image} alt={data.section.name} />
        </div>
      </div>
    </section>
  );
};

export default ChallengeDesignThreeSection;

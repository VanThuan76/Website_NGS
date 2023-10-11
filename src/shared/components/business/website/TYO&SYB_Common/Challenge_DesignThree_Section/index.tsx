import BtnCommon from '@/components/common/customization/BtnCommon';
import { PreImage } from '@/components/common/customization/PreImage';
import BackgroundChallengeDesignThreeSection from '@/components/icon/TYO&SYB_Common/BackgroundChallengeDesignThreeSection';
import useTrans from '@/hooks/useTrans';
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
  const { trans } = useTrans();
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;

  return (
    <section id={data.section.code} className={`w-screen overflow-hidden ${className} bg-[#051C2C]`}>
      <div className='mx-auto grid max-w-[1440px] grid-cols-1 items-center justify-center gap-5 px-4 md:grid-cols-2 md:px-24'>
        <div className='cols-span-1 relative flex w-full flex-col items-start justify-start gap-3 px-4 py-6 md:px-20 md:py-24'>
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
                <p
                  className='mb-3 text-sm font-medium not-italic text-[#757575] dark:text-[#C2C0BF] md:text-base'
                  key={idx}
                >
                  {word}
                </p>
              ))}
            </div>
          </div>
          <UseLinkRedirect sectionCode={'FormCTA'}>
            <BtnCommon title={trans.common.connectUs} cls='border border-orange-500 !bg-none' />
          </UseLinkRedirect>
          <BackgroundChallengeDesignThreeSection className='absolute left-0 top-0 h-full w-full' />
        </div>
        <div className='relative h-full w-full'>
          <PreImage src={data.section.image} alt={data.section.name} />
        </div>
      </div>
    </section>
  );
};

export default ChallengeDesignThreeSection;

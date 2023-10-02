import { PreImage } from '@/components/common/customization/PreImage';
import TitleSection from '@/components/common/customization/TitleSection';
import { splitTextToArrayByDoubleSlash } from '@/utils/functions/splitTextToArray';
import React, { useState } from 'react';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import { IComponents } from 'src/shared/schemas/typedef/IComponents';

type Props = {
  title: string;
  data: Partial<IBaseSectionComponent>;
  className?: string;
};

const ChallengeDesignTwoSection = ({ title, data, className }: Props) => {
  const [selectedTab, setSelectedTab] = useState<Partial<IComponents> | undefined>(() => {
    if (data.components && data.components.length > 0) return data.components[0];
    else return undefined;
  });
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;
  return (
    <section id={data.section.code} className={`p-4 md:p-24 overflow-hidden ${className} bg-[#051C2C]`}>
      <TitleSection
        title={title}
        name={data.section.name as string}
        description={data.section.description as string}
        findMore={true}
        className='w-full grid-cols-7 col-span-7 text-center text-white mb-5'
      />
      <div
        className='relative w-full min-h-[450px]'
        style={{
          background: `linear-gradient(90deg, #051C2C 32.24%, rgba(5, 28, 44, 0.00) 68.65%), lightgray 247.461px -16.325px / 70.829% 108.857% no-repeat`,
        }}
      >
        {data.components.map((item, idx) => (
          <div key={idx} className='w-full grid grid-cols-3 justify-start items-start gap-10 text-white'>
            <div
              onClick={() => setSelectedTab(data && data.components && data.components[idx])}
              className={`w-full cols-span-1 cursor-pointer ${selectedTab === item ? 'bg-[#FC5E03]' : 'bg-[#242D3C]'}`}
            >
              <div className='p-6'>{item.title}</div>
            </div>
            <div className='w-full cols-span-2'>
              <div className='absolute top-0'>
                <div className='relative w-full h-full flex-shrink-0 snap-start'>
                  <div className='absolute h-full flex flex-col justify-center items-start gap-4 top-1/2 left-1/3 transform -translate-x-[40%] -translate-y-1/2 z-30 text-white'>
                    <p className='text-orange-500 text-3xl'>{selectedTab?.id}.</p>
                    <h1 className='text-xl md:text-2xl font-semibold'>{selectedTab?.description}</h1>
                    <div className='w-full flex flex-col justify-start items-start'>
                      {splitTextToArrayByDoubleSlash(selectedTab?.content || '').map((item: string, idx: number) => (
                        <p key={idx} className='mt-5 pt-2 text-sm md:text-base'>
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className='relative w-[850px] h-[450px] blur-image'>
                    <PreImage src={selectedTab?.image || ''} alt={item.title} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChallengeDesignTwoSection;

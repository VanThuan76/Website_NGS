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
    <section id={data.section.code} className={`w-screen overflow-hidden p-4 md:p-24 ${className} bg-[#051C2C]`}>
      <TitleSection
        title={title}
        name={data.section.name as string}
        description={data.section.description as string}
        findMore={true}
        className='col-span-7 mb-5 w-full grid-cols-7 text-center text-white'
      />
      <div
        className='relative min-h-[450px] w-full'
        style={{
          background: `linear-gradient(90deg, #051C2C 32.24%, rgba(5, 28, 44, 0.00) 68.65%), lightgray 247.461px -16.325px / 70.829% 108.857% no-repeat`,
        }}
      >
        {data.components.map((item, idx) => (
          <div key={idx} className='grid w-full grid-cols-3 items-start justify-start gap-10 text-white'>
            <div
              onClick={() => setSelectedTab(data && data.components && data.components[idx])}
              className={`cols-span-1 w-full cursor-pointer ${selectedTab === item ? 'bg-[#FC5E03]' : 'bg-[#242D3C]'}`}
            >
              <div className='p-6'>{item.title}</div>
            </div>
            <div className='col-span-2 w-full'>
              <div className='absolute top-0'>
                <div className='relative h-full w-full flex-shrink-0 snap-start'>
                  <div className='absolute left-1/3 top-1/2 z-30 flex h-full -translate-x-[40%] -translate-y-1/2 transform flex-col items-start justify-center gap-4 text-white'>
                    <p className='text-3xl text-orange-500'>{selectedTab?.id}.</p>
                    <h1 className='text-xl font-semibold md:text-2xl'>{selectedTab?.description}</h1>
                    <div className='flex w-full flex-col items-start justify-start'>
                      {splitTextToArrayByDoubleSlash(selectedTab?.content || '').map((item: string, idx: number) => (
                        <p key={idx} className='mt-5 pt-2 text-sm md:text-base'>
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className='blur-image relative col-span-1 h-[450px] w-[950px]'>
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

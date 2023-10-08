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
    <section id={data.section.code} className={`w-full overflow-hidden ${className} bg-[#051C2C]`}>
      <div className='mx-auto max-w-[1440px] p-4 md:p-24'>
        <TitleSection
          title={title}
          name={data.section.name as string}
          description={data.section.description as string}
          findMore={true}
          className='col-span-7 w-full grid-cols-7 !gap-2 text-center text-white'
        />
        <div className='relative mx-auto my-14 h-full w-full'>
          {data.components.map((item, idx) => (
            <div key={idx} className='grid w-full grid-cols-1 items-start justify-start text-white md:grid-cols-3'>
              <div
                onClick={() => setSelectedTab(data && data.components && data.components[idx])}
                className={`z-40 col-span-1 h-full w-full cursor-pointer ${
                  selectedTab === item ? 'bg-[#FC5E03]' : 'bg-[#242D3C]'
                }`}
              >
                <div className='px-8 py-6'>
                  <h1 className='text-xl'>{item.title}</h1>
                </div>
              </div>
              <div className='col-span-1 h-full w-full md:col-span-2'>
                <div className='absolute right-0 top-4 z-30 h-full w-[65%]'>
                  <div className='relative h-full w-[65%]'>
                    <div className='absolute flex-col items-start justify-center text-white'>
                      <p className='text-3xl text-orange-500'>{selectedTab?.id}.</p>
                      <h1 className='text-xl font-semibold md:text-2xl'>{selectedTab?.description}</h1>
                      <div className='flex w-full flex-col items-start justify-start pt-8'>
                        {splitTextToArrayByDoubleSlash(selectedTab?.content || '').map((item: string, idx: number) => (
                          <p key={idx} className='mt-5 text-sm md:text-base'>
                            {item}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='absolute top-0 z-10 h-full w-[65%]'>
                  <PreImage
                    src={selectedTab?.image || ''}
                    alt={item.title}
                    className='h-full w-full bg-gradient-to-l from-[#051D2E] to-[#000000] opacity-100 blur-0'
                    layer={true}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChallengeDesignTwoSection;

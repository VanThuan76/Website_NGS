import { PreImage } from '@/components/common/customization/PreImage';
import TitleSection from '@/components/common/customization/TitleSection';
import React, { useState } from 'react';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import { IComponents } from 'src/shared/schemas/typedef/IComponents';

type Props = {
  title: string;
  data: Partial<IBaseSectionComponent>;
  className?: string;
};

const ChallengeDesignTwoSection = ({ title, data, className }: Props) => {
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;
  const [selectedTab, setSelectedTab] = useState<Partial<IComponents> | undefined>(() => {
    if (data.components && data.components.length > 0) return data.components[0];
    else return undefined;
  });

  return (
    <section
      id={data.section.code}
      className={`pb-4 md:pb-8 lg:pb-16 xl:pb-24 px-4 md:px-24 lg:px-32 xl:px-52 2xl:px-96 overflow-hidden ${className} bg-[#051C2C]`}
    >
      <TitleSection
        title={title}
        name={data.section!.name as string}
        description={data.section!.description as string}
        findMore={true}
        className='w-full flex flex-col justify-center items-center gap-3 text-white mb-5'
      />
      <div className='relative w-full min-h-[450px]'>
        {data.components.map((item, idx) => (
          <div key={idx} className='w-full grid grid-cols-3 justify-start items-start gap-10'>
            <div
              onClick={() => setSelectedTab(data && data.components && data.components[idx])}
              className={`w-full cols-span-1 cursor-pointer ${selectedTab === item ? 'bg-[#FC5E03]' : 'bg-[#242D3C]'}`}
            >
              <div className='p-4'>{item.title}</div>
            </div>
            <div className='w-full cols-span-2'>
              <div className='absolute top-0'>
                <div className='relative w-full flex-shrink-0 snap-start'>
                  <div className='absolute top-1/2 left-1/3 transform -translate-x-1/3 -translate-y-1/2 z-30 text-white'>
                    <p>{selectedTab?.id}.</p>
                    <h1 className='text-xl md:text-2xl font-semibold'>{selectedTab?.description}</h1>
                    <p className='text-sm md:text-base'>{selectedTab?.content}</p>
                  </div>
                  <PreImage
                    src={selectedTab?.image || ''}
                    width={1980}
                    height={360}
                    alt={item.title}
                    className='w-full object-cover'
                  />
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

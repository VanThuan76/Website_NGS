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

const ClientStoriesDesignOneSection = ({ title, data, className }: Props) => {
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;
  const [selectedTab, setSelectedTab] = useState<Partial<IComponents> | undefined>(() => {
    if (data.components && data.components.length > 0) return data.components[0];
    else return undefined;
  });

  return (
    <section
      id={data.section.code}
      className={`pb-4 px-4 md:px-24 lg:px-32 overflow-hidden ${className} bg-[#051C2C]`}
    >
      <div className='relative w-full min-h-[450px]'>
        {data.components.map((item, idx) => (
          <div key={idx} className='w-full grid grid-cols-2 justify-center items-center gap-5'>
            <div
              onClick={() => setSelectedTab(data && data.components && data.components[idx])}
              className={`w-full cols-span-1 cursor-pointer`}
            >
              <div className='p-4'>{item.title}</div>
              <div className=' text-white'>
                <p>{selectedTab?.id}.</p>
                <h1 className='text-xl md:text-2xl font-semibold'>{selectedTab?.description}</h1>
                <p className='text-sm md:text-base'>{selectedTab?.content}</p>
              </div>
            </div>
            <div className='w-full cols-span-1'>
              <div className='absolute top-1/2 transform -translate-y-1/2'>
                <div className='relative w-full flex-shrink-0 snap-start'>
                  <PreImage
                    src={selectedTab?.image || ''}
                    width={1980}
                    height={511}
                    alt={item.title}
                    className='w-full object-cover rounded-lg'
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

export default ClientStoriesDesignOneSection;

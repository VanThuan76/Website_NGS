import BtnCommon from '@/components/common/customization/BtnCommon';
import { PreImage } from '@/components/common/customization/PreImage';
import TitleSection from '@/components/common/customization/TitleSection';
import { URLS_SYSTEM } from '@/utils/constants';
import UseLinkRouter from '@/utils/functions/UseLinkRouter';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import { IComponents } from 'src/shared/schemas/typedef/IComponents';
import ESPeopleResponsive from './ESPeopleResponsive';

type Props = {
  title: string;
  data: Partial<IBaseSectionComponent>;
  className?: string;
};

const ESPeopleSection = ({ title, data, className }: Props) => {
  const [selectedTab, setSelectedTab] = useState<Partial<IComponents> | undefined>(() => {
    if (data.components && data.components.length > 0) return data.components[0];
    else return undefined;
  });
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;
  const contentAnimated = {
    active: {
      borderColor: '#fff',
      color: '#fff',
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    inactive: {
      borderColor: '#C2C0BF',
      color: '#C2C0BF',
      opacity: 0.8,
    },
  };
  return (
    <section id={data.section.code} className={`max-w-[1440px] ${className}`}>
      <TitleSection
        title={title}
        name={data.section!.name as string}
        description={data.section!.description as string}
        findMore={true}
        className='w-full flex flex-col justify-start items-start gap-3'
      />
      <div className='max-w-[1440px] mx-auto mt-3 hidden md:grid grid-cols-2 justify-center items-center gap-10 overflow-hidden'>
        <div className='col-span-1 relative w-full h-[500px]'>
          <PreImage src={data.section.image} alt={data.section.name} />
        </div>
        <div className='col-span-1 w-full flex flex-col justify-start items-start gap-3'>
          <div className='relative w-full min-h-[500px] md:min-h-[450px]'>
            {data.components.map((item, idx) => (
              <div key={idx} className='absolute top-0 w-full flex flex-col justify-start items-start gap-10'>
                <div className='flex flex-col justify-start items-start gap-2'>
                  <p className='text-xl md:text-3xl'>{selectedTab?.title}</p>
                  <p className='font-normal text-[#9A3902]'>{selectedTab?.description}</p>
                </div>
                {selectedTab && selectedTab?.content!.split('//').length > 0 ? (
                  <div className='w-full flex flex-col justify-start items-start gap-3'>
                    {selectedTab?.content?.split('//').map((item, index) => (
                      <p key={index} className='font-normal text-[#9A3902] italic'>
                        {item}
                      </p>
                    ))}
                  </div>
                ) : (
                  <p className='font-normal text-[#9A3902]'>{selectedTab?.content}</p>
                )}
              </div>
            ))}
          </div>
          <ul className='hidden md:flex items-center justify-between gap-5'>
            {data.components.map((item, idx) => (
              <motion.li
                key={idx}
                initial='inactive'
                animate={selectedTab === item ? 'active' : 'inactive'}
                variants={contentAnimated}
                className={`px-5 pb-3 border-b-2 ${
                  item === selectedTab ? '!text-[#FC5E03] !border-b-[#FC5E03]' : '!text-[#FECFB3] !border-b-[#FECFB3]'
                } cursor-pointer font-medium`}
                onClick={() => setSelectedTab(data && data.components && data.components[idx])}
              >
                {item.description.split('&')[0]}
                {item === selectedTab ? <motion.div layoutId='underline' /> : null}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
      <ESPeopleResponsive data={data.components} />
    </section>
  );
};

export default ESPeopleSection;

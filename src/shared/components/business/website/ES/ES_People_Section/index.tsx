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
    <section id={data.section.code} className={`px-4 md:px-24 overflow-hidden ${className}`}>
      <TitleSection
        title={title}
        name={data.section!.name as string}
        description={data.section!.description as string}
        findMore={true}
        className='w-full flex flex-col justify-start items-start gap-3'
      />
      <div className='hidden md:grid mt-3 relative w-full grid-cols-2 justify-start items-start gap-10'>
        <PreImage
          src={data.section.image}
          width={1980}
          height={500}
          alt={data.section.name}
          className='w-full h-full object-cover'
        />
        <div className='cols-span-1 w-full flex flex-col justify-start items-start gap-3'>
          <div className='relative w-full min-h-[500px] md:min-h-[350px]'>
            {data.components.map((item, idx) => (
              <div key={idx} className='absolute top-0 w-full flex flex-col justify-start items-start gap-10'>
                <div className='flex flex-col justify-start items-start gap-2'>
                  <p className='text-xl md:text-3xl'>{selectedTab?.title}</p>
                  <p className='font-normal text-[#9A3902]'>{selectedTab?.description}</p>
                </div>
                <p className='font-normal text-[#9A3902]'>{selectedTab?.content}</p>
              </div>
            ))}
          </div>
          <ul className='absolute bottom-5 hidden md:flex items-center justify-between gap-5'>
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
                {`${idx + 1} of ${data.components?.length}`}
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

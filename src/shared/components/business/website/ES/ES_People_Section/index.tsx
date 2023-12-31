import BtnCommon from '@/components/common/customization/BtnCommon';
import { PreImage } from '@/components/common/customization/PreImage';
import TitleSection from '@/components/common/customization/TitleSection';
import BackgroundPeople from '@/components/icon/ES/BackgroundPeople';
import QuoteIcon from '@/components/icon/TYO&SYB_Common/QuoteIcon';
import useBreakPoint from '@/hooks/useBreakPoint';
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
  const currentBreakPoint = useBreakPoint();
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
    <section id={data.section.code} className={`mx-auto w-screen px-4 py-10 md:px-24 lg:py-20 ${className}`}>
      <TitleSection
        title={title}
        name={data.section!.name as string}
        description={data.section!.description as string}
        findMore={true}
        className='z-20 col-span-7 grid-cols-7 !gap-0 bg-white !text-left'
      />
      <div className='relative mx-auto mt-3 hidden max-w-[1440px] grid-cols-5 items-center justify-between gap-10 overflow-hidden md:grid'>
        <div className='relative col-span-2 h-[500px] w-full overflow-hidden rounded-[16px]'>
          <PreImage
            src={selectedTab?.image as string}
            alt={selectedTab?.title as string}
            objectPosition={`${currentBreakPoint === 'sm' ? 'bottom' : 'center'}`}
          />
        </div>
        <div className='z-20 col-span-3 flex w-full flex-col items-start justify-start gap-3'>
          <div className='relative min-h-[500px] w-full md:min-h-[450px]'>
            {data.components.map((item, idx) => (
              <div key={idx} className='absolute top-0 mt-2 flex w-full flex-col items-start justify-start gap-10'>
                <QuoteIcon />
                <div className='flex flex-col items-start justify-start gap-2'>
                  <h1 className='text-xl font-medium md:text-3xl'>{selectedTab?.title}</h1>
                  <p className='font-normal'>{selectedTab?.description}</p>
                </div>
                {selectedTab && selectedTab?.content!.split('//').length > 1 ? (
                  <div className='flex w-full flex-col items-start justify-start gap-3'>
                    {selectedTab?.content?.split('//').map((item, index) => (
                      <p key={index} className='font-normal italic text-[#757575]'>
                        {item}
                      </p>
                    ))}
                  </div>
                ) : (
                  <p className='font-normal text-[#757575]'>{selectedTab?.content}</p>
                )}
              </div>
            ))}
          </div>
          <ul className='hidden items-center justify-between gap-5 md:flex'>
            {data.components.map((item, idx) => (
              <motion.li
                key={idx}
                initial='inactive'
                animate={selectedTab === item ? 'active' : 'inactive'}
                variants={contentAnimated}
                className={`border-b-2 px-5 pb-3 ${
                  item === selectedTab ? '!border-b-[#FC5E03] !text-[#FC5E03]' : '!border-b-[#FECFB3] !text-[#FECFB3]'
                } cursor-pointer font-medium`}
                onClick={() => setSelectedTab(data && data.components && data.components[idx])}
              >
                {idx === 0 ? item.description.split('&')[0] : item.description.split('&')[1]}
                {item === selectedTab ? <motion.div layoutId='underline' /> : null}
              </motion.li>
            ))}
          </ul>
        </div>
        {/* <BackgroundPeople className='absolute bottom-0 left-0 z-10 mt-3 h-screen w-screen -translate-x-48 translate-y-24 object-cover' /> */}
      </div>
      <ESPeopleResponsive data={data.components} />
    </section>
  );
};

export default ESPeopleSection;

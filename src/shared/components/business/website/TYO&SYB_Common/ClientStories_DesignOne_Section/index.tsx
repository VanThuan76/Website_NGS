import BtnCommon from '@/components/common/customization/BtnCommon';
import { PreImage } from '@/components/common/customization/PreImage';
import TitleSection from '@/components/common/customization/TitleSection';
import QuoteIcon from '@/components/icon/TYO&SYB_Common/QuoteIcon';
import { URLS_SYSTEM } from '@/utils/constants';
import UseLinkRouter from '@/utils/functions/UseLinkRouter';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import { IComponents } from 'src/shared/schemas/typedef/IComponents';

type Props = {
  title: string;
  data: Partial<IBaseSectionComponent>;
  className?: string;
};

const ClientStoriesDesignOneSection = ({ title, data, className }: Props) => {
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
    <section id={data.section.code} className={`w-screen px-4 md:px-24 overflow-hidden ${className} bg-[#051C2C]`}>
      <div className='relative w-full grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-5'>
        <div className='cols-span-1 w-full flex flex-col justify-start items-start gap-3 py-20'>
          <TitleSection
            title={title}
            name={data.section!.name as string}
            description={data.section!.description as string}
            findMore={true}
            className='w-full font-bold text-orange-500'
          />
          <QuoteIcon />
          <div className='relative w-full min-h-[450px]'>
            {data.components.map((item, idx) => (
              <div
                key={idx}
                className='absolute top-0 w-full flex flex-col justify-start items-start gap-10 text-white'
              >
                <div className='max-h-[200px] pr-4 clientStories-designOne-section-with-scrollbar flex flex-col gap-2'>
                  {item.content.split('//').map((word, idx) => (
                    <p className='text-lg md:text-2xl' key={idx}>
                      {word}
                    </p>
                  ))}
                </div>
                <div className='flex justify-center items-center gap-5'>
                  <div className='relative w-[70px] h-[70px] rounded-lg overflow-hidden'>
                    <PreImage src={item.image} alt={item.title} />
                  </div>
                  <div className='flex flex-col justify-start items-start'>
                    <p>{item.title}</p>
                    <p className='font-thin'>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <UseLinkRouter url={URLS_SYSTEM.ES}>
            <BtnCommon title='All clients stories' cls='absolute bottom-24 left-0 border border-orange-500 !bg-none' />
          </UseLinkRouter>
          {/* <ul className='absolute bottom-10 hidden md:flex items-center justify-between gap-5'>
            {data.components.map((item, idx) => (
              <motion.li
                key={idx}
                initial='inactive'
                animate={selectedTab === item ? 'active' : 'inactive'}
                variants={contentAnimated}
                className={`px-5 pb-3 border-b-4 ${
                  item === selectedTab ? 'text-white' : 'text-slate-300 '
                } cursor-pointer font-medium`}
                onClick={() => setSelectedTab(data && data.components && data.components[idx])}
              >
                {`${idx + 1} of ${data.components?.length}`}
                {item === selectedTab ? <motion.div layoutId='underline' /> : null}
              </motion.li>
            ))}
          </ul> */}
        </div>
        <div className='relative w-full h-[550px] rounded-lg overflow-hidden'>
          <PreImage src={data.section.image} alt={data.section.name} />
        </div>
      </div>
    </section>
  );
};

export default ClientStoriesDesignOneSection;

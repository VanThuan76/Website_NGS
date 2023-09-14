import BtnCommon from '@/components/common/customization/BtnCommon';
import { PreImage } from '@/components/common/customization/PreImage';
import TitleSection from '@/components/common/customization/TitleSection';
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
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;
  const [selectedTab, setSelectedTab] = useState<Partial<IComponents> | undefined>(() => {
    if (data.components && data.components.length > 0) return data.components[0];
    else return undefined;
  });
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
    <section id={data.section.code} className={`px-4 md:px-24 lg:px-32 overflow-hidden ${className} bg-[#051C2C]`}>
      <div className='relative w-full grid grid-cols-2 justify-center items-center gap-5'>
        <div className='cols-span-1 w-full flex flex-col justify-start items-start gap-3'>
          <TitleSection
            title={title}
            name={data.section!.name as string}
            description={data.section!.description as string}
            findMore={true}
            className='w-full flex flex-col justify-start items-start gap-3 font-bold text-orange-500'
          />
          <div className='relative w-full min-h-[350px]'>
            {data.components.map((item, idx) => (
              <div
                key={idx}
                className='absolute top-0 w-full flex flex-col justify-start items-start gap-10 text-white'
              >
                <h2 className='text-xl'>{item.content}</h2>
                <div className='flex justify-center items-center gap-5'>
                  <PreImage src={item.image} width={70} height={70} alt={item.title} className='rounded-lg' />
                  <div className='flex flex-col justify-start items-start'>
                    <p>{item.title}</p>
                    <p className='font-thin'>{item.description}</p>
                  </div>
                </div>
                <BtnCommon title='All clients stories' cls='border-orange-500' />
              </div>
            ))}
          </div>
          <ul className='absolute bottom-10 hidden md:flex items-center justify-between gap-5'>
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
          </ul>
        </div>
        <PreImage
          src={data.section.image}
          width={1980}
          height={500}
          alt={data.section.name}
          className='w-full h-full object-cover'
        />
      </div>
    </section>
  );
};

export default ClientStoriesDesignOneSection;

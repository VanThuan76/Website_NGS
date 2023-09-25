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

const WhyUsDesignTwoSection = ({ title, data, className }: Props) => {
  const [isHovered, setIsHovered] = useState<IComponents | undefined>(undefined);
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;

  return (
    <section id={data.section.code} className={`pb-4 px-4 md:px-24 overflow-hidden ${className}  `}>
      <div className='w-full mx-auto my-auto mt-10 grid grid-cols-1 justify-end items-end gap-10'>
        <TitleSection
          title={title}
          name={data.section.name as string}
          description={data.section.description as string}
          findMore={true}
          className='w-full flex justify-start items-start'
        />
        <div className='w-full grid grid-cols-2 justify-end items-end'>
          <div></div>
          <div className='flex flex-col justify-start items-start gap-5'>
            {data.components.map((item, idx) => (
              <div
                key={idx}
                className='w-full h-full flex justify-start items-start rounded-lg cursor-pointer'
                onMouseEnter={() => setIsHovered(item)}
                onMouseLeave={() => setIsHovered(undefined)}
              >
                <div className='w-full flex flex-col justify-start items-start gap-3 py-6 border-b border-b-slate-400'>
                  <div className='border-card-whyUs-designTwo-section pl-6'>
                    <h1 className='text-base md:text-xl font-semibold'>{item.title}</h1>
                    <motion.p
                      className='hidden mt-2 text-xs md:text-base'
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: isHovered === item ? 1 : 0, height: isHovered === item ? 'auto' : 0 }}
                      transition={{
                        duration: 0.5,
                        ease: 'easeInOut',
                      }}
                    >
                      {item.description}
                    </motion.p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsDesignTwoSection;

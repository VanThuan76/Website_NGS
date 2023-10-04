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
    <section id={data.section.code} className={`max-w-[1440px] overflow-hidden px-4 pb-4 md:px-24 ${className}  `}>
      <div className='mx-auto my-auto mt-10 grid w-full grid-cols-1 items-end justify-end gap-10'>
        <TitleSection
          title={title}
          name={data.section.name as string}
          description={data.section.description as string}
          findMore={true}
          className='w-full !text-left'
        />
        <div className='grid w-full grid-cols-12 items-end justify-end'>
          <div className='col-span-7'></div>
          <div className='col-span-5 flex flex-col items-start justify-start gap-5'>
            {data.components.map((item, idx) => (
              <div
                key={idx}
                className='flex h-full w-full cursor-pointer items-start justify-start rounded-lg'
                onMouseEnter={() => setIsHovered(item)}
                onMouseLeave={() => setIsHovered(undefined)}
              >
                <div className='flex w-full flex-col items-start justify-start gap-3 border-b border-b-slate-400 py-6'>
                  <div className='border-card-whyUs-designTwo-section pl-6'>
                    <h1 className='text-base font-semibold md:text-xl'>{item.title}</h1>
                    <motion.p
                      className='mt-2 hidden text-xs md:text-base'
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

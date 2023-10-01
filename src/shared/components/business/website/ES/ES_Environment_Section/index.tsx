import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { PreImage } from '@/components/common/customization/PreImage';
import { splitTextToArrayByDoubleSlash } from '@/utils/functions/splitTextToArray';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import useInviewScroll from '@/hooks/useInviewScroll';
import { motion, useAnimation } from 'framer-motion';

type Props = {
  data: Partial<IBaseSectionComponent>;
  className?: string;
};

const ESEnvironment = ({ data, className }: Props) => {
  const backgroundColor = ['#FFF8F5', '#F9F5FF', '#F5F7FF', '#F5FDFF'];
  const [sectionRef, inView] = useInView({
    threshold: 0.2,
  });
  const controls = useAnimation();
  const currentIndex = useInviewScroll({ amountComponent: data.components!.length, inView });
  useEffect(() => {
    controls.start({
      backgroundColor: backgroundColor[currentIndex],
      position: inView ? 'fixed' : 'relative',
      transition: { type: 'tween', duration: 0.5 },
      top: inView ? 0 : 0,
      left: inView ? 0 : 0,
      right: inView ? 0 : 0,
      zIndex: inView ? 50 : 0,
    });
  }, [controls, currentIndex, inView]);

  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;
  return (
    <section
      id={data.section.code}
      ref={sectionRef}
      style={{
        backgroundColor: `${backgroundColor[currentIndex]}`,
      }}
      className={`h-[${100 * data.components.length}vh] ${className}`}
    >
      <motion.div
        animate={controls}
        style={{
          backgroundColor: `${backgroundColor[currentIndex]}`,
        }}
        className='px-10 mx-auto my-auto grid grid-cols-1 justify-center items-center gap-8'
      >
        <div className='mx-auto ml-0 md:ml-56 flex justify-center items-center md:justify-normal md:items-start'>
          <PreImage
            src={data.components[currentIndex].image.split(',')[0]}
            width={210}
            height={210}
            alt={data.components[currentIndex].title}
            className='w-full h-full rounded-lg object-cover'
          />
        </div>
        <div className='mx-auto my-auto grid grid-cols-1 md:grid-cols-4 justify-center items-center'>
          <div className='relative w-full h-full'>
            <PreImage
              src={data.components[currentIndex].image.split(',')[1]}
              width={210}
              height={210}
              alt={data.components[currentIndex].title}
              className='w-full h-full rounded-lg object-cover'
            />
          </div>
          <div className='col-span-2 w-full flex flex-col justify-center items-center gap-3'>
            <h1 className='text-xl md:text-3xl text-orange-500 font-semibold text-center'>
              {data.components[currentIndex].title}
            </h1>
            <div className='flex flex-col gap-2'>
              {splitTextToArrayByDoubleSlash(data.components[currentIndex].description || '').map(
                (item: string, idx: number) => (
                  <p key={idx} className='text-center'>
                    {item}
                  </p>
                ),
              )}
            </div>
          </div>
          <div className='relative w-full h-full flex justify-end items-start'>
            <PreImage
              src={data.components[currentIndex].image.split(',')[2]}
              width={272}
              height={363}
              alt={data.components[currentIndex].title}
              className='w-full h-full rounded-lg object-cover'
            />
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <PreImage
            src={data.components[currentIndex].image.split(',')[3]}
            width={590}
            height={295}
            alt={data.components[currentIndex].title}
            className='w-full h-full rounded-lg object-cover'
          />
        </div>
      </motion.div>
    </section>
  );
};

export default ESEnvironment;

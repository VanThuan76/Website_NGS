import React from 'react';
import { PreImage } from '@/components/common/customization/PreImage';
import { splitTextToArrayByDoubleSlash } from '@/utils/functions/splitTextToArray';
import { motion } from 'framer-motion';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';

const variantsText = {
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeOut',
      duration: 1,
    },
  },
  hide: {
    y: -20,
    opacity: 0,
  },
};

type Props = {
  data: Partial<IBaseSectionComponent>;
  currentIndex: number;
  className: string;
};
const ESEnvironmentItem = ({ data, currentIndex, className }: Props) => {
  const backgroundColor = ['#FFF8F5', '#F9F5FF', '#F5F7FF', '#F5FDFF'];

  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;
  return (
    <motion.div
      style={{
        backgroundColor: `${backgroundColor[currentIndex]}`,
      }}
      className={`mx-auto my-auto hidden grid-cols-1 items-center justify-center gap-8 px-10 md:grid ${className}`}
    >
      <div className='mx-auto ml-0 flex items-center justify-center md:ml-56 md:items-start md:justify-normal'>
        <motion.div
          key={currentIndex}
          variants={{
            show: {
              opacity: 1,
              transition: {
                ease: 'easeOut',
                duration: 1,
              },
            },
            hide: {
              opacity: 0,
            },
          }}
          animate='show'
          initial='hide'
          className='relative h-[210px] w-[210px] overflow-hidden rounded-lg'
        >
          <PreImage src={data.components[currentIndex].image.split(',')[0]} alt={data.components[currentIndex].title} />
        </motion.div>
      </div>
      <div className='mx-auto my-auto grid grid-cols-1 items-center justify-between md:grid-cols-4'>
        <div className='flex items-center justify-center'>
          <motion.div
            key={currentIndex}
            variants={{
              show: {
                opacity: 1,
                transition: {
                  ease: 'easeOut',
                  duration: 1,
                },
              },
              hide: {
                opacity: 0,
              },
            }}
            animate='show'
            initial='hide'
            className='relative mx-auto h-[210px] w-[210px] overflow-hidden rounded-lg'
          >
            <PreImage
              src={data.components[currentIndex].image.split(',')[1]}
              alt={data.components[currentIndex].title}
            />
          </motion.div>
        </div>
        <motion.div
          key={currentIndex}
          variants={variantsText}
          animate='show'
          initial='hide'
          className='col-span-2 flex w-full flex-col items-center justify-center gap-3'
        >
          <h1 className='text-center text-xl font-semibold text-orange-500 md:text-3xl'>
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
        </motion.div>
        <div className='flex items-center justify-center'>
          <motion.div
            key={currentIndex}
            variants={{
              show: {
                opacity: 1,
                transition: {
                  ease: 'easeOut',
                  duration: 1,
                },
              },
              hide: {
                opacity: 0,
              },
            }}
            animate='show'
            initial='hide'
            className='relative mx-auto h-[363px] w-[272px] overflow-hidden rounded-lg'
          >
            <PreImage
              src={data.components[currentIndex].image.split(',')[2]}
              alt={data.components[currentIndex].title}
            />
          </motion.div>
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <motion.div
          key={currentIndex}
          variants={{
            show: {
              opacity: 1,
              transition: {
                ease: 'easeOut',
                duration: 1,
              },
            },
            hide: {
              opacity: 0,
            },
          }}
          animate='show'
          initial='hide'
          className='relative h-[295px] w-[590px] overflow-hidden rounded-lg'
        >
          <PreImage
            src={data.components[currentIndex].image.split(',')[3]}
            width={590}
            height={295}
            alt={data.components[currentIndex].title}
            className='h-full w-full rounded-lg object-cover'
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ESEnvironmentItem;

import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { PreImage } from '@/components/common/customization/PreImage';
import { splitTextToArrayByDoubleSlash } from '@/utils/functions/splitTextToArray';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import useInviewScroll from '@/hooks/useInviewScroll';
import { motion, useAnimation } from 'framer-motion';

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
      transition: {
        top: { duration: 1, ease: 'linear' },
      },
      top: 0,
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
      className={`w-screen h-[300vh] ${className}`}
    >
      <motion.div
        animate={controls}
        style={{
          backgroundColor: `${backgroundColor[currentIndex]}`,
        }}
        className='px-10 mx-auto my-auto grid grid-cols-1 justify-center items-center gap-8'
      >
        <div className='mx-auto ml-0 md:ml-56 flex justify-center items-center md:justify-normal md:items-start'>
          <motion.div
            key={currentIndex}
            variants={{
              show: {
                height: '210px',
                transition: {
                  ease: 'easeOut',
                  duration: 1,
                },
              },
              hide: {
                height: '0px',
              },
            }}
            animate='show'
            initial='hide'
            className='relative w-[210px] h-[210px] rounded-lg overflow-hidden'
          >
            <PreImage
              src={data.components[currentIndex].image.split(',')[0]}
              alt={data.components[currentIndex].title}
            />
          </motion.div>
        </div>
        <div className='mx-auto my-auto grid grid-cols-1 md:grid-cols-4 justify-between items-center'>
          <div className='flex justify-center items-center'>
            <motion.div
              key={currentIndex}
              variants={{
                show: {
                  height: '210px',
                  transition: {
                    ease: 'easeOut',
                    duration: 1,
                  },
                },
                hide: {
                  height: '0px',
                },
              }}
              animate='show'
              initial='hide'
              className='mx-auto relative w-[210px] h-[210px] rounded-lg overflow-hidden'
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
            className='col-span-2 w-full flex flex-col justify-center items-center gap-3'
          >
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
          </motion.div>
          <div className='flex justify-center items-center'>
            <motion.div
              key={currentIndex}
              variants={{
                show: {
                  height: '363px',
                  transition: {
                    ease: 'easeOut',
                    duration: 1,
                  },
                },
                hide: {
                  height: '0px',
                },
              }}
              animate='show'
              initial='hide'
              className='mx-auto relative w-[272px] h-[363px] rounded-lg overflow-hidden'
            >
              <PreImage
                src={data.components[currentIndex].image.split(',')[2]}
                alt={data.components[currentIndex].title}
              />
            </motion.div>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <motion.div
            key={currentIndex}
            variants={{
              show: {
                height: '295px',
                transition: {
                  ease: 'easeOut',
                  duration: 1,
                },
              },
              hide: {
                height: '0px',
              },
            }}
            animate='show'
            initial='hide'
            className='relative w-[590px] h-[295px] overflow-hidden rounded-lg'
          >
            <PreImage
              src={data.components[currentIndex].image.split(',')[3]}
              width={590}
              height={295}
              alt={data.components[currentIndex].title}
              className='w-full h-full rounded-lg object-cover'
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ESEnvironment;

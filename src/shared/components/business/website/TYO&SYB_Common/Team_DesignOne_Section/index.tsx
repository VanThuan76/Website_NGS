import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import TitleSection from '@/components/common/customization/TitleSection';
import BackgroundDark from '@/components/icon/HO/solution/BackgroundDark';
import BackgroundLight from '@/components/icon/HO/solution/BackgroundLight';
import TeamDesignOneItem from './Team_DesignOne_Item';
import { PreImage } from '@/components/common/customization/PreImage';
import { IComponents } from 'src/shared/schemas/typedef/IComponents';

type Props = {
  title: string;
  data: Partial<IBaseSectionComponent>;
  className?: string;
};

const TeamDesignOneSection = ({ title, data, className }: Props) => {
  const { theme } = useTheme();
  const [hoveredItem, setHoveredItem] = useState<IComponents>();
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;
  return (
    <section id={data.section.code} className={`px-6 py-5 md:py-10 lg:py-20 md:px-12 lg:px-24 ${className}`}>
      <div className='max-w-[1440px] mx-auto my-auto bg-transparent overflow-hidden'>
        <TitleSection
          title={title}
          name={data.section.name as string}
          description={data.section.description as string}
          findMore={true}
          className='mb-5'
        />
        <Swiper className='w-full'>
          {data.components.map((item, idx) => (
            <SwiperSlide className='max-w-[310px] p-2' key={idx}>
              <div className='relative max-w-[310px] min-h-[300px] lg:min-h-[350px] rounded-lg overflow-hidden'>
                <motion.div
                  className='absolute top-0 left-0 w-full h-full'
                  initial={{ display: 'hidden' }}
                  animate={{ display: hoveredItem === item ? 'block' : 'hidden' }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                  {theme === 'dark' ? <BackgroundDark /> : <BackgroundLight />}
                </motion.div>
                {hoveredItem === item ? (
                  <TeamDesignOneItem content={item.content || ''} className='absolute top-0 left-0 w-full' />
                ) : (
                  <React.Fragment>
                    <PreImage
                      src={item.image}
                      width={1980}
                      height={350}
                      alt={title}
                      className='w-full h-full rounded-lg object-cover'
                      onMouseEnter={() => setHoveredItem(item)}
                      onMouseLeave={() => setHoveredItem(undefined)}
                    />
                    <div className='absolute left-5 bottom-5 flex flex-col justify-start items-start text-white gap-2'>
                      <p>{item.title}</p>
                      <p>{item.description}</p>
                    </div>
                  </React.Fragment>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TeamDesignOneSection;

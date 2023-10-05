import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import React, { useState } from 'react';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import TitleSection from '@/components/common/customization/TitleSection';
import TeamDesignOneItem from './Team_DesignOne_Item';
import { PreImage } from '@/components/common/customization/PreImage';
import { IComponents } from 'src/shared/schemas/typedef/IComponents';
import BackgroundTeam from '@/components/icon/ES/BackgroundTeam';
import useBreakPoint from '@/hooks/useBreakPoint';

type Props = {
  title: string;
  data: Partial<IBaseSectionComponent>;
  className?: string;
};

const TeamDesignOneSection = ({ title, data, className }: Props) => {
  const [hoveredItem, setHoveredItem] = useState<IComponents>();
  const currentBreakPoint = useBreakPoint();
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;
  return (
    <section id={data.section.code} className={`w-screen px-4 pb-10 md:px-24 md:pb-20 ${className}`}>
      <div className='mx-auto my-auto w-full overflow-hidden bg-transparent'>
        <TitleSection
          title={title}
          name={data.section.name as string}
          description={data.section.description as string}
          findMore={true}
          className='col-span-7 w-full grid-cols-7 !gap-0 !text-left'
        />
        <Swiper
          className='mySwiper h-[450px]'
          pagination={{
            dynamicBullets: true,
          }}
          slidesPerView={currentBreakPoint === 'sm' ? 1 : 4}
          spaceBetween={0}
          modules={[Pagination]}
        >
          {data.components.map((item, idx) => (
            <SwiperSlide className='mx-auto md:max-w-[335px] md:p-2' key={idx}>
              <div
                className='relative flex h-[418px] w-full items-center justify-center overflow-hidden rounded-lg md:max-w-[335px]'
                onMouseEnter={() => setHoveredItem(item)}
                onMouseLeave={() => setHoveredItem(undefined)}
              >
                {hoveredItem === item ? (
                  <TeamDesignOneItem
                    content={item.content || ''}
                    className='absolute left-0 top-0 w-full bg-[#FC5E03] text-white'
                  />
                ) : (
                  <div className='relative h-[418px] w-[335px]'>
                    <PreImage src={item.image} alt={title} objectPosition='center' />
                    <div className='absolute bottom-5 left-5 z-20 flex w-[90%] flex-col items-start justify-start gap-2 text-white'>
                      <p>{item.title}</p>
                      <p>{item.description}</p>
                    </div>
                    <BackgroundTeam className='absolute -bottom-24 z-10 h-full w-full' />
                  </div>
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

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
  const currentBreakPoint = useBreakPoint()
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;
  return (
    <section id={data.section.code} className={`max-w-[1440px] px-6 py-5 md:py-10 lg:py-20 md:px-12 lg:px-24 ${className}`}>
      <div className='w-full mx-auto my-auto bg-transparent overflow-hidden'>
        <TitleSection
          title={title}
          name={data.section.name as string}
          description={data.section.description as string}
          findMore={true}
          className='w-full grid-cols-7 col-span-7 !text-left !gap-0'
        />
        <Swiper
          className='mySwiper'
          pagination={{
            dynamicBullets: true,
          }}
          slidesPerView={currentBreakPoint === "sm" ? 1 : 2}
          spaceBetween={0}
          modules={[Pagination]}
        >
          {data.components.map((item, idx) => (
            <SwiperSlide className='w-full p-0 md:max-w-[335px] md:p-2 mx-auto' key={idx}>
              <div
                className='relative max-w-[335px] min-h-[418px] rounded-lg overflow-hidden'
                onMouseEnter={() => setHoveredItem(item)}
                onMouseLeave={() => setHoveredItem(undefined)}
              >
                {hoveredItem === item ? (
                  <TeamDesignOneItem
                    content={item.content || ''}
                    className='absolute top-0 left-0 w-full bg-black text-white'
                  />
                ) : (
                  <div className='relative w-[335px] h-[418px]'>
                    <PreImage
                      src={item.image}
                      width={1980}
                      height={350}
                      alt={title}
                      className='w-full h-full rounded-lg object-cover'
                    />
                    <div className='absolute left-5 bottom-5 flex flex-col justify-start items-start text-white gap-2 z-20'>
                      <p>{item.title}</p>
                      <p>{item.description}</p>
                    </div>
                    <BackgroundTeam className='absolute -bottom-5 w-full h-full z-10' />
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

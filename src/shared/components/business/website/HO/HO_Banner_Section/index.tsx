import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import React, { RefObject, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';
import { SectionData } from 'src/shared/schemas/typedef/ISectionData';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import { PreImage } from '@/components/common/customization/PreImage';
import InitBasicAnimation from '@/components/common/customization/InitBasicAnimation';
import MouseScroll from '@/components/icon/HO/banner/MouseScroll';
import HOBannerContent from './HOBannerContent';
import UseLinkRedirect from '@/utils/functions/UseLinkRedirect';
import useBreakPoint from '@/hooks/useBreakPoint';
interface Props {
  data: Partial<IBaseSectionComponent>;
}
const HomeBannerSection = ({ data }: Props) => {
  const progressLines = useRef<Array<RefObject<HTMLDivElement>>>([]);
  const ref = useRef<HTMLDivElement>(null);
  const currentBreakPoint = useBreakPoint();
  const [isActived, setIsActived] = useState<number>(NaN);
  const [selectedTab, setSelectedTab] = useState<Partial<SectionData> | undefined>(() => {
    if (data.components && data.components.length > 0) return data.components[0];
    else return undefined;
  });
  // if (data.components) {
  //   data.components.forEach(() => {
  //     const ref = useRef<HTMLDivElement>(null);
  //     progressLines.current.push(ref);
  //   });
  // }
  const onAutoplayTimeLeft = (s: any, time: any, progress: any) => {
    progressLines.current.forEach(progressLine => {
      if (progressLine.current) {
        const progressValue = 1 - progress;
        progressLine.current.style.setProperty('--progress', `${progressValue * 100}%`);
      }
    });
  };
  const onSlideChange = (swiper: any) => {
    const activeIndex = swiper.activeIndex;
    setIsActived(activeIndex);
    setSelectedTab(data.components![activeIndex]);
  };
  if (!selectedTab) return <React.Fragment></React.Fragment>;
  return (
    <section id={data && data.section && data.section.code} className='block w-screen pb-10'>
      <div className='snap-x-mandatory scrollbar-none light:text-white relative flex max-h-[600px] overflow-hidden'>
        <Swiper
          spaceBetween={30}
          effect={'fade'}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={false}
          modules={[EffectFade, Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          onSlideChange={onSlideChange}
          className='mySwiper'
        >
          {data.components!.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className='relative flex w-full items-center justify-between'>
                <HOBannerContent selectedTab={item} />
                <div
                  className={`mx-auto w-screen ${
                    currentBreakPoint === 'sm' ? 'h-[454px]' : 'h-[864px]'
                  } relative overflow-hidden`}
                >
                  <PreImage src={item.image as string} layer={false} alt={item.title as string} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <UseLinkRedirect sectionCode='PG001SE00002'>
          <div className='absolute bottom-10 right-10 z-30 hidden animate-bounce lg:block'>
            <MouseScroll />
          </div>
        </UseLinkRedirect>
        <InitBasicAnimation className='absolute bottom-10 z-40 w-screen'>
          <div className='relative mx-auto flex max-w-[1440px] items-center justify-between gap-5 px-4 md:px-24'>
            <ul className='hidden items-center justify-between gap-10 md:flex'>
              {data.components!.map((item, idx) => {
                progressLines.current.push(ref);
                return (
                  <li
                    key={idx}
                    className={`custom-list-item relative pb-3 text-sm font-normal ${
                      isActived === idx ? 'text-slate-50' : 'text-slate-300'
                    } cursor-pointer`}
                  >
                    {`${item.title}`}
                    <div
                      ref={progressLines.current[idx]}
                      className={`${isActived === idx && 'line-animation-banner'}`}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </InitBasicAnimation>
      </div>
    </section>
  );
};

export default HomeBannerSection;

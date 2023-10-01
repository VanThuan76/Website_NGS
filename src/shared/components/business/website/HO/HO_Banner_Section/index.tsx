import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';
import React, { RefObject, useRef, useState } from 'react';
import { SectionData } from 'src/shared/schemas/typedef/ISectionData';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import InitBasicAnimation from '@/components/common/customization/InitBasicAnimation';
import MouseScroll from '@/components/icon/HO/banner/MouseScroll';
import HOBannerContent from './HOBannerContent';
import UseLinkRedirect from '@/utils/functions/UseLinkRedirect';
import { PreImage } from '@/components/common/customization/PreImage';
interface Props {
  data: Partial<IBaseSectionComponent>;
}
const HomeBannerSection = ({ data }: Props) => {
  const progressLines = useRef<Array<RefObject<HTMLDivElement>>>([]);
  const ref = useRef<HTMLDivElement>(null);
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
    <section id={data && data.section && data.section.code} className='pb-10 block'>
      <div className='snap-x-mandatory scrollbar-none relative max-h-[600px] flex overflow-hidden light:text-white'>
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
              <div className='relative w-full flex justify-between items-center mx-auto'>
                <HOBannerContent selectedTab={item} />
                <div className='mx-auto w-[100vw] h-[100vh] relative overflow-hidden'>
                  <PreImage
                    src={item.image as string}
                    height={760}
                    width={1980}
                    layer={false}
                    alt={item.title as string}
                    className='w-full h-full object-cover'
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <UseLinkRedirect sectionCode='PG001SE00002'>
          <div className='animate-bounce absolute right-10 bottom-10 z-30 hidden lg:block'>
            <MouseScroll />
          </div>
        </UseLinkRedirect>
        <InitBasicAnimation className='absolute bottom-10 pl-4 lg:pl-20 z-40'>
          <div className='relative w-full flex items-center justify-between gap-3'>
            <ul className='hidden md:flex items-center justify-between gap-3'>
              {data.components!.map((item, idx) => {
                progressLines.current.push(ref);
                return (
                  <li
                    key={idx}
                    className={`relative custom-list-item px-4 pb-3 text-sm font-normal ${
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

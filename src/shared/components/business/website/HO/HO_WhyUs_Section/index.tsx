import 'swiper/css';
import 'swiper/css/pagination';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { PreImage } from '@/components/common/customization/PreImage';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import { IComponents } from 'src/shared/schemas/typedef/IComponents';
import TitleSection from '@/components/common/customization/TitleSection';
import HomeWhyUsIcon from './HOWhyUsIcon';
import HomeWhyUsContent from './HOWhyUsContent';
import HomeWhyUsResponsive from './HOWhyUsResponsive';
import { partnerData } from '@/mocks/website/HO/partner';

type Props = {
  data: Partial<IBaseSectionComponent>;
  className?: string
}
const HomeWhyUsSection = ({data, className}: Props) => {
  const [selectedIcon, setSelectedIcon] = useState<Partial<IComponents>|undefined >(()=> {
    if(data.components && data.components.length > 0 ) return data.components[0]
    else return undefined
  });
  if(!selectedIcon) return <React.Fragment></React.Fragment>
  return (
      <section
        id={data && data.section && data.section.code}
        className={`relative pb-4 md:pb-8 lg:pb-16 xl:pb-24 px-4 md:px-24 lg:px-32 xl:px-40 ${className}`}
      >
        <div className='max-w-[1440px] w-full mx-auto my-auto'>
          <div className='w-full flex flex-col lg:flex-row justify-between items-center'>
            <div className='w-full flex flex-col justify-between items-center gap-3'>
              <TitleSection
                title='Điều gì tạo nên NGS'
                name={data.section!.name as string}
                description={data.section!.description as string}
                findMore={false}
                className='w-[80%]'
              />
              {/* <-- Content Responsive Mobile */}
              <div className='flex md:hidden w-full lg:w-1/2 xl:w-1/2 flex-col justify-center items-center'>
                {data.components!.map((item, idx) => {
                  return <HomeWhyUsResponsive key={idx} item={item} />;
                })}
              </div>
              {/* Content Responsive Mobile --> */}
              {/* <-- HomeWhyUsIcon Responsive Tablet */}
              <div className='hidden md:block lg:hidden w-full z-40 float-right'>
                <HomeWhyUsIcon data={data.components!} selectedIcon={selectedIcon && selectedIcon} setSelectedIcon={setSelectedIcon} />
                <HomeWhyUsContent data={data.components!} selectedIcon={selectedIcon && selectedIcon} setSelectedIcon={setSelectedIcon} />
              </div>
              {/* HomeWhyUsIcon Responsive Tablet --> */}
              {/* <-- HomeWhyUsIcon Responsive Desktop */}
              <div className='hidden lg:block w-full mt-5'>
                <HomeWhyUsContent data={data.components!} selectedIcon={selectedIcon && selectedIcon} setSelectedIcon={setSelectedIcon} />
              </div>
              {/* HomeWhyUsIcon Responsive Desktop --> */}
            </div>
            <div className='hidden lg:block w-full z-40 float-right'>
              <HomeWhyUsIcon data={data.components!} selectedIcon={selectedIcon && selectedIcon} setSelectedIcon={setSelectedIcon} />
            </div>
          </div>
          <div className='w-full min-h-[200px] flex flex-col justify-center items-center lg:mt-20'>
            <div className='w-full flex flex-col items-center justify-center'>
              <h2 className='hidden lg:block text-xl xl:text-2xl'>Hệ sinh thái của chúng tôi</h2>
              <Swiper slidesPerView={3} spaceBetween={10} modules={[Pagination]} className='w-full'>
                {partnerData.map((item, idx) => (
                  <SwiperSlide className='max-w-[250px]' key={idx}>
                    <PreImage
                      key={idx}
                      src={item.image}
                      height={200}
                      width={400}
                      layer={false}
                      alt={'WhyUs'}
                      className='w-full h-full rounded-lg'
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
  );
};

export default HomeWhyUsSection;
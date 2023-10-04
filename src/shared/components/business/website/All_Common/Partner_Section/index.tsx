import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import React, { useState } from 'react';
import { useTheme } from 'next-themes';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import { IComponents } from 'src/shared/schemas/typedef/IComponents';
import { PreImage } from '@/components/common/customization/PreImage';
import PartnerResponsive from './PartnerResponsive';
type Props = {
  title: string;
  data: Partial<IBaseSectionComponent>;
  className?: string;
};

const PartnerSection = ({ title, data, className }: Props) => {
  const { theme } = useTheme();
  const [selectedPartner, setSelectedPartner] = useState<Partial<IComponents> | undefined>(() => {
    if (data.components && data.components.length > 0) return data.components[0];
    else return undefined;
  });
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;
  const colorBorder = theme === 'dark' ? '#555' : '#fff';
  return (
    <section
      id={data.section.code}
      className={`mb-4 w-screen bg-[#fc5e03] px-4 text-white dark:bg-[#7d4aeb] md:mb-12 md:px-24 lg:mb-24 ${className}`}
    >
      <div className='mx-auto my-auto flex max-w-[1440px] flex-col items-start justify-start pb-4 md:pb-8 lg:pb-16 xl:pb-24'>
        <h1 className='mt-5 pt-10 text-3xl'>{title}</h1>
        <div className='mt-20 hidden w-full items-start justify-between md:flex'>
          <Swiper
            className='mySwiper'
            modules={[Autoplay, Pagination, Navigation]}
            slidesPerView={6}
            spaceBetween={0}
            centeredSlides={true}
            navigation={false}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop
          >
            {data.components.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div
                  className={`relative h-[106px] w-[156px] ${
                    item === selectedPartner ? 'opacity-100' : ' opacity-80'
                  } cursor-pointer`}
                  onClick={() => setSelectedPartner(item)}
                >
                  <PreImage src={item.image as string} layer={false} alt={item.title} objectFit='contain' />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className='mt-5 hidden w-full md:block'>
          {data.components.map((item, idx) => (
            <div key={idx}>
              {item === selectedPartner ? (
                <div
                  className='flex w-full flex-col items-start justify-between gap-5 pt-5 lg:flex-row'
                  style={{ borderTop: `1px solid ${colorBorder}` }}
                >
                  <div className='flex w-full flex-col items-start justify-start gap-3'>
                    <p className='text-2xl font-medium'>{item.title}</p>
                    <p className='text-sm'>{item.description}</p>
                  </div>
                  <p className='w-full lg:w-1/2'>{item.content}</p>
                </div>
              ) : (
                <></>
              )}
            </div>
          ))}
        </div>
        {/* <-- Home Partner Responsive */}
        <PartnerResponsive data={data.components} />
        {/* Home Partner Responsive --> */}
      </div>
    </section>
  );
};

export default PartnerSection;

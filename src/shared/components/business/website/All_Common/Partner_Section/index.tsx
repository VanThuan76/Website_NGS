import 'swiper/css';
import 'swiper/css/pagination';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useTheme } from 'next-themes';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import { IComponents } from 'src/shared/schemas/typedef/IComponents';
import { PreImage } from '@/components/common/customization/PreImage';
import PartnerResponsive from './PartnerResponsive';

type Props = {
  data: Partial<IBaseSectionComponent>
  className?: string
}

const PartnerSection = ({data, className}: Props) => {
  const { theme } = useTheme();
  const [selectedPartner, setSelectedPartner] = useState<Partial<IComponents>|undefined >(()=> {
    if(data.components && data.components.length > 0 ) return data.components[0]
    else return undefined
  });
  if(!data || !data.components || !data.section) return <React.Fragment></React.Fragment>
  const colorBorder = theme === 'dark' ? '#555' : '#fff';
  if(!selectedPartner) return <></>
  return (
    <section
      id={data.section.code}
      className={`bg-[#F06426] dark:bg-[#7d4aeb] text-white mb-4 md:mb-12 lg:mb-24 px-4 md:px-24 lg:px-32 xl:px-40 ${className}`}
    >
      <div className='max-w-[1440px] w-full mx-auto my-auto flex flex-col justify-start items-start pb-4 md:pb-8 lg:pb-16 xl:pb-24'>
        <h1 className='mt-5 pt-10 text-3xl'>Đối tác đồng hành cùng NGSD</h1>
        <div className='w-full mt-5 hidden md:flex items-start justify-between gap-5'>
          <Swiper slidesPerView={4} spaceBetween={50} modules={[Pagination]} className='w-full'>
            {data.components!.map((item, idx) => (
              <SwiperSlide className='max-w-[250px]' key={idx}>
                <PreImage
                  src={item.image as string}
                  height={200}
                  width={1080}
                  layer={false}
                  alt={item.title}
                  className={`relative rounded-lg cursor-pointer ${
                    item === selectedPartner ? 'opacity-100' : ' opacity-30'
                  }`}
                  onClick={() => setSelectedPartner(item)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className='w-full mt-5 hidden md:block'>
          {data.components!.map((item, idx) => (
            <div key={idx}>
              {item === selectedPartner ? (
                <div
                  className='w-full pt-5 flex flex-col lg:flex-row justify-between items-start gap-5'
                  style={{ borderTop: `1px solid ${colorBorder}` }}
                >
                  <div className='w-full flex flex-col justify-start items-start gap-3'>
                    <p className='font-medium text-2xl'>{item.title}</p>
                    <p className='font-thin text-sm'>{item.description}</p>
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
        <PartnerResponsive />
        {/* Home Partner Responsive --> */}
      </div>
    </section>
  );
};

export default PartnerSection;

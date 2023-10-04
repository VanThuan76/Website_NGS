import 'swiper/css';
import 'swiper/css/pagination';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import { IComponents } from 'src/shared/schemas/typedef/IComponents';
import { PreImage } from '@/components/common/customization/PreImage';

type Props = {
  data: Partial<IBaseSectionComponent>;
  className?: string;
};

const PartnerDesignThreeSection = ({ data, className }: Props) => {
  const [selectedPartner, setSelectedPartner] = useState<Partial<IComponents> | undefined>(() => {
    if (data.components && data.components.length > 0) return data.components[0];
    else return undefined;
  });
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;
  return (
    <section id={data.section.code} className={`w-screen bg-[#FC5E03] dark:bg-[#7d4aeb] text-white px-4 md:px-24 ${className}`}>
      <div className='max-w-[1440px] h-full mx-auto my-auto flex flex-col justify-start items-start gap-10 pb-4 md:pb-8 lg:pb-16'>
        <div className='mt-10 w-[50%] flex flex-col justify-start items-start gap-5'>
          <h1 className='text-2xl md:text-4xl font-medium'>{data.section.name}</h1>
        </div>
        <div className='w-full mt-5 hidden md:flex items-start justify-between gap-5'>
          <Swiper className='w-full'>
            {data.components.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div
                  className={`relative w-[106px] h-[106px] ${
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
        <div className='w-full mt-5 hidden md:block'>
          {data.components.map((item, idx) => (
            <div key={idx}>
              {item === selectedPartner ? (
                <div className='w-full pt-5 flex flex-col lg:flex-row justify-between items-start gap-5'>
                  <div className='w-full flex flex-col justify-start items-start gap-3'>
                    <p className='font-medium text-xl md:text-3xl'>{item.title}</p>
                    <p className='font-thin text-sm'>{item.description}</p>
                  </div>
                  <p className='w-full text-base md:text-xl font-normal'>{item.content}</p>
                </div>
              ) : (
                <></>
              )}
            </div>
          ))}
        </div>
        {/* <-- Home Partner Responsive */}
        {/* <PartnerResponsive /> */}
        {/* Home Partner Responsive --> */}
      </div>
    </section>
  );
};

export default PartnerDesignThreeSection;

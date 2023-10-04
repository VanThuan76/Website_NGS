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
    <section
      id={data.section.code}
      className={`w-screen bg-[#FC5E03] px-4 text-white dark:bg-[#7d4aeb] md:px-24 ${className}`}
    >
      <div className='mx-auto my-auto flex h-full max-w-[1440px] flex-col items-start justify-start gap-10 pb-4 md:pb-8 lg:pb-16'>
        <div className='mt-10 flex w-[50%] flex-col items-start justify-start gap-5'>
          <h1 className='text-2xl font-medium md:text-4xl'>{data.section.name}</h1>
        </div>
        <div className='mt-5 hidden w-full items-start justify-between gap-5 md:flex'>
          <Swiper className='w-full'>
            {data.components.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div
                  className={`relative h-[106px] w-[106px] ${
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
                <div className='flex w-full flex-col items-start justify-between gap-5 pt-5 lg:flex-row'>
                  <div className='flex w-full flex-col items-start justify-start gap-3'>
                    <p className='text-xl font-medium md:text-3xl'>{item.title}</p>
                    <p className='text-sm font-thin'>{item.description}</p>
                  </div>
                  <p className='w-full text-base font-normal md:text-xl'>{item.content}</p>
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

import 'swiper/css';
import 'swiper/css/pagination';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { PreImage } from '@/components/common/customization/PreImage';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
type Props = {
  data: Partial<IBaseSectionComponent>;
  className?: string;
};
const HOOrganizationalSystemSection = ({ data, className }: Props) => {
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;
  return (
    <section
      id={data && data.section && data.section.code}
      className={`relative pb-4 md:pb-8 lg:pb-16 xl:pb-24 px-4 md:px-24 ${className}`}
    >
      <div className='w-full min-h-[200px] flex flex-col justify-center items-center lg:mt-20'>
        <div className='w-full flex flex-col items-center justify-center'>
          <h2 className='hidden lg:block text-xl xl:text-2xl'>{data.section.name}</h2>
          <Swiper className='w-full'>
            {data.components.map((item, idx) => (
              <SwiperSlide className='max-w-[250px] max-h-[120px] p-8' key={idx}>
                <PreImage
                  key={idx}
                  src={item.image}
                  height={100}
                  width={250}
                  layer={false}
                  alt={item.title}
                  className='w-full h-full object-contain object-top'
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default HOOrganizationalSystemSection;

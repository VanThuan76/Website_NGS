import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import Responsive from './Responsive';
import { PreImage } from '@/components/common/PreImage';
import { IPartnerData, partnerData } from '@/mocks/website/partner';
import { Pagination } from 'swiper/modules';

const Partner = () => {
  const [selectedPartner, setSelectedPartner] = useState<IPartnerData>(partnerData[0]);
  return (
    <section id='Partner' className='bg-orange-500 dark:bg-[#7d4aeb] text-white mb-4 md:mb-12 lg:mb-24 xl:mb-32 2xl:mb-56'>
      <div className='flex flex-col justify-start items-start mx-auto pb-4 md:pb-8 lg:pb-16 xl:pb-24 px-4 md:px-24 lg:px-32 xl:px-52 2xl:px-96'>
        <h1 className='mt-5 pt-10 text-xl lg:text-2xl xl:text-3xl'>Đối tác đồng hành cùng NGSD</h1>
        <div className='w-full mt-5 hidden lg:flex items-start justify-between gap-5'>
          <Swiper
            slidesPerView={3}
            spaceBetween={50}
            modules={[Pagination]}
            className='w-full'
          >
            {partnerData.map((item, idx) => (
              <SwiperSlide className='w-full' key={idx}>
                <PreImage
                  src={item.logo}
                  height={200}
                  width={1080}
                  layer={false}
                  alt={'Service'}
                  className={`relative rounded-lg cursor-pointer ${
                    item === selectedPartner ? 'opacity-100' : ' opacity-30'
                  }`}
                  onClick={() => setSelectedPartner(item)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className='w-full mt-5 hidden lg:block'>
          {partnerData.map((item, idx) => (
            <div key={idx}>
              {item === selectedPartner ? (
                <div
                  className='w-full pt-5 flex justify-between items-center gap-5'
                  style={{ borderTop: '1px solid #555' }}
                >
                  <div className='w-full flex flex-col justify-start items-start gap-3'>
                    <p className='font-medium text-2xl'>{item.name}</p>
                    <p className='font-thin text-sm'>{item.rank}</p>
                  </div>
                  <p className='w-1/2'>{item.des}</p>
                </div>
              ) : (
                <></>
              )}
            </div>
          ))}
        </div>
        <Responsive />
      </div>
    </section>
  );
};

export default Partner;

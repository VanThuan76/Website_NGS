import { PreImage } from '@/components/common/PreImage';
import { IPartnerData, partnerData } from '@/mocks/website/partner';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import { EffectCreative } from 'swiper/modules';

const Responsive = () => {
  const [selectedPartner, setSelectedPartner] = useState<IPartnerData>(partnerData[0]);
  return (
    <div className='w-full h-full block lg:hidden mt-10'>
      <Swiper
       grabCursor={true}
       effect={'creative'}
       creativeEffect={{
         prev: {
           shadow: true,
           translate: ['-20%', 0, -1],
         },
         next: {
           translate: ['100%', 0, 0],
         },
       }}
        modules={[EffectCreative]}
        className='w-full rounded-lg'
      >
        {partnerData.map((item, idx) => (
          <SwiperSlide className='w-full min-h-[300px] bg-orange-600 dark:bg-[#6c3fce] p-5 rounded-lg' key={idx}>
            <div className='w-full'>
              <PreImage
                src={item.logo}
                height={100}
                width={600}
                layer={false}
                alt={'Service'}
                className={`rounded-lg cursor-pointer`}
                onClick={() => setSelectedPartner(item)}
              />
            </div>
            <div
              className='w-full pt-5 flex flex-col justify-between items-center gap-5'
              style={{ borderTop: '1px solid #555' }}
            >
              <div className='w-full flex flex-col justify-start items-start gap-3'>
                <p className='font-medium text-2xl'>{item.name}</p>
                <p className='font-thin text-sm'>{item.rank}</p>
              </div>
              <p>{item.des}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Responsive;

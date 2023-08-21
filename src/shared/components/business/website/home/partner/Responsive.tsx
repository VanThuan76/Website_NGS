import { PreImage } from '@/components/common/PreImage';
import { IPartnerData, partnerData } from '@/mocks/website/partner';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import { Pagination } from 'swiper/modules';

const Responsive = () => {
  const [selectedPartner, setSelectedPartner] = useState<IPartnerData>(partnerData[0]);
  return (
    <div className='w-full block md:hidden'>
      {/* @ts-ignore */}
      <Swiper pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
      >
        {partnerData.map((item, idx) => (
          <SwiperSlide className='w-full py-5 rounded-lg' key={idx}>
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
              className='w-full py-5 flex flex-col justify-between items-center gap-5'
              style={{ borderTop: '1px solid #fff' }}
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

import 'swiper/css';
import 'swiper/css/effect-creative';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { PreImage } from '@/components/common/customization/PreImage';
import { IComponents } from 'src/shared/schemas/typedef/IComponents';
type Props = {
  data: IComponents[];
};
const ESPeopleResponsive = ({ data }: Props) => {
  return (
    <div className='w-full block md:hidden'>
      <Swiper
        className='mySwiper'
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        slidesPerView={1}
        spaceBetween={10}
        centeredSlides={true}
      >
        {data.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className='w-full h-full flex flex-col justify-between items-center gap-5 rounded-lg'>
              <div className='w-full flex flex-col justify-start items-start gap-10'>
                <div className='w-full flex flex-col justify-start items-start gap-3'>
                  <p className='font-semibold text-2xl leading-8'>{item.title}</p>
                  <p className='font-normal text-sm leading-5'>{item.description}</p>
                </div>
                <p className='font-normal text-sm leading-5'>{item.content}</p>
              </div>
              <div className='w-full h-[267px] cursor-pointer rounded-lg overflow-hidden'>
                <PreImage src={item.image} layer={false} alt={item.title} objectPosition='center' />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ESPeopleResponsive;

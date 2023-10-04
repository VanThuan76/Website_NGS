import 'swiper/css';
import 'swiper/css/effect-creative';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { PreImage } from '@/components/common/customization/PreImage';
import { IComponents } from 'src/shared/schemas/typedef/IComponents';
type Props = {
  data: IComponents[];
};
const PartnerResponsive = ({ data }: Props) => {
  return (
    <div className='block w-full md:hidden'>
      <Swiper
        className='mySwiper'
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        spaceBetween={10}
        centeredSlides={true}
        navigation={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop
      >
        {data.map((item, idx) => (
          <SwiperSlide className='w-full rounded-lg py-5' key={idx}>
            <div className='h-[100px] w-full cursor-pointer overflow-hidden rounded-lg'>
              <PreImage src={item.image} layer={false} alt={item.title} objectFit='contain' objectPosition='center' />
            </div>
            <div
              className='flex w-full flex-col items-center justify-between gap-5 py-5'
              style={{ borderTop: '1px solid #fff' }}
            >
              <div className='flex w-full flex-col items-start justify-start gap-3'>
                <p className='text-2xl font-medium'>{item.title}</p>
                <p className='text-sm font-thin'>{item.description}</p>
              </div>
              <p>{item.content}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PartnerResponsive;

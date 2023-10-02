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
    <div className='w-full block md:hidden'>
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
          <SwiperSlide className='w-full py-5 rounded-lg' key={idx}>
            <div className='w-full h-[100px] cursor-pointer rounded-lg overflow-hidden'>
              <PreImage
                src={item.image}
                layer={false}
                alt={item.title}
                objectFit="contain"
                objectPosition='center'
              />
            </div>
            <div
              className='w-full py-5 flex flex-col justify-between items-center gap-5'
              style={{ borderTop: '1px solid #fff' }}
            >
              <div className='w-full flex flex-col justify-start items-start gap-3'>
                <p className='font-medium text-2xl'>{item.title}</p>
                <p className='font-thin text-sm'>{item.description}</p>
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

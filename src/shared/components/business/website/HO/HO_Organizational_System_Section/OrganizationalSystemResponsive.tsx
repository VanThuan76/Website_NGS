import 'swiper/css';
import 'swiper/css/effect-creative';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { PreImage } from '@/components/common/customization/PreImage';
import { IComponents } from 'src/shared/schemas/typedef/IComponents';
type Props = {
  data: IComponents[];
};
const OrganizationalSystemResponsive = ({ data }: Props) => {
  return (
    <div className='block w-full md:hidden'>
      <Swiper
        className='mySwiper'
        modules={[Pagination]}
        pagination={{
          dynamicBullets: true,
        }}
        slidesPerView={2}
        spaceBetween={50}
        centeredSlides={true}
      >
        {data.map((item, idx) => (
          <SwiperSlide className='rounded-lg py-5' key={idx}>
            <div className='h-[55px] w-full'>
              <PreImage src={item.image} layer={false} alt={item.title} objectFit='contain' />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OrganizationalSystemResponsive;

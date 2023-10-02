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
    <div className='w-full block md:hidden'>
      <Swiper
        className='mySwiper'
        modules={[Pagination]}
        pagination={{
          dynamicBullets: true,
        }}
      >
        {data.map((item, idx) => (
          <SwiperSlide className='w-full py-5 rounded-lg' key={idx}>
            <div className='w-full h-[55px]'>
              <PreImage src={item.image} layer={false} alt={item.title} objectFit='contain' />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OrganizationalSystemResponsive;

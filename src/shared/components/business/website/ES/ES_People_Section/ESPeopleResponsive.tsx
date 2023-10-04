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
    <div className='block w-full md:hidden'>
      <Swiper
        className='mySwiper'
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        slidesPerView={1}
        centeredSlides={true}
      >
        {data.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className='mx-auto flex w-full flex-col items-center justify-between gap-5 rounded-lg'>
              <div className='flex w-full flex-col items-start justify-start gap-10'>
                <div className='flex flex-col items-start justify-start gap-3'>
                  <p className='text-2xl font-semibold leading-8'>{item.title}</p>
                  <p className='text-sm font-normal leading-5 text-[#9A3902]'>{item.description}</p>
                </div>
                {item && item?.content!.split('//').length > 1 ? (
                  <div className='flex w-[90%] flex-col items-start justify-start gap-3'>
                    {item?.content?.split('//').map((word, index) => (
                      <p key={index} className='font-normal italic text-[#9A3902]'>
                        {word}
                      </p>
                    ))}
                  </div>
                ) : (
                  <p className='w-[90%] font-normal text-[#9A3902]'>{item?.content}</p>
                )}
              </div>
              <div className='h-[267px] w-full cursor-pointer overflow-hidden rounded-lg'>
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

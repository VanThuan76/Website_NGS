import { AnimatePresence } from 'framer-motion';
import { NGSDataService } from '@/mocks/website/HO/service';
import ServiceSection from './ServiceSection';
import TitleSection from '@/components/common/customization/TitleSection';
import { PreImage } from '@/components/common/customization/PreImage';

const HomeService = () => {
  return (
    <section id='Service' className='pb-4 md:pb-8 lg:pb-16 xl:pb-24 px-4 md:px-24 lg:px-32 xl:px-40'>
      <TitleSection
        title='Dịch vụ'
        description='Thay đổi bộ mặt Doanh nghiệp của bạn bằng giải pháp quản lý mới'
        findMore={true}
        className='w-full flex flex-col lg:flex-row xl:flex-row justify-between items-start gap-3'
      />
      <div className='max-w-[1440px] w-full h-full mx-auto my-auto mt-10 flex items-start justify-between lg:gap-10 xl:gap-10 overflow-hidden'>
        <PreImage
          src={'https://khoinguonsangtao.vn/wp-content/uploads/2022/11/hinh-nen-may-bay-vietnam-airline.jpg'}
          height={500}
          width={500}
          layer={false}
          alt={'Service'}
          className='hidden lg:block xl:block relative rounded-lg'
        />
        <AnimatePresence>
          <div className='w-full lg:w-1/2 flex flex-col justify-center items-center'>
            {NGSDataService.map((item, idx) => {
              return <ServiceSection key={idx} item={item} idx={idx} />;
            })}
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HomeService;

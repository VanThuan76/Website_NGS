import BtnCommon from '@/components/common/customization/BtnCommon';
import { PreImage } from '@/components/common/customization/PreImage';
import { priceData } from '@/mocks/website/HO/price';

const HomePrice = () => {
  return (
    <section
      id='Price'
      className='relative w-full my-10 max-h-[470px] md:max-h-[350px] z-30 px-4 md:px-24 lg:px-32 xl:px-40'
      style={{
        background: `linear-gradient(180deg, rgba(248, 133, 80, 0.3) -9.34%, rgba(255, 255, 255, 0.3) 129.73%)`,
      }}
    >
      <div className='max-w-[1440px] w-full mx-auto my-auto flex flex-col lg:flex-row gap-5 justify-between items-center py-4 md:py-8 lg:py-16 xl:py-24'>
        <div className='w-full flex flex-col justify-start items-start gap-3'>
          <h1 className='text-3xl lg:text-4xl'>Tiên phong đào tạo thực hành</h1>
          <p>
            Trường Cao Đẳng An ninh mạng iSPACE là đơn vị tiên phong trong đào tạo thực hành từ năm 2008 theo tiêu chí
            tuyển sinh đi liền tuyển dụng.
          </p>
          <BtnCommon title='Xem giá chi tiết' cls='bg-orange-500 border-none !text-white' />
        </div>
        <PreImage src={priceData.image} height={100} width={1400} layer={false} alt={'Price'} className='w-full rounded-lg' />
      </div>
    </section>
  );
};

export default HomePrice;


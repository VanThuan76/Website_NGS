import BtnCommon from '@/components/common/customization/BtnCommon';
import { PreImage } from '@/components/common/customization/PreImage';
import { aboutUsData } from '@/mocks/website/HO/aboutUs';
import TitleSection from '../../../../common/customization/TitleSection';

const HomeAboutUs = () => {
  return (
    <section id="AboutUs" className='pb-4 md:pb-8 lg:pb-16 xl:pb-24 px-4 md:px-24 lg:px-32 xl:px-52 2xl:px-96'>
      <div className='mb-20 w-full flex justify-between items-start gap-5'>
        <div className='w-[60%] relative gap-5'>
          <PreImage
            src={'https://khoinguonsangtao.vn/wp-content/uploads/2022/11/hinh-nen-may-bay-vietnam-airline.jpg'}
            height={550}
            width={500}
            layer={false}
            alt={'News'}
            className='w-3/4 h-[550px] relative'
            style={{
              borderRadius: '8px 8px 8px 96px',
            }}
          />
          <div className='absolute -bottom-10 right-0'>
            <PreImage
              src={'https://khoinguonsangtao.vn/wp-content/uploads/2022/11/hinh-nen-may-bay-vietnam-airline.jpg'}
              height={350}
              width={300}
              layer={false}
              alt={'News'}
              className='h-[350px]'
              style={{
                borderRadius: '400px 400px 8px 8px',
              }}
            />
          </div>
        </div>
        <div className='w-1/2 p-5 flex flex-col justify-start items-start'>
          <TitleSection
            title='Về chúng tôi'
            name="ss"
            description='Sự tin tưởng của khách hàng là động lực của chúng tôi'
            findMore={true}
            className='w-full flex flex-col justify-start items-start'
          />
          <BtnCommon title='Tìm hiểu thêm' />
        </div>
      </div>
      <div className='w-full flex justify-center items-start gap-5 mt-10 bg-transparent overflow-hidden'>
        {aboutUsData.map((item, idx) => {
          return (
            <div
              key={idx}
              className='dark:bg-[#1B1D35] p-5 flex flex-col justify-center items-center gap-5'
            >
              <div className='text-5xl'>{item.number}+</div>
              <p>{item.content}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HomeAboutUs;
1
import { PreImage } from '@/components/common/customization/PreImage';
import TitleSection from '@/components/common/customization/TitleSection';
import { YNGYourNextGenPartnerData } from '@/mocks/website/YNG/YNG_YourNextGen/partner';

const YNGYourNextGenPartner = () => {
  return (
    <section id='YNGYourNextGenPartner' className='w-full mb-4 md:mb-12 lg:mb-24 px-4 md:px-24 lg:px-32 xl:px-40'>
      <TitleSection
        title='Khách hàng'
        description='Những đơn vị đã cùng đồng hành với NGS'
        findMore={false}
        className='w-full flex flex-col lg:flex-row xl:flex-row justify-between items-start gap-3'
      />
      <div className='max-w-[1440px] w-full my-auto flex flex-col justify-between items-center lg:items-end gap-5 mt-10 mx-auto'>
        <div className='w-full bg-red grid grid-cols-2 justify-end items-end md:grid-cols-3 p-2'>
          {YNGYourNextGenPartnerData.map((item, idx) => (
            <PreImage
              key={idx}
              width={1980}
              height={100}
              alt={`YNGYourNextGenPartner ${idx}`}
              src={item}
              style={{ opacity: 0.8, transition: 'opacity 0.3s ease-in-out' }}
              className={`col-span-1 py-5 object-center ${(idx + 1) % 2 === 0 ? 'border-l-2' : ''} ${
                idx + 1 > 2 ? 'border-t-2' : ''
              } border-orange-300`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default YNGYourNextGenPartner;

import { PreImage } from '@/components/common/customization/PreImage';
import TitleSection from '@/components/common/customization/TitleSection';
import BorderCard from '@/components/icon/HO/security/BorderCard';
import { ERPPartnerData } from '@/mocks/website/YNG/YNG_ERP/partner';

const ERPPartner = () => {
  return (
    <section id='ERPPartner' className='w-full mb-4 md:mb-12 lg:mb-24 px-4 md:px-24 lg:px-32 xl:px-40'>
      <TitleSection
        title='Khách hàng'
        description='Những đơn vị đã cùng đồng hành với NGS'
        findMore={false}
        className='w-full flex flex-col lg:flex-row xl:flex-row justify-between items-start gap-3'
      />
      <div className='max-w-[1440px] w-full my-auto flex flex-col justify-between items-center lg:items-end gap-5 mt-10 mx-auto'>
        <div className='w-full bg-red grid grid-cols-2 justify-end items-end md:grid-cols-6 p-2'>
          {ERPPartnerData.map((item, idx) => (
            <div
              key={idx}
              className={`relative max-w-[310px] h-full rounded-lg shadow-md overflow-hidden`}
            >
              <PreImage
                key={idx}
                width={1980}
                height={100}
                alt={`ERPPartner ${idx}`}
                src={item}
                style={{ opacity: 0.8, transition: 'opacity 0.3s ease-in-out' }}
                className={`col-span-1 py-5 object-center`}
              />
              <div className='absolute top-0 left-0 w-full h-full'>
                <BorderCard />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ERPPartner;

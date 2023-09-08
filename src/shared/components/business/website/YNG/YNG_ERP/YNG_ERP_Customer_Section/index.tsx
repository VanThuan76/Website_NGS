import { PreImage } from '@/components/common/customization/PreImage';
import TitleSection from '@/components/common/customization/TitleSection';
import BorderCard from '@/components/icon/HO/security/BorderCard';
import { ERPCustomerData } from '@/mocks/website/YNG/YNG_ERP/customer';

const YNGERPCustomerSection = () => {
  return (
    <section id='ERPCustomer' className='w-full mb-2 md:mb-12 lg:mb-24 px-8 py-10 lg:px-14 lg:py-24'>
      <TitleSection
        title='Khách hàng'
        name={ERPCustomerData.sections.name}
        description={ERPCustomerData.sections.description}
        findMore={true}
        className='w-full flex flex-col justify-start items-start'
      />
      <div className='max-w-[1440px] w-full my-auto flex flex-col justify-between items-center gap-5 mt-10 mx-auto'>
        <div className='w-full bg-red grid grid-cols-2 justify-end items-end md:grid-cols-6 gap-2 p-2'>
          {ERPCustomerData.components.map((item, idx) => (
            <div key={idx} className={`relative max-w-[310px] h-full rounded-lg shadow-md overflow-hidden`}>
              <PreImage
                key={idx}
                width={1980}
                height={100}
                alt={`ERPCustomer ${idx}`}
                src={item.image}
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

export default YNGERPCustomerSection;

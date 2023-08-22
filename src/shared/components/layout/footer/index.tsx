import { PreImage } from '@/components/common/customization/PreImage';
import IconLocation from '@/components/icon/HO/event/IconLocation';
import { footerCompanyData, footerContactData, footerServiceData, footerSupportData } from '@/mocks/footer';
import InforFooter from './info';
import ResponsiveContent from './ResponsiveContent';

const Footer = () => {
  return (
    <section className='bg-[#141523] text-white font-thin pb-4 md:pb-8 lg:pb-16 xl:pb-24 px-4 md:px-24 lg:px-32 xl:px-40'>
      <div className='max-w-[1440px] w-full mx-auto my-auto flex flex-col gap-10 justify-between items-center p-4 md:p-6 lg:p-12'>
        <div className='w-full flex flex-col md:flex-row gap-4 justify-between items-center md:justify-start mb-4'>
          <div className='flex flex-col justify-start items-start'>
            <PreImage height={200} width={200} src={'/logo.svg'} alt={'Logo'} layer={false} />
            <p>Địa chỉ: {footerContactData.address}</p>
            <p>Số điện thoại: {footerContactData.phone}</p>
            <p>Email: {footerContactData.email}</p>
          </div>
          {/* //Content - Responsive Mobile AND Tablet */}
          <div className='w-full md:w-1/2 flex lg:hidden flex-col justify-center items-center'>
            <ResponsiveContent title='Dịch vụ' items={footerServiceData} />
            <ResponsiveContent title='Công ty' items={footerCompanyData} />
            <ResponsiveContent title='Hỗ trợ' items={footerSupportData} />
          </div>
          {/* //Content - Responsive Desktop */}
          <div className='w-full hidden lg:flex justify-around items-start'>
            <InforFooter title='Dịch vụ' info={footerServiceData} />
            <InforFooter title='Công ty' info={footerCompanyData} />
            <InforFooter title='Hỗ trợ' info={footerSupportData} />
          </div>
        </div>
        <div className='w-full flex flex-col md:flex-row justify-start items-start md:justify-between md:items-center border-t-2 py-5'>
          <div className='flex justify-between items-center gap-3 mb-2'>
            <IconLocation />
            <p>International (EN)</p>
          </div>
          <ul className='grid grid-cols-1 md:grid-cols-2 justify-start items-start gap-3'>
            <li>Risk & Violation Reporting</li>
            <li>Legal Notice</li>
            <li>Terms & Conditions</li>
            <li>Data Protection Policy</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;

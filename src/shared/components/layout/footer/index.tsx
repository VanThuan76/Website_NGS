import { PreImage } from '@/components/common/customization/PreImage';
import IconLocation from '@/components/icon/HO/event/IconLocation';
import {
  footerCompanyData,
  footerContactData,
  footerEcosystemData,
  footerServiceData,
  footerSupportData,
} from '@/mocks/footer';
import Link from 'next/link';
import InforFooter from './info';
import ResponsiveContent from './ResponsiveContent';

const Footer = () => {
  return (
    <section className='bg-[#141523] text-white font-thin pt-4 md:pt-8 lg:pt-16 pb-3 md:pb-6 lg:pb-12 px-8 md:px-16 lg:px-28'>
      <div className='max-w-[1440px] w-full mx-auto my-auto flex flex-col gap-10 justify-between items-center'>
        <div className='w-full grid grid-cols-2 gap-4 justify-between items-center md:justify-start mb-4'>
          <div className='w-[80%] flex flex-col justify-start items-start gap-2'>
            <PreImage height={200} width={200} src={'/logo.svg'} alt={'Logo'} layer={false} />
            <p>{footerContactData.name}</p>
            <p>Địa chỉ: {footerContactData.address}</p>
            <p>VP Giao dịch: {footerContactData.transactionOffices}</p>
            <p>Chi nhánh HCM: {footerContactData.branch_HCM}</p>
            <div className='flex flex-col justify-start items-start'>
              <p>Số điện thoại:</p>
              <ul className='flex flex-col justify-start items-start'>
                {footerContactData.phone.map((item, idx) => (
                  <li key={idx}>- {item}</li>
                ))}
              </ul>
            </div>
            <p>Email: {footerContactData.email}</p>
            <p>FAX: {footerContactData.fax}</p>
          </div>
          {/* ->>Content - Responsive Mobile AND Tablet */}
          <div className='w-full md:w-1/2 flex lg:hidden flex-col justify-center items-center'>
            <ResponsiveContent title='Sản phẩm & Dịch vụ' items={footerServiceData} />
            <ResponsiveContent title='Công ty' items={footerCompanyData} />
            <ResponsiveContent title='' items={footerSupportData} />
          </div>
          {/* <--Content - Responsive Desktop */}
          <div className='w-full hidden lg:flex justify-around items-start'>
            <InforFooter title='Sản phẩm & Dịch vụ' info={footerServiceData} />
            <InforFooter title='Công ty' info={footerCompanyData} />
            <InforFooter title='' info={footerSupportData} />
          </div>
        </div>
        <div className='w-full flex flex-col md:flex-row justify-start items-start md:justify-between md:items-center border-t-2 py-5'>
          <div className='flex justify-between items-center gap-3 mb-2'>
            <IconLocation />
            <p>International (VI)</p>
          </div>
          <ul className='flex flex-col lg:flex-row justify-start items-start gap-3'>
            {footerEcosystemData.map((item, idx) => (
              <Link href={item.link} key={idx} target='_blank'>
                <li>{item.name}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;

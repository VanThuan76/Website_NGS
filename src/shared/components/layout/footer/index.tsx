import { PreImage } from '@/components/common/PreImage';
import IconLocation from '@/components/icon/event/IconLocation';
import { footerData } from '@/mocks/footer';
import InforFooter from './info';

const Footer = () => {
  return (
    <section className='w-full flex flex-col gap-10 justify-between items-center mx-auto px-16 py-10 bg-[#141523] text-white font-thin'>
      <div className='grid grid-cols-4 gap-4 justify-between items-center'>
        <div className='flex flex-col justify-start items-start'>
          <PreImage height={200} width={200} src={'/logo.svg'} alt={'Logo'} layer={false} />
          <p>Địa chỉ: {footerData.contactData.address}</p>
          <p>Số điện thoại: {footerData.contactData.phone}</p>
          <p>Email: {footerData.contactData.email}</p>
        </div>
        <div className='flex flex-col justify-end items-end'>
          <InforFooter title='Dịch vụ' info={footerData.service} />
        </div>
        <div className='flex flex-col justify-end items-end'>
          <InforFooter title='Công ty' info={footerData.company} />
        </div>
        <div className='flex flex-col justify-end items-end'>
          <InforFooter title='Hỗ trợ' info={footerData.support} />
        </div>
      </div>
      <div className='w-full flex justify-between items-center border-t-2 pt-5'>
        <div className='flex justify-between items-center gap-3'>
          <IconLocation />
          <p>International (EN)</p>
        </div>
        <ul className='flex justify-between items-center gap-3'>
          <li>Risk & Violation Reporting</li>
          <li>Legal Notice</li>
          <li>Terms & Conditions</li>
          <li>Data Protection Policy</li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;

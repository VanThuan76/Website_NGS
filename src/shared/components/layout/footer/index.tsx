import { PreImage } from '@/components/common/customization/PreImage';
import IconLocation from '@/components/icon/HO/event/IconLocation';
import {
  footerCompanyData,
  footerContactData,
  footerEcosystemData,
  footerServiceData,
  footerSupportData,
} from '@/mocks/footer';
import { splitTextToArrayByDoubleSlash } from '@/utils/functions/splitTextToArray';
import Link from 'next/link';
import InforFooter from './info';
import ResponsiveContent from './ResponsiveContent';

const Footer = () => {
  return (
    <section className='bg-[#141523] text-white font-thin pb-4 md:pb-8 lg:pb-10 px-4 md:px-24'>
      <div className='max-w-[1440px] w-full mx-auto my-auto flex flex-col gap-10 justify-between items-center'>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 justify-between items-center md:justify-start mb-4'>
          <div className='w-[95%] flex flex-col justify-start items-start gap-2'>
            <div className='relative w-[200px] h-[200px]'>
              <PreImage src={'/logo.svg'} alt={'Logo'} layer={false} objectFit="contain" />
            </div>
            <p className='font-medium'>{footerContactData.name}</p>
            <div className='space-x-2'>
              <p className='font-normal'>Địa chỉ:</p>
              <div className='flex flex-col justify-start items-start'>
                {splitTextToArrayByDoubleSlash(footerContactData.address || '').map((item: string, idx: number) => (
                  <p key={idx}>{item}</p>
                ))}
              </div>
            </div>
            <div className='space-x-2'>
              <p className='font-normal'>VP Giao dịch:</p>
              <div className='flex flex-col justify-start items-start'>
                {splitTextToArrayByDoubleSlash(footerContactData.transactionOffices || '').map(
                  (item: string, idx: number) => (
                    <p key={idx}>{item}</p>
                  ),
                )}
              </div>
            </div>
            <div className='space-x-2'>
              <p className='font-normal'>Chi nhánh HCM:</p>
              <div className='flex flex-col justify-start items-start'>
                {splitTextToArrayByDoubleSlash(footerContactData.branch_HCM || '').map((item: string, idx: number) => (
                  <p key={idx}>{item}</p>
                ))}
              </div>
            </div>
            <div className='flex flex-col justify-start items-start space-x-2'>
              <p className='font-normal'>Số điện thoại:</p>
              <ul className='flex flex-col justify-start items-start'>
                {footerContactData.phone.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            <p className='font-normal'>FAX: {footerContactData.fax}</p>
            <p className='font-normal'>Email: {footerContactData.email}</p>
          </div>
          {/* ->>Content - Responsive Mobile AND Tablet */}
          <div className='w-full md:w-1/2 flex lg:hidden flex-col justify-center items-center'>
            <ResponsiveContent title='Sản phẩm & Dịch vụ' items={footerServiceData} />
            <ResponsiveContent title='Công ty' items={footerCompanyData} />
            <ResponsiveContent title='Hỗ trợ' items={footerSupportData} />
          </div>
          {/* <--Content - Responsive Desktop */}
          <div className='w-full hidden lg:flex justify-around items-start'>
            <InforFooter title='Sản phẩm & Dịch vụ' info={footerServiceData} />
            <InforFooter title='Công ty' info={footerCompanyData} />
            <InforFooter title='Hỗ trợ' info={footerSupportData} />
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

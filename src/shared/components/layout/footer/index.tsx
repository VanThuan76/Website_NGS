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
    <section className='bg-[#141523] px-4 pb-4 font-thin text-white md:px-24 md:pb-8 lg:pb-10'>
      <div className='mx-auto my-auto flex w-full max-w-[1440px] flex-col items-center justify-between gap-10'>
        <div className='mb-4 grid w-full grid-cols-1 items-center justify-between gap-4 md:grid-cols-2 md:justify-start'>
          <div className='flex w-[95%] flex-col items-start justify-start gap-2'>
            <div className='relative h-[200px] w-[200px]'>
              <PreImage src={'/logo.svg'} alt={'Logo'} layer={false} objectFit='contain' />
            </div>
            <p className='font-medium'>{footerContactData.name}</p>
            <div className='space-x-2'>
              <p className='font-normal'>Địa chỉ:</p>
              <div className='flex flex-col items-start justify-start'>
                {splitTextToArrayByDoubleSlash(footerContactData.address || '').map((item: string, idx: number) => (
                  <p key={idx}>{item}</p>
                ))}
              </div>
            </div>
            <div className='space-x-2'>
              <p className='font-normal'>VP Giao dịch:</p>
              <div className='flex flex-col items-start justify-start'>
                {splitTextToArrayByDoubleSlash(footerContactData.transactionOffices || '').map(
                  (item: string, idx: number) => (
                    <p key={idx}>{item}</p>
                  ),
                )}
              </div>
            </div>
            <div className='space-x-2'>
              <p className='font-normal'>Chi nhánh HCM:</p>
              <div className='flex flex-col items-start justify-start'>
                {splitTextToArrayByDoubleSlash(footerContactData.branch_HCM || '').map((item: string, idx: number) => (
                  <p key={idx}>{item}</p>
                ))}
              </div>
            </div>
            <div className='flex flex-col items-start justify-start space-x-2'>
              <p className='font-normal'>Số điện thoại:</p>
              <ul className='flex flex-col items-start justify-start'>
                {footerContactData.phone.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            <p className='font-normal'>FAX: {footerContactData.fax}</p>
            <p className='font-normal'>Email: {footerContactData.email}</p>
          </div>
          {/* ->>Content - Responsive Mobile AND Tablet */}
          <div className='flex w-full flex-col items-center justify-center md:w-1/2 lg:hidden'>
            <ResponsiveContent title='Sản phẩm & Dịch vụ' items={footerServiceData} />
            <ResponsiveContent title='Công ty' items={footerCompanyData} />
            <ResponsiveContent title='Hỗ trợ' items={footerSupportData} />
          </div>
          {/* <--Content - Responsive Desktop */}
          <div className='hidden w-full items-start justify-around lg:flex'>
            <InforFooter title='Sản phẩm & Dịch vụ' info={footerServiceData} />
            <InforFooter title='Công ty' info={footerCompanyData} />
            <InforFooter title='Hỗ trợ' info={footerSupportData} />
          </div>
        </div>
        <div className='flex w-full flex-col items-start justify-start border-t-2 py-5 md:flex-row md:items-center md:justify-between'>
          <div className='mb-2 flex items-center justify-between gap-3'>
            <IconLocation />
            <p>International (VI)</p>
          </div>
          <ul className='flex flex-col items-start justify-start gap-3 lg:flex-row'>
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

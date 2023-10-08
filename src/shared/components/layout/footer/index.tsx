import useTrans from '@/hooks/useTrans';
import Link from 'next/link';
import IconLocation from '@/components/icon/HO/event/IconLocation';
import ResponsiveContent from './ResponsiveContent';
import { splitTextToArrayByDoubleSlash } from '@/utils/functions/splitTextToArray';
import { PreImage } from '@/components/common/customization/PreImage';
interface Props {
  title: string;
  info: string[];
}
const InforFooter = ({ title, info }: Props) => {
  return (
    <ul className='flex flex-col items-start justify-start'>
      <h2 className='mb-3 font-medium'>{title}</h2>
      {info.map((item, inx) => (
        <Link href={'#'} key={inx}>
          <li className='mb-2 font-thin'>{item}</li>
        </Link>
      ))}
    </ul>
  );
};

const Footer = () => {
  const { trans } = useTrans();
  return (
    <section className='bg-[#141523] px-4 pb-4 font-thin text-white md:px-24 md:pb-8 lg:pb-10'>
      <div className='mx-auto my-auto flex w-full max-w-[1440px] flex-col items-center justify-between gap-10'>
        <div className='mb-4 grid w-full grid-cols-1 items-center justify-between gap-4 md:grid-cols-2 md:justify-start'>
          <div className='flex w-[95%] flex-col items-start justify-start gap-2'>
            <div className='relative h-[200px] w-[200px]'>
              <PreImage src={'/logo.svg'} alt={'Logo'} layer={false} objectFit='contain' />
            </div>
            <p className='font-medium'>{trans.website.information.contact.name}</p>
            <div className='space-x-2'>
              <p className='font-normal'>{trans.website.information.common.address}:</p>
              <div className='flex flex-col items-start justify-start'>
                {splitTextToArrayByDoubleSlash(trans.website.information.contact.address || '').map(
                  (item: string, idx: number) => (
                    <p key={idx}>{item}</p>
                  ),
                )}
              </div>
            </div>
            <div className='space-x-2'>
              <p className='font-normal'>{trans.website.information.common.salesOffice}:</p>
              <div className='flex flex-col items-start justify-start'>
                {splitTextToArrayByDoubleSlash(trans.website.information.contact.transactionOffices || '').map(
                  (item: string, idx: number) => (
                    <p key={idx}>{item}</p>
                  ),
                )}
              </div>
            </div>
            <div className='space-x-2'>
              <p className='font-normal'>{trans.website.information.common.branch_HCM}:</p>
              <div className='flex flex-col items-start justify-start'>
                {splitTextToArrayByDoubleSlash(trans.website.information.contact.branch_HCM || '').map(
                  (item: string, idx: number) => (
                    <p key={idx}>{item}</p>
                  ),
                )}
              </div>
            </div>
            <div className='flex flex-col items-start justify-start space-x-2'>
              <p className='font-normal'>{trans.website.information.common.phone}:</p>
              <ul className='flex flex-col items-start justify-start'>
                {trans.website.information.contact.phone.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            <p className='font-normal'>FAX: {trans.website.information.contact.fax}</p>
            <p className='font-normal'>Email: {trans.website.information.contact.email}</p>
          </div>
          {/* ->>Content - Responsive Mobile AND Tablet */}
          <div className='flex w-full flex-col items-center justify-center md:w-1/2 lg:hidden'>
            <ResponsiveContent
              title={trans.website.information.common.productAndService}
              items={trans.website.information.service}
            />
            <ResponsiveContent
              title={trans.website.information.common.company}
              items={trans.website.information.company}
            />
            <ResponsiveContent
              title={trans.website.information.common.support}
              items={trans.website.information.support}
            />
          </div>
          {/* <--Content - Responsive Desktop */}
          <div className='hidden w-full items-start justify-around lg:flex'>
            <InforFooter
              title={trans.website.information.common.productAndService}
              info={trans.website.information.service}
            />
            <InforFooter title={trans.website.information.common.company} info={trans.website.information.company} />
            <InforFooter title={trans.website.information.common.support} info={trans.website.information.support} />
          </div>
        </div>
        <div className='flex w-full flex-col items-start justify-start border-t-2 py-5 md:flex-row md:items-center md:justify-between'>
          <div className='mb-2 flex items-center justify-between gap-3'>
            <IconLocation />
            <p>{trans.website.information.common.international} (VI)</p>
          </div>
          <ul className='flex flex-col items-start justify-start gap-3 lg:flex-row'>
            {trans.website.information.ecosystem.map((item, idx) => (
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

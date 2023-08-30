import Head from 'next/head';
import dynamic from 'next/dynamic';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import ERPBanner from '@/components/business/website/YNG/YNG_ERP/YNG_ERP_banner';
import YNGYourNextGenSolution from '@/components/business/website/YNG/YNG_ERP/YNG_ERP_solution';
import ERPPartner from '@/components/business/website/YNG/YNG_ERP/YNG_ERP_partner';
import { YNG_ERP_banner } from '@/mocks/website/YNG/YNG_ERP/banner';

const ScrollRevealWrapper = dynamic(() => import('@/components/common/customization/ScrollRevealWrapper'), {
  ssr: false,
});
const ERPPage = () => {
  return (
    <>
      <Head>
        <title>YNG_ERP NGS</title>
        <meta name='description' content='YNG_ERP NGS' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <ScrollRevealWrapper>
        <ERPBanner data={YNG_ERP_banner} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <YNGYourNextGenSolution />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ERPPartner />
      </ScrollRevealWrapper>
    </>
  );
};

ERPPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default ERPPage;

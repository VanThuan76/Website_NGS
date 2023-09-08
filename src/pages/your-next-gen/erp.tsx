import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import YNGERPBannerSection from '@/components/business/website/YNG/YNG_ERP/YNG_ERP_Banner_Section';
import YNGERPIntroductionSection from '@/components/business/website/YNG/YNG_ERP/YNG_ERP_Solution_Section';
import YNGBackSolution from '@/components/business/website/YNG/YNG_Common/YNG_Common_BackSolution';
import YNGPilotSubrice from '@/components/business/website/YNG/YNG_Common/YNG_Common_PilotSubrice';
import YNGERPCustomerSection from '@/components/business/website/YNG/YNG_ERP/YNG_ERP_Customer_Section';
import { YNG_ERP_banner } from '@/mocks/website/YNG/YNG_ERP/banner';

const ScrollRevealWrapper = dynamic(() => import('@/components/common/customization/ScrollRevealWrapper'), {
  ssr: false,
});
const ERPPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>YNG_ERP NGS</title>
        <meta name='description' content='YNG_ERP NGS' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <ScrollRevealWrapper>
        <YNGERPBannerSection data={YNG_ERP_banner} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <YNGERPIntroductionSection />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <YNGERPCustomerSection />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <YNGBackSolution />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <YNGPilotSubrice />
      </ScrollRevealWrapper>
    </React.Fragment>
  );
};

ERPPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default ERPPage;

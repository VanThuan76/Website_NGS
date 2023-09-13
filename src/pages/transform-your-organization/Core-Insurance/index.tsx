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
import ChallengeDesignOneSection from '@/components/business/website/TYO&SYB_Common/Challenge_DesignOne_Section';
import { TYOOverview1, TYOOverview3, TYOOverview6, TYO_CB_Section2, TYO_CB_Section3, TYO_CB_Section4, TYO_CI_Section2, TYO_CI_Section3} from '@/mocks/website/TYO/overview';
import OverviewDesignOneSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignOne_Section';
import OverviewDesignSixSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignSix_Section';
import ServiceDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Service_DesignThree_Section';
import PartnerDesignOneSection from '@/components/business/website/TYO&SYB_Common/Partner_DesignOne_Section';
import OverviewDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignThree_Section';

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
      <OverviewDesignThreeSection title='Tổng quan' data={TYO_CI_Section2} />
      <ChallengeDesignOneSection title='Thách thức' data={TYO_CI_Section3} />
    </React.Fragment>
  );
};

ERPPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default ERPPage;

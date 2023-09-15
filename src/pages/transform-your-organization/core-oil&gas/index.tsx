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
import { TYOOverview1, TYOOverview6, } from '@/mocks/website/TYO/overview';
import OverviewDesignOneSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignOne_Section';
import OverviewDesignSixSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignSix_Section';
import ServiceDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Service_DesignThree_Section';
import PartnerDesignOneSection from '@/components/business/website/TYO&SYB_Common/Partner_DesignOne_Section';
import BannerDesignOneSection from '@/components/business/website/All_Common/Banner_DesignOne_Section';
import ChallengeDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Challenge_DesignTwo_Section';
import ServiceDesignTwoSetion from '@/components/business/website/TYO&SYB_Common/Service_DesignTwo_Section';
import ServiceDesignOneSection from '@/components/business/website/TYO&SYB_Common/Service_DesignOne_Section';
import ChallengeDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Challenge_DesignThree_Section';
import ClientStoriesDesignTwoSection from '@/components/business/website/TYO&SYB_Common/ClientStories_DesignTwo_Section';
import OverviewDesignFiveSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignFive_Section';
import PartnerDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Partner_DesignThree_Section';
import ClientStoriesDesignOneSection from '@/components/business/website/TYO&SYB_Common/ClientStories_DesignOne_Section';
import FormDesignOneSection from '@/components/business/website/TYO&SYB_Common/Form_DesignOne_Section';
import { TYO_CG_Section1, TYO_CG_Section2, TYO_CG_Section3, TYO_CG_Section4, TYO_CG_Section5, TYO_CG_Section6, TYO_CG_Section7, TYO_CG_Section8 } from '@/mocks/website/TYO/Trang';

const ScrollRevealWrapper = dynamic(() => import('@/components/common/customization/ScrollRevealWrapper'), {
  ssr: false,
});
const ERPPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>TYO_CG NGS</title>
        <meta name='description' content='YNG_ERP NGS' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <BannerDesignOneSection title="Trang chủ" data={TYO_CG_Section1}/>
      <OverviewDesignOneSection title='Tổng quan' data={TYO_CG_Section2} />
      <ChallengeDesignThreeSection title='Lợi ích mang lại' data={TYO_CG_Section3} />
      <ServiceDesignTwoSetion title='Dịch vụ' data={TYO_CG_Section4} />
      <OverviewDesignFiveSection title='Tại sao chọn NGS'data={TYO_CG_Section5}/>
      <PartnerDesignThreeSection data={TYO_CG_Section6}/>
      <ClientStoriesDesignOneSection title='' data={TYO_CG_Section7} />
      <FormDesignOneSection title='Dùng thử' data={TYO_CG_Section8}/>
  
      
    </React.Fragment>
  );
};

ERPPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default ERPPage;

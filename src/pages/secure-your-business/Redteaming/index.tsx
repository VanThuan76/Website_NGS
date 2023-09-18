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
import { TYOOverview1, TYOOverview6,} from '@/mocks/website/TYO/overview';
import OverviewDesignOneSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignOne_Section';
import OverviewDesignSixSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignSix_Section';
import ServiceDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Service_DesignThree_Section';
import PartnerDesignOneSection from '@/components/business/website/TYO&SYB_Common/Partner_DesignOne_Section';
import BannerDesignOneSection from '@/components/business/website/All_Common/Banner_DesignOne_Section';
import OverviewDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignThree_Section';
import OverviewDesignFourSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignFour_Section';
import ClientStoriesDesignTwoSection from '@/components/business/website/TYO&SYB_Common/ClientStories_DesignTwo_Section';
import FormDesignOneSection from '@/components/business/website/TYO&SYB_Common/Form_DesignOne_Section';
import { TYO_ADM_Section1, TYO_ADM_Section2, TYO_ADM_Section3, TYO_ADM_Section4, TYO_ADM_Section6, TYO_ADM_Section7 } from '@/mocks/website/TYO/Trang';
import BannerDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Banner_DesignTwo_Section';
import { SYB_MA_Section1, SYB_MA_Section2, SYB_MA_Section3, SYB_MA_Section4, SYB_MA_Section5, SYB_MA_Section6, SYB_MA_Section7, SYB_MA_Section8, SYB_RT_Section1, SYB_RT_Section2, SYB_RT_Section3, SYB_RT_Section4, SYB_RT_Section5, SYB_RT_Section6, SYB_RT_Section7, SYB_RT_Section8 } from '@/mocks/website/SYB/trang';
import ChallengeDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Challenge_DesignThree_Section';
import WhyUsDesignOneSection from '@/components/business/website/TYO&SYB_Common/WhyUs_DesignOne_Section';
import PartnerDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Partner_DesignTwo_Section';
import ServiceDesignFiveSection from '@/components/business/website/TYO&SYB_Common/Service_DesignFive_Section';

const ScrollRevealWrapper = dynamic(() => import('@/components/common/customization/ScrollRevealWrapper'), {
  ssr: false,
});
const ERPPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>SYB_RT NGS</title>
        <meta name='description' content='YNG_ERP NGS' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <BannerDesignTwoSection breadcrumb={["Trang chủ", "Dịch vụ xuất sắc", "Dịch vụ kiểm thử đăng nhập hệ thống"]} data={SYB_RT_Section1}/>
      <OverviewDesignOneSection title='Tổng quan' data={SYB_RT_Section2} />
      <OverviewDesignFourSection title='Tổng quan' data={SYB_RT_Section3} />
      <ServiceDesignFiveSection title='Service' data={SYB_RT_Section4} />
      <WhyUsDesignOneSection title='Tại sao chọn NGS' data={SYB_RT_Section5}/>
      <PartnerDesignTwoSection data={SYB_RT_Section6}/>
      <ClientStoriesDesignTwoSection title='Client stories' data={SYB_RT_Section7} />
      <FormDesignOneSection title='Dùng thử' data={SYB_RT_Section8}/>
    </React.Fragment>
  );
};

ERPPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default ERPPage;
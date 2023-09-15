import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import OverviewDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignTwo_Section';
import OverviewDesignFourSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignFour_Section';
import ChallengeDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Challenge_DesignTwo_Section';
import ServiceDesignOneSection from '@/components/business/website/TYO&SYB_Common/Service_DesignOne_Section';
import ClientStoriesDesignTwoSection from '@/components/business/website/TYO&SYB_Common/ClientStories_DesignTwo_Section';
import PartnerDesignOneSection from '@/components/business/website/TYO&SYB_Common/Partner_DesignOne_Section';
import OverviewDesignOneSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignOne_Section';
import BannerDesignOneSection from '@/components/business/website/All_Common/Banner_DesignOne_Section';
import WhyUsDesignOneSection from '@/components/business/website/TYO&SYB_Common/WhyUs_DesignOne_Section';
import PartnerDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Partner_DesignThree_Section';
import { TYOBanner1_PG3_11, TYOClientStories2_PG3_11, TYOOverview1_PG3_11, TYOPartner3_PG3_11, TYOService1_PG3_11, TYOWhyUs1_PG3_11 } from '@/mocks/website/TYO/duong';

const ScrollRevealWrapper = dynamic(() => import('@/components/common/customization/ScrollRevealWrapper'), {
  ssr: false,
});
const SCMPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Supply Chain Management</title>
        <meta name='description' content='YNG_ERP NGS' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <BannerDesignOneSection title="Chuyển đổi số" data={TYOBanner1_PG3_11}/>
      <OverviewDesignOneSection title='Tổng quan' data={TYOOverview1_PG3_11} />
      {/* <OverviewDesignFourSection title='Tổng quan' data={TYOOverview4_PG3_11} />
      <ChallengeDesignTwoSection title='Giá trị mang lại' data={TYOchallenge2_PG3_11} /> */}
      <ServiceDesignOneSection title='' data={TYOService1_PG3_11} />
      <WhyUsDesignOneSection title='Tại sao chọn NGS' data={TYOWhyUs1_PG3_11}/>
      <PartnerDesignThreeSection data={TYOPartner3_PG3_11}/>
      <ClientStoriesDesignTwoSection title='Client stories' data={TYOClientStories2_PG3_11} />

      
    </React.Fragment>
    
  );
};

SCMPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default SCMPage;

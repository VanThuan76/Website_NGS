import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import OverviewDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignTwo_Section';
import { TYOClientStories2_PG3_10, TYOClientStories2_PG3_12, TYOOverview2_PG3_10, TYOOverview4_PG3_10 , TYOOverview4_PG3_16, TYOOverview7_PG3_17, TYOPartner1, TYOPartner1_PG3_10, TYOService1_PG3_10, TYOService1_PG3_16, TYOService1_PG3_17, TYOchallenge2_PG3_10, TYOchallenge2_PG3_16, TYOchallenge2_PG3_17 } from '@/mocks/website/TYO/overview';
import OverviewDesignFourSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignFour_Section';
import ChallengeDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Challenge_DesignTwo_Section';
import ServiceDesignOneSection from '@/components/business/website/TYO&SYB_Common/Service_DesignOne_Section';
import ClientStoriesDesignTwoSection from '@/components/business/website/TYO&SYB_Common/ClientStories_DesignTwo_Section';
import PartnerDesignOneSection from '@/components/business/website/TYO&SYB_Common/Partner_DesignOne_Section';
import OverviewDesignSevenSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignSeven_Section';
import BannerDesignOneSection from '@/components/business/website/All_Common/Banner_DesignOne_Section';
import { TYOBanner1_PG3_17, TYOPartner3_PG3_17, TYOWhyUs1_PG3_17, TYOclientStories1_PG3_17 } from '@/mocks/website/TYO/new';
import ClientStoriesDesignOneSection from '@/components/business/website/TYO&SYB_Common/ClientStories_DesignOne_Section';
import WhyUsDesignOneSection from '@/components/business/website/TYO&SYB_Common/WhyUs_DesignOne_Section';
import PartnerDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Partner_DesignThree_Section';

const ScrollRevealWrapper = dynamic(() => import('@/components/common/customization/ScrollRevealWrapper'), {
  ssr: false,
});
const DAAPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Extended Planning and Analysis</title>
        <meta name='description' content='YNG_ERP NGS' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <BannerDesignOneSection title="Dữ liệu và phân tích" data={TYOBanner1_PG3_17}/>
      <OverviewDesignSevenSection title='Tổng quan' data={TYOOverview7_PG3_17} />
      <ChallengeDesignTwoSection title='Giá trị mang lại' data={TYOchallenge2_PG3_17} />
      <ServiceDesignOneSection title='' data={TYOService1_PG3_17} />
      <WhyUsDesignOneSection title='Tại sao chọn NGS' data={TYOWhyUs1_PG3_17}/>
      <ClientStoriesDesignTwoSection title='Client stories' data={TYOClientStories2_PG3_10} />
      <PartnerDesignThreeSection data={TYOPartner3_PG3_17}/>




    </React.Fragment>
    
  );
};

DAAPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default DAAPage;

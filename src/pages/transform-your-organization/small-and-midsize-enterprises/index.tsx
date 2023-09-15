import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import OverviewDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignTwo_Section';
import { TYOClientStories2_PG3_10, TYOClientStories2_PG3_12, TYOOverview1_PG3_15, TYOOverview2_PG3_10, TYOOverview4_PG3_10 , TYOOverview4_PG3_11, TYOPartner1, TYOPartner1_PG3_10, TYOService1_PG3_10, TYOService1_PG3_12, TYOService1_PG3_15, TYOchallenge2_PG3_10, TYOchallenge2_PG3_11, TYOchallenge3_PG3_15 } from '@/mocks/website/TYO/overview';
import OverviewDesignFourSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignFour_Section';
import ChallengeDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Challenge_DesignTwo_Section';
import ServiceDesignOneSection from '@/components/business/website/TYO&SYB_Common/Service_DesignOne_Section';
import ClientStoriesDesignTwoSection from '@/components/business/website/TYO&SYB_Common/ClientStories_DesignTwo_Section';
import PartnerDesignOneSection from '@/components/business/website/TYO&SYB_Common/Partner_DesignOne_Section';
import OverviewDesignOneSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignOne_Section';
import ChallengeDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Challenge_DesignThree_Section';
import BannerDesignOneSection from '@/components/business/website/All_Common/Banner_DesignOne_Section';
import { TYOBanner1_PG3_15, TYOPartner3_PG3_15, TYOWhyUs1_PG3_15, TYOclientStories1_PG3_15 } from '@/mocks/website/TYO/new';
import WhyUsDesignOneSection from '@/components/business/website/TYO&SYB_Common/WhyUs_DesignOne_Section';
import PartnerDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Partner_DesignThree_Section';
import ClientStoriesDesignOneSection from '@/components/business/website/TYO&SYB_Common/ClientStories_DesignOne_Section';

const ScrollRevealWrapper = dynamic(() => import('@/components/common/customization/ScrollRevealWrapper'), {
  ssr: false,
});
const SMEPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Small and Midsize Enterprises</title>
        <meta name='description' content='YNG_ERP NGS' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <BannerDesignOneSection title="Doanh nghiệp vừa và nhỏ" data={TYOBanner1_PG3_15}/>
      <OverviewDesignOneSection title='Tổng quan' data={TYOOverview1_PG3_15} />
      <ChallengeDesignThreeSection title='Lợi ích mang lại' data={TYOchallenge3_PG3_15} />
      <ServiceDesignOneSection title='' data={TYOService1_PG3_15} />
      <WhyUsDesignOneSection title='Tại sao chọn NGS' data={TYOWhyUs1_PG3_15}/>
      <PartnerDesignThreeSection data={TYOPartner3_PG3_15}/>
      <ClientStoriesDesignOneSection title='' data={TYOclientStories1_PG3_15} />



    </React.Fragment>
    
  );
};

SMEPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default SMEPage;

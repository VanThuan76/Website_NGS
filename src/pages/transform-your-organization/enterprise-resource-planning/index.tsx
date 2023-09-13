import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import OverviewDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignTwo_Section';
import { TYOClientStories2_PG3_10, TYOOverview2_PG3_10, TYOOverview4_PG3_10 , TYOPartner1, TYOPartner1_PG3_10, TYOService1_PG3_10, TYOchallenge2_PG3_10 } from '@/mocks/website/TYO/overview';
import OverviewDesignFourSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignFour_Section';
import ChallengeDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Challenge_DesignTwo_Section';
import ServiceDesignOneSection from '@/components/business/website/TYO&SYB_Common/Service_DesignOne_Section';
import ClientStoriesDesignTwoSection from '@/components/business/website/TYO&SYB_Common/ClientStories_DesignTwo_Section';
import PartnerDesignOneSection from '@/components/business/website/TYO&SYB_Common/Partner_DesignOne_Section';

const ScrollRevealWrapper = dynamic(() => import('@/components/common/customization/ScrollRevealWrapper'), {
  ssr: false,
});
const ERPPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Enterprise Resource Planning</title>
        <meta name='description' content='YNG_ERP NGS' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <OverviewDesignTwoSection title='Tổng quan' data={TYOOverview2_PG3_10} />
      <OverviewDesignFourSection title='' data={TYOOverview4_PG3_10} />
      <ChallengeDesignTwoSection title='Giá trị mang lại' data={TYOchallenge2_PG3_10} />
      <ServiceDesignOneSection title='' data={TYOService1_PG3_10} />
      <PartnerDesignOneSection data={TYOPartner1_PG3_10} />
      <ClientStoriesDesignTwoSection title='Client stories' data={TYOClientStories2_PG3_10} />




    </React.Fragment>
    
  );
};

ERPPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default ERPPage;
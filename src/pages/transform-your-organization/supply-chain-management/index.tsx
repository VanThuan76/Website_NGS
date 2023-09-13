import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import OverviewDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignTwo_Section';
import { TYOClientStories2_PG3_10, TYOClientStories2_PG3_11, TYOOverview1, TYOOverview1_PG3_11, TYOOverview2_PG3_10, TYOOverview4_PG3_10 , TYOOverview4_PG3_11, TYOPartner1, TYOPartner1_PG3_10, TYOService1_PG3_10, TYOService1_PG3_11, TYOchallenge2_PG3_10, TYOchallenge2_PG3_11 } from '@/mocks/website/TYO/overview';
import OverviewDesignFourSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignFour_Section';
import ChallengeDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Challenge_DesignTwo_Section';
import ServiceDesignOneSection from '@/components/business/website/TYO&SYB_Common/Service_DesignOne_Section';
import ClientStoriesDesignTwoSection from '@/components/business/website/TYO&SYB_Common/ClientStories_DesignTwo_Section';
import PartnerDesignOneSection from '@/components/business/website/TYO&SYB_Common/Partner_DesignOne_Section';
import OverviewDesignOneSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignOne_Section';

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
      <OverviewDesignOneSection title='Tổng quan' data={TYOOverview1_PG3_11} />
      <OverviewDesignFourSection title='Tổng quan' data={TYOOverview4_PG3_11} />
      <ChallengeDesignTwoSection title='Giá trị mang lại' data={TYOchallenge2_PG3_11} />
      <ServiceDesignOneSection title='' data={TYOService1_PG3_11} />
      <ClientStoriesDesignTwoSection title='Client stories' data={TYOClientStories2_PG3_11} />

      
    </React.Fragment>
    
  );
};

SCMPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default SCMPage;

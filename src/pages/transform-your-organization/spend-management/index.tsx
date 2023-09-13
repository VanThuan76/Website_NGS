import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import OverviewDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignTwo_Section';
import { TYOClientStories2_PG3_10, TYOClientStories2_PG3_12, TYOOverview2_PG3_10, TYOOverview3_PG3_11, TYOOverview3_PG3_13, TYOOverview4_PG3_10 , TYOOverview4_PG3_11, TYOOverview4_PG3_13, TYOPartner1, TYOPartner1_PG3_10, TYOService1_PG3_10, TYOService1_PG3_12, TYOService1_PG3_13, TYOchallenge2_PG3_10, TYOchallenge2_PG3_11, TYOchallenge3, TYOchallenge3_PG3_13 } from '@/mocks/website/TYO/overview';
import OverviewDesignFourSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignFour_Section';
import ChallengeDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Challenge_DesignTwo_Section';
import ServiceDesignOneSection from '@/components/business/website/TYO&SYB_Common/Service_DesignOne_Section';
import ClientStoriesDesignTwoSection from '@/components/business/website/TYO&SYB_Common/ClientStories_DesignTwo_Section';
import PartnerDesignOneSection from '@/components/business/website/TYO&SYB_Common/Partner_DesignOne_Section';
import OverviewDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignThree_Section';
import ChallengeDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Challenge_DesignThree_Section';

const ScrollRevealWrapper = dynamic(() => import('@/components/common/customization/ScrollRevealWrapper'), {
  ssr: false,
});
const SMPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Enterprise Resource Planning</title>
        <meta name='description' content='YNG_ERP NGS' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <OverviewDesignThreeSection title='Tổng quan' data={TYOOverview3_PG3_13} />
      <OverviewDesignFourSection title='' data={TYOOverview4_PG3_13} />
      <ChallengeDesignThreeSection title='Giá trị mang lại' data={TYOchallenge3_PG3_13} />
      <ServiceDesignOneSection title='' data={TYOService1_PG3_13} />
      <PartnerDesignOneSection data={TYOPartner1_PG3_10} />
      {/* <ClientStoriesDesignOneSection title='' data={TYOclientStories1} /> */}
      

    


      






    </React.Fragment>
    
  );
};

SMPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default SMPage;

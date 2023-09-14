import React from 'react';
import Head from 'next/head';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import ChallengeDesignOneSection from '@/components/business/website/TYO&SYB_Common/Challenge_DesignOne_Section';
import { TYOClientStories2_Secure, TYOOverview1, TYOOverview1_PG4_1, TYOService3, TYOService3_PG4_1, TYOchallenge1 } from '@/mocks/website/TYO/overview';
import BannerDesignOneSection from '@/components/business/website/All_Common/Banner_DesignOne_Section';
import { TYOBanner1, TYOBanner1_PG4_1, } from '@/mocks/website/TYO/new';
import OverviewDesignOneSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignOne_Section';
import ServiceDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Service_DesignThree_Section';
import ClientStoriesDesignTwoSection from '@/components/business/website/TYO&SYB_Common/ClientStories_DesignTwo_Section';

const SOCPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>SOC</title>
        <meta name='description' content='YNG_ERP NGS' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <BannerDesignOneSection title="Bảo mật xuất sắc" data={TYOBanner1_PG4_1}/>
      <OverviewDesignOneSection title='Tổng quan' data={TYOOverview1_PG4_1} />
      <ServiceDesignThreeSection title='Dịch vụ' data={TYOService3_PG4_1} />
      <ClientStoriesDesignTwoSection title='Client stories' data={TYOClientStories2_Secure} />



    </React.Fragment>
  );
};

SOCPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default SOCPage;

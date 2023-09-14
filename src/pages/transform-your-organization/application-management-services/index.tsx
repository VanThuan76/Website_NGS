import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import ChallengeDesignOneSection from '@/components/business/website/TYO&SYB_Common/Challenge_DesignOne_Section';
import { TYOClientStories2, TYO_AMS_Banner, TYO_AMS_Section2, TYO_AMS_Section3, TYO_AMS_Section4, TYO_AMS_Section6, TYO_DSP_Section3, TYO_DSP_Section4 } from '@/mocks/website/TYO/overview';
import ServiceDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Service_DesignThree_Section';
import BannerDesignOneSection from '@/components/business/website/All_Common/Banner_DesignOne_Section';
import OverviewDesignNineSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignNine_Section';
import ChallengeDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Challenge_DesignTwo_Section';
import ClientStoriesDesignTwoSection from '@/components/business/website/TYO&SYB_Common/ClientStories_DesignTwo_Section';


const AMSPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Application Management Services NGS</title>
        <meta name='description' content='Application Management Services NGS' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <BannerDesignOneSection title="Chuyển đổi số" data={TYO_AMS_Banner}/>
      <OverviewDesignNineSection title='Tổng quan' data={TYO_AMS_Section2} />
      <ChallengeDesignTwoSection title='Thách thức' data={TYO_AMS_Section3} />
      <ServiceDesignThreeSection title='Dịch vụ' data={TYO_AMS_Section4} />
      <ClientStoriesDesignTwoSection title='Client stories' data={TYO_AMS_Section6} />
    </React.Fragment>
  );
};

AMSPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default AMSPage;

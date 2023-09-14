import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import ChallengeDesignOneSection from '@/components/business/website/TYO&SYB_Common/Challenge_DesignOne_Section';
import { TYOClientStories2, TYOService2, TYO_CC_Section2, TYO_CC_Section3, TYO_CC_Section4, TYO_DSP_Section3, TYO_DSP_Section4 } from '@/mocks/website/TYO/overview';
import BannerDesignOneSection from '@/components/business/website/All_Common/Banner_DesignOne_Section';
import { TYO_CC_Banner, TYO_DSP_Banner } from '@/mocks/website/TYO/new';
import OverviewDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignThree_Section';
import ClientStoriesDesignTwoSection from '@/components/business/website/TYO&SYB_Common/ClientStories_DesignTwo_Section';
import ServiceDesignTwoSetion from '@/components/business/website/TYO&SYB_Common/Service_DesignTwo_Section';


const CCPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Contact Center NGS</title>
        <meta name='description' content='Contact Center NGS' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <BannerDesignOneSection title="Chuyển đổi số" data={TYO_CC_Banner}/>
      <OverviewDesignThreeSection title='Tổng quan' data={TYO_CC_Section2} />
      <ChallengeDesignOneSection title='Thách thức' data={TYO_CC_Section3} />
      <ServiceDesignTwoSetion title='Our Service & Solution' data={TYO_CC_Section4} />
    </React.Fragment>
  );
};

CCPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default CCPage;

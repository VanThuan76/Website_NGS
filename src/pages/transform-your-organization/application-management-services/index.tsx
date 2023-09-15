import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import ServiceDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Service_DesignThree_Section';
import BannerDesignOneSection from '@/components/business/website/All_Common/Banner_DesignOne_Section';
import OverviewDesignNineSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignNine_Section';
import ChallengeDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Challenge_DesignTwo_Section';
import ClientStoriesDesignTwoSection from '@/components/business/website/TYO&SYB_Common/ClientStories_DesignTwo_Section';
import WhyUsDesignOneSection from '@/components/business/website/TYO&SYB_Common/WhyUs_DesignOne_Section';
import FormDesignOneSection from '@/components/business/website/TYO&SYB_Common/Form_DesignOne_Section';
import { TYO_AMS_Banner, TYO_AMS_Section2, TYO_AMS_Section3, TYO_AMS_Section4, TYO_AMS_Section5, TYO_AMS_Section6, TYO_DSP_Section8 } from '@/mocks/website/TYO/thuy';
import { SYB_TI_Section9 } from '@/mocks/website/TYO/thuy_syb';


const AMSPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Application Management Services NGS</title>
        <meta name='description' content='Application Management Services NGS' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <BannerDesignOneSection title="Ngân hàng lõi" data={TYO_AMS_Banner}/>
      <OverviewDesignNineSection title='Tổng quan' data={TYO_AMS_Section2} />
      <ChallengeDesignTwoSection title='Thách thức' data={TYO_AMS_Section3} />
      <ServiceDesignThreeSection title='Dịch vụ' data={TYO_AMS_Section4} />
      <WhyUsDesignOneSection title='Tại sao chọn NGS' data={TYO_AMS_Section5}/>
      <ClientStoriesDesignTwoSection title='Client stories' data={TYO_AMS_Section6} />
      <FormDesignOneSection title='Dùng thử' data={SYB_TI_Section9}/>
    </React.Fragment>
  );
};

AMSPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default AMSPage;

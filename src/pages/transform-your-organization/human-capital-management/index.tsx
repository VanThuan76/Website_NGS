import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import ChallengeDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Challenge_DesignTwo_Section';
import ServiceDesignOneSection from '@/components/business/website/TYO&SYB_Common/Service_DesignOne_Section';
import PartnerDesignOneSection from '@/components/business/website/TYO&SYB_Common/Partner_DesignOne_Section';
import OverviewDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignThree_Section';
import BannerDesignOneSection from '@/components/business/website/All_Common/Banner_DesignOne_Section';
import WhyUsDesignOneSection from '@/components/business/website/TYO&SYB_Common/WhyUs_DesignOne_Section';
import ClientStoriesDesignOneSection from '@/components/business/website/TYO&SYB_Common/ClientStories_DesignOne_Section';
import { TYOBanner1_PG3_14, TYOForm1_PG3_14, TYOOverview3_PG3_14, TYOPartner1_PG3_10, TYOService1_PG3_14, TYOWhyUs1_PG3_14, TYOchallenge2_PG3_14, TYOclientStories1_PG3_14 } from '@/mocks/website/TYO/duong';
import FormDesignOneSection from '@/components/business/website/TYO&SYB_Common/Form_DesignOne_Section';

const ScrollRevealWrapper = dynamic(() => import('@/components/common/customization/ScrollRevealWrapper'), {
  ssr: false,
});
const HCMPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Human Capital Management</title>
        <meta name='description' content='YNG_ERP NGS' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <BannerDesignOneSection title="Quản trị nguồn nhân lực" data={TYOBanner1_PG3_14}/>
      <OverviewDesignThreeSection title='Tổng quan' data={TYOOverview3_PG3_14} />
      <ChallengeDesignTwoSection title='Giá trị mang lại' data={TYOchallenge2_PG3_14} />
      <ServiceDesignOneSection title='' data={TYOService1_PG3_14} />
      <WhyUsDesignOneSection title='Tại sao chọn NGS' data={TYOWhyUs1_PG3_14}/>
      <PartnerDesignOneSection data={TYOPartner1_PG3_10} />
      <ClientStoriesDesignOneSection title='' data={TYOclientStories1_PG3_14} />
      <FormDesignOneSection title='Dùng thử' data={TYOForm1_PG3_14} />


    </React.Fragment>
    
  );
};

HCMPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default HCMPage;

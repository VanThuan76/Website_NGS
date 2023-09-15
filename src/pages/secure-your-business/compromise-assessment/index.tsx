import React from 'react';
import Head from 'next/head';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import ChallengeDesignOneSection from '@/components/business/website/TYO&SYB_Common/Challenge_DesignOne_Section';
import BannerDesignOneSection from '@/components/business/website/All_Common/Banner_DesignOne_Section';
import OverviewDesignSixSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignSix_Section';
import WhyUsDesignOneSection from '@/components/business/website/TYO&SYB_Common/WhyUs_DesignOne_Section';
import PartnerDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Partner_DesignTwo_Section';
import { TYOBanner1_PG4_3, TYOForm1_PG4_3, TYOOverview6_PG4_3, TYOPartner2_PG4_3, TYOService5_PG4_3, TYOWhyUs1_PG4_3, TYOclientStories1_PG4_3 } from '@/mocks/website/TYO/duong';
import ServiceDesignFiveSection from '@/components/business/website/TYO&SYB_Common/Service_DesignFive_Section';
import { TYOService5 } from '@/mocks/website/TYO/new';
import ClientStoriesDesignOneSection from '@/components/business/website/TYO&SYB_Common/ClientStories_DesignOne_Section';
import FormDesignOneSection from '@/components/business/website/TYO&SYB_Common/Form_DesignOne_Section';

const SOCPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Compromise Assessment</title>
        <meta name='description' content='YNG_ERP NGS' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <BannerDesignOneSection title="Develop new solution" data={TYOBanner1_PG4_3}/>
      <OverviewDesignSixSection title='Tổng quan' data={TYOOverview6_PG4_3} />
      <ServiceDesignFiveSection title='NGS triển khai' data={TYOService5_PG4_3} />
      <WhyUsDesignOneSection title='Tại sao chọn NGS' data={TYOWhyUs1_PG4_3}/>
      <PartnerDesignTwoSection data={TYOPartner2_PG4_3}/>
      <ClientStoriesDesignOneSection title='' data={TYOclientStories1_PG4_3} />
      <FormDesignOneSection title='Dùng thử' data={TYOForm1_PG4_3} />

    </React.Fragment>
  );
};

SOCPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default SOCPage;

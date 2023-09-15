import React from 'react';
import Head from 'next/head';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import BannerDesignOneSection from '@/components/business/website/All_Common/Banner_DesignOne_Section';
import OverviewDesignOneSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignOne_Section';
import ServiceDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Service_DesignThree_Section';
import ClientStoriesDesignTwoSection from '@/components/business/website/TYO&SYB_Common/ClientStories_DesignTwo_Section';
import WhyUsDesignOneSection from '@/components/business/website/TYO&SYB_Common/WhyUs_DesignOne_Section';
import PartnerDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Partner_DesignTwo_Section';
import { TYOBanner1_PG4_1, TYOClientStories2_Secure, TYOOverview1_PG4_1, TYOPartner2_PG4_1, TYOService3_PG4_1, TYOWhyUs1_PG4_1 } from '@/mocks/website/TYO/duong';

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
      <WhyUsDesignOneSection title='Tổng quan' data={TYOWhyUs1_PG4_1}/>
      <PartnerDesignTwoSection data={TYOPartner2_PG4_1}/>
      <ClientStoriesDesignTwoSection title='Client stories' data={TYOClientStories2_Secure} />
    </React.Fragment>
  );
};

SOCPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default SOCPage;

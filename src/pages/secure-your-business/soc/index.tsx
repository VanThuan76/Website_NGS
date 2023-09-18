import React from 'react';
import Head from 'next/head';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import BannerDesignOneSection from '@/components/business/website/All_Common/Banner_DesignOne_Section';
import OverviewDesignOneSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignOne_Section';
import ServiceDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Service_DesignThree_Section';
import ClientStoriesDesignTwoSection from '@/components/business/website/TYO&SYB_Common/ClientStories_DesignTwo_Section';
import WhyUsDesignOneSection from '@/components/business/website/TYO&SYB_Common/WhyUs_DesignOne_Section';
import PartnerDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Partner_DesignTwo_Section';
import ChallengeDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Challenge_DesignThree_Section';
import FormDesignOneSection from '@/components/business/website/TYO&SYB_Common/Form_DesignOne_Section';
import { SYBBanner1_PG4_1, SYBClientStories2_Secure, SYBForm1_PG4_1, SYBOverview1_PG4_1, SYBPartner2_PG4_1, SYBService3_PG4_1, SYBWhyUs1_PG4_1, SYBchallenge3_PG4_1 } from '@/mocks/website/SYB/syb';

const SOCPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>SOC</title>
        <meta name='description' content='YNG_ERP NGS' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <BannerDesignOneSection title="Bảo mật xuất sắc" data={SYBBanner1_PG4_1}/>
      <OverviewDesignOneSection title='Tổng quan' data={SYBOverview1_PG4_1} />
      <ChallengeDesignThreeSection title='Thách thức' data={SYBchallenge3_PG4_1} />
      <ServiceDesignThreeSection title='Dịch vụ' data={SYBService3_PG4_1} />
      <WhyUsDesignOneSection title='Tổng quan' data={SYBWhyUs1_PG4_1}/>
      <PartnerDesignTwoSection data={SYBPartner2_PG4_1}/>
      <ClientStoriesDesignTwoSection title='Client stories' data={SYBClientStories2_Secure} />
      <FormDesignOneSection title='Dùng thử' data={SYBForm1_PG4_1} />

    </React.Fragment>
  );
};

SOCPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default SOCPage;

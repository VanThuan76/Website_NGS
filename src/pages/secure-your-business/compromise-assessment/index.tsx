import React from 'react';
import Head from 'next/head';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import BannerDesignOneSection from '@/components/business/website/All_Common/Banner_DesignOne_Section';
import OverviewDesignSixSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignSix_Section';
import WhyUsDesignOneSection from '@/components/business/website/TYO&SYB_Common/WhyUs_DesignOne_Section';
import PartnerDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Partner_DesignTwo_Section';
import ServiceDesignFiveSection from '@/components/business/website/TYO&SYB_Common/Service_DesignFive_Section';
import ClientStoriesDesignOneSection from '@/components/business/website/TYO&SYB_Common/ClientStories_DesignOne_Section';
import FormDesignOneSection from '@/components/business/website/TYO&SYB_Common/Form_DesignOne_Section';
import { SYBBanner1_PG4_3, SYBForm1_PG4_3, SYBOverview6_PG4_3, SYBPartner2_PG4_3, SYBService5_PG4_3, SYBWhyUs1_PG4_3, SYBclientStories1_PG4_3 } from '@/mocks/website/SYB/syb';

const SOCPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Compromise Assessment</title>
        <meta name='description' content='YNG_ERP NGS' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <BannerDesignOneSection title="Develop new solution" data={SYBBanner1_PG4_3}/>
      <OverviewDesignSixSection title='Tổng quan' data={SYBOverview6_PG4_3} />
      <ServiceDesignFiveSection title='NGS triển khai' data={SYBService5_PG4_3} />
      <WhyUsDesignOneSection title='Tại sao chọn NGS' data={SYBWhyUs1_PG4_3}/>
      <PartnerDesignTwoSection data={SYBPartner2_PG4_3}/>
      <ClientStoriesDesignOneSection title='' data={SYBclientStories1_PG4_3} />
      <FormDesignOneSection title='Dùng thử' data={SYBForm1_PG4_3} />

    </React.Fragment>
  );
};

SOCPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default SOCPage;

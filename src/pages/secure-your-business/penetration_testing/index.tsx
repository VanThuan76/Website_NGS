import React from 'react';
import Head from 'next/head';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import BannerDesignOneSection from '@/components/business/website/All_Common/Banner_DesignOne_Section';
import OverviewDesignOneSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignOne_Section';
import ServiceDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Service_DesignThree_Section';
import ChallengeDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Challenge_DesignThree_Section';
import WhyUsDesignOneSection from '@/components/business/website/TYO&SYB_Common/WhyUs_DesignOne_Section';
import PartnerDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Partner_DesignThree_Section';
import ClientStoriesDesignOneSection from '@/components/business/website/TYO&SYB_Common/ClientStories_DesignOne_Section';
import ServiceDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Service_DesignTwo_Section';
import FormDesignOneSection from '@/components/business/website/TYO&SYB_Common/Form_DesignOne_Section';
import { SYBBanner1_PG4_2, SYBForm1_PG4_2, SYBOverview1_PG4_2, SYBPartner3_PG4_2, SYBService2_PG4_2, SYBService3_PG4_2, SYBchallenge3_PG4_2, SYBclientStories1_PG4_2 } from '@/mocks/website/SYB/syb';
import { SYBWhyUs1_PG4_2 } from '@/mocks/website/TYO/duong';

const PTPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Penetration Testing</title>
        <meta name='description' content='YNG_ERP NGS' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <BannerDesignOneSection title="Bảo mật xuất sắc" data={SYBBanner1_PG4_2}/>
      <OverviewDesignOneSection title='Tổng quan' data={SYBOverview1_PG4_2} />
      <ChallengeDesignThreeSection title='Thách thức' data={SYBchallenge3_PG4_2} />
      <ServiceDesignThreeSection title='Dịch vụ' data={SYBService3_PG4_2} />
      <ServiceDesignTwoSection title='Phương pháp thực hiện' data={SYBService2_PG4_2} />
      <WhyUsDesignOneSection title='Tại sao chọn NGS' data={SYBWhyUs1_PG4_2}/>
      <PartnerDesignThreeSection data={SYBPartner3_PG4_2}/>
      <ClientStoriesDesignOneSection title='' data={SYBclientStories1_PG4_2} />
      <FormDesignOneSection title='Dùng thử' data={SYBForm1_PG4_2} />
    </React.Fragment>
  );
};

PTPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default PTPage;

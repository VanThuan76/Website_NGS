import React from 'react';
import Head from 'next/head';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import ChallengeDesignOneSection from '@/components/business/website/TYO&SYB_Common/Challenge_DesignOne_Section';
import { TYOClientStories2_Secure, TYOOverview1, TYOOverview1_PG4_1, TYOOverview1_PG4_2, TYOService3, TYOService3_PG4_1, TYOService3_PG4_2, TYOchallenge1, TYOchallenge3_PG4_2 } from '@/mocks/website/TYO/overview';
import BannerDesignOneSection from '@/components/business/website/All_Common/Banner_DesignOne_Section';
import { TYOBanner1, TYOBanner1_PG4_1, TYOBanner1_PG4_2, TYOPartner3_PG4_2, TYOWhyUs1_PG4_2, TYOclientStories1_PG4_2, } from '@/mocks/website/TYO/new';
import OverviewDesignOneSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignOne_Section';
import ServiceDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Service_DesignThree_Section';
import ClientStoriesDesignTwoSection from '@/components/business/website/TYO&SYB_Common/ClientStories_DesignTwo_Section';
import ChallengeDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Challenge_DesignThree_Section';
import WhyUsDesignOneSection from '@/components/business/website/TYO&SYB_Common/WhyUs_DesignOne_Section';
import PartnerDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Partner_DesignTwo_Section';
import PartnerDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Partner_DesignThree_Section';
import ClientStoriesDesignOneSection from '@/components/business/website/TYO&SYB_Common/ClientStories_DesignOne_Section';

const PTPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Penetration Testing</title>
        <meta name='description' content='YNG_ERP NGS' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <BannerDesignOneSection title="Bảo mật xuất sắc" data={TYOBanner1_PG4_2}/>
      <OverviewDesignOneSection title='Tổng quan' data={TYOOverview1_PG4_2} />
      <ChallengeDesignThreeSection title='Thách thức' data={TYOchallenge3_PG4_2} />
      <ServiceDesignThreeSection title='Dịch vụ' data={TYOService3_PG4_2} />
      <WhyUsDesignOneSection title='Tại sao chọn NGS' data={TYOWhyUs1_PG4_2}/>
      <PartnerDesignThreeSection data={TYOPartner3_PG4_2}/>
      <ClientStoriesDesignOneSection title='' data={TYOclientStories1_PG4_2} />
    </React.Fragment>
  );
};

PTPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default PTPage;

import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import ServiceDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Service_DesignThree_Section';
import OverviewDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignThree_Section';
import ChallengeDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Challenge_DesignThree_Section';
import PartnerDesignOneSection from '@/components/business/website/TYO&SYB_Common/Partner_DesignOne_Section';
import BannerDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Banner_DesignTwo_Section';
import OverviewDesignFiveSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignFive_Section';
import WhyUsDesignOneSection from '@/components/business/website/TYO&SYB_Common/WhyUs_DesignOne_Section';
import ClientStoriesDesignOneSection from '@/components/business/website/TYO&SYB_Common/ClientStories_DesignOne_Section';
import FormDesignOneSection from '@/components/business/website/TYO&SYB_Common/Form_DesignOne_Section';
import { TYO_CDP_Banner, TYO_CDP_Section2, TYO_CDP_Section3, TYO_CDP_Section4, TYO_CDP_Section5, TYO_CDP_Section6, TYO_CDP_Section7, TYO_CDP_Section8, TYO_DSP_Section8 } from '@/mocks/website/TYO/thuy';


const CDPPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Customer Data Platform NGS</title>
        <meta name='description' content='Customer Data Platform NGS' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <BannerDesignTwoSection breadcrumb={["Trang chủ", "Bảo mật kinh doanh", "Customer Data Platform"]} data={TYO_CDP_Banner}/>
      <OverviewDesignThreeSection title='Tổng quan' data={TYO_CDP_Section2} />
      <ChallengeDesignThreeSection title='Thách thức' data={TYO_CDP_Section3} />
      <ServiceDesignThreeSection title='Dịch vụ' data={TYO_CDP_Section4} />
      <OverviewDesignFiveSection title='Vì sao nên chọn NGS' data={TYO_CDP_Section5}/>
      <PartnerDesignOneSection data={TYO_CDP_Section6} />
      <WhyUsDesignOneSection title='Tác dụng của CDP' data={TYO_CDP_Section7}/>
      <ClientStoriesDesignOneSection title='' data={TYO_CDP_Section8} />
      <FormDesignOneSection title='Dùng thử' data={TYO_DSP_Section8}/>
    </React.Fragment>
  );
};

CDPPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default CDPPage;
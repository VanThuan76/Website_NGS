import React from 'react';
import Head from 'next/head';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import OverviewDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignThree_Section';
import ChallengeDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Challenge_DesignThree_Section';
import PartnerDesignOneSection from '@/components/business/website/TYO&SYB_Common/Partner_DesignOne_Section';
import BannerDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Banner_DesignTwo_Section';
import OverviewDesignFiveSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignFive_Section';
import ClientStoriesDesignOneSection from '@/components/business/website/TYO&SYB_Common/ClientStories_DesignOne_Section';
import FormDesignOneSection from '@/components/business/website/TYO&SYB_Common/Form_DesignOne_Section';
import { TYO_CRM_Banner, TYO_CRM_Section2, TYO_CRM_Section3, TYO_CRM_Section5, TYO_CRM_Section6, TYO_CRM_Section7, TYO_DSP_Section8 } from '@/mocks/website/TYO/thuy';


const CRMPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Customer Relationship Management NGS</title>
        <meta name='description' content='Customer Relationship Management NGS' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <BannerDesignTwoSection breadcrumb={["Trang chủ", "Bảo mật kinh doanh", "Customer Data Platform"]} data={TYO_CRM_Banner}/>
      <OverviewDesignThreeSection title='Tổng quan' data={TYO_CRM_Section2} />
      <ChallengeDesignThreeSection title='Thách thức' data={TYO_CRM_Section3} />
      <OverviewDesignFiveSection title='Vì sao nên chọn NGS' data={TYO_CRM_Section5}/>
      <PartnerDesignOneSection data={TYO_CRM_Section6} />
      <ClientStoriesDesignOneSection title='' data={TYO_CRM_Section7} />
      <FormDesignOneSection title='Dùng thử' data={TYO_DSP_Section8}/>
    </React.Fragment>
  );
};

CRMPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default CRMPage;

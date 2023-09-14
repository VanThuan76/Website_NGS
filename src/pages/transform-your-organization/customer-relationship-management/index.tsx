import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import ChallengeDesignOneSection from '@/components/business/website/TYO&SYB_Common/Challenge_DesignOne_Section';
import { TYO_CDP_Section6, TYO_CRM_Section2, TYO_CRM_Section3, TYO_CRM_Section6 } from '@/mocks/website/TYO/overview';
import ServiceDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Service_DesignThree_Section';
import OverviewDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignThree_Section';
import ChallengeDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Challenge_DesignThree_Section';
import PartnerDesignOneSection from '@/components/business/website/TYO&SYB_Common/Partner_DesignOne_Section';
import BannerDesignOneSection from '@/components/business/website/All_Common/Banner_DesignOne_Section';
import { TYO_CRM_Banner } from '@/mocks/website/TYO/new';


const CRMPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Customer Relationship Management NGS</title>
        <meta name='description' content='Customer Relationship Management NGS' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <BannerDesignOneSection title="Chuyển đổi số" data={TYO_CRM_Banner}/>
      <OverviewDesignThreeSection title='Tổng quan' data={TYO_CRM_Section2} />
      <ChallengeDesignThreeSection title='Thách thức' data={TYO_CRM_Section3} />
      <PartnerDesignOneSection data={TYO_CRM_Section6} />
    </React.Fragment>
  );
};

CRMPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default CRMPage;

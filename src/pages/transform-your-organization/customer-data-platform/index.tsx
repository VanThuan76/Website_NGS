import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import ChallengeDesignOneSection from '@/components/business/website/TYO&SYB_Common/Challenge_DesignOne_Section';
import { TYOPartner1, TYO_CDP_Section2, TYO_CDP_Section3, TYO_CDP_Section4, TYO_CDP_Section6 } from '@/mocks/website/TYO/overview';
import ServiceDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Service_DesignThree_Section';
import OverviewDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignThree_Section';
import ChallengeDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Challenge_DesignThree_Section';
import PartnerDesignOneSection from '@/components/business/website/TYO&SYB_Common/Partner_DesignOne_Section';
import BannerDesignOneSection from '@/components/business/website/All_Common/Banner_DesignOne_Section';
import { TYO_CDP_Banner } from '@/mocks/website/TYO/new';


const CDPPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Customer Data Platform NGS</title>
        <meta name='description' content='Customer Data Platform NGS' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <BannerDesignOneSection title="Chuyển đổi số" data={TYO_CDP_Banner}/>
      <OverviewDesignThreeSection title='Tổng quan' data={TYO_CDP_Section2} />
      <ChallengeDesignThreeSection title='Thách thức' data={TYO_CDP_Section3} />
      <ServiceDesignThreeSection title='Dịch vụ' data={TYO_CDP_Section4} />
      <PartnerDesignOneSection data={TYO_CDP_Section6} />
    </React.Fragment>
  );
};

CDPPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default CDPPage;

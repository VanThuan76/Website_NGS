import React from 'react';
import Head from 'next/head';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import WhyUsDesignOneSection from '@/components/business/website/TYO&SYB_Common/WhyUs_DesignOne_Section';
import PartnerDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Partner_DesignTwo_Section';
import FormDesignOneSection from '@/components/business/website/TYO&SYB_Common/Form_DesignOne_Section';
import { SYB_SI_Banner, SYB_SI_Section2, SYB_SI_Section3, SYB_SI_Section4, SYB_SI_Section5, SYB_SI_Section6, SYB_SI_Section7, SYB_TI_Banner, SYB_TI_Section2, SYB_TI_Section3, SYB_TI_Section4, SYB_TI_Section5, SYB_TI_Section7, SYB_TI_Section9 } from '@/mocks/website/TYO/thuy_syb';
import BannerDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Banner_DesignTwo_Section';
import OverviewDesignEightSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignEight_Section';
import ChallengeDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Challenge_DesignThree_Section';
import ServiceDesignOneSection from '@/components/business/website/TYO&SYB_Common/Service_DesignOne_Section';
import ClientStoriesDesignOneSection from '@/components/business/website/TYO&SYB_Common/ClientStories_DesignOne_Section';
import { TYO_AMS_Section6, TYO_CRM_Section7, TYO_DSP_Section8, TYO_RF_Banner, TYO_RF_Section2, TYO_RF_Section3, TYO_RF_Section4 } from '@/mocks/website/TYO/thuy';
import OverviewDesignOneSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignOne_Section';
import PartnerDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Partner_DesignThree_Section';
import ClientStoriesDesignTwoSection from '@/components/business/website/TYO&SYB_Common/ClientStories_DesignTwo_Section';
import ServiceDesignFourSection from '@/components/business/website/TYO&SYB_Common/Service_DesignFour_Section';
import BannerDesignOneSection from '@/components/business/website/All_Common/Banner_DesignOne_Section';

const TIPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>System Integration NGS</title>
        <meta name='description' content='System Integration NGS' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <BannerDesignOneSection title="Resource Fullfillment by Competencies" data={TYO_RF_Banner}/>
      <OverviewDesignOneSection title='Tổng quan' data={TYO_RF_Section2} />
      <ServiceDesignFourSection title='Our Service & Solution' data={TYO_RF_Section3} />
      <WhyUsDesignOneSection title='Tại sao chọn NGS' data={TYO_RF_Section4}/>
      <ClientStoriesDesignTwoSection title='Client stories' data={TYO_AMS_Section6} />
      <FormDesignOneSection title='Dùng thử' data={SYB_TI_Section9}/>
    </React.Fragment>
  );
};

TIPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default TIPage;

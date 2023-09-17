import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import ChallengeDesignOneSection from '@/components/business/website/TYO&SYB_Common/Challenge_DesignOne_Section';
import OverviewDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignThree_Section';
import ServiceDesignTwoSetion from '@/components/business/website/TYO&SYB_Common/Service_DesignTwo_Section';
import BannerDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Banner_DesignTwo_Section';
import OverviewDesignFiveSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignFive_Section';
import PartnerDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Partner_DesignThree_Section';
import FormDesignOneSection from '@/components/business/website/TYO&SYB_Common/Form_DesignOne_Section';
import { TYO_CC_Banner, TYO_CC_Section2, TYO_CC_Section3, TYO_CC_Section4, TYO_CC_Section5, TYO_CC_Section6, TYO_DSP_Section8 } from '@/mocks/website/TYO/thuy';
import { TYO_ADM_Section1, TYO_ADM_Section2, TYO_ADM_Section3, TYO_ADM_Section4, TYO_ADM_Section5, TYO_ADM_Section6, TYO_ADM_Section7, TYO_CB_Section1, TYO_CB_Section2, TYO_CB_Section3, TYO_CB_Section4, TYO_CB_Section5, TYO_CB_Section6, TYO_CB_Section7, TYO_CB_Section8, TYO_CG_Section2, TYO_CG_Section3, TYO_CG_Section4, TYO_CG_Section5, TYO_CG_Section6, TYO_CG_Section7, TYO_CG_Section8, TYO_CI_Section2, TYO_CI_Section3, TYO_CI_Section4, TYO_CI_Section5, TYO_CI_Section6, TYO_CI_Section7, TYO_CI_Section8 } from '@/mocks/website/TYO/Trang_tyo';
import OverviewDesignOneSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignOne_Section';
import ServiceDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Service_DesignThree_Section';
import WhyUsDesignOneSection from '@/components/business/website/TYO&SYB_Common/WhyUs_DesignOne_Section';
import PartnerDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Partner_DesignTwo_Section';
import ClientStoriesDesignTwoSection from '@/components/business/website/TYO&SYB_Common/ClientStories_DesignTwo_Section';
import ClientStoriesDesignThreeSection from '@/components/business/website/TYO&SYB_Common/ClientStories_DesignThree_Section';
import ServiceDesignFourSection from '@/components/business/website/TYO&SYB_Common/Service_DesignFour_Section';
import ClientStoriesDesignOneSection from '@/components/business/website/TYO&SYB_Common/ClientStories_DesignOne_Section';
import ChallengeDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Challenge_DesignThree_Section';
import BannerDesignOneSection from '@/components/business/website/All_Common/Banner_DesignOne_Section';
import OverviewDesignFourSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignFour_Section';
import BenefitDesignOneSection from '@/components/business/website/TYO&SYB_Common/Benefit_DesignOne_Section';
import WhyUsDesignTwoSection from '@/components/business/website/TYO&SYB_Common/WhyUs_DesignTwo_Section';


const CCPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Core Insurance NGS</title>
        <meta name='description' content='Contact Center NGS' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <BannerDesignOneSection title="Ngân hàng lõi" data={TYO_ADM_Section1}/>
      <OverviewDesignThreeSection title='Tổng quan' data={TYO_ADM_Section2} />
      <BenefitDesignOneSection title='Lợi ích' data={TYO_ADM_Section3} />
      <ServiceDesignThreeSection title='Dịch vụ' data={TYO_ADM_Section4} />
      <WhyUsDesignTwoSection title='Tổng quan' data={TYO_ADM_Section5} />
      <ClientStoriesDesignTwoSection title='Client stories' data ={TYO_ADM_Section6} /> 
      <FormDesignOneSection title='Dùng thử' data={TYO_ADM_Section7}/>
  
      
    </React.Fragment>
  );
};

CCPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default CCPage;

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
import { TYO_CA_Section2, TYO_CA_Section3, TYO_CA_Section4, TYO_CA_Section5, TYO_CA_Section6, TYO_CA_Section7, TYO_CA_Section8, TYO_CA_Section9, TYO_CB_Section1, TYO_CB_Section2, TYO_CB_Section3, TYO_CB_Section4, TYO_CB_Section5, TYO_CB_Section6, TYO_CB_Section7, TYO_CB_Section8 } from '@/mocks/website/TYO/Trang_tyo';
import OverviewDesignOneSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignOne_Section';
import ServiceDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Service_DesignThree_Section';
import WhyUsDesignOneSection from '@/components/business/website/TYO&SYB_Common/WhyUs_DesignOne_Section';
import PartnerDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Partner_DesignTwo_Section';
import ClientStoriesDesignTwoSection from '@/components/business/website/TYO&SYB_Common/ClientStories_DesignTwo_Section';
import ClientStoriesDesignThreeSection from '@/components/business/website/TYO&SYB_Common/ClientStories_DesignThree_Section';
import ChallengeDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Challenge_DesignTwo_Section';
import ServiceDesignOneSection from '@/components/business/website/TYO&SYB_Common/Service_DesignOne_Section';
import ClientStoriesDesignOneSection from '@/components/business/website/TYO&SYB_Common/ClientStories_DesignOne_Section';


const CCPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Core Airline NGS</title>
        <meta name='description' content='Contact Center NGS' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <BannerDesignTwoSection
        breadcrumb={['Trang chủ', 'Dịch vụ xuất sắc', 'Dịch vụ kiểm thử đăng nhập hệ thống']}
        data={TYO_CB_Section1}/>
      <OverviewDesignOneSection title='Tổng quan' data={TYO_CA_Section2} />
      <ChallengeDesignTwoSection title='Giá trị mang lại' data={TYO_CA_Section3} />
      <ServiceDesignTwoSetion title='Our Service & Solution' data={TYO_CA_Section4} />
      <ServiceDesignOneSection title='' data={TYO_CA_Section5} />
      <WhyUsDesignOneSection title='Tại sao chọn NGS' data={TYO_CA_Section6}/>
      <PartnerDesignThreeSection data={TYO_CA_Section7}/>
      <ClientStoriesDesignOneSection title='' data={TYO_CA_Section8} />
      <FormDesignOneSection title='Dùng thử' data={TYO_CA_Section9}/>
      
    </React.Fragment>
  );
};

CCPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default CCPage;

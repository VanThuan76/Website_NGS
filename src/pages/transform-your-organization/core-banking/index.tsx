import React from 'react';
import Head from 'next/head';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import ChallengeDesignOneSection from '@/components/business/website/TYO&SYB_Common/Challenge_DesignOne_Section';
import BannerDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Banner_DesignTwo_Section';
import FormDesignOneSection from '@/components/business/website/TYO&SYB_Common/Form_DesignOne_Section';
import { TYO_CB_Section1, TYO_CB_Section2, TYO_CB_Section3, TYO_CB_Section4, TYO_CB_Section5, TYO_CB_Section6, TYO_CB_Section7, TYO_CB_Section8 } from '@/mocks/website/TYO/Trang_tyo';
import OverviewDesignOneSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignOne_Section';
import ServiceDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Service_DesignThree_Section';
import WhyUsDesignOneSection from '@/components/business/website/TYO&SYB_Common/WhyUs_DesignOne_Section';
import PartnerDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Partner_DesignTwo_Section';
import ClientStoriesDesignThreeSection from '@/components/business/website/TYO&SYB_Common/ClientStories_DesignThree_Section';


const CCPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Core Banking NGS</title>
        <meta name='description' content='Contact Center NGS' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <BannerDesignTwoSection
        breadcrumb={['Trang chủ', 'Dịch vụ xuất sắc', 'Dịch vụ kiểm thử đăng nhập hệ thống']}
        data={TYO_CB_Section1}/>
      <OverviewDesignOneSection title='Tổng quan' data={TYO_CB_Section2} />
      <ChallengeDesignOneSection title='Thách thức' data={TYO_CB_Section3} />
      <ServiceDesignThreeSection title='Dịch vụ' data={TYO_CB_Section4} />
      <WhyUsDesignOneSection title='Tại sao chọn NGS' data={TYO_CB_Section5}/>
      <PartnerDesignTwoSection title='' data= {TYO_CB_Section6} />
      <ClientStoriesDesignThreeSection title="Client stories" data={TYO_CB_Section7} />
      <FormDesignOneSection title='Dùng thử' data={TYO_CB_Section8}/>
      
    </React.Fragment>
  );
};

CCPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default CCPage;

import React from 'react';
import Head from 'next/head';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import ChallengeDesignOneSection from '@/components/business/website/TYO&SYB_Common/Challenge_DesignOne_Section';
import OverviewDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignThree_Section';
import BannerDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Banner_DesignTwo_Section';
import PartnerDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Partner_DesignThree_Section';
import FormDesignOneSection from '@/components/business/website/TYO&SYB_Common/Form_DesignOne_Section';
import { TYO_CB_Section1, TYO_CI_Section2, TYO_CI_Section3, TYO_CI_Section4, TYO_CI_Section5, TYO_CI_Section6, TYO_CI_Section7, TYO_CI_Section8 } from '@/mocks/website/TYO/Trang_tyo';
import WhyUsDesignOneSection from '@/components/business/website/TYO&SYB_Common/WhyUs_DesignOne_Section';
import ServiceDesignFourSection from '@/components/business/website/TYO&SYB_Common/Service_DesignFour_Section';
import ClientStoriesDesignOneSection from '@/components/business/website/TYO&SYB_Common/ClientStories_DesignOne_Section';


const CCPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Core Insurance NGS</title>
        <meta name='description' content='Contact Center NGS' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <BannerDesignTwoSection
        breadcrumb={['Trang chủ', 'Dịch vụ xuất sắc', 'Dịch vụ kiểm thử đăng nhập hệ thống']}
        data={TYO_CB_Section1}/>
      <OverviewDesignThreeSection title='Tổng quan' data={TYO_CI_Section2} />
      <ChallengeDesignOneSection title='Thách thức' data={TYO_CI_Section3} />
      <ServiceDesignFourSection title='Our Service & Solution' data={TYO_CI_Section4} />
      <WhyUsDesignOneSection title='Tại sao chọn NGS' data={TYO_CI_Section5}/>
      <PartnerDesignThreeSection data={TYO_CI_Section6}/>
      <ClientStoriesDesignOneSection title='' data={TYO_CI_Section7} />
      <FormDesignOneSection title='Dùng thử' data={TYO_CI_Section8}/>
      
      
    </React.Fragment>
  );
};

CCPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default CCPage;

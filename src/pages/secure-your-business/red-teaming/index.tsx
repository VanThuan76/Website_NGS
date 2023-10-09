import React from 'react';
import Head from 'next/head';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import ClientStoriesDesignTwoSection from '@/components/business/website/TYO&SYB_Common/ClientStories_DesignTwo_Section';
import FormDesignOneSection from '@/components/business/website/TYO&SYB_Common/Form_DesignOne_Section';
import BannerDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Banner_DesignTwo_Section';
import WhyUsDesignOneSection from '@/components/business/website/TYO&SYB_Common/WhyUs_DesignOne_Section';
import PartnerDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Partner_DesignTwo_Section';
import ServiceDesignFiveSection from '@/components/business/website/TYO&SYB_Common/Service_DesignFive_Section';
import OverviewDesignFourSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignFour_Section';
import {
  SYB_RT_Section1,
  SYB_RT_Section2,
  SYB_RT_Section3,
  SYB_RT_Section4,
  SYB_RT_Section5,
  SYB_RT_Section6,
  SYB_RT_Section7,
  SYB_RT_Section8,
} from '@/mocks/website/SYB/syb';
import dynamic from 'next/dynamic';
import OverviewDesignEightSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignEight_Section';

const ScrollRevealWrapper = dynamic(() => import('@/components/common/customization/ScrollRevealWrapper'), {
  ssr: false,
});

const ERPPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Red Teaming NGS</title>
        <meta name='description' content='YNG_ERP NGS' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <BannerDesignTwoSection
        breadcrumb={[
          'Trang chủ',
          'Bảo mật toàn diện',
          'Dịch vụ kiểm thử tấn công xâm nhập chuyên sâu hạ tầng Công nghệ thông tin',
        ]}
        data={SYB_RT_Section1}
      />
      <ScrollRevealWrapper>
        <OverviewDesignEightSection title='Tổng quan' data={SYB_RT_Section2} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <OverviewDesignFourSection title='Thách thức' data={SYB_RT_Section3} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ServiceDesignFiveSection title='Dịch vụ' data={SYB_RT_Section4} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <WhyUsDesignOneSection title='Tại sao chọn NGS' data={SYB_RT_Section5} />
      </ScrollRevealWrapper>
      {/* <ScrollRevealWrapper>
        <PartnerDesignTwoSection data={SYB_RT_Section6} />
      </ScrollRevealWrapper> */}
      <ScrollRevealWrapper>
        <ClientStoriesDesignTwoSection title='Client stories' data={SYB_RT_Section7} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <FormDesignOneSection title='Kết nối với NGS' data={SYB_RT_Section8} />
      </ScrollRevealWrapper>
    </React.Fragment>
  );
};

ERPPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default ERPPage;

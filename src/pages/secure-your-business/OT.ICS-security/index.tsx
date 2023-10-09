import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import ChallengeDesignOneSection from '@/components/business/website/TYO&SYB_Common/Challenge_DesignOne_Section';
import FormDesignOneSection from '@/components/business/website/TYO&SYB_Common/Form_DesignOne_Section';
import BannerDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Banner_DesignTwo_Section';
import WhyUsDesignOneSection from '@/components/business/website/TYO&SYB_Common/WhyUs_DesignOne_Section';
import PartnerDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Partner_DesignTwo_Section';
import ServiceDesignOneSection from '@/components/business/website/TYO&SYB_Common/Service_DesignOne_Section';
import {
  SYB_OIS_Section2,
  SYB_OIS_Section1,
  SYB_OIS_Section3,
  SYB_OIS_Section4,
  SYB_OIS_Section5,
  SYB_OIS_Section6,
  SYB_OIS_Section7,
  SYB_OIS_Section8,
} from '@/mocks/website/SYB/syb';
import ClientStoriesDesignTwoSection from '@/components/business/website/TYO&SYB_Common/ClientStories_DesignTwo_Section';
import OverviewDesignEightSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignEight_Section';

const ScrollRevealWrapper = dynamic(() => import('@/components/common/customization/ScrollRevealWrapper'), {
  ssr: false,
});

const ERPPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>SYB_OIS NGS</title>
        <meta name='description' content='YNG_ERP NGS' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <BannerDesignTwoSection
        breadcrumb={['Trang chủ', 'Bảo mật toàn diện', 'OT/ICS Security']}
        data={SYB_OIS_Section1}
      />
      <ScrollRevealWrapper>
        <OverviewDesignEightSection title='Tổng quan' data={SYB_OIS_Section2} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ChallengeDesignOneSection title='Thách thức' data={SYB_OIS_Section3} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ServiceDesignOneSection sectionCodeLink='FormCTA' title='Dịch vụ' data={SYB_OIS_Section4} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <WhyUsDesignOneSection title='Tại sao chọn NGS' data={SYB_OIS_Section5} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <PartnerDesignTwoSection data={SYB_OIS_Section6} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ClientStoriesDesignTwoSection title='Client stories' data={SYB_OIS_Section7} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <FormDesignOneSection title='Kết nối với NGS' data={SYB_OIS_Section8} />
      </ScrollRevealWrapper>
    </React.Fragment>
  );
};

ERPPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default ERPPage;

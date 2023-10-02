import React from 'react';
import Head from 'next/head';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import ServiceDesignTwoSetion from '@/components/business/website/TYO&SYB_Common/Service_DesignTwo_Section';
import BannerDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Banner_DesignTwo_Section';
import OverviewDesignFiveSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignFive_Section';
import PartnerDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Partner_DesignThree_Section';
import FormDesignOneSection from '@/components/business/website/TYO&SYB_Common/Form_DesignOne_Section';
import {
  TYO_CG_Section1,
  TYO_CG_Section2,
  TYO_CG_Section3,
  TYO_CG_Section4,
  TYO_CG_Section5,
  TYO_CG_Section6,
  TYO_CG_Section7,
  TYO_CG_Section8,
} from '@/mocks/website/TYO/tyo';
import OverviewDesignOneSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignOne_Section';
import ClientStoriesDesignOneSection from '@/components/business/website/TYO&SYB_Common/ClientStories_DesignOne_Section';
import ChallengeDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Challenge_DesignThree_Section';
import dynamic from 'next/dynamic';

const ScrollRevealWrapper = dynamic(() => import('@/components/common/customization/ScrollRevealWrapper'), {
  ssr: false,
});

const CCPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Core Insurance NGS</title>
        <meta name='description' content='Contact Center NGS' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <ScrollRevealWrapper  >
        <BannerDesignTwoSection
          breadcrumb={['Trang chủ', 'Dịch vụ xuất sắc', 'Dịch vụ kiểm thử đăng nhập hệ thống']}
          data={TYO_CG_Section1}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper  >
        <OverviewDesignOneSection title='Tổng quan' data={TYO_CG_Section2} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper  >
        <ChallengeDesignThreeSection title='Lợi ích mang lại' data={TYO_CG_Section3} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper  >
        <ServiceDesignTwoSetion title='Dịch vụ' data={TYO_CG_Section4} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper  >
        <OverviewDesignFiveSection title='Tại sao chọn NGS' data={TYO_CG_Section5} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper  >
        <PartnerDesignThreeSection data={TYO_CG_Section6} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper  >
        <ClientStoriesDesignOneSection title='' data={TYO_CG_Section7} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper  >
        <FormDesignOneSection title='Dùng thử' data={TYO_CG_Section8} />
      </ScrollRevealWrapper>
    </React.Fragment>
  );
};

CCPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default CCPage;

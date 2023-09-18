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
} from '@/mocks/website/TYO/Trang_tyo';
import OverviewDesignOneSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignOne_Section';
import ClientStoriesDesignOneSection from '@/components/business/website/TYO&SYB_Common/ClientStories_DesignOne_Section';
import ChallengeDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Challenge_DesignThree_Section';

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
        data={TYO_CG_Section1}
      />
      <OverviewDesignOneSection title='Tổng quan' data={TYO_CG_Section2} />
      <ChallengeDesignThreeSection title='Lợi ích mang lại' data={TYO_CG_Section3} />
      <ServiceDesignTwoSetion title='Dịch vụ' data={TYO_CG_Section4} />
      <OverviewDesignFiveSection title='Tại sao chọn NGS' data={TYO_CG_Section5} />
      <PartnerDesignThreeSection data={TYO_CG_Section6} />
      <ClientStoriesDesignOneSection title='' data={TYO_CG_Section7} />
      <FormDesignOneSection title='Dùng thử' data={TYO_CG_Section8} />
    </React.Fragment>
  );
};

CCPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default CCPage;

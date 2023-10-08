import React from 'react';
import Head from 'next/head';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import ChallengeDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Challenge_DesignTwo_Section';
import ServiceDesignOneSection from '@/components/business/website/TYO&SYB_Common/Service_DesignOne_Section';
import ClientStoriesDesignTwoSection from '@/components/business/website/TYO&SYB_Common/ClientStories_DesignTwo_Section';
import WhyUsDesignOneSection from '@/components/business/website/TYO&SYB_Common/WhyUs_DesignOne_Section';
import PartnerDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Partner_DesignThree_Section';
import {
  TYOBanner1_PG3_17,
  TYOClientStories2_PG3_10,
  TYOForm1_PG3_17,
  TYOOverview4_PG3_17,
  TYOPartner1_PG3_10,
  TYOPartner3_PG3_17,
  TYOService1_PG3_17,
  TYOWhyUs1_PG3_17,
  TYOchallenge2_PG3_17,
} from '@/mocks/website/TYO/tyo';
import FormDesignOneSection from '@/components/business/website/TYO&SYB_Common/Form_DesignOne_Section';

import dynamic from 'next/dynamic';
import OverviewDesignFourSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignFour_Section';
import BannerDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Banner_DesignTwo_Section';
import PartnerDesignOneSection from '@/components/business/website/TYO&SYB_Common/Partner_DesignOne_Section';

const ScrollRevealWrapper = dynamic(() => import('@/components/common/customization/ScrollRevealWrapper'), {
  ssr: false,
});

const DAAPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Data and Analytics</title>
        <meta name='description' content='YNG_ERP NGS' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <ScrollRevealWrapper>
        <BannerDesignTwoSection
          breadcrumb={['Trang chủ', 'Dịch vụ xuất sắc', 'Dữ liệu và phân tích']}
          data={TYOBanner1_PG3_17}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <OverviewDesignFourSection title='Tổng quan' data={TYOOverview4_PG3_17} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ChallengeDesignTwoSection title='Giá trị mang lại' data={TYOchallenge2_PG3_17} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ServiceDesignOneSection title='' data={TYOService1_PG3_17} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <WhyUsDesignOneSection title='Tại sao chọn NGS' data={TYOWhyUs1_PG3_17} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <PartnerDesignOneSection data={TYOPartner1_PG3_10} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ClientStoriesDesignTwoSection title='Client stories' data={TYOClientStories2_PG3_10} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <FormDesignOneSection title='KẾT NỐI VỚI NGS' data={TYOForm1_PG3_17} />
      </ScrollRevealWrapper>
    </React.Fragment>
  );
};

DAAPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default DAAPage;

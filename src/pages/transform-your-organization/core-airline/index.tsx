import React from 'react';
import Head from 'next/head';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import ServiceDesignTwoSetion from '@/components/business/website/TYO&SYB_Common/Service_DesignTwo_Section';
import BannerDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Banner_DesignTwo_Section';
import FormDesignOneSection from '@/components/business/website/TYO&SYB_Common/Form_DesignOne_Section';
import {
  TYO_CA_Section2,
  TYO_CA_Section3,
  TYO_CA_Section4,
  TYO_CA_Section5,
  TYO_CA_Section6,
  TYO_CA_Section7,
  TYO_CA_Section8,
  TYO_CA_Section9,
  TYO_CB_Section1,
} from '@/mocks/website/TYO/tyo';
import OverviewDesignOneSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignOne_Section';
import ChallengeDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Challenge_DesignTwo_Section';
import ServiceDesignOneSection from '@/components/business/website/TYO&SYB_Common/Service_DesignOne_Section';
import ClientStoriesDesignOneSection from '@/components/business/website/TYO&SYB_Common/ClientStories_DesignOne_Section';

import dynamic from 'next/dynamic';
import PartnerDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Partner_DesignTwo_Section';
import WhyUsDesignThreeSection from '@/components/business/website/TYO&SYB_Common/WhyUs_DesignThree_Section';

const ScrollRevealWrapper = dynamic(() => import('@/components/common/customization/ScrollRevealWrapper'), {
  ssr: false,
});

const CCPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Core Airline NGS</title>
        <meta name='description' content='Contact Center NGS' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <ScrollRevealWrapper>
        <BannerDesignTwoSection
          breadcrumb={['Trang chủ', 'Dịch vụ xuất sắc', 'Ngành Hàng không']}
          data={TYO_CB_Section1}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <OverviewDesignOneSection title='Hệ thống CNTT lõi Ngành Hàng không' data={TYO_CA_Section2} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ChallengeDesignTwoSection title='Giá trị mang lại' data={TYO_CA_Section3} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ServiceDesignTwoSetion title='Giải pháp' data={TYO_CA_Section4} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ServiceDesignOneSection title='' data={TYO_CA_Section5} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <WhyUsDesignThreeSection title='Tại sao chọn NGS' data={TYO_CA_Section6} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <PartnerDesignTwoSection title='' data={TYO_CA_Section7} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ClientStoriesDesignOneSection title='' data={TYO_CA_Section8} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <FormDesignOneSection title='KẾT NỐI VỚI NGS' data={TYO_CA_Section9} />
      </ScrollRevealWrapper>
    </React.Fragment>
  );
};

CCPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default CCPage;

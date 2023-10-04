import React from 'react';
import Head from 'next/head';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import WhyUsDesignOneSection from '@/components/business/website/TYO&SYB_Common/WhyUs_DesignOne_Section';
import FormDesignOneSection from '@/components/business/website/TYO&SYB_Common/Form_DesignOne_Section';
import {
  SYB_SI_Banner,
  SYB_SI_Section2,
  SYB_SI_Section3,
  SYB_SI_Section4,
  SYB_SI_Section5,
  SYB_SI_Section6,
  SYB_SI_Section7,
  SYB_TI_Section9,
} from '@/mocks/website/SYB/syb';
import BannerDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Banner_DesignTwo_Section';
import ChallengeDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Challenge_DesignThree_Section';
import ServiceDesignOneSection from '@/components/business/website/TYO&SYB_Common/Service_DesignOne_Section';
import OverviewDesignOneSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignOne_Section';
import PartnerDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Partner_DesignThree_Section';
import ClientStoriesDesignTwoSection from '@/components/business/website/TYO&SYB_Common/ClientStories_DesignTwo_Section';
import dynamic from 'next/dynamic';
import PartnerSection from '@/components/business/website/All_Common/Partner_Section';

const ScrollRevealWrapper = dynamic(() => import('@/components/common/customization/ScrollRevealWrapper'), {
  ssr: false,
});

const TIPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>System Integration NGS</title>
        <meta name='description' content='System Integration NGS' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <ScrollRevealWrapper>
        <BannerDesignTwoSection
          breadcrumb={['Trang chủ', 'Dịch vụ xuất sắc', 'Dịch vụ triển khai tích hợp giải pháp an toàn thông tin']}
          data={SYB_SI_Banner}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <OverviewDesignOneSection title='Tổng quan' data={SYB_SI_Section2} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ChallengeDesignThreeSection title='Thách thức' data={SYB_SI_Section3} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ServiceDesignOneSection title='Dịch vụ' data={SYB_SI_Section4} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <WhyUsDesignOneSection title='Tại sao chọn NGS' data={SYB_SI_Section5} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <PartnerSection title='Đối tác đồng hành cùng NGS' data={SYB_SI_Section6} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ClientStoriesDesignTwoSection title='Client stories' data={SYB_SI_Section7} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <FormDesignOneSection title='Dùng thử' data={SYB_TI_Section9} />
      </ScrollRevealWrapper>
    </React.Fragment>
  );
};

TIPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default TIPage;

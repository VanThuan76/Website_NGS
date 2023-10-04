import React from 'react';
import Head from 'next/head';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import OverviewDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignThree_Section';
import FormDesignOneSection from '@/components/business/website/TYO&SYB_Common/Form_DesignOne_Section';
import {
  TYO_ADM_Section1,
  TYO_ADM_Section2,
  TYO_ADM_Section3,
  TYO_ADM_Section4,
  TYO_ADM_Section5,
  TYO_ADM_Section6,
  TYO_ADM_Section7,
} from '@/mocks/website/TYO/tyo';
import ServiceDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Service_DesignThree_Section';
import ClientStoriesDesignTwoSection from '@/components/business/website/TYO&SYB_Common/ClientStories_DesignTwo_Section';
import BannerDesignOneSection from '@/components/business/website/All_Common/Banner_DesignOne_Section';
import BenefitDesignOneSection from '@/components/business/website/TYO&SYB_Common/Benefit_DesignOne_Section';
import WhyUsDesignTwoSection from '@/components/business/website/TYO&SYB_Common/WhyUs_DesignTwo_Section';
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
      <ScrollRevealWrapper>
        <BannerDesignOneSection title='Ngân hàng lõi' data={TYO_ADM_Section1} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <OverviewDesignThreeSection title='Tổng quan' data={TYO_ADM_Section2} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <BenefitDesignOneSection title='Lợi ích' data={TYO_ADM_Section3} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ServiceDesignThreeSection title='Dịch vụ' data={TYO_ADM_Section4} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <WhyUsDesignTwoSection title='Tổng quan' data={TYO_ADM_Section5} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ClientStoriesDesignTwoSection title='Client stories' data={TYO_ADM_Section6} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <FormDesignOneSection title='Dùng thử' data={TYO_ADM_Section7} />
      </ScrollRevealWrapper>
    </React.Fragment>
  );
};

CCPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default CCPage;

import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import OverviewDesignFourSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignFour_Section';
import ChallengeDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Challenge_DesignTwo_Section';
import ServiceDesignOneSection from '@/components/business/website/TYO&SYB_Common/Service_DesignOne_Section';
import PartnerDesignOneSection from '@/components/business/website/TYO&SYB_Common/Partner_DesignOne_Section';
import BannerDesignOneSection from '@/components/business/website/All_Common/Banner_DesignOne_Section';
import WhyUsDesignOneSection from '@/components/business/website/TYO&SYB_Common/WhyUs_DesignOne_Section';
import ClientStoriesDesignOneSection from '@/components/business/website/TYO&SYB_Common/ClientStories_DesignOne_Section';
import {
  TYOBanner1_PG3_16,
  TYOForm1_PG3_16,
  TYOOverview4_PG3_16,
  TYOPartner1_PG3_10,
  TYOService1_PG3_16,
  TYOWhyUs1_PG3_16,
  TYOchallenge2_PG3_16,
  TYOclientStories1_PG3_16,
} from '@/mocks/website/TYO/tyo';
import FormDesignOneSection from '@/components/business/website/TYO&SYB_Common/Form_DesignOne_Section';

const ScrollRevealWrapper = dynamic(() => import('@/components/common/customization/ScrollRevealWrapper'), {
  ssr: false,
});
const EPAAPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Extended Planning and Analysis</title>
        <meta name='description' content='YNG_ERP NGS' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <ScrollRevealWrapper>
        <BannerDesignOneSection title='Lập kế hoạch và phân tích mở rộng (xP&A)' data={TYOBanner1_PG3_16} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <OverviewDesignFourSection title='Tổng quan' data={TYOOverview4_PG3_16} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ChallengeDesignTwoSection title='Giá trị mang lại' data={TYOchallenge2_PG3_16} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ServiceDesignOneSection title='' data={TYOService1_PG3_16} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <WhyUsDesignOneSection title='Tại sao chọn NGS' data={TYOWhyUs1_PG3_16} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <PartnerDesignOneSection data={TYOPartner1_PG3_10} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ClientStoriesDesignOneSection title='' data={TYOclientStories1_PG3_16} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <FormDesignOneSection title='Dùng thử' data={TYOForm1_PG3_16} />
      </ScrollRevealWrapper>
    </React.Fragment>
  );
};

EPAAPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default EPAAPage;

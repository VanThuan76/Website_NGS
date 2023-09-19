import React from 'react';
import Head from 'next/head';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import OverviewDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignTwo_Section';
import OverviewDesignFourSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignFour_Section';
import ChallengeDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Challenge_DesignTwo_Section';
import ServiceDesignOneSection from '@/components/business/website/TYO&SYB_Common/Service_DesignOne_Section';
import ClientStoriesDesignTwoSection from '@/components/business/website/TYO&SYB_Common/ClientStories_DesignTwo_Section';
import PartnerDesignOneSection from '@/components/business/website/TYO&SYB_Common/Partner_DesignOne_Section';
import BannerDesignOneSection from '@/components/business/website/All_Common/Banner_DesignOne_Section';
import WhyUsDesignOneSection from '@/components/business/website/TYO&SYB_Common/WhyUs_DesignOne_Section';
import { TYOBanner1_PG3_10, TYOClientStories2_PG3_10, TYOForm1_PG3_10, TYOOverview2_PG3_10, TYOOverview4_PG3_10, TYOPartner1_PG3_10, TYOService1_PG3_10, TYOWhyUs1_PG3_10, TYOchallenge2_PG3_10 } from '@/mocks/website/TYO/tyo';
import FormDesignOneSection from '@/components/business/website/TYO&SYB_Common/Form_DesignOne_Section';
import dynamic from 'next/dynamic';

const ScrollRevealWrapper = dynamic(() => import('@/components/common/customization/ScrollRevealWrapper'), {
  ssr: false,
});
const ERPPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Enterprise Resource Planning</title>
        <meta name='description' content='YNG_ERP NGS' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <ScrollRevealWrapper revealConfig={{ origin: 'left', distance: '30px', duration: 1000 }} >
        <BannerDesignOneSection title="Chuyển đổi số" data={TYOBanner1_PG3_10} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper revealConfig={{ origin: 'left', distance: '30px', duration: 1000 }} >
        <OverviewDesignTwoSection title='Tổng quan' data={TYOOverview2_PG3_10} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper revealConfig={{ origin: 'left', distance: '30px', duration: 1000 }} >
      <OverviewDesignFourSection title='' data={TYOOverview4_PG3_10} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper revealConfig={{ origin: 'left', distance: '30px', duration: 1000 }} >
        <ChallengeDesignTwoSection title='Giá trị mang lại' data={TYOchallenge2_PG3_10} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper revealConfig={{ origin: 'left', distance: '30px', duration: 1000 }} >
        <ServiceDesignOneSection title='' data={TYOService1_PG3_10} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper revealConfig={{ origin: 'left', distance: '30px', duration: 1000 }} >
        <WhyUsDesignOneSection title='Tại sao chọn NGS' data={TYOWhyUs1_PG3_10} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper revealConfig={{ origin: 'left', distance: '30px', duration: 1000 }} >
        <PartnerDesignOneSection data={TYOPartner1_PG3_10} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper revealConfig={{ origin: 'left', distance: '30px', duration: 1000 }} >
        <ClientStoriesDesignTwoSection title='Client stories' data={TYOClientStories2_PG3_10} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper revealConfig={{ origin: 'left', distance: '30px', duration: 1000 }} >
        <FormDesignOneSection title='Dùng thử' data={TYOForm1_PG3_10} />
      </ScrollRevealWrapper>



    </React.Fragment>

  );
};

ERPPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default ERPPage;

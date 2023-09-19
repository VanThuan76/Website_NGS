import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import ServiceDesignOneSection from '@/components/business/website/TYO&SYB_Common/Service_DesignOne_Section';
import ChallengeDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Challenge_DesignThree_Section';
import BannerDesignOneSection from '@/components/business/website/All_Common/Banner_DesignOne_Section';
import WhyUsDesignOneSection from '@/components/business/website/TYO&SYB_Common/WhyUs_DesignOne_Section';
import PartnerDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Partner_DesignThree_Section';
import ClientStoriesDesignOneSection from '@/components/business/website/TYO&SYB_Common/ClientStories_DesignOne_Section';
import { TYOBanner1_PG3_15, TYOForm1_PG3_15, TYOOverview8_PG3_15, TYOPartner3_PG3_15, TYOService1_PG3_15, TYOService2_PG3_15, TYOWhyUs1_PG3_15, TYOchallenge3_PG3_15, TYOclientStories1_PG3_15 } from '@/mocks/website/TYO/tyo';
import ServiceDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Service_DesignTwo_Section';
import FormDesignOneSection from '@/components/business/website/TYO&SYB_Common/Form_DesignOne_Section';
import OverviewDesignEightSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignEight_Section';
import { TYOOverview8 } from '@/mocks/website/TYO/overview';

const ScrollRevealWrapper = dynamic(() => import('@/components/common/customization/ScrollRevealWrapper'), {
  ssr: false,
});
const SMEPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Small and Midsize Enterprises</title>
        <meta name='description' content='YNG_ERP NGS' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <ScrollRevealWrapper revealConfig={{ origin: 'left', distance: '30px', duration: 1000 }} >
        <BannerDesignOneSection title="Doanh nghiệp vừa và nhỏ" data={TYOBanner1_PG3_15} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper revealConfig={{ origin: 'left', distance: '30px', duration: 1000 }} >
      <OverviewDesignEightSection title='Tổng quan' data={TYOOverview8_PG3_15} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper revealConfig={{ origin: 'left', distance: '30px', duration: 1000 }} >
        <ChallengeDesignThreeSection title='Lợi ích mang lại' data={TYOchallenge3_PG3_15} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper revealConfig={{ origin: 'left', distance: '30px', duration: 1000 }} >
        <ServiceDesignOneSection title='' data={TYOService1_PG3_15} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper revealConfig={{ origin: 'left', distance: '30px', duration: 1000 }} >
        <ServiceDesignTwoSection title='Dịch vụ' data={TYOService2_PG3_15} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper revealConfig={{ origin: 'left', distance: '30px', duration: 1000 }} >
        <WhyUsDesignOneSection title='Tại sao chọn NGS' data={TYOWhyUs1_PG3_15} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper revealConfig={{ origin: 'left', distance: '30px', duration: 1000 }} >
        <PartnerDesignThreeSection data={TYOPartner3_PG3_15} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper revealConfig={{ origin: 'left', distance: '30px', duration: 1000 }} >
        <ClientStoriesDesignOneSection title='' data={TYOclientStories1_PG3_15} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper revealConfig={{ origin: 'left', distance: '30px', duration: 1000 }} >
        <FormDesignOneSection title='Dùng thử' data={TYOForm1_PG3_15} />
      </ScrollRevealWrapper>





    </React.Fragment>

  );
};

SMEPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default SMEPage;

import React from 'react';
import Head from 'next/head';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import BannerDesignOneSection from '@/components/business/website/All_Common/Banner_DesignOne_Section';
import OverviewDesignOneSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignOne_Section';
import ServiceDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Service_DesignThree_Section';
import ChallengeDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Challenge_DesignThree_Section';
import WhyUsDesignOneSection from '@/components/business/website/TYO&SYB_Common/WhyUs_DesignOne_Section';
import PartnerDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Partner_DesignThree_Section';
import ClientStoriesDesignOneSection from '@/components/business/website/TYO&SYB_Common/ClientStories_DesignOne_Section';
import ServiceDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Service_DesignTwo_Section';
import FormDesignOneSection from '@/components/business/website/TYO&SYB_Common/Form_DesignOne_Section';
import {
  SYBBanner1_PG4_2,
  SYBForm1_PG4_2,
  SYBOverview1_PG4_2,
  SYBPartner3_PG4_2,
  SYBService2_PG4_2,
  SYBService3_PG4_2,
  SYBWhyUs1_PG4_2,
  SYBchallenge3_PG4_2,
  SYBclientStories1_PG4_2,
} from '@/mocks/website/SYB/syb';
import dynamic from 'next/dynamic';

const ScrollRevealWrapper = dynamic(() => import('@/components/common/customization/ScrollRevealWrapper'), {
  ssr: false,
});

const PTPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Penetration Testing</title>
        <meta name='description' content='YNG_ERP NGS' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <ScrollRevealWrapper>
        <BannerDesignOneSection title='Bảo mật xuất sắc' data={SYBBanner1_PG4_2} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <OverviewDesignOneSection title='Tổng quan' data={SYBOverview1_PG4_2} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ChallengeDesignThreeSection title='Thách thức' data={SYBchallenge3_PG4_2} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ServiceDesignThreeSection title='Dịch vụ' data={SYBService3_PG4_2} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ServiceDesignTwoSection title='Phương pháp thực hiện' data={SYBService2_PG4_2} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <WhyUsDesignOneSection title='Tại sao chọn NGS' data={SYBWhyUs1_PG4_2} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <PartnerDesignThreeSection data={SYBPartner3_PG4_2} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ClientStoriesDesignOneSection title='' data={SYBclientStories1_PG4_2} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <FormDesignOneSection title='Dùng thử' data={SYBForm1_PG4_2} />
      </ScrollRevealWrapper>
    </React.Fragment>
  );
};

PTPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default PTPage;

import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import ServiceDesignOneSection from '@/components/business/website/TYO&SYB_Common/Service_DesignOne_Section';
import WhyUsDesignOneSection from '@/components/business/website/TYO&SYB_Common/WhyUs_DesignOne_Section';
import PartnerDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Partner_DesignThree_Section';
import ClientStoriesDesignOneSection from '@/components/business/website/TYO&SYB_Common/ClientStories_DesignOne_Section';
import {
  TYOBanner1_PG3_15,
  TYOForm1_PG3_15,
  TYOOverview8_PG3_15,
  TYOPartner3_PG3_15,
  TYOService1_PG3_15,
  TYOService2_PG3_15,
  TYOWhyUs1_PG3_15,
  TYOchallenge3_PG3_15,
  TYOclientStories1_PG3_15,
} from '@/mocks/website/TYO/tyo';
import ServiceDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Service_DesignTwo_Section';
import FormDesignOneSection from '@/components/business/website/TYO&SYB_Common/Form_DesignOne_Section';
import OverviewDesignEightSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignEight_Section';
import BannerDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Banner_DesignTwo_Section';
import BenefitDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Benefit_DesignTwo_Section';

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
      <ScrollRevealWrapper>
        <BannerDesignTwoSection
          breadcrumb={['Trang chủ', 'Dịch vụ xuất sắc', 'Doanh nghiệp vừa và nhỏ']}
          data={TYOBanner1_PG3_15}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <OverviewDesignEightSection title='Tổng quan' data={TYOOverview8_PG3_15} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <BenefitDesignTwoSection title='Lợi ích mang lại' data={TYOchallenge3_PG3_15} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ServiceDesignOneSection title='Dịch vụ' data={TYOService1_PG3_15} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <WhyUsDesignOneSection title='Tại sao chọn NGS' data={TYOWhyUs1_PG3_15} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <PartnerDesignThreeSection data={TYOPartner3_PG3_15} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ClientStoriesDesignOneSection title='' data={TYOclientStories1_PG3_15} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <FormDesignOneSection title='KẾT NỐI VỚI NGS' data={TYOForm1_PG3_15} />
      </ScrollRevealWrapper>
    </React.Fragment>
  );
};

SMEPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default SMEPage;

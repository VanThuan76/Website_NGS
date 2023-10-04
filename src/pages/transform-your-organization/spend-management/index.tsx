import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import OverviewDesignFourSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignFour_Section';
import ServiceDesignOneSection from '@/components/business/website/TYO&SYB_Common/Service_DesignOne_Section';
import PartnerDesignOneSection from '@/components/business/website/TYO&SYB_Common/Partner_DesignOne_Section';
import WhyUsDesignOneSection from '@/components/business/website/TYO&SYB_Common/WhyUs_DesignOne_Section';
import ClientStoriesDesignOneSection from '@/components/business/website/TYO&SYB_Common/ClientStories_DesignOne_Section';
import {
  TYOBanner1_PG3_13,
  TYOForm1_PG3_13,
  TYOOverview4_PG3_13,
  TYOPartner1_PG3_10,
  TYOService1_PG3_13,
  TYOWhyUs1_PG3_13,
  TYOchallenge3_PG3_13,
  TYOclientStories1_PG3_13,
} from '@/mocks/website/TYO/tyo';
import FormDesignOneSection from '@/components/business/website/TYO&SYB_Common/Form_DesignOne_Section';
import BannerDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Banner_DesignTwo_Section';
import BenefitDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Benefit_DesignTwo_Section';

const ScrollRevealWrapper = dynamic(() => import('@/components/common/customization/ScrollRevealWrapper'), {
  ssr: false,
});
const SMPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Spend Management</title>
        <meta name='description' content='YNG_ERP NGS' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <ScrollRevealWrapper>
        <BannerDesignTwoSection
          breadcrumb={['Trang chủ', 'Dịch vụ xuất sắc', 'Quản lý chi tiêu']}
          data={TYOBanner1_PG3_13}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <OverviewDesignFourSection title='Tổng quan' data={TYOOverview4_PG3_13} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <BenefitDesignTwoSection title='GIÁ TRỊ MANG LẠI' data={TYOchallenge3_PG3_13} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ServiceDesignOneSection sectionCodeLink='FormCTA' title='Dịch vụ' data={TYOService1_PG3_13} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <WhyUsDesignOneSection title='Tại sao chọn NGS' data={TYOWhyUs1_PG3_13} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <PartnerDesignOneSection data={TYOPartner1_PG3_10} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ClientStoriesDesignOneSection title='' data={TYOclientStories1_PG3_13} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <FormDesignOneSection title='KẾT NỐI VỚI NGS' data={TYOForm1_PG3_13} />
      </ScrollRevealWrapper>
    </React.Fragment>
  );
};

SMPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default SMPage;

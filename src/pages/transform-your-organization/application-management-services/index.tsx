import React from 'react';
import Head from 'next/head';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import ServiceDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Service_DesignThree_Section';
import BannerDesignOneSection from '@/components/business/website/All_Common/Banner_DesignOne_Section';
import OverviewDesignNineSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignNine_Section';
import ChallengeDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Challenge_DesignTwo_Section';
import WhyUsDesignOneSection from '@/components/business/website/TYO&SYB_Common/WhyUs_DesignOne_Section';
import FormDesignOneSection from '@/components/business/website/TYO&SYB_Common/Form_DesignOne_Section';
import {
  TYO_AMS_Banner,
  TYO_AMS_Section2,
  TYO_AMS_Section3,
  TYO_AMS_Section4,
  TYO_AMS_Section5,
  TYO_AMS_Section6,
} from '@/mocks/website/TYO/tyo';
import { SYB_TI_Section9 } from '@/mocks/website/SYB/syb';
import dynamic from 'next/dynamic';
import PartnerDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Partner_DesignTwo_Section';

const ScrollRevealWrapper = dynamic(() => import('@/components/common/customization/ScrollRevealWrapper'), {
  ssr: false,
});

const AMSPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Application Management Services NGS</title>
        <meta name='description' content='Application Management Services NGS' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <ScrollRevealWrapper>
        <BannerDesignOneSection title='Ngân hàng lõi' data={TYO_AMS_Banner} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <OverviewDesignNineSection title='Tổng quan' data={TYO_AMS_Section2} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ChallengeDesignTwoSection title='Thách thức' data={TYO_AMS_Section3} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ServiceDesignThreeSection title='Dịch vụ' data={TYO_AMS_Section4} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <WhyUsDesignOneSection title='Tại sao chọn NGS' data={TYO_AMS_Section5} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <PartnerDesignTwoSection title='ĐỐI TÁC ĐỒNG HÀNH CÙNG NGS' data={TYO_AMS_Section6} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <FormDesignOneSection title='KẾT NỐI VỚI NGS' data={SYB_TI_Section9} />
      </ScrollRevealWrapper>
    </React.Fragment>
  );
};

AMSPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default AMSPage;

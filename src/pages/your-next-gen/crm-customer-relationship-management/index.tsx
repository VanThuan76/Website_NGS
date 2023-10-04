import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import YNGCommonPilotSubriceSection from '@/components/business/website/YNG/YNG_Common/YNG_Common_PilotSubrice_Section';
import YNGDetailWhyChooseSection from '@/components/business/website/YNG/YNG_Detail/YNG_Detail_WhyChoose_Section';
import YNGDetailProductSection from '@/components/business/website/YNG/YNG_Detail/YNG_Detail_Product_Section';
import YNGDetailDirectionSetion from '@/components/business/website/YNG/YNG_Detail/YNG_Detail_Direction_Section';
import YNGCommonCustomerSection from '@/components/business/website/YNG/YNG_Common/YNG_Common_Customer_Section';
import YNGCommonBackSolutionSection from '@/components/business/website/YNG/YNG_Common/YNG_Common_BackSolution_Section';
import YNGCommonIntroductionSection from '@/components/business/website/YNG/YNG_Common/YNG_Common_Introduction_Section';
import YNGDetailBannerSection from '@/components/business/website/YNG/YNG_Detail/YNG_Detail_Banner_Section';
import {
  YNG_CCRM_Banner,
  YNG_CCRM_Section2,
  YNG_CCRM_Section3,
  YNG_CCRM_Section4,
  YNG_CCRM_Section5,
  YNG_CCRM_Section6,
  YNG_CCRM_Section7,
  YNG_CCRM_Section8,
} from '@/mocks/website/YNG/yng';

const ScrollRevealWrapper = dynamic(() => import('@/components/common/customization/ScrollRevealWrapper'), {
  ssr: false,
});
const CCRMDetailPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>CRM - Quản lý quan hệ khách hàng</title>
        <meta name='description' content='CRM - Quản lý quan hệ khách hàng' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <ScrollRevealWrapper>
        <YNGDetailBannerSection data={YNG_CCRM_Banner} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <YNGDetailWhyChooseSection title='Tại sao chọn NGS ERP CRM?' data={YNG_CCRM_Section2} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <YNGDetailProductSection data={YNG_CCRM_Section3} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <YNGDetailDirectionSetion data={YNG_CCRM_Section4} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <YNGCommonCustomerSection title='Khách hàng' data={YNG_CCRM_Section5} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <YNGCommonIntroductionSection data={YNG_CCRM_Section6} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <YNGCommonBackSolutionSection title='Ứng dụng liên quan' data={YNG_CCRM_Section7} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <YNGCommonPilotSubriceSection title='Đăng ký tư vấn hoặc Demo' data={YNG_CCRM_Section8} />
      </ScrollRevealWrapper>
    </React.Fragment>
  );
};

CCRMDetailPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default CCRMDetailPage;

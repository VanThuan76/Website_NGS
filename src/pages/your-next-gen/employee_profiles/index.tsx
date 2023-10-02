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
import { YNG_EP_Banner, YNG_EP_Section2, YNG_EP_Section3, YNG_EP_Section4, YNG_EP_Section5, YNG_EP_Section6, YNG_EP_Section7, YNG_EP_Section8 } from '@/mocks/website/YNG/yng';

const ScrollRevealWrapper = dynamic(() => import('@/components/common/customization/ScrollRevealWrapper'), {
  ssr: false,
});
const EPDetailPage = () => (
  <React.Fragment>
    <Head>
      <title>Hồ sơ nhân viên</title>
      <meta name='description' content='Hồ sơ nhân viên' />
      <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
    </Head>
    <ScrollRevealWrapper  >
      <YNGDetailBannerSection data={YNG_EP_Banner} />
    </ScrollRevealWrapper>
    <ScrollRevealWrapper  >
      <YNGDetailWhyChooseSection title='Tại sao chọn Hồ sơ nhân viên?' data={YNG_EP_Section2} />
    </ScrollRevealWrapper>
    <ScrollRevealWrapper  >
      <YNGDetailProductSection data={YNG_EP_Section3} />
    </ScrollRevealWrapper>
    <ScrollRevealWrapper  >
      <YNGDetailDirectionSetion data={YNG_EP_Section4} />
    </ScrollRevealWrapper>
    <ScrollRevealWrapper  >
      <YNGCommonCustomerSection title='Khách hàng' data={YNG_EP_Section5} />
    </ScrollRevealWrapper>
    <ScrollRevealWrapper  >
      <YNGCommonIntroductionSection data={YNG_EP_Section6} />
    </ScrollRevealWrapper>
    <ScrollRevealWrapper  >
      <YNGCommonBackSolutionSection title='Ứng dụng liên quan' data={YNG_EP_Section7} />
    </ScrollRevealWrapper>
    <ScrollRevealWrapper  >
      <YNGCommonPilotSubriceSection title='Đăng ký tư vấn hoặc Demo' data={YNG_EP_Section8} />
    </ScrollRevealWrapper>
  </React.Fragment>
);

EPDetailPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default EPDetailPage;

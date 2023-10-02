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
import { YNG_MNS_Section4, YNG_MNS_Section5, YNG_MNS_Section6, YNG_MNS_Section7, YNG_MNS_Section8, YNG_Payroll_Banner, YNG_Payroll_Section2, YNG_Payroll_Section3 } from '@/mocks/website/YNG/yng';

const ScrollRevealWrapper = dynamic(() => import('@/components/common/customization/ScrollRevealWrapper'), {
  ssr: false,
});
const PayrollDetailPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Tính lương NGS</title>
        <meta name='description' content='Tính lương NGS' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <ScrollRevealWrapper  >
        <YNGDetailBannerSection data={YNG_Payroll_Banner} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper  >
        <YNGDetailWhyChooseSection title='Tại sao chọn Tính lương?' data={YNG_Payroll_Section2} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper  >
        <YNGDetailProductSection data={YNG_Payroll_Section3} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper  >
        <YNGDetailDirectionSetion data={YNG_MNS_Section4} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper  >
        <YNGCommonCustomerSection title='Khách hàng' data={YNG_MNS_Section5} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper  >
        <YNGCommonIntroductionSection data={YNG_MNS_Section6} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper  >
        <YNGCommonBackSolutionSection title='Ứng dụng liên quan' data={YNG_MNS_Section7} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper  >
        <YNGCommonPilotSubriceSection title='Đăng ký tư vấn hoặc Demo' data={YNG_MNS_Section8} />
      </ScrollRevealWrapper>
    </React.Fragment>
  );
};

PayrollDetailPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default PayrollDetailPage;

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
  YNG_MW_Banner,
  YNG_MW_Section2,
  YNG_MW_Section3,
  YNG_MW_Section4,
  YNG_MW_Section5,
  YNG_MW_Section6,
  YNG_MW_Section7,
  YNG_MW_Section8,
} from '@/mocks/website/YNG/yng';

const ScrollRevealWrapper = dynamic(() => import('@/components/common/customization/ScrollRevealWrapper'), {
  ssr: false,
});
const MWDetailPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Bảo trì & Bảo hành</title>
        <meta name='description' content='Bảo trì & Bảo hành' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <ScrollRevealWrapper>
        <YNGDetailBannerSection data={YNG_MW_Banner} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <YNGDetailWhyChooseSection title='Tại sao chọn Bảo trì & Bảo hành?' data={YNG_MW_Section2} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <YNGDetailProductSection data={YNG_MW_Section3} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <YNGDetailDirectionSetion data={YNG_MW_Section4} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <YNGCommonCustomerSection title='Khách hàng' data={YNG_MW_Section5} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <YNGCommonIntroductionSection data={YNG_MW_Section6} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <YNGCommonBackSolutionSection title='Ứng dụng liên quan' data={YNG_MW_Section7} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <YNGCommonPilotSubriceSection title='Đăng ký tư vấn hoặc Demo' data={YNG_MW_Section8} />
      </ScrollRevealWrapper>
    </React.Fragment>
  );
};

MWDetailPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default MWDetailPage;

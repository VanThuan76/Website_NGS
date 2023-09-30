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
import { YNG_STM_Banner, YNG_STM_Section2, YNG_STM_Section3, YNG_STM_Section4, YNG_STM_Section5, YNG_STM_Section6, YNG_STM_Section7, YNG_STM_Section8 } from '@/mocks/website/YNG/yng';

const ScrollRevealWrapper = dynamic(() => import('@/components/common/customization/ScrollRevealWrapper'), {
  ssr: false,
});
const STMDetailPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Quản lý đội nhóm kinh doanh</title>
        <meta name='description' content='Quản lý đội nhóm kinh doanh' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <ScrollRevealWrapper revealConfig={{ origin: 'left', distance: '30px', duration: 1000 }} >
        <YNGDetailBannerSection data={YNG_STM_Banner} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper revealConfig={{ origin: 'left', distance: '30px', duration: 1000 }} >
        <YNGDetailWhyChooseSection title='Tại sao chọn Quản lý đội nhóm kinh doanh?' data={YNG_STM_Section2} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper revealConfig={{ origin: 'left', distance: '30px', duration: 1000 }} >
        <YNGDetailProductSection data={YNG_STM_Section3} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper revealConfig={{ origin: 'left', distance: '30px', duration: 1000 }} >
        <YNGDetailDirectionSetion data={YNG_STM_Section4} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper revealConfig={{ origin: 'left', distance: '30px', duration: 1000 }} >
        <YNGCommonCustomerSection title='Khách hàng' data={YNG_STM_Section5} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper revealConfig={{ origin: 'left', distance: '30px', duration: 1000 }} >
        <YNGCommonIntroductionSection data={YNG_STM_Section6} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper revealConfig={{ origin: 'left', distance: '30px', duration: 1000 }} >
        <YNGCommonBackSolutionSection title='Back to Solution' data={YNG_STM_Section7} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper revealConfig={{ origin: 'left', distance: '30px', duration: 1000 }} >
        <YNGCommonPilotSubriceSection title='Pilot Subcribe' data={YNG_STM_Section8} />
      </ScrollRevealWrapper>
    </React.Fragment>
  );
};

STMDetailPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default STMDetailPage;

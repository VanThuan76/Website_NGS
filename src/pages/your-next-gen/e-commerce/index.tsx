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
import { YNGCommonBackSolution1, YNGCommonCustomer1, YNGCommonIntroduction1, YNGCommonPilotSubrice1, YNGDetailBanner1, YNGDetailDirection1, YNGDetailProduct1, YNGDetailWhyChoose1 } from '@/mocks/website/YNG/YNG_Detail/example';
import YNGDetailBannerSection from '@/components/business/website/YNG/YNG_Detail/YNG_Detail_Banner_Section';
import { YNG_ECOM_Section2, YNG_ECOM_Section3, YNG_ECOM_Section4, YNG_ECOM_Section5, YNG_ECOM_Section6, YNG_ECOM_Section7, YNG_ECOM_Section8, YNG_ES_Section2, YNG_ES_Section3, YNG_ES_Section4, YNG_ES_Section5, YNG_ES_Section6, YNG_ES_Section7, YNG_ES_Section8 } from '@/mocks/website/TYO/duong_yng';

const ScrollRevealWrapper = dynamic(() => import('@/components/common/customization/ScrollRevealWrapper'), {
  ssr: false,
});
const ECOMDetailPage = () => (
  <React.Fragment>
    <Head>
      <title>Sàn TMĐT</title>
      <meta name='description' content='Sàn TMĐT' />
      <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
    </Head>
    <YNGDetailBannerSection data={YNGDetailBanner1} />
    <YNGDetailWhyChooseSection title='Tại sao chọn Sàn TMĐT?' data={YNG_ECOM_Section2} />
    <YNGDetailProductSection data={YNG_ECOM_Section3} />
    <YNGDetailDirectionSetion data={YNG_ECOM_Section4} />
    <YNGCommonCustomerSection title='Khách hàng' data={YNG_ECOM_Section5} />
    <YNGCommonIntroductionSection data={YNG_ECOM_Section6} />
    <YNGCommonBackSolutionSection title='Back Solution' data={YNG_ECOM_Section7} />
    <YNGCommonPilotSubriceSection title='Pilot' data={YNG_ECOM_Section8} />
  </React.Fragment>
);

ECOMDetailPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default ECOMDetailPage;
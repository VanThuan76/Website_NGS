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
import { YNG_QLHD_Section2, YNG_QLHD_Section3, YNG_QLHD_Section4, YNG_QLHD_Section5, YNG_QLHD_Section6, YNG_QLHD_Section7, YNG_QLHD_Section8 } from '@/mocks/website/TYO/duong_yng';

const ScrollRevealWrapper = dynamic(() => import('@/components/common/customization/ScrollRevealWrapper'), {
  ssr: false,
});
const QLHDDetailPage = () => (
  <React.Fragment>
    <Head>
      <title>Quản lý hợp đồng</title>
      <meta name='description' content='Quản lý hợp đồng' />
      <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
    </Head>
    <YNGDetailBannerSection data={YNGDetailBanner1} />
    <YNGDetailWhyChooseSection title='Tại sao chọn Quản lý hợp đồng?' data={YNG_QLHD_Section2} />
    <YNGDetailProductSection data={YNG_QLHD_Section3} />
    <YNGDetailDirectionSetion data={YNG_QLHD_Section4} />
    <YNGCommonCustomerSection title='Khách hàng' data={YNG_QLHD_Section5} />
    <YNGCommonIntroductionSection data={YNG_QLHD_Section6} />
    <YNGCommonBackSolutionSection title='Back Solution' data={YNG_QLHD_Section7} />
    <YNGCommonPilotSubriceSection title='Pilot' data={YNG_QLHD_Section8} />
  </React.Fragment>
);

QLHDDetailPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default QLHDDetailPage;

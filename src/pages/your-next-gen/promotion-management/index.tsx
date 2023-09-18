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
import { YNG_AM_Section2, YNG_AM_Section3, YNG_BM_Section2, YNG_BM_Section3, YNG_DM_Section2, YNG_DM_Section3, YNG_EL_Section2, YNG_EL_Section3, YNG_IM_Section2, YNG_IM_Section3, YNG_MNS_Section4, YNG_MNS_Section5, YNG_MNS_Section6, YNG_MNS_Section7, YNG_MNS_Section8, YNG_PDM_Section2, YNG_PDM_Section3, YNG_PM_Section2, YNG_PM_Section3, YNG_ProM_Section2, YNG_ProM_Section3, YNG_PromoM_Section2, YNG_PromoM_Section3, YNG_QM_Section2, YNG_QM_Section3 } from '@/mocks/website/TYO/thuy_yng';

const ScrollRevealWrapper = dynamic(() => import('@/components/common/customization/ScrollRevealWrapper'), {
  ssr: false,
});
const PromoMDetailPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Quản lý khuyến mại & báo giá NGS</title>
        <meta name='description' content='Quản lý khuyến mại & báo giá NGS' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <YNGDetailBannerSection data={YNGDetailBanner1} />
      <YNGDetailWhyChooseSection title='Tại sao chọn Quản lý khuyến mại & báo giá?' data={YNG_PromoM_Section2} />
      <YNGDetailProductSection data={YNG_PromoM_Section3} />
      <YNGDetailDirectionSetion data={YNG_MNS_Section4} />
      <YNGCommonCustomerSection title='Khách hàng' data={YNG_MNS_Section5}/>
      <YNGCommonIntroductionSection data={YNG_MNS_Section6} />
      <YNGCommonBackSolutionSection title='Back to Solution' data={YNG_MNS_Section7}/>
      <YNGCommonPilotSubriceSection title='Pilot Subcribe' data={YNG_MNS_Section8}/>
    </React.Fragment>
  );
};

PromoMDetailPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default PromoMDetailPage;

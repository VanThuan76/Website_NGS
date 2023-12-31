import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import YNGHomeBannerSection from '@/components/business/website/YNG/YNG_Home/YNG_Home_Banner_Section';
import YNGHomeSolutionSection from '@/components/business/website/YNG/YNG_Home/YNG_Home_Solution_Section';
import YNGCommonPilotSubriceSection from '@/components/business/website/YNG/YNG_Common/YNG_Common_PilotSubrice_Section';
import YNGCommonCustomerSection from '@/components/business/website/YNG/YNG_Common/YNG_Common_Customer_Section';
import YNGCommonBackSolutionSection from '@/components/business/website/YNG/YNG_Common/YNG_Common_BackSolution_Section';
import YNGCommonIntroductionSection from '@/components/business/website/YNG/YNG_Common/YNG_Common_Introduction_Section';
import { YNG_DWM_Section5, YNG_DWM_Section6, YNG_DWM_Section7, YNG_DWM_Section8 } from '@/mocks/website/YNG/yng';
import { YNG_Home_Solution_ERP } from '@/mocks/website/YNG/YNG_Home/solution';

const ScrollRevealWrapper = dynamic(() => import('@/components/common/customization/ScrollRevealWrapper'), {
  ssr: false,
});
const ERPPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Giải pháp Quản lý doanh nghiệp NGS</title>
        <meta name='description' content='Giải pháp Quản lý doanh nghiệp NGS' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <YNGHomeBannerSection title='Dich vu' data={YNG_Home_Solution_ERP} />
      <YNGHomeSolutionSection data={YNG_Home_Solution_ERP} />
      <YNGCommonCustomerSection title='Khách hàng' data={YNG_DWM_Section5} />
      <YNGCommonIntroductionSection data={YNG_DWM_Section6} />
      <YNGCommonBackSolutionSection title='Ứng dụng liên quan' data={YNG_DWM_Section7} />
      <YNGCommonPilotSubriceSection title='Đăng ký tư vấn hoặc Demo' data={YNG_DWM_Section8} />
    </React.Fragment>
  );
};

ERPPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default ERPPage;

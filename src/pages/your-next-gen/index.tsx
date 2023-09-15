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
import { YNGCommonBackSolution1, YNGCommonCustomer1, YNGCommonIntroduction1, YNGCommonPilotSubrice1, YNGDetailBanner1 } from '@/mocks/website/YNG/YNG_Detail/example';

const ScrollRevealWrapper = dynamic(() => import('@/components/common/customization/ScrollRevealWrapper'), {
  ssr: false,
});
const ERPPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>YNG_ERP NGS</title>
        <meta name='description' content='YNG_ERP NGS' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
        <YNGHomeBannerSection data={YNGDetailBanner1}  />
        <YNGHomeSolutionSection />
        <YNGCommonCustomerSection title='Khach hang' data={YNGCommonCustomer1} />
        <YNGCommonIntroductionSection data={YNGCommonIntroduction1} />
        <YNGCommonBackSolutionSection title='Back Solution' data={YNGCommonBackSolution1}/>
        <YNGCommonPilotSubriceSection title='Pilot' data={YNGCommonPilotSubrice1}/>
    </React.Fragment>
  );
};

ERPPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default ERPPage;

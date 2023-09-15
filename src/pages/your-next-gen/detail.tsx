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

const ScrollRevealWrapper = dynamic(() => import('@/components/common/customization/ScrollRevealWrapper'), {
  ssr: false,
});
const YNGDetailPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>YNGDetailPage NGS</title>
        <meta name='description' content='YNGDetailPage NGS' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <YNGDetailBannerSection data={YNGDetailBanner1} />
      <YNGDetailWhyChooseSection title='Tổng quan' data={YNGDetailWhyChoose1} />
      <YNGDetailProductSection data={YNGDetailProduct1} />
      <YNGDetailDirectionSetion data={YNGDetailDirection1} />
      <YNGCommonCustomerSection title='Khach hang' data={YNGCommonCustomer1}/>
      <YNGCommonIntroductionSection data={YNGCommonIntroduction1} />
      <YNGCommonBackSolutionSection title='Back Solution' data={YNGCommonBackSolution1}/>
      <YNGCommonPilotSubriceSection title='Pilot' data={YNGCommonPilotSubrice1}/>
    </React.Fragment>
  );
};

YNGDetailPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default YNGDetailPage;

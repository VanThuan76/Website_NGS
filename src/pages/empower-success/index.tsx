import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import EmpowerSuccessBannerSection from '@/components/business/website/ES/ES_Banner_Section';
import { ESBannerData } from '@/mocks/website/ES/banner';

const ScrollRevealWrapper = dynamic(() => import('@/components/common/customization/ScrollRevealWrapper'), {
  ssr: false,
});

const EmpowerSuccessPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>EmpowerSuccess NGS</title>
        <meta name='description' content='EmpowerSuccess NGS' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <ScrollRevealWrapper>
        <EmpowerSuccessBannerSection data={ESBannerData} />
      </ScrollRevealWrapper>
    </React.Fragment>
  );
};

EmpowerSuccessPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default EmpowerSuccessPage;

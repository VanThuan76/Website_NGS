import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import YNGBackSolution from '@/components/business/website/YNG/YNG_Common/YNG_Common_BackSolution';
import YNGPilotSubrice from '@/components/business/website/YNG/YNG_Common/YNG_Common_PilotSubrice';

const ScrollRevealWrapper = dynamic(() => import('@/components/common/customization/ScrollRevealWrapper'), {
  ssr: false,
});
const CRMPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>YNG_CRM NGS</title>
        <meta name='description' content='YNG_CRM NGS' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <ScrollRevealWrapper>
        <YNGBackSolution />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <YNGPilotSubrice />
      </ScrollRevealWrapper>
    </React.Fragment>
  );
};

CRMPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default CRMPage;

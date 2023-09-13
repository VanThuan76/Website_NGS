import React from 'react';
import Head from 'next/head';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import ChallengeDesignOneSection from '@/components/business/website/TYO&SYB_Common/Challenge_DesignOne_Section';
import { TYOchallenge1 } from '@/mocks/website/TYO/overview';

const DTPPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>YNG_ERP NGS</title>
        <meta name='description' content='YNG_ERP NGS' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <ChallengeDesignOneSection title='Thách thức' data={TYOchallenge1} />
    </React.Fragment>
  );
};

DTPPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default DTPPage;

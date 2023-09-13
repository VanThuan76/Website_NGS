import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import ChallengeDesignOneSection from '@/components/business/website/TYO&SYB_Common/Challenge_DesignOne_Section';
import { TYO_DSP_Section3, TYO_DSP_Section4 } from '@/mocks/website/TYO/overview';
import ServiceDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Service_DesignThree_Section';
import BannerDesignOneSection from '@/components/business/website/All_Common/Banner_DesignOne_Section';
import { TYO_DSP_Banner } from '@/mocks/website/TYO/new';


const DSPPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Digital Strategy Planning NGS</title>
        <meta name='description' content='Digital Strategy Planning NGS' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <BannerDesignOneSection title="Chuyển đổi số" data={TYO_DSP_Banner}/>
      <ChallengeDesignOneSection title='Thách thức' data={TYO_DSP_Section3} />
      <ServiceDesignThreeSection title='Dịch vụ' data={TYO_DSP_Section4} />
    </React.Fragment>
  );
};

DSPPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default DSPPage;

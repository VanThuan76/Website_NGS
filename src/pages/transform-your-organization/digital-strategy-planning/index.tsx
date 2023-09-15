import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import ChallengeDesignOneSection from '@/components/business/website/TYO&SYB_Common/Challenge_DesignOne_Section';
import ServiceDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Service_DesignThree_Section';
import BannerDesignOneSection from '@/components/business/website/All_Common/Banner_DesignOne_Section';
import OverviewDesignFiveSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignFive_Section';
import WhyUsDesignOneSection from '@/components/business/website/TYO&SYB_Common/WhyUs_DesignOne_Section';
import PartnerDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Partner_DesignTwo_Section';
import FormDesignOneSection from '@/components/business/website/TYO&SYB_Common/Form_DesignOne_Section';
import { TYO_DSP_Banner, TYO_DSP_Section2, TYO_DSP_Section3, TYO_DSP_Section4, TYO_DSP_Section5, TYO_DSP_Section6, TYO_DSP_Section8 } from '@/mocks/website/TYO/thuy';


const DSPPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Digital Strategy Planning NGS</title>
        <meta name='description' content='Digital Strategy Planning NGS' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <BannerDesignOneSection title="Chuyển đổi số" data={TYO_DSP_Banner}/>
      <OverviewDesignFiveSection title='Tổng quan' data={TYO_DSP_Section2}/>
      <ChallengeDesignOneSection title='Thách thức' data={TYO_DSP_Section3} />
      <ServiceDesignThreeSection title='Dịch vụ' data={TYO_DSP_Section4} />
      <WhyUsDesignOneSection title='Tại sao chọn NGS' data={TYO_DSP_Section5}/>
      <PartnerDesignTwoSection data={TYO_DSP_Section6}/>
      <FormDesignOneSection title='Dùng thử' data={TYO_DSP_Section8}/>
    </React.Fragment>
  );
};

DSPPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default DSPPage;

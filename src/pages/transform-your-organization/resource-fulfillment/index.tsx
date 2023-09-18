import React from 'react';
import Head from 'next/head';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import WhyUsDesignOneSection from '@/components/business/website/TYO&SYB_Common/WhyUs_DesignOne_Section';
import FormDesignOneSection from '@/components/business/website/TYO&SYB_Common/Form_DesignOne_Section';
import { TYO_AMS_Section6, TYO_RF_Banner, TYO_RF_Section2, TYO_RF_Section3, TYO_RF_Section4 } from '@/mocks/website/TYO/thuy';
import OverviewDesignOneSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignOne_Section';
import ClientStoriesDesignTwoSection from '@/components/business/website/TYO&SYB_Common/ClientStories_DesignTwo_Section';
import ServiceDesignFourSection from '@/components/business/website/TYO&SYB_Common/Service_DesignFour_Section';
import BannerDesignOneSection from '@/components/business/website/All_Common/Banner_DesignOne_Section';
import { SYB_TI_Section9 } from '@/mocks/website/TYO/thuy_syb';

const TIPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>System Integration NGS</title>
        <meta name='description' content='System Integration NGS' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <BannerDesignOneSection title="Resource Fullfillment by Competencies" data={TYO_RF_Banner}/>
      <OverviewDesignOneSection title='Tổng quan' data={TYO_RF_Section2} />
      <ServiceDesignFourSection title='Our Service & Solution' data={TYO_RF_Section3} />
      <WhyUsDesignOneSection title='Tại sao chọn NGS' data={TYO_RF_Section4}/>
      <ClientStoriesDesignTwoSection title='Client stories' data={TYO_AMS_Section6} />
      <FormDesignOneSection title='Dùng thử' data={SYB_TI_Section9}/>
    </React.Fragment>
  );
};

TIPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default TIPage;

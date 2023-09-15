import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import ChallengeDesignOneSection from '@/components/business/website/TYO&SYB_Common/Challenge_DesignOne_Section';
import OverviewDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignThree_Section';
import ServiceDesignTwoSetion from '@/components/business/website/TYO&SYB_Common/Service_DesignTwo_Section';
import BannerDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Banner_DesignTwo_Section';
import OverviewDesignFiveSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignFive_Section';
import PartnerDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Partner_DesignThree_Section';
import FormDesignOneSection from '@/components/business/website/TYO&SYB_Common/Form_DesignOne_Section';
import { TYO_CC_Banner, TYO_CC_Section2, TYO_CC_Section3, TYO_CC_Section4, TYO_CC_Section5, TYO_CC_Section6, TYO_DSP_Section8 } from '@/mocks/website/TYO/thuy';


const CCPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Contact Center NGS</title>
        <meta name='description' content='Contact Center NGS' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <BannerDesignTwoSection breadcrumb={["Trang chủ", "Dịch vụ xuất sắc", "Contact Center"]} data={TYO_CC_Banner}/>
      <OverviewDesignThreeSection title='Tổng quan' data={TYO_CC_Section2} />
      <ChallengeDesignOneSection title='Thách thức' data={TYO_CC_Section3} />
      <ServiceDesignTwoSetion title='Dịch vụ của chúng tôi' data={TYO_CC_Section4} />
      <OverviewDesignFiveSection title='Tại sao chọn NGS' data={TYO_CC_Section5}/>
      <PartnerDesignThreeSection data={TYO_CC_Section6}/>
      <FormDesignOneSection title='Dùng thử' data={TYO_DSP_Section8}/>
    </React.Fragment>
  );
};

CCPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default CCPage;

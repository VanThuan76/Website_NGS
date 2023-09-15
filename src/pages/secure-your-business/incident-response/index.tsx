import React from 'react';
import Head from 'next/head';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import BannerDesignOneSection from '@/components/business/website/All_Common/Banner_DesignOne_Section';
import OverviewDesignFiveSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignFive_Section';
import ServiceDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Service_DesignThree_Section';
import WhyUsDesignOneSection from '@/components/business/website/TYO&SYB_Common/WhyUs_DesignOne_Section';
import PartnerDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Partner_DesignTwo_Section';
import FormDesignOneSection from '@/components/business/website/TYO&SYB_Common/Form_DesignOne_Section';
import { SYB_IR_Banner, SYB_IR_Section2, SYB_IR_Section4, SYB_IR_Section5, SYB_TI_Section6, SYB_TI_Section8 } from '@/mocks/website/TYO/thuy_syb';

const IRPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Incident Response NGS</title>
        <meta name='description' content='Incident Response NGS' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <BannerDesignOneSection title="Develop new solution" data={SYB_IR_Banner}/>
      <OverviewDesignFiveSection title='Tổng quan' data={SYB_IR_Section2}/>
      <ServiceDesignThreeSection title='Dịch vụ' data={SYB_IR_Section4} />
      <WhyUsDesignOneSection title='Tại sao chọn NGS' data={SYB_IR_Section5}/>
      <PartnerDesignTwoSection data={SYB_TI_Section6}/>
      <FormDesignOneSection title='Dùng thử' data={SYB_TI_Section8}/>
    </React.Fragment>
  );
};

IRPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default IRPage;

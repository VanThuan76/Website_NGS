import React from 'react';
import Head from 'next/head';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import WhyUsDesignOneSection from '@/components/business/website/TYO&SYB_Common/WhyUs_DesignOne_Section';
import PartnerDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Partner_DesignTwo_Section';
import FormDesignOneSection from '@/components/business/website/TYO&SYB_Common/Form_DesignOne_Section';
import { SYB_TI_Banner, SYB_TI_Section2, SYB_TI_Section3, SYB_TI_Section4, SYB_TI_Section5, SYB_TI_Section7, SYB_TI_Section9 } from '@/mocks/website/SYB/syb';
import BannerDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Banner_DesignTwo_Section';
import OverviewDesignEightSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignEight_Section';
import ChallengeDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Challenge_DesignThree_Section';
import ServiceDesignOneSection from '@/components/business/website/TYO&SYB_Common/Service_DesignOne_Section';
import ClientStoriesDesignOneSection from '@/components/business/website/TYO&SYB_Common/ClientStories_DesignOne_Section';
import { TYO_CRM_Section7 } from '@/mocks/website/TYO/thuy';

const TIPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Threat Intelligence NGS</title>
        <meta name='description' content='Threat Intelligence NGS' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <BannerDesignTwoSection
        breadcrumb={['Trang chủ', 'Bảo mật kinh doanh', 'Dịch vụ thông tin tình báo an ninh mạng']}
        data={SYB_TI_Banner}
      />
      <OverviewDesignEightSection title='Tổng quan' data={SYB_TI_Section2} />
      <ChallengeDesignThreeSection title='Thách thức' data={SYB_TI_Section3} />
      <ServiceDesignOneSection title='Dịch vụ' data={SYB_TI_Section4} />
      <WhyUsDesignOneSection title='Tại sao chọn NGS' data={SYB_TI_Section5}/>
      <PartnerDesignTwoSection data={SYB_TI_Section7}/>
      <ClientStoriesDesignOneSection title='' data={TYO_CRM_Section7} />
      <FormDesignOneSection title='Dùng thử' data={SYB_TI_Section9}/>
    </React.Fragment>
  );
};

TIPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default TIPage;

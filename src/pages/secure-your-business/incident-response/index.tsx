import React from 'react';
import Head from 'next/head';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import WhyUsDesignOneSection from '@/components/business/website/TYO&SYB_Common/WhyUs_DesignOne_Section';
import FormDesignOneSection from '@/components/business/website/TYO&SYB_Common/Form_DesignOne_Section';
import { SYB_IR_Banner, SYB_IR_Section2, SYB_IR_Section3, SYB_IR_Section4, SYB_IR_Section5, SYB_TI_Section9 } from '@/mocks/website/SYB/syb';
import BannerDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Banner_DesignTwo_Section';
import ChallengeDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Challenge_DesignThree_Section';
import ClientStoriesDesignOneSection from '@/components/business/website/TYO&SYB_Common/ClientStories_DesignOne_Section';
import { TYO_CRM_Section7 } from '@/mocks/website/TYO/tyo';
import OverviewDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignThree_Section';
import ServiceDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Service_DesignThree_Section';
import dynamic from 'next/dynamic';

const ScrollRevealWrapper = dynamic(() => import('@/components/common/customization/ScrollRevealWrapper'), {
  ssr: false,
});

const TIPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Incident Response NGS</title>
        <meta name='description' content='Incident Response NGS' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <BannerDesignTwoSection
        breadcrumb={['Trang chủ', 'Bảo mật kinh doanh', 'Dịch vụ điều tra và ứng phó sự cố an ninh mạng']}
        data={SYB_IR_Banner}
      />
      <ScrollRevealWrapper >
        <OverviewDesignThreeSection title='Tổng quan' data={SYB_IR_Section2} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper >
        <ChallengeDesignThreeSection title='Thách thức' data={SYB_IR_Section3} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper >
        <ServiceDesignThreeSection title='Dịch vụ' data={SYB_IR_Section4} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper >
        <WhyUsDesignOneSection title='Tại sao chọn NGS' data={SYB_IR_Section5} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper >
        <ClientStoriesDesignOneSection title='' data={TYO_CRM_Section7} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper >
        <FormDesignOneSection title='Dùng thử' data={SYB_TI_Section9} />
      </ScrollRevealWrapper>
    </React.Fragment>
  );
};

TIPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default TIPage;

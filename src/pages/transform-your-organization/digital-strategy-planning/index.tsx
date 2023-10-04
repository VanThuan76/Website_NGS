import React from 'react';
import Head from 'next/head';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import ChallengeDesignOneSection from '@/components/business/website/TYO&SYB_Common/Challenge_DesignOne_Section';
import ServiceDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Service_DesignThree_Section';
import OverviewDesignFiveSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignFive_Section';
import WhyUsDesignOneSection from '@/components/business/website/TYO&SYB_Common/WhyUs_DesignOne_Section';
import FormDesignOneSection from '@/components/business/website/TYO&SYB_Common/Form_DesignOne_Section';
import {
  TYO_DSP_Banner,
  TYO_DSP_Section2,
  TYO_DSP_Section3,
  TYO_DSP_Section4,
  TYO_DSP_Section5,
  TYO_DSP_Section6,
  TYO_DSP_Section7,
  TYO_DSP_Section8,
} from '@/mocks/website/TYO/tyo';
import CaseStudyDesignOneSection from '@/components/business/website/TYO&SYB_Common/CaseStudy_DesignOne_Section';
import dynamic from 'next/dynamic';
import PartnerSection from '@/components/business/website/All_Common/Partner_Section';
import { Home_11 } from '@/mocks/website/HO/home';
import BannerDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Banner_DesignTwo_Section';

const ScrollRevealWrapper = dynamic(() => import('@/components/common/customization/ScrollRevealWrapper'), {
  ssr: false,
});

const DSPPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Digital Strategy Planning NGS</title>
        <meta name='description' content='Digital Strategy Planning NGS' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <ScrollRevealWrapper>
        <BannerDesignTwoSection breadcrumb={['Trang chủ', 'Dịch vụ xuất sắc', 'Chuyển đổi số']} data={TYO_DSP_Banner} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <OverviewDesignFiveSection title='Chiến lược chuyển đổi số' data={TYO_DSP_Section2} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ChallengeDesignOneSection title='Thách thức của bạn' data={TYO_DSP_Section3} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ServiceDesignThreeSection sectionCodeLink='FormCTA' title='Dịch vụ của chúng tôi' data={TYO_DSP_Section4} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <WhyUsDesignOneSection title='Tại sao chọn NGS' data={TYO_DSP_Section5} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <PartnerSection title='ĐỐI TÁC ĐỒNG HÀNH CÙNG NGS' data={Home_11} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <CaseStudyDesignOneSection title='NHỮNG KHÁCH HÀNG ĐÃ HÀI LÒNG' data={TYO_DSP_Section7} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <FormDesignOneSection title='KẾT NỐI VỚI NGS' data={TYO_DSP_Section8} />
      </ScrollRevealWrapper>
    </React.Fragment>
  );
};

DSPPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default DSPPage;

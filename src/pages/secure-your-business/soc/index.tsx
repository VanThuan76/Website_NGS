import React from 'react';
import Head from 'next/head';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import OverviewDesignOneSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignOne_Section';
import ServiceDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Service_DesignThree_Section';
import ClientStoriesDesignTwoSection from '@/components/business/website/TYO&SYB_Common/ClientStories_DesignTwo_Section';
import WhyUsDesignOneSection from '@/components/business/website/TYO&SYB_Common/WhyUs_DesignOne_Section';
import PartnerDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Partner_DesignTwo_Section';
import ChallengeDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Challenge_DesignThree_Section';
import FormDesignOneSection from '@/components/business/website/TYO&SYB_Common/Form_DesignOne_Section';
import {
  SYBBanner1_PG4_1,
  SYBClientStories2_Secure,
  SYBForm1_PG4_1,
  SYBOverview1_PG4_1,
  SYBPartner2_PG4_1,
  SYBService3_PG4_1,
  SYBWhyUs1_PG4_1,
  SYBchallenge3_PG4_1,
} from '@/mocks/website/SYB/syb';

import dynamic from 'next/dynamic';
import BannerDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Banner_DesignTwo_Section';

const ScrollRevealWrapper = dynamic(() => import('@/components/common/customization/ScrollRevealWrapper'), {
  ssr: false,
});

const SOCPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>SOC</title>
        <meta name='description' content='YNG_ERP NGS' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <ScrollRevealWrapper>
        <BannerDesignTwoSection
          breadcrumb={['Trang chủ', 'Bảo mật toàn diện', 'Giám sát, vận hành an ninh mạng']}
          data={SYBBanner1_PG4_1}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <OverviewDesignOneSection title='TỔNG QUAN' data={SYBOverview1_PG4_1} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ChallengeDesignThreeSection sectionCodeLink='FormCTA' title='THÁCH THỨC CỦA BẠN' data={SYBchallenge3_PG4_1} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ServiceDesignThreeSection sectionCodeLink='FormCTA' title='DỊCH VỤ CỦA CHÚNG TÔI' data={SYBService3_PG4_1} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <WhyUsDesignOneSection title='TẠI SAO CHỌN NGS' data={SYBWhyUs1_PG4_1} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <PartnerDesignTwoSection data={SYBPartner2_PG4_1} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ClientStoriesDesignTwoSection title='Client stories' data={SYBClientStories2_Secure} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <FormDesignOneSection title='KẾT NỐI VỚI NGS' data={SYBForm1_PG4_1} />
      </ScrollRevealWrapper>
    </React.Fragment>
  );
};

SOCPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default SOCPage;

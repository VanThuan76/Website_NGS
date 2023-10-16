import React from 'react';
import Head from 'next/head';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import ChallengeDesignOneSection from '@/components/business/website/TYO&SYB_Common/Challenge_DesignOne_Section';
import ServiceDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Service_DesignThree_Section';
import OverviewDesignFiveSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignFive_Section';
import WhyUsDesignOneSection from '@/components/business/website/TYO&SYB_Common/WhyUs_DesignOne_Section';
import FormDesignOneSection from '@/components/business/website/TYO&SYB_Common/Form_DesignOne_Section';
import CaseStudyDesignOneSection from '@/components/business/website/TYO&SYB_Common/CaseStudy_DesignOne_Section';
import dynamic from 'next/dynamic';
import BannerDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Banner_DesignTwo_Section';
import PartnerDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Partner_DesignTwo_Section';
import useTrans from '@/hooks/useTrans';

const ScrollRevealWrapper = dynamic(() => import('@/components/common/customization/ScrollRevealWrapper'), {
  ssr: false,
});

const DSPPage = () => {
  const { trans } = useTrans();
  return (
    <React.Fragment>
      <Head>
        <title>{trans.website.service.digitalStrategyPlanning.title}</title>
        <meta name='description' content={trans.website.service.digitalStrategyPlanning.title} />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <ScrollRevealWrapper>
        <BannerDesignTwoSection
          breadcrumb={[trans.common.home, trans.common.service, trans.website.service.digitalStrategyPlanning.title]}
          data={trans.website.service.digitalStrategyPlanning.section_1}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <OverviewDesignFiveSection
          title={trans.website.service.digitalStrategyPlanning.titleSection.section_2}
          data={trans.website.service.digitalStrategyPlanning.section_2}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ChallengeDesignOneSection
          title={trans.website.service.digitalStrategyPlanning.titleSection.section_3}
          data={trans.website.service.digitalStrategyPlanning.section_3}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ServiceDesignThreeSection
          sectionCodeLink='FormCTA'
          title={trans.website.service.digitalStrategyPlanning.titleSection.section_4}
          data={trans.website.service.digitalStrategyPlanning.section_4}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <WhyUsDesignOneSection
          title={trans.website.service.digitalStrategyPlanning.titleSection.section_5}
          data={trans.website.service.digitalStrategyPlanning.section_5}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <PartnerDesignTwoSection
          title={trans.website.service.digitalStrategyPlanning.titleSection.section_6}
          data={trans.website.service.digitalStrategyPlanning.section_6}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <CaseStudyDesignOneSection
          title={trans.website.service.digitalStrategyPlanning.titleSection.section_7}
          data={trans.website.service.digitalStrategyPlanning.section_7}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <FormDesignOneSection
          title={trans.website.service.digitalStrategyPlanning.titleSection.section_8}
          data={trans.website.service.digitalStrategyPlanning.section_8}
        />
      </ScrollRevealWrapper>
    </React.Fragment>
  );
};

DSPPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default DSPPage;

import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import ChallengeDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Challenge_DesignTwo_Section';
import ServiceDesignOneSection from '@/components/business/website/TYO&SYB_Common/Service_DesignOne_Section';
import PartnerDesignOneSection from '@/components/business/website/TYO&SYB_Common/Partner_DesignOne_Section';
import WhyUsDesignOneSection from '@/components/business/website/TYO&SYB_Common/WhyUs_DesignOne_Section';
import ClientStoriesDesignOneSection from '@/components/business/website/TYO&SYB_Common/ClientStories_DesignOne_Section';
import FormDesignOneSection from '@/components/business/website/TYO&SYB_Common/Form_DesignOne_Section';
import BannerDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Banner_DesignTwo_Section';
import OverviewDesignOneSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignOne_Section';
import useTrans from '@/hooks/useTrans';

const ScrollRevealWrapper = dynamic(() => import('@/components/common/customization/ScrollRevealWrapper'), {
  ssr: false,
});
const EPAAPage = () => {
  const { trans } = useTrans();
  return (
    <React.Fragment>
      <Head>
        <title>{trans.website.service.extendedPlanningAndAnalysis.title}</title>
        <meta name='description' content={trans.website.service.extendedPlanningAndAnalysis.title} />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <ScrollRevealWrapper>
        <BannerDesignTwoSection
          breadcrumb={[
            trans.common.home,
            trans.common.service,
            trans.website.service.extendedPlanningAndAnalysis.title,
          ]}
          data={trans.website.service.extendedPlanningAndAnalysis.section_1}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <OverviewDesignOneSection
          title={trans.website.service.extendedPlanningAndAnalysis.titleSection.section_2}
          data={trans.website.service.extendedPlanningAndAnalysis.section_2}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ChallengeDesignTwoSection
          title={trans.website.service.extendedPlanningAndAnalysis.titleSection.section_3}
          data={trans.website.service.extendedPlanningAndAnalysis.section_3}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ServiceDesignOneSection title='' data={trans.website.service.extendedPlanningAndAnalysis.section_4} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <WhyUsDesignOneSection
          title={trans.website.service.extendedPlanningAndAnalysis.titleSection.section_5}
          data={trans.website.service.extendedPlanningAndAnalysis.section_5}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <PartnerDesignOneSection data={trans.website.service.extendedPlanningAndAnalysis.section_6} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ClientStoriesDesignOneSection title='' data={trans.website.service.extendedPlanningAndAnalysis.section_7} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <FormDesignOneSection
          title={trans.website.service.extendedPlanningAndAnalysis.titleSection.section_8}
          data={trans.website.service.extendedPlanningAndAnalysis.section_8}
        />
      </ScrollRevealWrapper>
    </React.Fragment>
  );
};

EPAAPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default EPAAPage;

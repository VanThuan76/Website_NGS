import React from 'react';
import Head from 'next/head';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import ServiceDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Service_DesignThree_Section';
import ChallengeDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Challenge_DesignThree_Section';
import WhyUsDesignOneSection from '@/components/business/website/TYO&SYB_Common/WhyUs_DesignOne_Section';
import ClientStoriesDesignOneSection from '@/components/business/website/TYO&SYB_Common/ClientStories_DesignOne_Section';
import ServiceDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Service_DesignTwo_Section';
import FormDesignOneSection from '@/components/business/website/TYO&SYB_Common/Form_DesignOne_Section';
import dynamic from 'next/dynamic';
import BannerDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Banner_DesignTwo_Section';
import OverviewDesignEightSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignEight_Section';
import PartnerDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Partner_DesignTwo_Section';
import useTrans from '@/hooks/useTrans';

const ScrollRevealWrapper = dynamic(() => import('@/components/common/customization/ScrollRevealWrapper'), {
  ssr: false,
});

const PTPage = () => {
  const { trans } = useTrans();
  return (
    <React.Fragment>
      <Head>
        <title>{trans.website.secure.penetration_testing.title}</title>
        <meta name='description' content={trans.website.secure.penetration_testing.title} />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <ScrollRevealWrapper>
        <BannerDesignTwoSection
          breadcrumb={[trans.common.home, trans.common.secure, trans.website.secure.penetration_testing.title]}
          data={trans.website.secure.penetration_testing.section_1}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <OverviewDesignEightSection
          title={trans.website.secure.penetration_testing.titleSection.section_2}
          data={trans.website.secure.penetration_testing.section_2}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ChallengeDesignThreeSection
          title={trans.website.secure.penetration_testing.titleSection.section_3}
          data={trans.website.secure.penetration_testing.section_3}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ServiceDesignThreeSection
          title={trans.website.secure.penetration_testing.titleSection.section_4}
          data={trans.website.secure.penetration_testing.section_4}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ServiceDesignTwoSection
          title={trans.website.secure.penetration_testing.titleSection.section_5}
          data={trans.website.secure.penetration_testing.section_5}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <WhyUsDesignOneSection
          title={trans.website.secure.penetration_testing.titleSection.section_6}
          data={trans.website.secure.penetration_testing.section_6}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <PartnerDesignTwoSection data={trans.website.secure.penetration_testing.section_7} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ClientStoriesDesignOneSection
          title={trans.website.secure.penetration_testing.titleSection.section_8}
          data={trans.website.secure.penetration_testing.section_8}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <FormDesignOneSection
          title={trans.website.secure.penetration_testing.titleSection.section_9}
          data={trans.website.secure.penetration_testing.section_9}
        />
      </ScrollRevealWrapper>
    </React.Fragment>
  );
};

PTPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default PTPage;

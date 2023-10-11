import React from 'react';
import Head from 'next/head';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import ServiceDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Service_DesignThree_Section';
import ClientStoriesDesignTwoSection from '@/components/business/website/TYO&SYB_Common/ClientStories_DesignTwo_Section';
import WhyUsDesignOneSection from '@/components/business/website/TYO&SYB_Common/WhyUs_DesignOne_Section';
import PartnerDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Partner_DesignTwo_Section';
import ChallengeDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Challenge_DesignThree_Section';
import FormDesignOneSection from '@/components/business/website/TYO&SYB_Common/Form_DesignOne_Section';
import dynamic from 'next/dynamic';
import BannerDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Banner_DesignTwo_Section';
import OverviewDesignEightSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignEight_Section';
import useTrans from '@/hooks/useTrans';

const ScrollRevealWrapper = dynamic(() => import('@/components/common/customization/ScrollRevealWrapper'), {
  ssr: false,
});

const SOCPage = () => {
  const { trans } = useTrans();
  return (
    <React.Fragment>
      <Head>
        <title>{trans.website.secure.soc.title}</title>
        <meta name='description' content={trans.website.secure.soc.title} />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <ScrollRevealWrapper>
        <BannerDesignTwoSection
          breadcrumb={[trans.common.home, trans.common.secure, trans.website.secure.soc.title]}
          data={trans.website.secure.soc.section_1}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <OverviewDesignEightSection
          title={trans.website.secure.soc.titleSection.section_2}
          data={trans.website.secure.soc.section_2}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ChallengeDesignThreeSection
          sectionCodeLink='FormCTA'
          title={trans.website.secure.soc.titleSection.section_3}
          data={trans.website.secure.soc.section_3}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ServiceDesignThreeSection
          sectionCodeLink='FormCTA'
          title={trans.website.secure.soc.titleSection.section_4}
          data={trans.website.secure.soc.section_4}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <WhyUsDesignOneSection
          title={trans.website.secure.soc.titleSection.section_5}
          data={trans.website.secure.soc.section_5}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <PartnerDesignTwoSection data={trans.website.secure.soc.section_6} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ClientStoriesDesignTwoSection
          title={trans.website.secure.soc.titleSection.section_7}
          data={trans.website.secure.soc.section_7}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <FormDesignOneSection
          title={trans.website.secure.soc.titleSection.section_8}
          data={trans.website.secure.soc.section_8}
        />
      </ScrollRevealWrapper>
    </React.Fragment>
  );
};

SOCPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default SOCPage;

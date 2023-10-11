import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import ChallengeDesignOneSection from '@/components/business/website/TYO&SYB_Common/Challenge_DesignOne_Section';
import FormDesignOneSection from '@/components/business/website/TYO&SYB_Common/Form_DesignOne_Section';
import BannerDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Banner_DesignTwo_Section';
import WhyUsDesignOneSection from '@/components/business/website/TYO&SYB_Common/WhyUs_DesignOne_Section';
import PartnerDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Partner_DesignTwo_Section';
import ServiceDesignOneSection from '@/components/business/website/TYO&SYB_Common/Service_DesignOne_Section';
import ClientStoriesDesignTwoSection from '@/components/business/website/TYO&SYB_Common/ClientStories_DesignTwo_Section';
import OverviewDesignEightSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignEight_Section';
import useTrans from '@/hooks/useTrans';

const ScrollRevealWrapper = dynamic(() => import('@/components/common/customization/ScrollRevealWrapper'), {
  ssr: false,
});

const ERPPage = () => {
  const { trans } = useTrans();
  return (
    <React.Fragment>
      <Head>
        <title>{trans.website.secure.OT_ICS_security.title}</title>
        <meta name='description' content={trans.website.secure.OT_ICS_security.title} />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <BannerDesignTwoSection
        breadcrumb={[trans.common.home, trans.common.secure, trans.website.secure.OT_ICS_security.title]}
        data={trans.website.secure.OT_ICS_security.section_1}
      />
      <ScrollRevealWrapper>
        <OverviewDesignEightSection
          title={trans.website.secure.OT_ICS_security.titleSection.section_2}
          data={trans.website.secure.OT_ICS_security.section_2}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ChallengeDesignOneSection
          title={trans.website.secure.OT_ICS_security.titleSection.section_3}
          data={trans.website.secure.OT_ICS_security.section_3}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ServiceDesignOneSection
          sectionCodeLink='FormCTA'
          title={trans.website.secure.OT_ICS_security.titleSection.section_4}
          data={trans.website.secure.OT_ICS_security.section_4}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <WhyUsDesignOneSection
          title={trans.website.secure.OT_ICS_security.titleSection.section_5}
          data={trans.website.secure.OT_ICS_security.section_5}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <PartnerDesignTwoSection data={trans.website.secure.OT_ICS_security.section_6} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ClientStoriesDesignTwoSection
          title={trans.website.secure.OT_ICS_security.titleSection.section_7}
          data={trans.website.secure.OT_ICS_security.section_7}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <FormDesignOneSection
          title={trans.website.secure.OT_ICS_security.titleSection.section_8}
          data={trans.website.secure.OT_ICS_security.section_8}
        />
      </ScrollRevealWrapper>
    </React.Fragment>
  );
};

ERPPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default ERPPage;

import React from 'react';
import Head from 'next/head';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import ServiceDesignTwoSetion from '@/components/business/website/TYO&SYB_Common/Service_DesignTwo_Section';
import BannerDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Banner_DesignTwo_Section';
import FormDesignOneSection from '@/components/business/website/TYO&SYB_Common/Form_DesignOne_Section';
import OverviewDesignOneSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignOne_Section';
import ChallengeDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Challenge_DesignTwo_Section';
import ServiceDesignOneSection from '@/components/business/website/TYO&SYB_Common/Service_DesignOne_Section';
import ClientStoriesDesignOneSection from '@/components/business/website/TYO&SYB_Common/ClientStories_DesignOne_Section';
import dynamic from 'next/dynamic';
import PartnerDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Partner_DesignTwo_Section';
import WhyUsDesignThreeSection from '@/components/business/website/TYO&SYB_Common/WhyUs_DesignThree_Section';
import useTrans from '@/hooks/useTrans';

const ScrollRevealWrapper = dynamic(() => import('@/components/common/customization/ScrollRevealWrapper'), {
  ssr: false,
});

const CAPage = () => {
  const { trans } = useTrans();
  return (
    <React.Fragment>
      <Head>
        <title>{trans.website.service.coreAirline.title}</title>
        <meta name='description' content={trans.website.service.coreAirline.title} />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <ScrollRevealWrapper>
        <BannerDesignTwoSection
          breadcrumb={[trans.common.home, trans.common.service, trans.website.service.coreAirline.title]}
          data={trans.website.service.coreAirline.section_1}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <OverviewDesignOneSection
          title={trans.website.service.coreAirline.titleSection.section_2}
          data={trans.website.service.coreAirline.section_2}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ChallengeDesignTwoSection
          title={trans.website.service.coreAirline.titleSection.section_3}
          data={trans.website.service.coreAirline.section_3}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ServiceDesignTwoSetion
          title={trans.website.service.coreAirline.titleSection.section_4}
          data={trans.website.service.coreAirline.section_4}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ServiceDesignOneSection title='' data={trans.website.service.coreAirline.section_5} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <WhyUsDesignThreeSection
          title={trans.website.service.coreAirline.titleSection.section_6}
          data={trans.website.service.coreAirline.section_6}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <PartnerDesignTwoSection
          title={trans.website.service.coreAirline.titleSection.section_7}
          data={trans.website.service.coreAirline.section_7}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ClientStoriesDesignOneSection title='' data={trans.website.service.coreAirline.section_8} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <FormDesignOneSection
          title={trans.website.service.coreAirline.titleSection.section_9}
          data={trans.website.service.coreAirline.section_9}
        />
      </ScrollRevealWrapper>
    </React.Fragment>
  );
};

CAPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default CAPage;

import React from 'react';
import Head from 'next/head';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import ServiceDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Service_DesignThree_Section';
import OverviewDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignThree_Section';
import ChallengeDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Challenge_DesignThree_Section';
import BannerDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Banner_DesignTwo_Section';
import OverviewDesignFiveSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignFive_Section';
import WhyUsDesignOneSection from '@/components/business/website/TYO&SYB_Common/WhyUs_DesignOne_Section';
import ClientStoriesDesignOneSection from '@/components/business/website/TYO&SYB_Common/ClientStories_DesignOne_Section';
import FormDesignOneSection from '@/components/business/website/TYO&SYB_Common/Form_DesignOne_Section';
import dynamic from 'next/dynamic';
import PartnerDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Partner_DesignTwo_Section';
import useTrans from '@/hooks/useTrans';

const ScrollRevealWrapper = dynamic(() => import('@/components/common/customization/ScrollRevealWrapper'), {
  ssr: false,
});

const CDPPage = () => {
  const { trans } = useTrans();
  return (
    <React.Fragment>
      <Head>
        <title>{trans.website.service.customerDataPlatform.title}</title>
        <meta name='description' content={trans.website.service.customerDataPlatform.title} />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <ScrollRevealWrapper>
        <BannerDesignTwoSection
          sectionCodeLink='FormCTA'
          breadcrumb={[trans.common.home, trans.common.service, trans.website.service.customerDataPlatform.title]}
          data={trans.website.service.customerDataPlatform.section_1}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <OverviewDesignThreeSection
          title={trans.website.service.customerDataPlatform.titleSection.section_2}
          data={trans.website.service.customerDataPlatform.section_2}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <WhyUsDesignOneSection
          title={trans.website.service.customerDataPlatform.titleSection.section_3}
          data={trans.website.service.customerDataPlatform.section_3}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ChallengeDesignThreeSection
          sectionCodeLink='FormCTA'
          title={trans.website.service.customerDataPlatform.titleSection.section_4}
          data={trans.website.service.customerDataPlatform.section_4}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ServiceDesignThreeSection
          sectionCodeLink='FormCTA'
          title={trans.website.service.customerDataPlatform.titleSection.section_5}
          data={trans.website.service.customerDataPlatform.section_5}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <OverviewDesignFiveSection
          title={trans.website.service.customerDataPlatform.titleSection.section_6}
          data={trans.website.service.customerDataPlatform.section_6}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <PartnerDesignTwoSection
          title={trans.website.service.customerDataPlatform.titleSection.section_7}
          data={trans.website.service.customerDataPlatform.section_7}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ClientStoriesDesignOneSection title='' data={trans.website.service.customerDataPlatform.section_8} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <FormDesignOneSection
          title={trans.website.service.customerDataPlatform.titleSection.section_9}
          data={trans.website.service.customerDataPlatform.section_9}
        />
      </ScrollRevealWrapper>
    </React.Fragment>
  );
};

CDPPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default CDPPage;

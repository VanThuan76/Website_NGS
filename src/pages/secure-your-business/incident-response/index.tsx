import React from 'react';
import Head from 'next/head';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import WhyUsDesignOneSection from '@/components/business/website/TYO&SYB_Common/WhyUs_DesignOne_Section';
import FormDesignOneSection from '@/components/business/website/TYO&SYB_Common/Form_DesignOne_Section';
import BannerDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Banner_DesignTwo_Section';
import ChallengeDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Challenge_DesignThree_Section';
import ClientStoriesDesignOneSection from '@/components/business/website/TYO&SYB_Common/ClientStories_DesignOne_Section';
import OverviewDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignThree_Section';
import ServiceDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Service_DesignThree_Section';
import dynamic from 'next/dynamic';
import useTrans from '@/hooks/useTrans';

const ScrollRevealWrapper = dynamic(() => import('@/components/common/customization/ScrollRevealWrapper'), {
  ssr: false,
});

const TIPage = () => {
  const { trans } = useTrans();
  return (
    <React.Fragment>
      <Head>
        <title>{trans.website.secure.incident_response.title}</title>
        <meta name='description' content={trans.website.secure.incident_response.title} />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <BannerDesignTwoSection
        breadcrumb={[trans.common.home, trans.common.secure, trans.website.secure.incident_response.title]}
        data={trans.website.secure.incident_response.section_1}
      />
      <ScrollRevealWrapper>
        <OverviewDesignThreeSection
          title={trans.website.secure.incident_response.titleSection.section_2}
          data={trans.website.secure.incident_response.section_2}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ChallengeDesignThreeSection
          title={trans.website.secure.incident_response.titleSection.section_3}
          data={trans.website.secure.incident_response.section_3}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ServiceDesignThreeSection
          title={trans.website.secure.incident_response.titleSection.section_4}
          data={trans.website.secure.incident_response.section_4}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <WhyUsDesignOneSection
          title={trans.website.secure.incident_response.titleSection.section_5}
          data={trans.website.secure.incident_response.section_5}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ClientStoriesDesignOneSection
          title={trans.website.secure.incident_response.titleSection.section_6}
          data={trans.website.secure.incident_response.section_6}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <FormDesignOneSection
          title={trans.website.secure.incident_response.titleSection.section_7}
          data={trans.website.secure.incident_response.section_7}
        />
      </ScrollRevealWrapper>
    </React.Fragment>
  );
};

TIPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default TIPage;

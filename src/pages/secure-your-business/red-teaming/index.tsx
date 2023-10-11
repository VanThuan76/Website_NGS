import React from 'react';
import Head from 'next/head';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import ClientStoriesDesignTwoSection from '@/components/business/website/TYO&SYB_Common/ClientStories_DesignTwo_Section';
import FormDesignOneSection from '@/components/business/website/TYO&SYB_Common/Form_DesignOne_Section';
import BannerDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Banner_DesignTwo_Section';
import WhyUsDesignOneSection from '@/components/business/website/TYO&SYB_Common/WhyUs_DesignOne_Section';
import ServiceDesignFiveSection from '@/components/business/website/TYO&SYB_Common/Service_DesignFive_Section';
import OverviewDesignFourSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignFour_Section';
import dynamic from 'next/dynamic';
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
        <title>{trans.website.secure.red_teaming.title}</title>
        <meta name='description' content={trans.website.secure.red_teaming.title} />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <BannerDesignTwoSection
        breadcrumb={[trans.common.home, trans.common.secure, trans.website.secure.red_teaming.title]}
        data={trans.website.secure.red_teaming.section_1}
      />
      <ScrollRevealWrapper>
        <OverviewDesignEightSection
          title={trans.website.secure.red_teaming.titleSection.section_2}
          data={trans.website.secure.red_teaming.section_2}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <OverviewDesignFourSection
          title={trans.website.secure.red_teaming.titleSection.section_3}
          data={trans.website.secure.red_teaming.section_3}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ServiceDesignFiveSection
          title={trans.website.secure.red_teaming.titleSection.section_4}
          data={trans.website.secure.red_teaming.section_4}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <WhyUsDesignOneSection
          title={trans.website.secure.red_teaming.titleSection.section_5}
          data={trans.website.secure.red_teaming.section_5}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ClientStoriesDesignTwoSection
          title={trans.website.secure.red_teaming.titleSection.section_7}
          data={trans.website.secure.red_teaming.section_7}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <FormDesignOneSection
          title={trans.website.secure.red_teaming.titleSection.section_8}
          data={trans.website.secure.red_teaming.section_8}
        />
      </ScrollRevealWrapper>
    </React.Fragment>
  );
};

ERPPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default ERPPage;

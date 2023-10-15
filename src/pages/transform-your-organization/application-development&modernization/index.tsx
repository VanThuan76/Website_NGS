import React from 'react';
import Head from 'next/head';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import OverviewDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignThree_Section';
import FormDesignOneSection from '@/components/business/website/TYO&SYB_Common/Form_DesignOne_Section';
import ServiceDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Service_DesignThree_Section';
import BannerDesignOneSection from '@/components/business/website/All_Common/Banner_DesignOne_Section';
import BenefitDesignOneSection from '@/components/business/website/TYO&SYB_Common/Benefit_DesignOne_Section';
import WhyUsDesignTwoSection from '@/components/business/website/TYO&SYB_Common/WhyUs_DesignTwo_Section';
import dynamic from 'next/dynamic';
import PartnerDesignOneSection from '@/components/business/website/TYO&SYB_Common/Partner_DesignOne_Section';
import useTrans from '@/hooks/useTrans';

const ScrollRevealWrapper = dynamic(() => import('@/components/common/customization/ScrollRevealWrapper'), {
  ssr: false,
});

const CCPage = () => {
  const { trans } = useTrans();
  return (
    <React.Fragment>
      <Head>
        <title>{trans.website.service.applicationDevelopmentModernization.title}</title>
        <meta name='description' content={trans.website.service.applicationDevelopmentModernization.title} />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <ScrollRevealWrapper>
        <BannerDesignOneSection
          title={trans.website.service.applicationDevelopmentModernization.titleSection.section_1}
          data={trans.website.service.applicationDevelopmentModernization.section_1}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <OverviewDesignThreeSection
          title={trans.website.service.applicationDevelopmentModernization.titleSection.section_2}
          data={trans.website.service.applicationDevelopmentModernization.section_2}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <BenefitDesignOneSection
          title={trans.website.service.applicationDevelopmentModernization.titleSection.section_3}
          data={trans.website.service.applicationDevelopmentModernization.section_3}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ServiceDesignThreeSection
          title={trans.website.service.applicationDevelopmentModernization.titleSection.section_4}
          data={trans.website.service.applicationDevelopmentModernization.section_4}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <WhyUsDesignTwoSection
          title={trans.website.service.applicationDevelopmentModernization.titleSection.section_5}
          data={trans.website.service.applicationDevelopmentModernization.section_5}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <PartnerDesignOneSection data={trans.website.service.applicationDevelopmentModernization.section_6} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <FormDesignOneSection
          title={trans.website.service.applicationDevelopmentModernization.titleSection.section_7}
          data={trans.website.service.applicationDevelopmentModernization.section_7}
        />
      </ScrollRevealWrapper>
    </React.Fragment>
  );
};

CCPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default CCPage;

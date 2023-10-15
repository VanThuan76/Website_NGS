import React from 'react';
import Head from 'next/head';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import ChallengeDesignOneSection from '@/components/business/website/TYO&SYB_Common/Challenge_DesignOne_Section';
import BannerDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Banner_DesignTwo_Section';
import FormDesignOneSection from '@/components/business/website/TYO&SYB_Common/Form_DesignOne_Section';
import OverviewDesignOneSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignOne_Section';
import ServiceDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Service_DesignThree_Section';
import WhyUsDesignOneSection from '@/components/business/website/TYO&SYB_Common/WhyUs_DesignOne_Section';
import ClientStoriesDesignThreeSection from '@/components/business/website/TYO&SYB_Common/ClientStories_DesignThree_Section';
import dynamic from 'next/dynamic';
import PartnerDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Partner_DesignTwo_Section';
import useTrans from '@/hooks/useTrans';

const ScrollRevealWrapper = dynamic(() => import('@/components/common/customization/ScrollRevealWrapper'), {
  ssr: false,
});

const CBPage = () => {
  const { trans, lang } = useTrans();
  return (
    <React.Fragment>
      <Head>
        <title>{trans.website.service.coreBanking.title}</title>
        <meta name='description' content={trans.website.service.coreBanking.title} />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <ScrollRevealWrapper>
        <BannerDesignTwoSection
          breadcrumb={[trans.common.home, trans.common.service, trans.website.service.coreBanking.title]}
          data={trans.website.service.coreBanking.section_1}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <OverviewDesignOneSection
          title={trans.website.service.coreBanking.titleSection.section_2}
          data={trans.website.service.coreBanking.section_2}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ChallengeDesignOneSection
          title={trans.website.service.coreBanking.titleSection.section_3}
          data={trans.website.service.coreBanking.section_3}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ServiceDesignThreeSection
          sectionCodeLink='FormCTA'
          title={trans.website.service.coreBanking.titleSection.section_4}
          sub={`${
            lang === 'vi'
              ? 'Chúng tôi chứng minh chiến lược và lập kế hoạch chuyển đổi kỹ thuật số bằng giải pháp lõi ngân hàng thế hệ mới'
              : 'We demonstrate digital transformation strategy and planning with next-generation core banking solutions'
          }`}
          data={trans.website.service.coreBanking.section_4}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <WhyUsDesignOneSection
          title={trans.website.service.coreBanking.titleSection.section_5}
          data={trans.website.service.coreBanking.section_5}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <PartnerDesignTwoSection
          title={trans.website.service.coreBanking.titleSection.section_6}
          data={trans.website.service.coreBanking.section_6}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ClientStoriesDesignThreeSection
          title={trans.website.service.coreBanking.titleSection.section_7}
          data={trans.website.service.coreBanking.section_7}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <FormDesignOneSection
          title={trans.website.service.coreBanking.titleSection.section_8}
          data={trans.website.service.coreBanking.section_8}
        />
      </ScrollRevealWrapper>
    </React.Fragment>
  );
};

CBPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default CBPage;

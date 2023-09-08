import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import HomeBannerSection from '@/components/business/website/HO/HO_Banner_Section';
import HomeSolutionSection from '@/components/business/website/HO/HO_Solution_Section';
import HomeWhyUsSection from '@/components/business/website/HO/HO_WhyUs_Section';
import HomeServiceSection from '@/components/business/website/HO/HO_Service_Section';
import HomeSecuritySection from '@/components/business/website/HO/HO_Security_Section';
import HomeAboutUsSection from '@/components/business/website/HO/HO_AboutUs_Section';
import HomePioneeringSection from '@/components/business/website/HO/HO_Pioneering_Section';
import PartnerSection from '@/components/business/website/All_Common/Partner_Section';
import ConnectUsSection from '@/components/business/website/All_Common/ConnectUs_Section';
import NewsSection from '@/components/business/website/All_Common/News_Section';
import HomeTestimonialSection from '@/components/business/website/HO/HO_Testimonial_Section';
import { IDetailPageById } from 'src/shared/schemas/typedef/IPage';
import { GetServerSideProps } from 'next';
import { APP_SAVE_KEY } from '@/utils/constants';
import { IBaseSectionComponent, IBaseSectionComponentNews } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import { renderHomeContent } from '@/utils/fetchServerSide/renderHomeContent';

const ScrollRevealWrapper = dynamic(() => import('@/components/common/customization/ScrollRevealWrapper'), {
  ssr: false,
});

type Props = {
  homePageData: IDetailPageById;
  HO_SolutionData: IBaseSectionComponent;
  HO_BannerData: IBaseSectionComponent;
  HO_ServiceData: IBaseSectionComponent;
  HO_SecurityData: IBaseSectionComponent;
  HO_PioneeringData: IBaseSectionComponent;
  HO_AboutUsData: IBaseSectionComponent;
  HO_WhyUsData: IBaseSectionComponent;
  // HO_EcosystemData: IBaseSectionComponent;
  COMMON_EventData: IBaseSectionComponent;
  COMMON_NewsData: IBaseSectionComponentNews;
  HO_PartnerData: IBaseSectionComponent;
  HO_TestimonialData: IBaseSectionComponent;
};
export function HomePage({
  homePageData,
  HO_SolutionData,
  HO_BannerData,
  HO_ServiceData,
  HO_SecurityData,
  HO_PioneeringData,
  HO_AboutUsData,
  HO_WhyUsData,
  // HO_EcosystemData,
  COMMON_EventData,
  COMMON_NewsData,
  HO_PartnerData,
  HO_TestimonialData,
}: Props) {
  return (
    <React.Fragment>
      <Head>
        <title>{homePageData.name}</title>
        <meta name='description' content={homePageData.description} />
        <meta name='keywords' content={homePageData.seo} />
        <meta name='robots' content='index, follow' />
        <meta property='og:title' content={homePageData.name} />
        <meta property='og:description' content={homePageData.description} />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://ngs.vn/' />
        <meta property='og:image' content={homePageData.image} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={homePageData.name} />
        <meta name='twitter:description' content={homePageData.description} />
        <meta name='twitter:image' content={homePageData.image} />
      </Head>
      <ScrollRevealWrapper>
        <HomeBannerSection data={HO_BannerData} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper revealConfig={{ origin: 'left', distance: '30px', duration: 1000 }}>
        <HomeSolutionSection data={HO_SolutionData} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper revealConfig={{ origin: 'top', distance: '30px', duration: 1000 }}>
        <HomeServiceSection data={HO_ServiceData} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper revealConfig={{ origin: 'bottom', distance: '30px', duration: 1000 }}>
        <HomeSecuritySection data={HO_SecurityData} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper revealConfig={{ origin: 'bottom', distance: '30px', duration: 1000 }}>
        <HomePioneeringSection />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper revealConfig={{ origin: 'bottom', distance: '30px', duration: 1000 }}>
        <HomeAboutUsSection data={HO_AboutUsData} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper revealConfig={{ origin: 'bottom', distance: '30px', duration: 1000 }}>
        <HomeWhyUsSection data={HO_WhyUsData} />
      </ScrollRevealWrapper>
      {/* <ScrollRevealWrapper revealConfig={{ origin: 'bottom', distance: '30px', duration: 1000 }}>
        <HomeEventSection data={COMMON_EventData} />
      </ScrollRevealWrapper> */}
      <ScrollRevealWrapper revealConfig={{ origin: 'bottom', distance: '30px', duration: 1000 }}>
        <NewsSection data={COMMON_NewsData} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper revealConfig={{ origin: 'bottom', distance: '30px', duration: 1000 }}>
        <PartnerSection data={HO_PartnerData} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper revealConfig={{ origin: 'bottom', distance: '30px', duration: 1000 }}>
        <HomeTestimonialSection data={HO_TestimonialData} />
      </ScrollRevealWrapper>
      {/* <ScrollRevealWrapper revealConfig={{ origin: 'bottom', distance: '30px', duration: 1000 }}>
        <HomeCaseStudySection />
      </ScrollRevealWrapper> */}
      <ScrollRevealWrapper revealConfig={{ origin: 'bottom', distance: '30px', duration: 1000 }}>
        <ConnectUsSection />
      </ScrollRevealWrapper>
    </React.Fragment>
  );
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { query } = ctx;
  const { lang } = query;
  const initLang = lang === undefined ? 'vi' : lang;
  const shouldRedirect = await renderHomeContent(initLang as string, ctx.req.cookies[APP_SAVE_KEY.TOKEN_KEY]);
  if (shouldRedirect) {
    const {
      homePageData,
      HO_SolutionData,
      HO_BannerData,
      HO_ServiceData,
      HO_SecurityData,
      HO_PioneeringData,
      HO_AboutUsData,
      HO_WhyUsData,
      // HO_EcosystemData,
      COMMON_EventData,
      COMMON_NewsData,
      HO_PartnerData,
      HO_TestimonialData,
    } = shouldRedirect.props;
    return {
      props: {
        homePageData: homePageData.data || {},
        HO_SolutionData: HO_SolutionData.data || [],
        HO_BannerData: HO_BannerData.data || [],
        HO_ServiceData: HO_ServiceData.data || [],
        HO_SecurityData: HO_SecurityData.data || [],
        HO_PioneeringData: HO_PioneeringData.data || [],
        // HO_EcosystemData: HO_EcosystemData.data || [],
        HO_AboutUsData: HO_AboutUsData.data || [],
        HO_WhyUsData: HO_WhyUsData.data || [],
        COMMON_EventData: COMMON_EventData.data || [],
        COMMON_NewsData: COMMON_NewsData.data || [],
        HO_PartnerData: HO_PartnerData.data || [],
        HO_TestimonialData: HO_TestimonialData.data || [],
      },
    };
  }
  return {
    props: {
      homePageData: {},
      HO_SolutionData: [],
      HO_BannerData: [],
      HO_ServiceData: [],
      HO_SecurityData: [],
      HO_PioneeringData: [],
      HO_AboutUsData: [],
      HO_WhyUsData: [],
      // HO_EcosystemData: [],
      COMMON_EventData: [],
      COMMON_NewsData: [],
      HO_PartnerData: [],
      HO_TestimonialData: [],
    },
  };
};

HomePage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default HomePage;

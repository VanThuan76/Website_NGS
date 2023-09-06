import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import HomeBanner from '@/components/business/website/HO/HO_banner';
import HomeSolution from '@/components/business/website/HO/HO_solution';
import HomeWhyUs from '@/components/business/website/HO/HO_whyUs';
import HomeService from '@/components/business/website/HO/HO_service';
import HomePartner from '@/components/business/website/HO/HO_partner';
import HomeSecurity from '@/components/business/website/HO/HO_security';
import HomeAboutUs from '@/components/business/website/HO/HO_aboutUs';
import ConnectUs from '@/components/business/website/HO/HO_connectUs';
import HomePrice from '@/components/business/website/HO/HO_price';
import { IDetailPageById } from 'src/shared/schemas/typedef/IPage';
import { GetServerSideProps } from 'next';
import { APP_SAVE_KEY } from '@/utils/constants';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import { renderHomeContent } from '@/utils/fetchServerSide/renderHomeContent';
const ScrollRevealWrapper = dynamic(() => import('@/components/common/customization/ScrollRevealWrapper'), {
  ssr: false,
});

type Props = {
  pageData: IDetailPageById;
  HO_solutionData: IBaseSectionComponent;
  HO_bannerData: IBaseSectionComponent;
  HO_serviceData: IBaseSectionComponent;
  HO_securityData: IBaseSectionComponent;
  HO_aboutUsData: IBaseSectionComponent;
  HO_whyUsData: IBaseSectionComponent;
  HO_eventData: IBaseSectionComponent;
  HO_newsData: IBaseSectionComponent;
  HO_partnerData: IBaseSectionComponent;
  HO_testimonialData: IBaseSectionComponent;
};
export function HomePage({
  pageData,
  HO_solutionData,
  HO_bannerData,
  HO_serviceData,
  HO_securityData,
  HO_aboutUsData,
  HO_whyUsData,
  HO_eventData,
  HO_newsData,
  HO_partnerData,
  HO_testimonialData,
}: Props) {
  return (
    <React.Fragment>
      <Head>
        <title>{pageData.name}</title>
        <meta name='description' content={pageData.description} />
        <meta name='keywords' content={pageData.seo} />
        <meta name='robots' content='index, follow' />
        <meta property='og:title' content={pageData.name} />
        <meta property='og:description' content={pageData.description} />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://ngs.vn/' />
        <meta property='og:image' content={pageData.image} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={pageData.name} />
        <meta name='twitter:description' content={pageData.description} />
        <meta name='twitter:image' content={pageData.image} />
      </Head>
      <ScrollRevealWrapper>
        <HomeBanner data={HO_bannerData} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper revealConfig={{ origin: 'left', distance: '30px', duration: 1000 }}>
        <HomeSolution data={HO_solutionData} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper revealConfig={{ origin: 'top', distance: '30px', duration: 1000 }}>
        <HomeService data={HO_serviceData} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper revealConfig={{ origin: 'bottom', distance: '30px', duration: 1000 }}>
        <HomeSecurity data={HO_securityData} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper revealConfig={{ origin: 'bottom', distance: '30px', duration: 1000 }}>
        <HomePrice />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper revealConfig={{ origin: 'bottom', distance: '30px', duration: 1000 }}>
        <HomeAboutUs data={HO_aboutUsData} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper revealConfig={{ origin: 'bottom', distance: '30px', duration: 1000 }}>
        <HomeWhyUs data={HO_whyUsData} />
      </ScrollRevealWrapper>
      {/* <ScrollRevealWrapper revealConfig={{ origin: 'bottom', distance: '30px', duration: 1000 }}>
        <HomeEvent data={HO_eventData} />
      </ScrollRevealWrapper> */}
      {/* <ScrollRevealWrapper revealConfig={{ origin: 'bottom', distance: '30px', duration: 1000 }}>
        <HomeNews data={HO_newsData} />
      </ScrollRevealWrapper> */}
      <ScrollRevealWrapper revealConfig={{ origin: 'bottom', distance: '30px', duration: 1000 }}>
        <HomePartner data={HO_partnerData} />
      </ScrollRevealWrapper>
      {/* <ScrollRevealWrapper revealConfig={{ origin: 'bottom', distance: '30px', duration: 1000 }}>
        <HomeTestimonial data={HO_testimonialData} />
      </ScrollRevealWrapper> */}
      {/* <ScrollRevealWrapper revealConfig={{ origin: 'bottom', distance: '30px', duration: 1000 }}>
        <HomeCaseStudy />
      </ScrollRevealWrapper> */}
      <ScrollRevealWrapper revealConfig={{ origin: 'bottom', distance: '30px', duration: 1000 }}>
        <ConnectUs />
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
      pageData,
      HO_solutionData,
      HO_bannerData,
      HO_serviceData,
      HO_securityData,
      HO_aboutUsData,
      HO_whyUsData,
      HO_eventData,
      HO_newsData,
      HO_partnerData,
      HO_testimonialData,
    } = shouldRedirect.props;
    return {
      props: {
        pageData: pageData.data || {},
        HO_solutionData: HO_solutionData.data || [],
        HO_bannerData: HO_bannerData.data || [],
        HO_serviceData: HO_serviceData.dat || [],
        HO_securityData: HO_securityData.data || [],
        HO_aboutUs: HO_aboutUsData.data || [],
        HO_whyUsData: HO_whyUsData.data || [],
        HO_eventData: HO_eventData.data || [],
        HO_newsData: HO_newsData.data || [],
        HO_partnerData: HO_partnerData.data || [],
        HO_testimonialData: HO_testimonialData.data || [],
      },
    };
  }
  return {
    props: {
      pageData: {},
      HO_solutionData: [],
      HO_bannerData: [],
      HO_serviceData: [],
      HO_securityData: [],
      HO_aboutUs: [],
      HO_whyUsData: [],
      HO_eventData: [],
      HO_newsData: [],
      HO_partnerData: [],
      HO_testimonialData: [],
    },
  };
};

HomePage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default HomePage;

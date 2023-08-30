import Head from 'next/head';
import dynamic from 'next/dynamic';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';

import HomeBanner from '@/components/business/website/HO/HO_banner';
import HomeSolution from '@/components/business/website/HO/HO_solution';
import HomeWhyUs from '@/components/business/website/HO/HO_whyUs';
import HomeTestimonial from '@/components/business/website/HO/HO_testimonial';
import HomeService from '@/components/business/website/HO/HO_service';
import HomeEvent from '@/components/business/website/HO/HO_event';
import HomeNews from '@/components/business/website/HO/HO_news';
import HomePartner from '@/components/business/website/HO/HO_partner';
import HomeSecurity from '@/components/business/website/HO/HO_security';
import HomeAboutUs from '@/components/business/website/HO/HO_aboutUs';
import ConnectUs from '@/components/business/website/HO/HO_connectUs';
import HomeCaseStudy from '@/components/business/website/HO/HO_caseStudy';
import HomePrice from '@/components/business/website/HO/HO_price';

import { NGSDataGSL } from '@/mocks/website/HO/nextGenerationSolution';
import { WhyUsData } from '@/mocks/website/HO/whyUs';
import { eventData } from '@/mocks/website/HO/event';
import { newsData } from '@/mocks/website/HO/news';
import { partnerData } from '@/mocks/website/HO/partner';
import { securityData } from '@/mocks/website/HO/security';
import { testimonialData } from '@/mocks/website/HO/testimonial';
import { pageAdminEditorData, pageSectionData } from '@/mocks/admin/page';
import { IDetailPageById } from 'src/shared/schemas/typedef/IPage';
import { GetServerSideProps } from 'next';
import { APP_SAVE_KEY } from '@/utils/constants';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';

const ScrollRevealWrapper = dynamic(() => import('@/components/common/customization/ScrollRevealWrapper'), {
  ssr: false,
});

type Props = {
  pageData: IDetailPageById;
  HO_solutionData: IBaseSectionComponent;
  HO_bannerData: IBaseSectionComponent;
  HO_serviceData:  IBaseSectionComponent;
  HO_securityData: IBaseSectionComponent;
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
  HO_whyUsData,
  HO_eventData,
  HO_newsData,
  HO_partnerData,
  HO_testimonialData,
}: Props) {
  return (
    <>
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
        <HomeAboutUs />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper revealConfig={{ origin: 'bottom', distance: '30px', duration: 1000 }}>
        <HomeWhyUs data={HO_whyUsData} />
      </ScrollRevealWrapper>
      {/* <ScrollRevealWrapper revealConfig={{ origin: 'bottom', distance: '30px', duration: 1000 }}>
        <HomeEvent data={HO_eventData} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper revealConfig={{ origin: 'bottom', distance: '30px', duration: 1000 }}>
        <HomeNews data={HO_newsData} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper revealConfig={{ origin: 'bottom', distance: '30px', duration: 1000 }}>
        <HomePartner data={HO_partnerData} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper revealConfig={{ origin: 'bottom', distance: '30px', duration: 1000 }}>
        <HomeTestimonial data={HO_testimonialData} />
      </ScrollRevealWrapper> */}
      <ScrollRevealWrapper revealConfig={{ origin: 'bottom', distance: '30px', duration: 1000 }}>
        <HomeCaseStudy />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper revealConfig={{ origin: 'bottom', distance: '30px', duration: 1000 }}>
        <ConnectUs />
      </ScrollRevealWrapper>
    </>
  );
}

export async function renderContent(language: string, token: string | undefined) {
  try {
    const getDetailPageById = await fetch(`${process.env.NEXT_PUBLIC_DEV_API_URL}/pages/get-by-id/1`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      cache: 'default',
    });
    const pageData = await getDetailPageById.json();
    const sectionCodes = [
      'HO_banner',
      'HO_solution',
      'HO_serviceData',
      'HO_security',
      'HO_whyUs',
      'HO_event',
      'HO_news',
      'HO_partner',
      'HO_testimonial',
    ];
    const getListComponentBySectionCode = sectionCodes.map(async code => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_DEV_API_URL}/components/get-by-section-code?language=${language}&code=${code}`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
            cache: 'default',
          },
        );

        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching data:', error);
        return null;
      }
    });

    const [
      HO_bannerData,
      HO_solutionData,
      HO_serviceData,
      HO_securityData,
      HO_whyUsData,
      HO_eventData,
      HO_newsData,
      HO_partnerData,
      HO_testimonialData,
    ] = await Promise.all(getListComponentBySectionCode);
    return {
      props: {
        pageData,
        HO_solutionData,
        HO_serviceData,
        HO_bannerData,
        HO_securityData,
        HO_whyUsData,
        HO_eventData,
        HO_newsData,
        HO_partnerData,
        HO_testimonialData,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        pageData: {},
        HO_solutionData: [],
        HO_bannerData: [],
        HO_serviceData: [],
        HO_securityData: [],
        HO_whyUsData: [],
        HO_eventData: [],
        HO_newsData: [],
        HO_partnerData: [],
        HO_testimonialData: [],
      },
    };
  }
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { query } = ctx;
  const { lang } = query;
  const initLang = lang === undefined ? 'vi' : lang;
  const shouldRedirect = await renderContent(initLang as string, ctx.req.cookies[APP_SAVE_KEY.TOKEN_KEY]);
  if (shouldRedirect) {
    const {
      pageData,
      HO_solutionData,
      HO_bannerData,
      HO_serviceData,
      HO_securityData,
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

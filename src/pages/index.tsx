import React, { useRef } from 'react';
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
import HomeEventSection from '@/components/business/website/HO/HO_Event_Section';
import HomeCaseStudySection from '@/components/business/website/HO/HO_CaseStudy_Section';
import { IDetailPageById } from 'src/shared/schemas/typedef/IPage';
import { GetServerSideProps } from 'next';
import { APP_SAVE_KEY } from '@/utils/constants';
import { IBaseSectionComponent, IBaseSectionComponentNews } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import { renderHomeContent } from '@/utils/fetchServerSide/renderHomeContent';
import HOOrganizationalSystemSection from '@/components/business/website/HO/HO_Organizational_System_Section';
import useTrans from '@/hooks/useTrans';

const ScrollRevealWrapper = dynamic(() => import('@/components/common/customization/ScrollRevealWrapper'), {
  ssr: false,
});
type Props = {
  homePageData: IDetailPageById;
  HO_BannerData: IBaseSectionComponent;
  HO_SolutionData: IBaseSectionComponent;
  HO_ServiceData: IBaseSectionComponent;
  HO_SecurityData: IBaseSectionComponent;
  HO_PioneeringData: IBaseSectionComponent;
  HO_AboutUsData: IBaseSectionComponent;
  HO_WhyUsData: IBaseSectionComponent;
  COMMON_EventData: IBaseSectionComponent;
  COMMON_NewsData: IBaseSectionComponentNews;
  HO_PartnerData: IBaseSectionComponent;
  HO_TestimonialData: IBaseSectionComponent;
  HO_CaseStudy: IBaseSectionComponent;
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
  COMMON_EventData,
  COMMON_NewsData,
  HO_PartnerData,
  HO_TestimonialData,
  HO_CaseStudy,
}: Props) {
  const { trans } = useTrans();
  return (
    <React.Fragment>
      <Head>
        {/* <title>{homePageData.name}</title> */}
        <title>{trans.website.home.title}</title>
        <link rel='icon' href='/logo.svg' sizes='any' />
        {/* <meta name='description' content={homePageData.description} />
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
        <meta name='twitter:image' content={homePageData.image} /> */}
      </Head>
      <ScrollRevealWrapper sectionCode={trans.website.home.section_1.section.code}>
        <HomeBannerSection data={trans.website.home.section_1} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper sectionCode={trans.website.home.section_2.section.code}>
        <HomeSolutionSection title={trans.website.home.titleSection.section_2} data={trans.website.home.section_2} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper sectionCode={trans.website.home.section_3.section.code}>
        <HomeServiceSection title={trans.website.home.titleSection.section_3} data={trans.website.home.section_3} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper sectionCode={trans.website.home.section_4.section.code}>
        <HomeSecuritySection title={trans.website.home.titleSection.section_4} data={trans.website.home.section_4} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper sectionCode={trans.website.home.section_5.section.code}>
        <HomePioneeringSection data={trans.website.home.section_5} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper sectionCode={trans.website.home.section_6.section.code}>
        <HomeAboutUsSection title={trans.website.home.titleSection.section_6} data={trans.website.home.section_6} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper sectionCode={trans.website.home.section_7.section.code}>
        <HomeWhyUsSection title={trans.website.home.titleSection.section_7} data={trans.website.home.section_7} />
      </ScrollRevealWrapper>
      {/* <ScrollRevealWrapper>
        <HomeEventSection title='SỰ KIỆN' data={Home_9} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <NewsSection title='TIN TỨC' data={Home_10 as unknown as IBaseSectionComponentNews} />
      </ScrollRevealWrapper> */}
      <ScrollRevealWrapper sectionCode={trans.website.home.section_11.section.code}>
        <PartnerSection title={trans.website.home.titleSection.section_11} data={trans.website.home.section_11} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper sectionCode={trans.website.home.section_8.section.code}>
        <HOOrganizationalSystemSection data={trans.website.home.section_8} />
      </ScrollRevealWrapper>
      {/* <ScrollRevealWrapper sectionCode={Home_12.section.code}>
        <HomeTestimonialSection title='KHÁCH HÀNG' data={Home_12} />
      </ScrollRevealWrapper> */}
      {/* <ScrollRevealWrapper>
        <HomeCaseStudySection data={Home_13}/>
      </ScrollRevealWrapper> */}
      <ScrollRevealWrapper sectionCode='ConnectUs'>
        <ConnectUsSection />
      </ScrollRevealWrapper>
    </React.Fragment>
  );
}

// export const getServerSideProps: GetServerSideProps = async ctx => {
//   const { query } = ctx;
//   const { lang } = query;
//   const initLang = lang === undefined ? 'vi' : lang;
//   const shouldRedirect = await renderHomeContent(initLang as string, ctx.req.cookies[APP_SAVE_KEY.TOKEN_KEY]);
//   if (shouldRedirect) {
//     const {
//       homePageData,
//       HO_SolutionData,
//       HO_BannerData,
//       HO_ServiceData,
//       HO_SecurityData,
//       HO_PioneeringData,
//       HO_AboutUsData,
//       HO_WhyUsData,
//       COMMON_EventData,
//       COMMON_NewsData,
//       HO_PartnerData,
//       HO_TestimonialData,
//       HO_CaseStudy,
//     } = shouldRedirect.props;
//     return {
//       props: {
//         homePageData: homePageData.data || {},
//         HO_SolutionData: HO_SolutionData.data || [],
//         HO_BannerData: HO_BannerData.data || [],
//         HO_ServiceData: HO_ServiceData.data || [],
//         HO_SecurityData: HO_SecurityData.data || [],
//         HO_PioneeringData: HO_PioneeringData.data || [],
//         HO_AboutUsData: HO_AboutUsData.data || [],
//         HO_WhyUsData: HO_WhyUsData.data || [],
//         COMMON_EventData: COMMON_EventData.data || [],
//         COMMON_NewsData: COMMON_NewsData.data || [],
//         HO_PartnerData: HO_PartnerData.data || [],
//         HO_TestimonialData: HO_TestimonialData.data || [],
//         HO_CaseStudy: HO_CaseStudy.data || [],
//       },
//     };
//   }
//   return {
//     props: {
//       homePageData: {},
//       HO_SolutionData: [],
//       HO_BannerData: [],
//       HO_ServiceData: [],
//       HO_SecurityData: [],
//       HO_PioneeringData: [],
//       HO_AboutUsData: [],
//       HO_WhyUsData: [],
//       COMMON_EventData: [],
//       COMMON_NewsData: [],
//       HO_PartnerData: [],
//       HO_TestimonialData: [],
//       HO_CaseStudy: [],
//     },
//   };
// };

HomePage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default HomePage;

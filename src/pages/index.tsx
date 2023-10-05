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
import {
  Home_1,
  Home_10,
  Home_11,
  Home_12,
  Home_13,
  Home_2,
  Home_3,
  Home_4,
  Home_5,
  Home_6,
  Home_7,
  Home_8,
  Home_9,
} from '@/mocks/website/HO/home';
import HOOrganizationalSystemSection from '@/components/business/website/HO/HO_Organizational_System_Section';

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
  return (
    <React.Fragment>
      <Head>
        {/* <title>{homePageData.name}</title> */}
        <title>Trang chủ - NGS | Chuyển đổi số toàn diện</title>
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
      <ScrollRevealWrapper sectionCode={Home_1.section.code}>
        <HomeBannerSection data={Home_1} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper sectionCode={Home_2.section.code}>
        <HomeSolutionSection title='GIẢI PHÁP TIÊN PHONG' data={Home_2} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper sectionCode={Home_3.section.code}>
        <HomeServiceSection title='DỊCH VỤ XUẤT SẮC' data={Home_3} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper sectionCode={Home_4.section.code}>
        <HomeSecuritySection title='BẢO MẬT TOÀN DIỆN' data={Home_4} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper sectionCode={Home_5.section.code}>
        <HomePioneeringSection data={Home_5} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper sectionCode={Home_6.section.code}>
        <HomeAboutUsSection title='VỀ CHÚNG TÔI' data={Home_6} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper sectionCode={Home_7.section.code}>
        <HomeWhyUsSection title='ĐIỀU GÌ TẠO NÊN NGS' data={Home_7} />
      </ScrollRevealWrapper>
      {/* <ScrollRevealWrapper>
        <HomeEventSection title='SỰ KIỆN' data={Home_9} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <NewsSection title='TIN TỨC' data={Home_10 as unknown as IBaseSectionComponentNews} />
      </ScrollRevealWrapper> */}
      <ScrollRevealWrapper sectionCode={Home_11.section.code}>
        <PartnerSection title='ĐỐI TÁC ĐỒNG HÀNH CÙNG NGS' data={Home_11} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper sectionCode={Home_8.section.code}>
        <HOOrganizationalSystemSection data={Home_8} />
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

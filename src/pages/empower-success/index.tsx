import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import ESVisionSection from '@/components/business/website/ES/ES_Vision_Section';
import ESMissionSection from '@/components/business/website/ES/ES_Mission_Section';
import ESCoreValueSection from '@/components/business/website/ES/ES_CoreValue_Section';
import TeamDesignOneSection from '@/components/business/website/TYO&SYB_Common/Team_DesignOne_Section';
import ESEnvironment from '@/components/business/website/ES/ES_Environment_Section';
import ESOrganizationalSystemSection from '@/components/business/website/ES/ES_Organizational_System_Section';
import PartnerSection from '@/components/business/website/All_Common/Partner_Section';
import ConnectUsSection from '@/components/business/website/All_Common/ConnectUs_Section';
import ESPeopleSection from '@/components/business/website/ES/ES_People_Section';
import { GetServerSideProps } from 'next';
import { renderNewsContent } from '@/utils/fetchServerSide/renderNewsContent';
import { APP_SAVE_KEY } from '@/utils/constants';
import NewsSection from '@/components/business/website/All_Common/News_Section';
import { IBaseSectionComponent, IBaseSectionComponentNews } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import { renderPartnerContent } from '@/utils/fetchServerSide/renderPartnerContent';
import { Home_11 } from '@/mocks/website/HO/home';
import BannerDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Banner_DesignTwo_Section';
import ESClientSection from '@/components/business/website/ES/ES_Client_Section';
import useTrans from '@/hooks/useTrans';

const ScrollRevealWrapper = dynamic(() => import('@/components/common/customization/ScrollRevealWrapper'), {
  ssr: false,
});
type Props = {
  COMMON_NewsData: IBaseSectionComponentNews;
  COMMON_SectionPartnerData: IBaseSectionComponent;
};
const EmpowerSuccessPage = ({ COMMON_NewsData, COMMON_SectionPartnerData }: Props) => {
  const { trans } = useTrans();
  return (
    <React.Fragment>
      <Head>
        <title>{trans.common.aboutUs} NGS</title>
        <meta name='description' content='Về chúng tôi NGS' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <ScrollRevealWrapper>
        <BannerDesignTwoSection
          sectionCodeLink={'ConnectUs'}
          breadcrumb={[trans.common.home, trans.common.aboutUs]}
          data={trans.website.aboutUs.section_1}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ESVisionSection data={trans.website.aboutUs.section_2} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ESMissionSection data={trans.website.aboutUs.section_3} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ESCoreValueSection
          sectionCodeLink='ConnectUs'
          title={trans.website.aboutUs.titleSection.section_4}
          data={trans.website.aboutUs.section_4}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ESPeopleSection title={trans.website.aboutUs.titleSection.section_5} data={trans.website.aboutUs.section_5} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <TeamDesignOneSection title='' data={trans.website.aboutUs.section_6} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ESEnvironment data={trans.website.aboutUs.section_7} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ESOrganizationalSystemSection
          title={trans.website.aboutUs.titleSection.section_8}
          data={trans.website.aboutUs.section_8}
        />
      </ScrollRevealWrapper>
      {/* <ScrollRevealWrapper>
        <NewsSection title='TIN TỨC VÀ SỰ KIỆN' data={ESNewsAndEventData as unknown as IBaseSectionComponentNews} />
      </ScrollRevealWrapper> */}
      <ScrollRevealWrapper>
        <PartnerSection title={trans.website.aboutUs.titleSection.section_9} data={trans.website.home.section_11} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ESClientSection
          title={trans.website.aboutUs.titleSection.section_10}
          data={trans.website.aboutUs.section_10}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ConnectUsSection />
      </ScrollRevealWrapper>
    </React.Fragment>
  );
};

// export const getServerSideProps: GetServerSideProps = async ctx => {
//   const { query } = ctx;
//   const { lang } = query;
//   const initLang = lang === undefined ? 'vi' : lang;
//   const fetchNewsContent = await renderNewsContent(initLang as string, ctx.req.cookies[APP_SAVE_KEY.TOKEN_KEY]);
//   const fetchPartnerContent = await renderPartnerContent(initLang as string, ctx.req.cookies[APP_SAVE_KEY.TOKEN_KEY]);
//   if (fetchNewsContent) {
//     const { COMMON_NewsData } = fetchNewsContent.props;
//     return {
//       props: {
//         COMMON_NewsData: COMMON_NewsData.data || [],
//       },
//     };
//   }
//   if (fetchPartnerContent) {
//     const { COMMON_SectionPartnerData } = fetchPartnerContent.props;
//     return {
//       props: {
//         COMMON_NewsData: COMMON_SectionPartnerData.data || [],
//       },
//     };
//   }
//   return {
//     props: {
//       COMMON_NewsData: [],
//       COMMON_SectionPartnerData: [],
//     },
//   };
// };

EmpowerSuccessPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default EmpowerSuccessPage;

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
import {
  ESBannerData,
  ESClientData,
  ESCoreValueData,
  ESEnvironmentData,
  ESMissionData,
  ESNewsAndEventData,
  ESOrganizationalSystemData,
  ESPeopleData,
  ESTeamData,
  ESVisionData,
} from '@/mocks/website/ES/es';
import NewsSection from '@/components/business/website/All_Common/News_Section';
import { IBaseSectionComponent, IBaseSectionComponentNews } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import { renderPartnerContent } from '@/utils/fetchServerSide/renderPartnerContent';
import { Home_11, } from '@/mocks/website/HO/home';
import BannerDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Banner_DesignTwo_Section';
import ESClientSection from '@/components/business/website/ES/ES_Client_Section';

const ScrollRevealWrapper = dynamic(() => import('@/components/common/customization/ScrollRevealWrapper'), {
  ssr: false,
});
type Props = {
  COMMON_NewsData: IBaseSectionComponentNews;
  COMMON_SectionPartnerData: IBaseSectionComponent;
};
const EmpowerSuccessPage = ({ COMMON_NewsData, COMMON_SectionPartnerData }: Props) => {
  return (
    <React.Fragment>
      <Head>
        <title>Về chúng tôi NGS</title>
        <meta name='description' content='Về chúng tôi NGS' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <ScrollRevealWrapper>
        <BannerDesignTwoSection sectionCodeLink={"ConnectUs"} breadcrumb={['Trang chủ', 'Về chúng tôi']} data={ESBannerData} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ESVisionSection data={ESVisionData} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ESMissionSection data={ESMissionData} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ESCoreValueSection sectionCodeLink={"ConnectUs"} title='Giá trị cốt lõi' data={ESCoreValueData} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ESPeopleSection title='CON NGƯỜI NGS' data={ESPeopleData} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <TeamDesignOneSection title='' data={ESTeamData} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ESEnvironment data={ESEnvironmentData} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ESOrganizationalSystemSection title='HỆ SINH THÁI NGS' data={ESOrganizationalSystemData} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <NewsSection title='TIN TỨC VÀ SỰ KIỆN' data={ESNewsAndEventData as unknown as IBaseSectionComponentNews} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <PartnerSection title='ĐỐI TÁC ĐỒNG HÀNH CÙNG NGS' data={Home_11} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ESClientSection title='KHÁCH HÀNG' data={ESClientData} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ConnectUsSection />
      </ScrollRevealWrapper>
    </React.Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { query } = ctx;
  const { lang } = query;
  const initLang = lang === undefined ? 'vi' : lang;
  const fetchNewsContent = await renderNewsContent(initLang as string, ctx.req.cookies[APP_SAVE_KEY.TOKEN_KEY]);
  const fetchPartnerContent = await renderPartnerContent(initLang as string, ctx.req.cookies[APP_SAVE_KEY.TOKEN_KEY]);
  if (fetchNewsContent) {
    const { COMMON_NewsData } = fetchNewsContent.props;
    return {
      props: {
        COMMON_NewsData: COMMON_NewsData.data || [],
      },
    };
  }
  if (fetchPartnerContent) {
    const { COMMON_SectionPartnerData } = fetchPartnerContent.props;
    return {
      props: {
        COMMON_NewsData: COMMON_SectionPartnerData.data || [],
      },
    };
  }
  return {
    props: {
      COMMON_NewsData: [],
      COMMON_SectionPartnerData: [],
    },
  };
};

EmpowerSuccessPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default EmpowerSuccessPage;

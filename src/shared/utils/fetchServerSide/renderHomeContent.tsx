import { mergeCommonData, IBaseResponseSectionComponent } from './mergeApi';

export async function renderHomeContent(language: string, token: string | undefined) {
  try {
    const sectionCodes = [
      'PG001SE00001',
      'PG001SE00002',
      'PG001SE00003',
      'PG001SE00004',
      'PG001SE00005',
      'PG001SE00006',
      'PG001SE00007',
      'PG001SE00008',
      'PG001SE00009',
      'PG001SE000010',
      'PG001SE000011',
      'PG001SE000012',
      'PG001SE000013',
    ];
    const getDetailPageById = await fetch(`${process.env.NEXT_PUBLIC_DEV_API_URL}/pages/get-by-id/1`, {
      method: 'GET',
      cache: 'default',
    });
    const homePageData = await getDetailPageById.json();
    const getListComponentBySectionCode = sectionCodes.map(async code => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_DEV_API_URL}/components/get-by-section-code/${language}/${code}`,
          {
            method: 'GET',
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
      HO_BannerData,
      HO_SolutionData,
      HO_ServiceData,
      HO_SecurityData,
      HO_PioneeringData,
      HO_AboutUsData,
      HO_WhyUsData,
      COMMON_SectionEventData,
      COMMON_SectionNewsData,
      HO_PartnerData,
      HO_TestimonialData,
    ] = await Promise.all(getListComponentBySectionCode);
    const COMMON_NewsData: IBaseResponseSectionComponent | any = await mergeCommonData('/articles/get-top-latest-news', COMMON_SectionNewsData);
    // const COMMON_EventData: IBaseResponseSectionComponent | any = await mergeCommonData('/events/get-top-latest-events', COMMON_SectionEventData);
    const COMMON_EventData: IBaseResponseSectionComponent | any = []
    // const HO_EcosystemData = []
    return {
      props: {
        homePageData,
        HO_SolutionData,
        HO_ServiceData,
        HO_BannerData,
        HO_SecurityData,
        HO_PioneeringData,
        HO_AboutUsData,
        HO_WhyUsData,
        // HO_EcosystemData,
        COMMON_EventData,
        COMMON_NewsData,
        HO_PartnerData,
        HO_TestimonialData,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
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
        HO_EcosystemData: [],
        COMMON_EventData: [],
        COMMON_NewsData: [],
        HO_PartnerData: [],
        HO_TestimonialData: [],
      },
    };
  }
}
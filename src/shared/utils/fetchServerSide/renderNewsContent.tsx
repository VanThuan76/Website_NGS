import { mergeCommonData, IBaseResponseSectionComponent } from './mergeApi';

export async function renderNewsContent(language: string, token: string | undefined) {
  try {
    const getListNewsComponentBySectionCode = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_DEV_API_URL}/components/get-by-section-code/${language}/PG001SE00009`,
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
    };
    const COMMON_SectionNewsData = await getListNewsComponentBySectionCode();
    const COMMON_NewsData: IBaseResponseSectionComponent | any = await mergeCommonData(
      '/articles/get-top-latest-news',
      COMMON_SectionNewsData,
    );
    return {
      props: {
        COMMON_NewsData,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        COMMON_NewsData: [],
      },
    };
  }
}

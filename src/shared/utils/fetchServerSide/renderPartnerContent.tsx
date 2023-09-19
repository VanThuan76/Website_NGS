export async function renderPartnerContent(language: string, token: string | undefined) {
  try {
    const getListPartnerComponentBySectionCode = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_DEV_API_URL}/components/get-by-section-code/${language}/PG001SE00010`,
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
    const COMMON_SectionPartnerData = await getListPartnerComponentBySectionCode();
    return {
      props: {
        COMMON_SectionPartnerData,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        COMMON_SectionPartnerData: [],
      },
    };
  }
}

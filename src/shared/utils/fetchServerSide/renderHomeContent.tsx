export async function renderHomeContent(language: string, token: string | undefined) {
  try {
    const getDetailPageById = await fetch(`${process.env.NEXT_PUBLIC_DEV_API_URL}/pages/get-by-id/1`, {
      method: 'GET',
      cache: 'default',
    });
    const pageData = await getDetailPageById.json();
    const sectionCodes = [
      'HO_banner',
      'HO_solution',
      'HO_service',
      'HO_security',
      'HO_aboutUs',
      'HO_whyUs',
      'HO_event',
      'HO_news',
      'HO_partner',
      'HO_testimonial',
    ];
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
      HO_bannerData,
      HO_solutionData,
      HO_serviceData,
      HO_securityData,
      HO_aboutUsData,
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
        HO_aboutUsData,
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
        HO_aboutUsData: [],
        HO_whyUsData: [],
        HO_eventData: [],
        HO_newsData: [],
        HO_partnerData: [],
        HO_testimonialData: [],
      },
    };
  }
}

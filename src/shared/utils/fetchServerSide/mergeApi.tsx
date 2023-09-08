import { IBaseResponse } from 'src/shared/schemas/typedef/IBaseResponse';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import { ISection } from 'src/shared/schemas/typedef/ISection';

export interface IBaseResponseSectionComponent {
  data: {
    section: ISection;
    components: any[];
  };
  statusCode: number;
  message: string;
}

export async function mergeCommonData(url: string, sectionData: IBaseResponse<IBaseSectionComponent>) {
  try {
    const getIsolatedAPI = await fetch(`${process.env.NEXT_PUBLIC_DEV_API_URL}${url}`, {
      method: 'GET',
      cache: 'default',
    });

    if (!getIsolatedAPI.ok) {
      throw new Error('Failed to fetch data from isolated API');
    }

    const responseIsolatedAPI = await getIsolatedAPI.json();

    const mergeData = {
      data: {
        section: sectionData.data.section,
        components: responseIsolatedAPI.data,
      },
      statusCode: sectionData.statusCode,
      message: sectionData.message,
    };

    return mergeData;
  } catch (error) {
    console.error('Error merging common data:', error);
    throw error;
  }
}

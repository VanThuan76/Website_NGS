import Banner from '@/components/business/website/home/banner';
import News from '@/components/business/website/home/news';
import { bannerData } from '@/mocks/website/banner';

export function findComponentBySectionCode(code: string) {
  switch (code) {
    case 'HO_1':
      return <Banner data={bannerData} />;
    case 'HO_2':
      return <News />;
    default:
      return <News />;
  }
}

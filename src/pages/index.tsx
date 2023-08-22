import Head from 'next/head';
import dynamic from 'next/dynamic';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';

import Banner from '@/components/business/website/HO/HO_banner';
import HomeSolution from '@/components/business/website/HO/HO_solution';
import HomeWhyUs from '@/components/business/website/HO/HO_whyUs';
import HomeTestimonial from '@/components/business/website/HO/HO_testimonial';
import HomeService from '@/components/business/website/HO/HO_service';
import HomeEvent from '@/components/business/website/HO/HO_event';
import HomeNews from '@/components/business/website/HO/HO_news';
import HomePartner from '@/components/business/website/HO/HO_partner';
import HomeSecurity from '@/components/business/website/HO/HO_security';
import HomeAboutUs from '@/components/business/website/HO/HO_aboutUs';
import ConnectUs from '@/components/business/website/HO/HO_connectUs';
import HomeCaseStudy from '@/components/business/website/HO/HO_caseStudy';
import HomePrice from '@/components/business/website/HO/HO_price';

import { NGSDataGSL } from '@/mocks/website/HO/nextGenerationSolution';
import { bannerData } from '@/mocks/website/HO/banner';

const ScrollRevealWrapper = dynamic(() => import('@/components/common/customization/ScrollRevealWrapper'), { ssr: false });
export function Home() {
  return (
    <>
      <Head>
        <title>Trang chủ NGS</title>
        <meta name='description' content='Trang chủ NGS' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <ScrollRevealWrapper>
        <Banner data={bannerData} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper revealConfig={{ origin: 'left', distance: '30px', duration: 1000 }}>
        <HomeSolution data={NGSDataGSL} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper revealConfig={{ origin: 'top', distance: '30px', duration: 1000 }}>
        <HomeService />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper revealConfig={{ origin: 'bottom', distance: '30px', duration: 1000 }}>
        <HomeSecurity />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <HomePrice />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <HomeAboutUs />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <HomeWhyUs />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <HomeEvent />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <HomeNews />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <HomePartner />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <HomeTestimonial />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <HomeCaseStudy />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ConnectUs />
      </ScrollRevealWrapper>
    </>
  );
}
// export async function getServerSideProps() {
//   try {
//     // Thực hiện yêu cầu API bằng Axios
//     const response = await axios.get("API_URL");
//     const data = response.data;

//     return {
//       props: {
//         bannerData: data.bannerData,
//         // Các dữ liệu phần tĩnh khác
//       },
//     };
//   } catch (error) {
//     // Xử lý lỗi nếu có
//     console.error("Error fetching data:", error);
//     return {
//       props: {
//         bannerData: [],
//       },
//     };
//   }
// }
Home.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default Home;

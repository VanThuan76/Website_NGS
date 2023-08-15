import Head from 'next/head';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import Banner from '@/components/business/website/home/banner';
import { bannerData } from '@/mocks/website/banner';
import NextGenerationSolution from '@/components/business/website/home/nextGenerationSolution';
import WhyUs from '@/components/business/website/home/whyUs';
import Testimonial from '@/components/business/website/home/testimonial';
import Service from '@/components/business/website/home/service';
import Event from '@/components/business/website/home/event';
import News from '@/components/business/website/home/news';
import Partner from '@/components/business/website/home/partner';
import Security from '@/components/business/website/home/security';
import AboutUs from '@/components/business/website/home/aboutUs';
import dynamic from 'next/dynamic';
import ConnectUs from '@/components/business/website/home/connectUs';
import CaseStudy from '@/components/business/website/home/caseStudy';
import { NGSDataGSL } from '@/mocks/website/nextGenerationSolution';

const ScrollRevealWrapper = dynamic(() => import('src/shared/components/common/ScrollRevealWrapper'), { ssr: false });
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
        <NextGenerationSolution data={NGSDataGSL}/>
      </ScrollRevealWrapper>
      <ScrollRevealWrapper revealConfig={{ origin: 'top', distance: '30px', duration: 1000 }}>
        <Service />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper revealConfig={{ origin: 'bottom', distance: '30px', duration: 1000 }}>
        <Security />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <AboutUs />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <WhyUs />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <Event />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <News />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <Partner />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <Testimonial />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <CaseStudy />
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

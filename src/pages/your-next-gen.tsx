import Head from 'next/head';
import dynamic from 'next/dynamic';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import YNGYourNextGenBanner from '@/components/business/website/YNG/YNG_YourNextGen/YNG_YourNextGen_banner';
import { YNG_YourNextGen_banner } from '@/mocks/website/YNG/YNG_YourNextGen/banner';
import YNGYourNextGenSolution from '@/components/business/website/YNG/YNG_YourNextGen/YNG_YourNextGen_solution';

const ScrollRevealWrapper = dynamic(() => import('@/components/common/customization/ScrollRevealWrapper'), { ssr: false });
const YourNextGen = () => {
  return (
    <>
      <Head>
        <title>YourNextGen NGS</title>
        <meta name='description' content='YourNextGen NGS' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <ScrollRevealWrapper>
        <YNGYourNextGenBanner data={YNG_YourNextGen_banner} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <YNGYourNextGenSolution />
      </ScrollRevealWrapper>
    </>
  );
};

YourNextGen.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default YourNextGen;

import ChallengeDesignOneSection from '@/components/business/website/TYO&SYB_Common/Challenge_DesignOne_Section';
import ChallengeDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Challenge_DesignThree_Section';
import ChallengeDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Challenge_DesignTwo_Section';
import ClientStoriesDesignOneSection from '@/components/business/website/TYO&SYB_Common/ClientStories_DesignOne_Section';
import ClientStoriesDesignTwoSection from '@/components/business/website/TYO&SYB_Common/ClientStories_DesignTwo_Section';
import OverviewDesignEightSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignEight_Section';
import OverviewDesignFiveSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignFive_Section';
import OverviewDesignFourSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignFour_Section';
import OverviewDesignNineSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignNine_Section';
import OverviewDesignOneSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignOne_Section';
import OverviewDesignSevenSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignSeven_Section';
import OverviewDesignSixSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignSix_Section';
import OverviewDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignThree_Section';
import OverviewDesignTwoSection from '@/components/business/website/TYO&SYB_Common/Overview_DesignTwo_Section';
import PartnerDesignOneSection from '@/components/business/website/TYO&SYB_Common/Partner_DesignOne_Section';
import ServiceDesignFourSection from '@/components/business/website/TYO&SYB_Common/Service_DesignFour_Section';
import ServiceDesignOneSection from '@/components/business/website/TYO&SYB_Common/Service_DesignOne_Section';
import ServiceDesignThreeSection from '@/components/business/website/TYO&SYB_Common/Service_DesignThree_Section';
import ServiceDesignTwoSetion from '@/components/business/website/TYO&SYB_Common/Service_DesignTwo_Section';
import {
  TYOchallenge1,
  TYOchallenge2,
  TYOchallenge3,
  TYOClientStories2,
  TYOOverview1,
  TYOOverview2,
  TYOOverview3,
  TYOOverview4,
  TYOOverview6,
  TYOOverview7,
  TYOOverview8,
  TYOOverview9,
  TYOPartner1,
  TYOService1,
  TYOService2,
  TYOService3,
  TYOService4,
} from '@/mocks/website/TYO/overview';

const Component = () => {
  return (
    <>
      <OverviewDesignOneSection title='Tổng quan' data={TYOOverview1} />
      <OverviewDesignTwoSection title='Tổng quan' data={TYOOverview2} />
      <OverviewDesignThreeSection title='Tổng quan' data={TYOOverview3} />
      <OverviewDesignFourSection title='Tổng quan' data={TYOOverview4} />
      {/* <OverviewDesignFiveSection title='Tổng quan' data={TYOOverview4}/> */}
      <OverviewDesignSixSection title='Tổng quan' data={TYOOverview6} />
      <OverviewDesignSevenSection title='Tổng quan' data={TYOOverview7} />
      <OverviewDesignEightSection title='Tổng quan' data={TYOOverview8} />
      <OverviewDesignNineSection title='Tổng quan' data={TYOOverview9} />
      <ChallengeDesignTwoSection title='Thách thức' data={TYOchallenge2} />
      <ChallengeDesignOneSection title='Thách thức' data={TYOchallenge1} />
      <ChallengeDesignThreeSection title='Thách thức' data={TYOchallenge3} />
      {/* <ClientStoriesDesignOneSection title='' data={TYOclientStories1} /> */}
      <ClientStoriesDesignTwoSection title='Client stories' data={TYOClientStories2} />
      <ServiceDesignOneSection title='' data={TYOService1} />
      <ServiceDesignTwoSetion title='Our Service & Solution' data={TYOService2} />
      <ServiceDesignThreeSection title='Dịch vụ' data={TYOService3} />
      <ServiceDesignFourSection title='Our Service & Solution' data={TYOService4} />
      <PartnerDesignOneSection data={TYOPartner1} />
    </>
  );
};

export default Component;

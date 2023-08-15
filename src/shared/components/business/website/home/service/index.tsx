import { AnimatePresence } from "framer-motion";
import { NGSDataService } from "@/mocks/website/service";
import ServiceSection from "./ServiceSection";
import TitleSection from "@/components/common/TitleSection";
import { PreImage } from "@/components/common/PreImage";

const Service = () => {
  return (
    <section id="Service" className='pb-24 px-4 md:px-24 lg:px-32 xl:px-52 2xl:px-96'>
      <TitleSection
        title="Dịch vụ"
        description="Thay đổi bộ mặt Doanh nghiệp của bạn bằng giải pháp quản lý mới"
        findMore={true}
        className="w-full flex flex-col md:flex-row justify-between items-center gap-3"
      />
      <div className="w-full mt-10 flex items-start justify-between gap-10">
        <PreImage
          src={
            "https://khoinguonsangtao.vn/wp-content/uploads/2022/11/hinh-nen-may-bay-vietnam-airline.jpg"
          }
          height={550}
          width={500}
          layer={false}
          alt={"Service"}
          className="hidden lg:block relative rounded-lg"
        />
        <AnimatePresence>
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center">
            {NGSDataService.map((item, idx) => {
              return <ServiceSection key={idx} item={item} idx={idx} />;
            })}
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Service;

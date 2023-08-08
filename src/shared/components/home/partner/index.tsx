import { PreImage } from "@/components/common/PreImage";
import { IPartnerData, partnerData } from "@/mocks/partner";
import { useState } from "react";

const Partner = () => {
  const [selectedPartner, setSelectedPartner] = useState<IPartnerData>(partnerData[0]);
  return (
    <section className="bg-[var(--blue-color-500)]">
      <div className="flex flex-col justify-center items px-32">
        <h1 className="mt-5 pt-10 text-3xl">Đối tác đồng hành cùng NGSD</h1>
        <div className="w-full mt-5 flex items-start justify-between gap-5" style={{borderBottom: "1px solid #555"}}>
          {partnerData.map((item, idx) => (
            <PreImage
              key={idx}
              src={item.logo}
              height={200}
              width={200}
              layer={false}
              alt={"Service"}
              className="relative rounded-lg"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partner;

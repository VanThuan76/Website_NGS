import 'swiper/css';
import 'swiper/css/pagination';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useTheme } from 'next-themes';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import { IComponents } from 'src/shared/schemas/typedef/IComponents';
import { PreImage } from '@/components/common/customization/PreImage';

type Props = {
  title?: string;
  data: Partial<IBaseSectionComponent>;
  className?: string;
};

const PartnerDesignTwoSection = ({ data, className }: Props) => {
  const { theme } = useTheme();
  const [selectedPartner, setSelectedPartner] = useState<Partial<IComponents> | undefined>(() => {
    if (data.components && data.components.length > 0) return data.components[0];
    else return undefined;
  });
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;
  const colorBorder = theme === 'dark' ? '#555' : '#fff';
  return (
    <section
      id={data.section.code}
      className={`pb-4 md:pb-8 lg:pb-16 xl:pb-24 px-4 md:px-24 lg:px-32 xl:px-52 2xl:px-96 overflow-hidden bg-[#FC5E03] ${className} `}
    >
      <div className='w-full mx-auto my-auto mt-10 flex flex-col justify-between items-center'>
        <div className='flex flex-col justify-center items-center gap-2'>
          <h1 className='text-2xl md:text-4xl font-semibold text-center text-white'>{data.section.name}</h1>
        </div>
        <div className='w-full mt-10 grid grid-cols-4 gap-3'>
          {data.components.map((item, idx) => (
            <div key={idx} className="border-r-2 border-r-slate-300 mr-4">
              <PreImage
                src={item.image as string}
                height={100}
                width={200}
                layer={false}
                alt={item.title}
                className={`rounded-lg cursor-pointer`}
              />
            </div>
          ))}
        </div>
        {/* <-- Home Partner Responsive */}
        {/* <PartnerResponsive /> */}
        {/* Home Partner Responsive --> */}
      </div>
    </section>
  );
};

export default PartnerDesignTwoSection;

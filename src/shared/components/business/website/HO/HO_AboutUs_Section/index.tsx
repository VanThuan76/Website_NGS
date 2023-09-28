import React, { useEffect, useRef } from 'react';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import { PreImage } from '@/components/common/customization/PreImage';
import BtnCommon from '@/components/common/customization/BtnCommon';
import TitleSection from '@/components/common/customization/TitleSection';
import { useTheme } from 'next-themes';
import UseLinkRouter from '@/utils/functions/UseLinkRouter';
import { URLS_SYSTEM } from '@/utils/constants';
import { motion, useAnimation, useInView } from 'framer-motion';
import BackgroundAboutUs from '@/components/icon/HO/aboutUs/BackgroundAboutUs';

type Props = {
  title: string;
  data: Partial<IBaseSectionComponent>;
  className?: string;
};
const HomeAboutUsSection = ({ title, data, className }: Props) => {
  const { theme } = useTheme();
  const colorIcon = theme !== 'dark' ? '#F06426' : '#fff';
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });
  const sectionControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      sectionControls.start('visible');
    }
  }, [isInView]);
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;
  return (
    <section
      ref={ref}
      id={data.section.code}
      className={`relative flex flex-col gap-16 pt-[124px] pb-20 px-4 md:px-24 ${className}`}
    >
      <div className='w-full grid grid-cols-1 lg:grid-cols-2 justify-start items-start gap-20 '>
        <div className='w-full'>
          <PreImage
            src={data.section.image}
            height={370}
            width={650}
            layer={false}
            alt={data.section.name}
            className='w-full h-full object-contain'
          />
        </div>
        <div className='w-full flex flex-col justify-start items-start'>
          <TitleSection
            title={title}
            name={data.section.name as string}
            description={data.section!.description as string}
            findMore={true}
            className='w-full grid-cols-7 col-span-7'
          />
          <UseLinkRouter url={URLS_SYSTEM.ES}>
            <BtnCommon title='Tìm hiểu thêm' cls='mt-3 w-[170px] border border-orange-500' colorSvg={colorIcon} />
          </UseLinkRouter>
        </div>
      </div>
      <div className='w-full flex flex-col lg:flex-row justify-center items-start gap-5 bg-transparent'>
        {data.components.map((item, idx) => {
          return (
            <motion.div
              key={idx}
              className={`w-full dark:bg-[#1B1D35] ${
                data.components && data.components?.length - 1 !== idx && 'border-card-aboutUs-home'
              } p-5 flex flex-col justify-center items-center gap-5 text-center`}
              variants={{
                hidden: { opacity: 0, scale: 0 },
                visible: { opacity: 1, scale: 0.9 },
              }}
              initial='hidden'
              animate={sectionControls}
              transition={{ duration: 0.7, delay: idx * 0.9 }}
            >
              <div className='text-orange-500 text-5xl'>{item.title}</div>
              <div className='w-2/3 flex flex-col'>
                {item.description.split('//').map((word, idx) => (
                  <p key={idx}>{word}</p>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
      <BackgroundAboutUs className='absolute left-0 top-0 w-full h-full -z-10' />
    </section>
  );
};

export default HomeAboutUsSection;
1;

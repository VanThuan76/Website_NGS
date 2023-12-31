import React, { useEffect, useRef } from 'react';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import { PreImage } from '@/components/common/customization/PreImage';
import BtnCommon from '@/components/common/customization/BtnCommon';
import TitleSection from '@/components/common/customization/TitleSection';
import { useTheme } from 'next-themes';
import UseLinkRouter from '@/utils/functions/UseLinkRouter';
import { URLS_SYSTEM } from '@/utils/constants';
import { motion, useAnimation, useInView } from 'framer-motion';
import useBreakPoint from '@/hooks/useBreakPoint';
import useTrans from '@/hooks/useTrans';

type Props = {
  title: string;
  data: Partial<IBaseSectionComponent>;
  className?: string;
};
const HomeAboutUsSection = ({ title, data, className }: Props) => {
  const { theme } = useTheme();
  const { trans } = useTrans();
  const colorIcon = theme !== 'dark' ? '#F06426' : '#fff';
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });
  const currentBreakPoint = useBreakPoint();
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
      className={`relative flex max-w-[1440px] flex-col px-4 pb-20 md:gap-16 md:px-24 md:pt-[124px] ${className}`}
    >
      <div className='grid w-full grid-cols-1 items-start justify-start md:gap-20 lg:grid-cols-2'>
        {/* Responsive */}
        <div className='mt-5 flex w-full flex-col items-start justify-start md:hidden'>
          <TitleSection
            title={title}
            name={data.section.name as string}
            description={data.section!.description as string}
            findMore={true}
            className='col-span-7 w-full grid-cols-7 !gap-8 !text-left'
          />
          <UseLinkRouter url={URLS_SYSTEM.ES}>
            <BtnCommon
              title={trans.common.findOutMore}
              cls='mt-3 w-[190px] md:w-[170px] border border-orange-500'
              colorSvg={colorIcon}
            />
          </UseLinkRouter>
        </div>
        {/* Responsive */}
        <div className='relative col-span-1 h-[370px] scale-150 overflow-hidden rounded-lg'>
          <PreImage src={data.section.image} layer={false} alt={data.section.name} objectPosition='center' />
        </div>
        <div className='hidden w-full flex-col items-start justify-start md:flex'>
          <TitleSection
            title={title}
            name={data.section.name as string}
            description={data.section!.description as string}
            findMore={true}
            className='col-span-7 w-full grid-cols-7 !gap-8 !text-left'
          />
          <UseLinkRouter url={URLS_SYSTEM.ES}>
            <BtnCommon
              title={trans.common.findOutMore}
              cls='mt-3 w-[190px] md:w-[170px] border border-orange-500'
              colorSvg={colorIcon}
            />
          </UseLinkRouter>
        </div>
      </div>
      <div className='grid w-full grid-cols-1 justify-center md:grid-cols-4 lg:justify-between'>
        {data.components.map((item, idx) => (
          <motion.div
            key={idx}
            className={`w-full p-7 dark:bg-[#1B1D35] ${
              data.components && data.components?.length - 1 !== idx && currentBreakPoint !== 'sm'
                ? 'border-card-aboutUs-home-right'
                : data.components && data.components?.length - 1 !== idx && 'border-b border-b-slate-300'
            } flex flex-col items-center text-center`}
            style={{ flex: 1, alignSelf: 'start' }}
            variants={{
              hidden: { opacity: 0, scale: 0 },
              visible: { opacity: 1, scale: 0.9 },
            }}
            initial='hidden'
            animate={sectionControls}
            transition={{ duration: 0.3, delay: idx * 0.5 }}
          >
            <div className='flex flex-col items-center gap-2'>
              <div className='text-5xl font-normal text-[#FC5E03]'>+{item.title}</div>
              <p className='text-2xl leading-8'>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HomeAboutUsSection;
1;

import BtnCommon from '@/components/common/customization/BtnCommon';
import TitleSection from '@/components/common/customization/TitleSection';
import BackgroundCoreValueLight from '@/components/icon/ES/BackgroundCoreValueLight';
import SectionCoreValue from '@/components/icon/ES/SectionCoreValue';
import BackgroundDark from '@/components/icon/HO/security/BackgroundDark';
import UseLinkRedirect from '@/utils/functions/UseLinkRedirect';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import React from 'react';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';

type Props = {
  title: string;
  data: Partial<IBaseSectionComponent>;
  sectionCodeLink?: string;
  className?: string;
};
const ESCoreValueSection = ({ title, data, sectionCodeLink, className }: Props) => {
  const { theme } = useTheme();
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;
  return (
    <section
      id='ESCOREVALUE'
      className={`relative w-full h-[1105px] flex flex-col justify-center items-center pb-4 md:pb-8 lg:pb-16 xl:pb-24 px-4 md:px-24 ${className}`}
    >
      <TitleSection
        title={title}
        name={data.section.name as string}
        description={data.section.description as string}
        findMore={true}
        className='w-full grid-cols-7 col-span-7 text-center'
      />
      <SectionCoreValue className='object-cover' />
      <UseLinkRedirect sectionCode={sectionCodeLink || 'PG003.1SE00008'}>
        <BtnCommon title='Discover our service' cls='mt-5 border border-orange-500 text-orange-500 p-4 rounded-sm' />
      </UseLinkRedirect>
      <motion.div
        className='absolute -top-24 left-0 w-full h-full -z-10'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {theme === 'dark' ? (
          <BackgroundDark className='w-full object-center' />
        ) : (
          <BackgroundCoreValueLight className='w-full scale-150 md:scale-100 object-center' />
        )}
      </motion.div>
    </section>
  );
};

export default ESCoreValueSection;

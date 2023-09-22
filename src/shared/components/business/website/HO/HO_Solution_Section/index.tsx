import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import TitleSection from '@/components/common/customization/TitleSection';
import BackgroundDark from '@/components/icon/HO/solution/BackgroundDark';
import BackgroundLight from '@/components/icon/HO/solution/BackgroundLight';
import HOSolutionCard from './HOSolutionCard';

type Props = {
  data: Partial<IBaseSectionComponent>;
  className?: string;
};

const HomeSolutionSection = ({ data, className }: Props) => {
  const { theme } = useTheme();
  if (!data || !data.components || !data.section) return <React.Fragment></React.Fragment>;

  return (
    <section id={data.section.code} className={`pb-4 md:pb-8 lg:pb-10 xl:pb-24 px-4 md:px-24 ${className}`}>
      <TitleSection
        title='GIẢI PHÁP TIÊN PHONG'
        name={data.section!.name as string}
        description={data.section!.description as string}
        findMore={true}
        className='flex flex-col lg:flex-row xl:flex-row justify-start items-start gap-8'
      />
      <div className='max-w-[1440px] mx-auto py-12 grid grid-cols-2 lg:grid-cols-4 mt-10 bg-transparent overflow-hidden gap-2'>
        {data &&
          data.components.map((item, idx) => (
            <div className=" max-w-[310px] min-h-[300px] lg:min-h-[350px] border-card-solution-home" key={idx}>
              <div className='relative max-w-[310px] min-h-[300px] lg:min-h-[350px] rounded-lg overflow-hidden'>
                <motion.div
                  className='absolute top-0 left-0 w-full h-full'
                  initial={{ display: 'hidden' }}
                  whileHover={{ display: 'block' }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                  {theme === 'dark' ? <BackgroundDark /> : <BackgroundLight />}
                </motion.div>
                <HOSolutionCard
                  id={item.id}
                  title={item.title || ''}
                  description={item.description || ''}
                  image={item.image}
                  className={'absolute top-0 left-0 w-full h-full'}
                />
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default HomeSolutionSection;

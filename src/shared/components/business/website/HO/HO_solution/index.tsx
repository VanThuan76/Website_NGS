import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

import TitleSection from '@/components/common/customization/TitleSection';
import HomeSolutionCard from './HO_solution_card';
import BackgroundDark from '@/components/icon/HO/solution/BackgroundDark';
import BackgroundLight from '@/components/icon/HO/solution/BackgroundLight';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';

type Props = {
  data: Partial<IBaseSectionComponent>;
  className?: string;
};
const HomeSolution = ({ data, className }: Props) => {
  if(!data.components || !data.section) return <></>
  const { theme } = useTheme();
  return (
    <section id='Solution' className={`pb-4 md:pb-8 lg:pb-16 xl:pb-24 px-4 md:px-24 lg:px-32 xl:px-40 ${className}`}>
      <TitleSection
        title='Giải pháp'
        name={data.section!.name as string}
        description={data.section!.description as string}
        findMore={true}
        className='w-full flex flex-col lg:flex-row xl:flex-row justify-start items-start gap-3'
      />
      <div className='max-w-[1440px] w-full mx-auto my-auto min-h-[550px] lg:min-h-[350px] grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 mt-10 bg-transparent overflow-hidden'>
        {data && data.components!.map((item, idx) => (
          <div className='relative max-w-[310px] h-full' key={idx}>
            <motion.div
              className='absolute top-0 left-0 w-full h-full'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {theme === 'dark' ? (
                <BackgroundDark />
              ) : (
                <BackgroundLight />
              )}
            </motion.div>
            <HomeSolutionCard
              className={'absolute top-0 left-0 w-full h-full'}
              title={item.title || ''}
              description={item.description || ''}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeSolution;

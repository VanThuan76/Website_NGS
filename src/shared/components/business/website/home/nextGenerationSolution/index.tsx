import { motion } from 'framer-motion';
import TitleSection from '@/components/common/TitleSection';
import Background from '@/components/icon/nextGenerationSolution/Background';
import { NGSDataGSL } from '@/mocks/website/nextGenerationSolution';
import InfoCard from './InfoCard';

const NextGenerationSolution = () => {
  return (
    <section id="Solution" className='pb-24 px-4 md:px-24 lg:px-32 xl:px-52 2xl:px-96'>
      <TitleSection
        title='Giải pháp'
        description='Cung cấp các giải pháp số cho doanh nghiệp của bạn'
        findMore={true}
        className="w-full flex flex-col md:flex-row justify-between items-center gap-3"
      />
      <div className='w-full min-h-[550px] lg:min-h-[350px] grid grid-cols-2 lg:grid-cols-4 mt-10 bg-transparent overflow-hidden'>
        {NGSDataGSL.map((item, idx) => (
          <div className='relative w-full h-full' key={idx}>
            <motion.div
              className='absolute top-0 left-0 w-full h-full'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Background />
            </motion.div>
            <InfoCard className={'absolute top-0 left-0 w-full h-full'} title={item.title} description={item.des} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default NextGenerationSolution;

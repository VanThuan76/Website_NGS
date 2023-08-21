import { motion } from 'framer-motion';

import TitleSection from '@/components/common/TitleSection';
import Background from '@/components/icon/security/Background';
import SecurityCard from './SecurityCard';
import ResponsiveSecurity from './ResponsiveSecurity';

const Security = () => {
  return (
    <section id='Security' className='relative pb-4 md:pb-8 lg:pb-16 xl:pb-24 px-4 md:px-24 lg:px-32'>
      <TitleSection
        title='Bảo mật'
        description='Bảo vệ doanh nghiệp của bạn khỏi các nguy cơ an ninh mạng'
        findMore={true}
        className='w-full flex flex-col lg:flex-row xl:flex-row justify-start items-start gap-3'
      />
      <div className='w-full hidden lg:flex flex-col justify-between items-center lg:items-end gap-5 mt-10 mx-auto'>
        <div className='grid grid-cols-2 justify-end items-end gap-2 md:gap-3'>
          <SecurityCard className='col-span-1' />
          <SecurityCard className='col-span-1' />
        </div>

        <div className='grid grid-cols-3 justify-end items-end gap-2 md:gap-3'>
          <SecurityCard className='col-span-1' />
          <SecurityCard className='col-span-1' />
          <SecurityCard className='col-span-1' />
        </div>
        <div className='grid grid-cols-4 justify-end items-end gap-2 md:gap-3'>
          <SecurityCard className='col-span-1' />
          <SecurityCard className='col-span-1' />
          <SecurityCard className='col-span-1' />
          <SecurityCard className='col-span-1' />
        </div>
      </div>
      <ResponsiveSecurity />
      <motion.div
            className='absolute top-50 lg:top-0 xl:top-0 left-0 w-full h-full -z-10'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Background  className='w-full object-center'/>
        </motion.div>
    </section>
  );
};

export default Security;

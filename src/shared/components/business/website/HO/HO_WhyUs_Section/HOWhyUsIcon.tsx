import { motion } from 'framer-motion';
import { IComponents } from 'src/shared/schemas/typedef/IComponents';
import IconFirst from '@/components/icon/HO/whyUs/iconLogoWhyUs/iconFirst';
import IconLast from '@/components/icon/HO/whyUs/iconLogoWhyUs/iconLast';
import IconMid from '@/components/icon/HO/whyUs/iconLogoWhyUs/iconMid';

interface Props {
  data: Partial<IComponents>[];
  selectedIcon: Partial<IComponents>;
  setSelectedIcon: any;
}

const HomeWhyUsIcon = ({ setSelectedIcon, selectedIcon, data }: Props) => {
  const iconFirstVariants = {
    active: {
      color: '#7F569B',
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    inactive: {
      color: '#D3D1D0',
      opacity: 0.8,
    },
  };

  const iconLastVariants = {
    active: {
      color: '#F36B29',
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    inactive: {
      color: '#D3D1D0',
      opacity: 0.8,
    },
  };

  return (
    <div className='relative z-50 min-h-[400px] cursor-pointer lg:min-h-[500px]'>
      <motion.div
        initial='inactive'
        animate={selectedIcon?.code === 'PG001SE00007CN000001' ? 'active' : 'inactive'}
        variants={iconFirstVariants}
        className='absolute bottom-0 left-[138px] z-40 xl:left-20'
      >
        <IconFirst className='w-[100px] xl:w-[200px]' onClick={() => setSelectedIcon(data[0])} />
      </motion.div>
      <motion.div
        initial='inactive'
        animate={selectedIcon?.code === 'PG001SE00007CN000002' ? 'active' : 'inactive'}
        variants={iconLastVariants}
        className='absolute bottom-0 left-[178px] z-30 xl:left-[148px]'
      >
        <motion.div
          animate={{
            color: selectedIcon?.code === 'PG001SE00007CN000002' ? '#2D77B4' : '#D3D1D0',
          }}
          onClick={() => setSelectedIcon(data[1])}
        >
          <IconMid className='w-[250px] xl:w-[350px]' open={true} />
        </motion.div>
      </motion.div>
      <motion.div
        initial='inactive'
        animate={selectedIcon?.code === 'PG001SE00007CN000003' ? 'active' : 'inactive'}
        variants={iconLastVariants}
        className='absolute bottom-[8px] left-[158px] xl:bottom-[28px] xl:left-[108px]'
      >
        <IconLast
          className='w-[350px] xl:w-[500px]'
          open={selectedIcon?.code === 'PG001SE00007CN000003'}
          onClick={() => setSelectedIcon(data[2])}
        />
      </motion.div>
    </div>
  );
};

export default HomeWhyUsIcon;

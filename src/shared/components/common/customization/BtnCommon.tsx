import { motion } from 'framer-motion';
import IconLineDirection from '../../icon/IconLineDirection';

interface Props {
  hover?: boolean;
  cls?: string;
  colorSvg?: string;
  title: string;
}

const BtnCommon = ({ hover = true, cls, colorSvg, title }: Props) => {
  const buttonVariants = {
    hover: {
      backgroundImage: 'linear-gradient(180deg, rgba(248, 133, 80, 0.30) -9.34%, rgba(255, 255, 255, 0.30) 129.73%)',
      scale: 1.1,
    },
  };

  return (
    <motion.div
      whileTap={{ scale: 0.9 }}
      whileHover={hover ? 'hover' : ''}
      variants={buttonVariants}
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
      }}
      className={`relative flex cursor-pointer items-center justify-start gap-2 rounded-[4px] px-6 py-2 font-medium text-[#FC5E03] md:rounded-[12px] md:py-[18px] md:pl-[16px] md:pr-[12px] ${cls}`}
    >
      <p className='text-base font-normal'>{title}</p>
      <IconLineDirection color={colorSvg} />
    </motion.div>
  );
};

export default BtnCommon;

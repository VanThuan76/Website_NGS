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
      className={`py-2 px-6 md:pl-[16px] md:pr-[12px] md:py-[18px] text-[#FC5E03] relative flex justify-start items-center gap-2 cursor-pointer rounded-[4px] md:rounded-[12px] font-medium ${cls}`}
    >
      <p className='text-base font-normal'>{title}</p>
      <IconLineDirection color={colorSvg} />
    </motion.div>
  );
};

export default BtnCommon;

import { motion } from "framer-motion";
import IconLineDirection from "../../icon/IconLineDirection";

interface Props {
  cls?: string;
  colorSvg?: string,
  title: string
}

const BtnCommon = ({ cls, colorSvg, title }: Props) => {
  const buttonVariants = {
    hover: {
      width: "100%",
      opacity: 0.3      
    },
  };

  return (
    <motion.button
      whileHover="hover"
      className={`border-2 border-slate-400 text-orange-500 relative flex justify-between items-center gap-3 text-left py-2 pr-4 cursor-pointer mt-3 rounded-full ${cls}`}
    >
      <p className="text-xs md:text-sm">{title}</p>
      <IconLineDirection color={colorSvg} />
      <motion.div
        className="absolute left-0 top-0 h-full w-[30%]"
        variants={buttonVariants}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      ></motion.div>
    </motion.button>
  );
};

export default BtnCommon;

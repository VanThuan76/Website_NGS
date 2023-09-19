import { motion } from "framer-motion";
import IconLineDirection from "../../icon/IconLineDirection";

interface Props {
  cls?: string;
  colorSvg?: string,
  title: string
}

const BtnCommon = ({ cls, colorSvg, title }: Props) => {
  return (
    <motion.div
      whileHover="hover"
      className={`px-4 py-3 text-orange-500 relative flex justify-start items-center gap-4 cursor-pointer rounded-full ${cls}`}
    >
      <p className="text-xs md:text-sm">{title}</p>
      <IconLineDirection color={colorSvg} />
    </motion.div>
  );
};

export default BtnCommon;

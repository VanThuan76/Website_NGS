import IconFirst from "@/components/icon/whyUs/iconLogoWhyUs/iconFirst";
import IconLast from "@/components/icon/whyUs/iconLogoWhyUs/iconLast";
import IconMid from "@/components/icon/whyUs/iconLogoWhyUs/iconMid";
import { IWhyUsData, WhyUsData } from "@/mocks/whyUs";
import { motion } from "framer-motion";

interface Props {
  setSelectedIcon: any;
  selectedIcon: IWhyUsData;
}

const IconNGS = ({ setSelectedIcon, selectedIcon }: Props) => {
  const iconFirstVariants = {
    active: {
      color: "#7F569B",
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    inactive: {
      color: "#27293F",
      opacity: 0.8,
    },
  };

  const iconLastVariants = {
    active: {
      color: "#F36B29",
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    inactive: {
      color: "#27293F",
      opacity: 0.8,
    },
  };

  return (
    <div className="relative z-50 min-h-[300px] cursor-pointer">
      <motion.div
        initial="inactive"
        animate={selectedIcon?.key === 1 ? "active" : "inactive"}
        variants={iconFirstVariants}
        className="absolute bottom-0 left-20 z-40"
      >
        <IconFirst
          onClick={() => setSelectedIcon(WhyUsData[0] as IWhyUsData)}
        />
      </motion.div>
      <motion.div
        initial="inactive"
        animate={selectedIcon?.key === 2 ? "active" : "inactive"}
        variants={iconLastVariants}
        className="absolute bottom-0 left-[118px] z-30"
      >
        <motion.div
          animate={{
            color: selectedIcon?.key === 2 ? "#2D77B4" : "#27293F",
          }}
          onClick={() => setSelectedIcon(WhyUsData[1] as IWhyUsData)}
        >
          <IconMid open={true} />
        </motion.div>
      </motion.div>
      <motion.div
        initial="inactive"
        animate={selectedIcon?.key === 3 ? "active" : "inactive"}
        variants={iconLastVariants}
        className="absolute bottom-[18px] left-[98px]"
      >
        <IconLast open={selectedIcon?.key === 3} onClick={() => setSelectedIcon(WhyUsData[2] as IWhyUsData)} />
      </motion.div>
    </div>
  );
};

export default IconNGS;

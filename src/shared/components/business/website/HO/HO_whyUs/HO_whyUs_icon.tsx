import IconFirst from "@/components/icon/HO/whyUs/iconLogoWhyUs/iconFirst";
import IconLast from "@/components/icon/HO/whyUs/iconLogoWhyUs/iconLast";
import IconMid from "@/components/icon/HO/whyUs/iconLogoWhyUs/iconMid";
import { IWhyUsData, WhyUsData } from "@/mocks/website/HO/whyUs";
import { motion } from "framer-motion";

interface Props {
  setSelectedIcon: any;
  selectedIcon: IWhyUsData;
}

const HomeWhyUsIcon = ({ setSelectedIcon, selectedIcon }: Props) => {
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
    <div className="relative z-50 min-h-[400px] lg:min-h-[500px] cursor-pointer">
      <motion.div
        initial="inactive"
        animate={selectedIcon?.key === 1 ? "active" : "inactive"}
        variants={iconFirstVariants}
        className="absolute bottom-0 left-[138px] xl:left-20 z-40"
      >
        <IconFirst
          className="w-[100px] xl:w-[200px]"
          onClick={() => setSelectedIcon(WhyUsData[0] as IWhyUsData)}
        />
      </motion.div>
      <motion.div
        initial="inactive"
        animate={selectedIcon?.key === 2 ? "active" : "inactive"}
        variants={iconLastVariants}
        className="absolute bottom-0 left-[178px] xl:left-[148px] z-30"
      >
        <motion.div
          animate={{
            color: selectedIcon?.key === 2 ? "#2D77B4" : "#27293F",
          }}
          onClick={() => setSelectedIcon(WhyUsData[1] as IWhyUsData)}
        >
          <IconMid className="w-[250px] xl:w-[350px]" open={true} />
        </motion.div>
      </motion.div>
      <motion.div
        initial="inactive"
        animate={selectedIcon?.key === 3 ? "active" : "inactive"}
        variants={iconLastVariants}
        className="absolute bottom-[8px] xl:bottom-[28px] left-[158px] xl:left-[108px]"
      >
        <IconLast className="w-[350px] xl:w-[500px]" open={selectedIcon?.key === 3} onClick={() => setSelectedIcon(WhyUsData[2] as IWhyUsData)} />
      </motion.div>
    </div>
  );
};

export default HomeWhyUsIcon;
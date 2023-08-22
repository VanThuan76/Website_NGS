import BtnCommon from '@/components/common/customization/BtnCommon';
import { IWhyUsData, WhyUsData } from '@/mocks/website/HO/whyUs';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
interface Props {
  setSelectedIcon: any;
  selectedIcon: IWhyUsData;
}
const HomeWhyUsContent = ({ setSelectedIcon, selectedIcon }: Props) => {
  const {theme} = useTheme();
  const colorIcon = theme !== "dark" ? "#F06426" : "#fff"
  const contentAnimated = {
    active: {
      borderColor:  theme === "dark" ? '#723AD4' :"#F06426" ,
      color: theme === "dark" ? '#fff'  : "#000",
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    inactive: {
      borderColor: '#C2C0BF',
      color: '#C2C0BF',
      opacity: 0.8,
    },
  };
  return (
    <div className='w-full flex flex-col justify-start items-start'>
      <motion.div className='w-full flex justify-start items-start text-sm lg:text-lg mt-5'>
        {WhyUsData.map((item, idx) => {
          return (
            <motion.div
              key={idx}
              initial='inactive'
              animate={selectedIcon === item ? 'active' : 'inactive'}
              variants={contentAnimated}
              onClick={() => setSelectedIcon(item as IWhyUsData)}
              className={`w-full lg:w-auto text-center px-5 pb-3 border-b-2 cursor-pointer ${
                idx === 0 ? 'rounded-l-sm' : idx === WhyUsData.length - 1 ? 'rounded-r-sm' : ''
              }`}
            >
              {item.title}
            </motion.div>
          );
        })}
      </motion.div>
      <motion.div className='text-sm lg:text-lg mt-10 text-[#C2C0BF]'>
        {selectedIcon ? selectedIcon.description : ''}
      </motion.div>
      <BtnCommon cls='border-orange-400 dark:border-slate-400' title='Tìm hiểu thêm' colorSvg={colorIcon} />
    </div>
  );
};

export default HomeWhyUsContent;

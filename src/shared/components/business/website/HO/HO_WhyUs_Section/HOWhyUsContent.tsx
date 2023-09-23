import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { IComponents } from 'src/shared/schemas/typedef/IComponents';
import BtnCommon from '@/components/common/customization/BtnCommon';
import { splitTextToArrayByDoubleSlash } from '@/utils/functions/splitTextToArray';
import UseLinkRouter from '@/utils/functions/UseLinkRouter';
import { URLS_SYSTEM } from '@/utils/constants';
interface Props {
  setSelectedIcon: any;
  data: Partial<IComponents>[];
  selectedIcon: Partial<IComponents>;
}
const HomeWhyUsContent = ({ setSelectedIcon, selectedIcon, data }: Props) => {
  const { theme } = useTheme();
  const colorIcon = theme !== 'dark' ? '#F06426' : '#fff';
  const contentAnimated = {
    active: {
      borderColor: theme === 'dark' ? '#723AD4' : '#F06426',
      color: theme === 'dark' ? '#fff' : '#000',
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
    <div className='w-full flex flex-col justify-start items-start gap-12'>
      <motion.div className='w-full flex justify-start items-start text-sm lg:text-lg mt-5'>
        {data.map((item, idx) => {
          return (
            <motion.div
              key={idx}
              initial='inactive'
              animate={selectedIcon === item ? 'active' : 'inactive'}
              variants={contentAnimated}
              onClick={() => setSelectedIcon(item)}
              className={`w-full px-5 pb-3 border-b-2 cursor-pointer ${
                idx === 0 ? 'rounded-l-sm' : idx === data.length - 1 ? 'rounded-r-sm' : ''
              }`}
            >
              <div className='flex flex-col justify-start items-start text-center'>
                {splitTextToArrayByDoubleSlash(item.title || '').map((item: string, idx: number) => (
                  <p key={idx} className='text-base '>
                    {item}
                  </p>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      <div className='flex flex-col justify-center items-center'>
        {splitTextToArrayByDoubleSlash(selectedIcon.description || '').map((item: string, idx: number) => (
          <p key={idx} className='text-sm lg:text-base text-[#C2C0BF]'>
            {item}
          </p>
        ))}
      </div>
      <UseLinkRouter url={URLS_SYSTEM.ES}>
        <BtnCommon title='Tìm hiểu thêm' cls='w-[170px] border border-orange-500' colorSvg={colorIcon} />
      </UseLinkRouter>
    </div>
  );
};

export default HomeWhyUsContent;
